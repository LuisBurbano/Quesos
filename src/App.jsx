import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Comunidad from './views/Comunidad.jsx'
import Eventos from './views/Eventos.jsx'
import Fundacion from './views/Fundacion.jsx'
import Index from './views/Index.jsx'
import Productos from './views/Productos.jsx'
import Login from './views/Login.jsx'
import Register from './views/Register.jsx'
import Administrador from './views/Administrador.jsx'
import NewProduct from './views/NewProduct.jsx'
import InventarioProductos from './views/InventarioProductos.jsx'


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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Administrador />} />
        <Route path="/producto" element={<NewProduct />} />
        <Route path="/inventario" element={<InventarioProductos />} />
      </Routes>
    </BrowserRouter>


      
    </>
  )
}

export default App

