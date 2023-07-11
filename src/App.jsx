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
import { Checkout } from "./pages/Checkout";
import { CheckoutProvider } from "./components/context/CheckoutContext";
import { NotFound } from "./pages/NotFound";

function App() {
  let routes = (
    <React.Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/equipment/:id" element={<ItemPage />} />
      <Route path="/*" element={<NotFound />} />
      <Route
        path="/cart"
        element={
          <CheckoutProvider>
            <Cart />
          </CheckoutProvider>
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutProvider>
            <Checkout />
          </CheckoutProvider>
        }
      />
    </React.Fragment>
  );

  return (
    <>
      <div>
        <BrowserRouter>
          <LoadingProvider>
            <CartProvider>
              <NavBar />
              <ScrollToTop />
              <Routes>{routes}</Routes>
            </CartProvider>
          </LoadingProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
