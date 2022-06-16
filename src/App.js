import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useContext } from 'react';
import { Products } from './data/products';
import Header from './layout/components/Header';
import Office from './pages/Office';

const App = () => {
  const products = useContext(Products);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Products.Provider>
          <Routes>
            <Route path="/home" exect element={<Home products={products} />} />
          </Routes>

          <Routes>
            <Route path="/office" exect element={<Office />} />
          </Routes>
        </Products.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
