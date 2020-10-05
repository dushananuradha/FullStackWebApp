const mongoose = require("mongoose");
/* const Schema = mongoose.Schema;
property name is identical to variable => can go for ES6 Destructuring
mongoose object has a propert called Schema, and that is assigned to a variable called Schema */
const { Schema } = mongoose;

//Following userSchema object will describe all the properties we create in db.
const userSchema = new Schema({
	googleId: String,
});

//To create a new collection called ,"users" and to load userSchema into mongoose
mongoose.model("users", userSchema);
