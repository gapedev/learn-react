import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Proyectos from './Pages/Proyectos'
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='Proyectos' element={<Proyectos />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
