import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CadastroFrutaPage from './pages/cadastrofruta/cadastrofrutapage'
import CadastroProdutoPage from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import Header from './components/header/header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<QuemSomosPage />} path='/quemSomos'/>
          <Route element={<CadastroFrutaPage/>} path='/frutas' />
          <Route element={<CadastroProdutoPage/>} path='Produtos' />
      </Routes>
    </BrowserRouter>

  )
}