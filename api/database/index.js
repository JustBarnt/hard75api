/**
* @description Class that represets the table trying to be accessed.
* @author Brent Williams
* @class Table
*/

//TODO - Follow standard import procedure and move main functionality into a Helpfully Named file EX: TableController - and import that into this index.js file.

export class DB_Table
{
/**
* @constructor
* @param {String} Id
* @param {String} Title
* @param {String} Quantity
* @param {String} Message
* @param {String} City
*/

	constructor(Id, Title, Quantity, Message, City)
	{
		//this.Columns = Columns; //Uncomment when class is refactor or dynamic tables
		//this.props; //Uncomment when class is refactor or dynamic tables
		this.Id = Id;
		this.Title = Title;
		this.Quantity = Quantity;
		this.Message = Message;
		this.City = City;
	}

	//TODO: Refactor class after REST API tutorial- to allow use for any table. 
}