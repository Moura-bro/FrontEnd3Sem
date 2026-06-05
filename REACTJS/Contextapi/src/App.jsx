import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Perfil from "./components/perfil/Perfil";
import MyPage from "./components/mypage/MyPage";
import Header from "./components/header/Header";
import PrivateRoutes from "./routes/PrivateRoutes";
import CadastrarProduto from "./components/produto/CadastrarProduto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />

          <Route path="/myPage" element={
            <PrivateRoutes>
               <MyPage />{/* children*/}
            </PrivateRoutes>
          } />
          <Route path="/cdProduto" element={
            <PrivateRoutes>
              <CadastrarProduto />
            </PrivateRoutes>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;