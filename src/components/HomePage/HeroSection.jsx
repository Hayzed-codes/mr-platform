import React from "react";
import Header from "./Header";
import FeaturesSection from "./FeaturesSection";
import Footer from "../../../Footer";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="bg-teal-600 flex">
        <div className="container mx-auto px-16 py-16 text-left">
          <h1 className="text-5xl font-bold text-white mb-8">
            Unlock The Power of Social Marketing with our Reward
          </h1>
          <p className="text-white mb-8">
            Revolutionize your Marketing Strategy and Engage customers like
            never before!
          </p>
          <a
            href="#"
            className="px-8 py-3 text-teal-600 bg-white rounded-md hover:bg-teal-700 hover:text-slate-100"
          >
            Learn more
          </a>
        </div>
        {/* image */}
        <div className="w-full">
          <img src="/bgHero.png" alt="Engage us" />
        </div>
          </section>
          <FeaturesSection />
          <Footer />
    </>
  );
};

export default HeroSection;
