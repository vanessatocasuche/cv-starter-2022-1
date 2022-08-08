import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Index from 'pages/Index';
import Informacionacademica from 'pages/Informacionacademica';
import Sidebar from 'component/Sidebar';
import Informacionlaboral from 'pages/Informacionlaboral';
import Conocimientoseintereses from 'pages/Conocimientoseintereses';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/sidebar' element={<Sidebar />} />
      <Route path='/informacionbasica' element={<Index />} />
      <Route path='/informacionacademica' element={<Informacionacademica />} />
      <Route path='/informacionlaboral' element={<Informacionlaboral />} />
      <Route path='/conocimientoseintereses' element={<Conocimientoseintereses />} />
    </Routes>
  </BrowserRouter>
);

export default App;
