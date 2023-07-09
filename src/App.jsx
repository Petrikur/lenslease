import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Reviews } from "./pages/Reviews";
import { Equipment } from "./pages/Equipment";
import { LoadingProvider } from "./components/context/LoadingContext";
import ScrollToTop from "./components/ScrollToTop";
import { ItemPage } from "./pages/ItemPage";
import { CartProvider } from "./components/context/CartContext";
import { Cart } from "./pages/Cart";

function App() {
  let routes = (
    <React.Fragment>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/equipment" element={<Equipment />}></Route>
      <Route path="/reviews" element={<Reviews />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/equipment/:id" element={<ItemPage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </React.Fragment>
  );

  return (
    <>
      <div>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <ScrollToTop />
            <LoadingProvider>
              <Routes>{routes}</Routes>
            </LoadingProvider>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
