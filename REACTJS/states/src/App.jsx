
import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'
import Formulariostate from './components/formulariostate/formulariostate'
import CadFruta from './components/cardfruta/cardfruta'



function App() {
  const [Titulo, setTitulo] = useState("google")
  
  function mudarTexto(){
    setTitulo("Microsoft")
  }

  function mudarTexto2(){
    setTitulo("Adenicon")
  }

  return (
    <>
   {/* <h1>Minha Pagina de {Titulo}</h1>

   <button onClick={mudarTexto}>Mudar Texto</button>
   <br />
   <button onClick={mudarTexto2}>Adenicon</button>

   <Contador />
   <br />
   <Formulariostate /> */}

   <CadFruta />
    </>
  )
}

export default App
