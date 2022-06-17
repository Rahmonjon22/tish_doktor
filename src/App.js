import React from "react";
import { Routes, Route } from "react-router-dom";

// Style
import "./app.scss";

// Structure
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/treatments" exact element={<Treatments />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
