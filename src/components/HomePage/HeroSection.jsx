import React from "react";
import Header from "./Header";
import FeaturesSection from "./FeaturesSection";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-700 flex flex-col items-center text-center py-28">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Empower Your Brand with Social Marketing Rewards
          </h1>
          <p className="text-white text-lg md:text-2xl mb-8">
            Transform your marketing strategy, engage your audience, and unlock new growth opportunities.
          </p>
          
          {/* Role Selection Buttons */}
          <div className="mb-8">
            <Link
              to="/user-reg?role=user" // Pass role as a query parameter
              className="px-4 py-2 bg-white text-teal-600 font-semibold rounded-md shadow-lg hover:bg-teal-700 hover:text-white transition duration-300 mx-2"
            >
              Register as User
            </Link>
            <Link
              to="/register?role=admin" // Pass role as a query parameter
              className="px-4 py-2 bg-white text-teal-600 font-semibold rounded-md shadow-lg hover:bg-teal-700 hover:text-white transition duration-300 mx-2"
            >
              Register as Admin
            </Link>
          </div>

          
        </div>
        <div className="mt-16 w-full">
          {/* <img src="/bgHero.png" alt="Engage with us" className="w-full" /> */}
        </div>
      </section>
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default HeroSection;
