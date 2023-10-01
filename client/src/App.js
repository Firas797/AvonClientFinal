import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componenets/Header';
import './App.css'
import Admin from './Componenets/Admin/Admin';
import LoginAdmin from './Componenets/Admin/LoginAdmin';
import Panier from './Componenets/Panier/Panier';
import Offres from './Componenets/AllOffres';
import DetaillProduct from './Componenets/ProductDetail/DetaillProduct';
import { ToastContainer } from 'react-toastify';
import Products from './Componenets/Products/Products';
import HommeProducts from './Componenets/Products/category/homme/HommeProducts';
import Cheveux from './Componenets/Products/category/cheveux/Shamp';
import Enfant from './Componenets/Products/category/enfants/Enfant';
import ProductsHm from './Componenets/Products/ProductsHm'
import Chvx from './Componenets/Products/Chvx';
import NotFound from './Componenets/NotFound';

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <Router>
    <ToastContainer />
    <Routes>
      {authenticated ? (
        <>
          <Route path="/" element={<Header />} />
          <Route path="/admin" element={<LoginAdmin />} />
          <Route path="/AdminDashboard" element={<Admin />} />
          <Route path="/cart" element={<Panier />} />
          <Route path="/Offres" element={<Offres />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productOffersNo" element={<DetaillProduct />} />
          <Route path="/Homme" element={<ProductsHm/>} />
          <Route path="/Cheveux" element={<Chvx />} />
          <Route path="/Enfants" element={<Enfant />} />
        </>
      ) : (
        <Route path="/" element={<NotFound />} />
      )}
    </Routes>
  </Router>
  );
}

export default App;
