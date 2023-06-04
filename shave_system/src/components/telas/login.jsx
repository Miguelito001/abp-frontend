import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import  '../../Assets/CSS/Login.css'; 
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Logar} from '../../HTTP/login'

function Login() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      Logar(form.nome,form.senha,navigate)
    };    
    return (
      <section className="vh-100" style={{ backgroundColor: "black" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5">
                  <img
                    src= "https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>          
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <input 
                          type="text"
                          name="nome"
                          value={form.nome}
                          onChange={handleChange}                        
                          className="form-control form-control-lg" placeholder='User'/>
                      </div>

                      <div className="form-outline mb-4">
                        <input 
                          type="text"
                          name="senha"
                          value={form.senha}
                          onChange={handleChange}    
                          className="form-control form-control-lg"  placeholder='Password'/>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>

                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? 
                      <Link to = "/cadastro"
                      style={{ color: "#393f81"}}
                        >
                          Register here
                        </Link></p>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }

export default Login;
