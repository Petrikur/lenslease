import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home"
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Reviews } from "./pages/Reviews";
import { Equipment } from "./pages/Equipment";
import { LoadingProvider } from "./components/LoadingContext";

function App() {
  
  let routes = (
    <React.Fragment>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/equipment" element={<Equipment />}></Route>
      <Route path="/reviews" element={<Reviews />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </React.Fragment>
  );

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingProvider>
          <Routes>{routes}</Routes>
          </LoadingProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
