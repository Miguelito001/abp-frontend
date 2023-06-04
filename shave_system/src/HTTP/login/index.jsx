import axios from 'axios';

export const Logar = async (nome, senha) => {
    try {
      const response = await axios.post('http://localhost:5555/login', {
        nome: nome,
        senha: senha
      });
  
      //Por enquanto estou dando alert na tela, como ainda não temos a tela home 
      if (response.data.error === false) 
            return alert("Usuário encontrado");
       else 
            return alert(response.data.message);
      
    } catch (error) {
      console.error(error);
      // Trate o erro, se necessário
    }
  };
 
  
  
  