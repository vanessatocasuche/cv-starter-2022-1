import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Home from 'pages/Home';
import Informacionbasica from 'pages/Informacionbasica';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/informacionbasica' element={<Informacionbasica />} />
    </Routes>
  </BrowserRouter>
);

export default App;
