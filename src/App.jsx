import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Filmes from './Components/Filmes'
import Header from './Components/Header'
import Sessao from './Components/Sessao'
import Assentos from './Components/Assentos'

function App() {

  const [sessoes, setSessoes] = useState(null)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Filmes />}></Route>
        <Route path="/sessao/:filmeID" element={<Sessao setSessoes={setSessoes} sessoes={sessoes}/>}></Route>
        <Route path="/assentos/:sessaoID/:horaID" element={<Assentos sessoes={sessoes}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
