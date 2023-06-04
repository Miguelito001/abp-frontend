import Login from '../../components/telas/login'
import Register from '../../components/telas/register'
import Home from '../../components/telas/home'
import { Routes, Route } from 'react-router-dom';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;