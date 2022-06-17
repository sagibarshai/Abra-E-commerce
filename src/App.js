import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useContext } from 'react';
import { Products } from './data/products';
import Header from './layout/components/Header';
import Office from './pages/Office';
import Clothing from './pages/Clothing';
import Sport from './pages/Sport';
import BestSellers from './pages/BestSellers';

const App = () => {
  const products = useContext(Products);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Products.Provider>
          <Routes>
            <Route path="/home" exect element={<Home products={products} />} />
            <Route
              path="/office"
              exect
              element={<Office products={products} />}
            />
            <Route
              path="/best-sellers"
              exect
              element={<BestSellers products={products} />}
            />
            <Route
              path="/sports"
              exect
              element={<Sport products={products} />}
            />
            <Route
              path="/clothing"
              exect
              element={<Clothing products={products} />}
            />
          </Routes>
        </Products.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
