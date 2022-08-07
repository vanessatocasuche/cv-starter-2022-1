import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Index from 'pages/Index';
import Informacionacademica from 'pages/Informacionacademica';
import Sidebar from 'component/Sidebar';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/informacionbasica' element={<Index />} />
      <Route path='/informacionacademica' element={<Informacionacademica />} />
      <Route path='/sidebar' element={<Sidebar />} />
    </Routes>
  </BrowserRouter>
);

export default App;
