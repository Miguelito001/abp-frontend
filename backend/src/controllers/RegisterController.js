const mongoose = require("mongoose");

require("../models/User");
const User = mongoose.model("users");

class RegisterController {
	
	//Registro de cadastros
	async getRegisters(req, res) {
		await User.find()
			.then((users) => {
				res.status(200).json(users);
			})
			.catch(() => {
				res.status(400).json({ erro: "Não há usuários cadastrados" });
			});
	}

	async newRegister(req, res) {

		const {nome,email,senha} = req.body;
		
		const novoUsuario = {
			nome: nome,
			email: email,
			senha: senha,		
		};

		const user = await User.findOne({
			$or: [
			  { nome: novoUsuario.nome },
			  { email: novoUsuario.email }
			]
		  });

		if(user) 
		{
			if(user.nome === nome)
			{
				return 	res.status(200).json({
					message: "Já existe um usuário cadastrado com este nome!",
					error: true
				});
			}else if(user.email === email)
				{
					return 	res.status(200).json({
					message: "Já existe um usuário cadastrado com este email!",
					error: true
				})};
		}
		
		await new User(novoUsuario)
			.save()
			.then(() => {
				return res.status(200).json({
					message: "Usuário criado com sucesso!",
					error: false,
				});
			})
			.catch((error) => {
				return res.status(200).json({
					message: "Erro ao cadastrar o usuário!",
					error: true,
				});
			});
	}

	async updateRegister(req, res) {
		const { id } = req.params;
	  
		console.log(id);
	  
		const user = await User.findById(id);
	  
		if (!user) {
		  return res.status(400).json({ error: "Usuário não encontrado!" });
		}
	  
		if (!req.body) {
		  return res
			.status(400)
			.json({ error: "Você deve informar o que deseja atualizar!" });
		}
		Object.assign(user, req.body);
		await user.save();
	  
		return res
		  .status(200)
		  .json({ message: "Usuário atualizado com sucesso!", fields: req.body });
	  }
}
module.exports = new RegisterController();