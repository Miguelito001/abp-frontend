import Login from '../../components/login'
import Register from '../../components/register'
import { Routes, Route } from 'react-router-dom';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
};

export default RoutesConfig;