import axios from 'axios';

var message = "";

export const Logar = async (nome, senha, navigate) => {
      
    const sucess = await login(nome,senha);
    console.log(message)
      
      return sucess === true ? navigate('/home', {state: {username: nome}}) : alert(message)  
  };
 
async function login(nome,senha){
  try 
  {
    const response = await axios.post('http://localhost:5555/login', {
    nome: nome,
    senha: senha
    });
 
  if (response.data.error === false) 
        return true
   else 
        {
          message = response.data.message;
          return false
        }
  
  } catch (error) {
    console.error(error);
  }
}
  
  
  