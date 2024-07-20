import React from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/HomePage/Header";
import HeroSection from "./components/HomePage/HeroSection";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
// import AboutUs from "./components/About/AboutUs";

const App = () => {
  return (
    <div>
      <Router>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact /> } />
          {/* <Route path="/about" element={<AboutUs /> } /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
