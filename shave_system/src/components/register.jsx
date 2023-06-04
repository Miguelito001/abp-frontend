import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import validationSchema from '../config/Validation/register/Form'
import {RegisterUser} from '../HTTP/register'

function Register() {

  const navigate = useNavigate ();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try 
    {    
      await validationSchema.validate(form, { abortEarly: false }); 
      
      RegisterUser(form.nome,form.email,form.senha,navigate)
    
      setErrors({});

    } catch (validationErrors) {
      if (validationErrors.inner && validationErrors.inner.length > 0) {
        const errors = {};
        // Mapeando os campos com erro
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      }
    }
  };

    return (
      <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-6">
        <form className="card p-4" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Cadastro</h2>
          <div className="mb-3">
            <label className="form-label">Nome:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className={`form-control ${errors.nome && 'is-invalid'}`}
            />
            {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">E-mail:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${errors.email && 'is-invalid'}`}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Senha:</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              className={`form-control ${errors.senha && 'is-invalid'}`}
            />
            {errors.senha && <div className="invalid-feedback">{errors.senha}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar Senha:</label>
            <input
              type="password"
              name="confirmarSenha"
              value={form.confirmarSenha}
              onChange={handleChange}
              className={`form-control ${errors.confirmarSenha && 'is-invalid'}`}
            />
            {errors.senha && <div className="invalid-feedback">{errors.confirmarSenha}</div>}
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </div>
    );
  }

export default Register;
