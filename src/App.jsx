import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Filmes from './Components/Filmes'
import Header from './Components/Header'
import Sessao from './Components/Sessao'

function App() {
  const primaryColor = '#E8833A'
  const secundaryColor = '#C3CFD9'

  return (
    <BrowserRouter>
        <Header primaryColor={primaryColor} secundaryColor={secundaryColor}/>
      <Routes>
        <Route path="/" element={<Filmes/>}></Route>
        <Route path="/sessao/:filmeID" element={<Sessao />}></Route>
      </Routes>
    </BrowserRouter>
      )
}

      export default App
