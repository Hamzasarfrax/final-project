import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Home from "./main/Home";
import About from "./main/About";
import Visa from "./main/Visa";
import Contact from "./main/Contact";
import Insurance from "./main/Insurance";
import Header from "./main/Header";
import Page404 from "./main/Page404";
import Foter from "./main/Foter";
import { Circles } from 'react-loader-spinner';

// import Visahome from "./Nestedroutes/Visahome";
// import Flights from "./Nestedroutes/Flights";
// import Hotel from "./Nestedroutes/Hotel";
// import Packages from "./Nestedroutes/Packages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 3000);

  }, [])
  return (
    <>
      {loading ? (
        <div className="loader">
          {" "}
          <Circles color={"AEBDCA"} loading={loading} size={150} />{" "}
        </div>
      ) : (
        <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />}>
          
            </Route>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/visa" element={<Visa />} />
            <Route exact path="/insurance" element={<Insurance />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/*" element={<Page404 />} />
          </Routes>
          <Foter />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
