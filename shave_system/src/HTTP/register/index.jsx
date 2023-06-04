import axios from 'axios';

export const RegisterUser = async (nome,email,senha,navigate) => {
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
                console.log("Não caiou aqu")
                return navigate("/")  
            }
       else 
            return alert(response.data.message);
      
    } catch (error) {
      console.error(error);
      // Trate o erro, se necessário
    }
  };
 
  
  
  