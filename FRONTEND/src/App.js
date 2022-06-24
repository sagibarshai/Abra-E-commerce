import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import { getAllLocalStorage } from './utils/getAllLocalStorage';
const App = () => {
  const [userId, setUserId] = useState(localStorage.getItem('userId' || null));
  const [username, setUsername] = useState(
    localStorage.getItem('userId' || null)
  );
  const [userIsLoggedin, setUserIsLoggedin] = useState(false);
  const products = useContext(Products);
  useEffect(() => {
    if (getAllLocalStorage().length === 2) {
      setUserId(localStorage.getItem('userId'));
      setUserIsLoggedin(true);
      setUsername(localStorage.getItem('username'));
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header
          userIsLoggedin={userIsLoggedin}
          userId={userId}
          setUserId={setUserId}
          setUserIsLoggedin={setUserIsLoggedin}
          username={username}
        />
        <Products.Provider>
          <Routes>
            <Route path="/" exect element={<Navigate to="/signup" />} />
            <Route
              path="/logout"
              exect
              element={<Navigate to="/best-sellers" />}
            />
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
                  setUserId={setUserId}
                  setUsername={setUsername}
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
