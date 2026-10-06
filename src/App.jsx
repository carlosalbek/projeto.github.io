import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Aprendizagem from './routes/Aprendizagem/Aprendizagem'
import AutoAvaliacao from './routes/AutoAvaliacao/AutoAvaliacao'
import CodigosPro from './routes/CodigosPro/CodigosPro'
import CompetenciasDes from './routes/CompetenciasDes/CompetenciasDes'
import ProjetoDes from './routes/ProjetoDes/ProjetoDes'
import RegistrosFotos from './routes/RegistrosFoto/RegistrosFotos'
import RelatoriosTec from './routes/RelatoriosTec/RelatoriosTec'
import OsVideo from './routes/OsVideos/OsVideo'
import NavBar from './components/NavBar'

function App() {

  return (
       
      <BrowserRouter>
       
      <NavBar/>  

        <Routes>
          <Route path='/'
           element={<Home/>}></Route>

          <Route path="/aprendizagem"
          element ={<Aprendizagem/>}></Route>

          <Route path="/autoavaliacao"
          element ={<AutoAvaliacao/>}></Route>

          <Route path="/codigo"
          element ={<CodigosPro/>}></Route>

          <Route path="/competencias"
          element ={<CompetenciasDes/>}></Route>

          <Route path="/projeto"
          element ={<ProjetoDes/>}></Route>

          <Route path="/fotos"
          element ={<RegistrosFotos/>}></Route>

          <Route path="/relatorios" 
          element ={<RelatoriosTec/>}></Route>

          <Route path="/video"
          element ={<OsVideo/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
