import * as dotenv from "dotenv";

//TODO - Follow standard import procedure and move main functionality into a Helpfully Named file EX: SQLConfig - and import that into this index.js file.

dotenv.config();

const env = process.env;

export const config = {
	user: env.SQL_USER,
	password: env.SQL_PASSWORD,
	server: env.SQL_SERVER,
	database: env.SQL_DATABASE,
	options:{
		TrustServerCertificate: false,
		encrypt: false,
	},
};