import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home"
function App() {
  const [count, setCount] = useState(0);

  let routes = (
    <React.Fragment>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/about" element={<About />}></Route> */}
    </React.Fragment>
  );

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>{routes}</Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
