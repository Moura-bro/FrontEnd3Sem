import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";
import PrivateRoute from "./PrivateRoute";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rotas Publicas*/}
        <Route path="/" element={<Login />} />

        {/*Rotas Privadas*/}

        <Route path="/filmes" element={
          <PrivateRoute>
            <CadastroFilme />
          </PrivateRoute>
          } />


        <Route path="/generos" element={<CadastroGenero />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
