import cors from "cors";
import { config } from "dotenv";
import Express, { json, urlencoded } from "express";

import { AllEntries, PostEntry } from "./operations";

config();

//Create Express Server
const app = Express();
//Create express Router
const router = Express.Router();

app.use(json()); //Equal to app.use(body-parse.json()) Express @4.16.0 <=
app.use(urlencoded({ extended:true })); //Equal to app.use(body-parse.urlencoded({ extended: true })) Express @4.16.0 <=
app.use(cors());
app.use("/v1", router);

const PORT = process.env.PORT || 5000;

/**
* Express Server middleware, always logs to the terminal when A request is made with the time.
*/
router.use((request, response, next) => 
{
	const options = { weekday: "long", year: "numeric", month: "long", day: "numberic" };
	const LocalDate = new Date().toLocaleDateString(undefined);
	const LocalTime = new Date().toLocaleTimeString("en-US");

	console.log("Request made:");
	console.log("Date:", LocalDate);
	console.log("Time:", LocalTime);
	next();
});

/**
* Express REST Api route: Retrieves entire table based off URI Query.
*/
router.route("/entries/").get((request, response) => 
{
	QueryAll(request.params.table).then((data) => 
	{
		response.json(data[0]);
	});
});

/**
*  Express REST Api route: Adds JSON object to the table, given all data is passed correctly.
*/
router.route("/entry").post((request, response) =>
{
	const entry = { ...request.body };

	console.log(`Request`);
	console.log(request.body);

	AddToTable(entry).then(data => 
	{
		response.status(201).json(data);
	});
});

/**
*  Express REST Api route: Queries a single item based on the 
*/
// router.route('/orders/:column').get((request, response) => 
// {
// 	QueryByColumn(request.params.queryParam).then((data) => 
// 	{
// 		response.json(data[0]);
// 	});
// });
app.listen(PORT);