import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Comunidad from './views/Comunidad.jsx'
import Eventos from './views/Eventos.jsx'
import Fundacion from './views/Fundacion.jsx'
import Index from './views/Index.jsx'
import Productos from './views/Productos.jsx'



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/fundacion" element={<Fundacion />} />
        <Route path="/productos" element={<Productos />} />

      </Routes>
    </BrowserRouter>


      
    </>
  )
}

export default App
