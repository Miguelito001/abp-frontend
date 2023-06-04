const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("../models/User");
const User = mongoose.model("users");


class LoginController{


  async verifyUser(req, res) {
    const { nome, senha } = req.body;
  
    try {
      console.log(nome, senha);
      const user = await User.findOne({ nome });
  
      if (!user) {
        console.log("Usuário não encontrado");
        return res.status(200).json({ error: true , message: "Usuário não encontrado!" });
        
      }
 
        if(senha === user.senha )
          return res.status(200).json({ error: false, message: "Usuário verificado com sucesso!"});
        else 
          return res.status(200).json({ error: true , message: "Senha incorreta!"});
    
    } catch (error) {
      console.error(error);
      return res.status(200).json({ error: true , message: "Erro ao verificar o usuário!" });
    }
  }

  
}

module.exports = new LoginController();