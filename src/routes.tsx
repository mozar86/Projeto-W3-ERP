import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Predicoes from "./pages/predicoes/Predicoes";
import Produtos from "./pages/produtos/Produtos";
import Predicao from "./pages/predicao/Predicao";
import Detalhamento from "./pages/detalhamento/Detalhamento";

const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/predicoes" element={<Predicoes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/detalhamento" element={<Detalhamento />} />
          <Route path="/predicao" element={<Predicao />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;
  