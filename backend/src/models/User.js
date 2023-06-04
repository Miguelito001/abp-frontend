const mongoose = require("../database");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	nome: {
		type: String,
	},
	email: {
		type: String,
	},
	senha: {
		type: String,
	}	
});

module.exports = mongoose.model("users", UserSchema);