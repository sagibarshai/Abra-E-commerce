import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useContext, useState, useEffect } from 'react';
import { Products } from './data/products';
import Header from './layout/components/Header';
import Office from './pages/Office';
import Clothing from './pages/Clothing';
import Sport from './pages/Sport';
import BestSellers from './pages/BestSellers';
import Singup from './pages/Singup';
import Login from './pages/Login';
const App = () => {
  const [userIsLoggedin, setUserIsLoggedin] = useState(false);
  const products = useContext(Products);
  const logoutHandler = () => {
    setUserIsLoggedin(false);
  };
  return (
    <>
      <BrowserRouter>
        <Header userIsLoggedin={userIsLoggedin} logoutHandler={logoutHandler} />
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
            <Route path="/signup" exect element={<Singup />} />
            <Route
              path="/login"
              exect
              element={
                <Login
                  userIsLoggedin={userIsLoggedin}
                  setUserIsLoggedin={setUserIsLoggedin}
                />
              }
            />
          </Routes>
        </Products.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
