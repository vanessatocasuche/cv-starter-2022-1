import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from 'pages/Index';
import Informacionacademica from 'pages/Informacionacademica';
import Informacionlaboral from 'pages/Informacionlaboral';
import Conocimientoseintereses from 'pages/Conocimientoseintereses';
import Idiomas from 'pages/Idiomas';
import Hobbies from 'pages/Hobbies';
import Cursosycertificaciones from 'pages/Cursosycertificaciones';
import Navbar from 'component/Navbar';
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/informacionbasica' element={<Index />} />
        <Route
          path='/informacionacademica'
          element={<Informacionacademica />}
        />
        <Route path='/informacionlaboral' element={<Informacionlaboral />} />
        <Route
          path='/conocimientoseintereses'
          element={<Conocimientoseintereses />}
        />
        <Route path='/idiomas' element={<Idiomas />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route
          path='/cursosycertificaciones'
          element={<Cursosycertificaciones />}
        />
      </Routes>
    </Router>
  );
}

export default App;
