import axios from 'axios';

var message = "";

export const RegisterUser = async (nome,email,senha,navigate) => {
    var sucess = newUser(nome,email,senha) 
    return sucess === true ? navigate("/") : message
  };
 
  async function newUser(nome,email,senha){
    try 
    {
      const response = await axios.post('http://localhost:5555/register', 
      {
        nome: nome,
        email: email,
        senha: senha
      });
   
    if (response.data.error === false) 
          {
            alert("Usuário cadastrado!");
            return true
          }
     else 
          {
            message = response.data.message;
            return false
          }
    
    } catch (error) {
      console.error(error);
    }
  }
  
  