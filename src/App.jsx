import React from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Route, Routes } from "react-router-dom";
// import Header from "./components/HomePage/Header";
import HeroSection from "./components/HomePage/HeroSection";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/About/AboutUs";
// import DashSidebar from "./components/Dashboard/DashSidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import StripeWrapper from "./components/stripe/StripeWrapper";
import PaymentResult from "./components/stripe/PaymentResult";
import UserLog from "./components/Auth/UserLog";
import UserReg from "./components/Auth/UserReg";
import UserDashboard from "./components/Dashboard/UserDash/UserDashboard";
import AdminDashboard from "./components/Dashboard/AdminDash/AdminDashboard";
import UserFetch from "./components/Dashboard/AdminDash/UserFetch";
import TransactionHistory from "./components/Dashboard/UserDash/TransactionHistory";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/admindash/" element={<AdminDashboard />} />
        <Route path="/users" element={<UserFetch /> } />
        <Route path="/userdash" element={<UserDashboard />} />
        <Route path="paymenthistory" element={<TransactionHistory /> } />
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-log" element={<UserLog />} />
        <Route path="/user-reg" element={<UserReg />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/wrapper" element={<StripeWrapper />} />
        <Route path="/payment-result" element={<PaymentResult />} />
      </Routes>
    </div>
  );
};

export default App;
