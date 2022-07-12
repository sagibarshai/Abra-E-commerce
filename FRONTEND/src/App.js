import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useContext, useState, useEffect } from "react";
import { Products } from "./data/products";
import Header from "./layout/components/Header";
import Office from "./pages/Office";
import Clothing from "./pages/Clothing";
import Sport from "./pages/Sport";
import BestSellers from "./pages/BestSellers";
import Singup from "./pages/Singup";
import Login from "./pages/Login";
import AddProduct from "./Manager/AddProduct";
import { getAllLocalStorage } from "./utils/getAllLocalStorage";
import AllProducts from "./Manager/AllProducts";
import EditProduct from "./Manager/EditProduct";
import DeleteProduct from "./Manager/DeleteProduct";
const App = () => {
     const products = useContext(Products);
     const [allProducts, setAllProduts] = useState(products);
     const [userId, setUserId] = useState(
          localStorage.getItem("userId" || null)
     );
     const [isManager, setIsManager] = useState(
          localStorage.getItem("isManager" || false)
     );
     const [username, setUsername] = useState(
          localStorage.getItem("userId" || null)
     );
     const [userIsLoggedin, setUserIsLoggedin] = useState(false);
     useEffect(() => {
          if (getAllLocalStorage().length >= 2) {
               setUserId(localStorage.getItem("userId"));
               setUserIsLoggedin(true);
               setUsername(localStorage.getItem("username"));
          }
          axios.get(process.env.REACT_APP_BACKEND_URL + "/products")
               .then((data) => setAllProduts({ items: data.data[0].items }))
               .catch((err) => {
                    console.log(err);
               });
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
                         isManager={isManager}
                         setIsManager={setIsManager}
                    />
                    <Products.Provider value>
                         <Routes>
                              <Route
                                   path="/"
                                   exect
                                   element={<Navigate to="/signup" />}
                              />
                              <Route
                                   path="/logout"
                                   exect
                                   element={<Navigate to="/best-sellers" />}
                              />
                              <Route
                                   path="/home"
                                   exect
                                   element={<Home products={allProducts} />}
                              />
                              <Route
                                   path="/office"
                                   exect
                                   element={<Office products={allProducts} />}
                              />
                              <Route
                                   path="/best-sellers"
                                   exect
                                   element={
                                        <BestSellers products={allProducts} />
                                   }
                              />
                              <Route
                                   path="/sports"
                                   exect
                                   element={<Sport products={allProducts} />}
                              />
                              <Route
                                   path="/clothing"
                                   exect
                                   element={<Clothing products={allProducts} />}
                              />
                              <Route
                                   path="/signup"
                                   exect
                                   element={<Singup />}
                              />
                              <Route
                                   path="/login"
                                   exect
                                   element={
                                        <Login
                                             userIsLoggedin={userIsLoggedin}
                                             setUserIsLoggedin={
                                                  setUserIsLoggedin
                                             }
                                             setUserId={setUserId}
                                             setUsername={setUsername}
                                             setIsManager={setIsManager}
                                             isManager={isManager}
                                        />
                                   }
                              />
                              {isManager && (
                                   <>
                                        <Route
                                             path="manager/products"
                                             element={
                                                  <AllProducts
                                                       username={username}
                                                  />
                                             }
                                             exect
                                        />
                                        <Route
                                             path="/manager/products/edit/:productName"
                                             element={
                                                  <EditProduct
                                                       username={username}
                                                       setAllProduts={
                                                            setAllProduts
                                                       }
                                                  />
                                             }
                                             exect
                                        />
                                        <Route
                                             path="/manager/products/delete/:productName"
                                             element={
                                                  <DeleteProduct
                                                       username={username}
                                                       setAllProduts={
                                                            setAllProduts
                                                       }
                                                  />
                                             }
                                             exect
                                        />
                                        <Route
                                             path="/manager/products/add"
                                             element={
                                                  <AddProduct
                                                       username={username}
                                                       allProducts={allProducts}
                                                       setAllProduts={
                                                            setAllProduts
                                                       }
                                                  />
                                             }
                                             exect
                                        />
                                   </>
                              )}
                         </Routes>
                    </Products.Provider>
               </BrowserRouter>
          </>
     );
};

export default App;
