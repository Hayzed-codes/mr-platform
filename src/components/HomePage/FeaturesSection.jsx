import React from "react";

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-8 py-16 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
        <p className="text-gray-700 text-lg">
          Experience a new way to market and grow your brand, with our innovative reward system that integrates perfectly with your social marketing efforts.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        <div className="w-full md:w-1/3">
          <img src="/ref&loy.png" alt="Feature 1" className="w-full rounded-lg shadow-md mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Referral & Loyalty</h3>
          <p className="text-gray-600">Keep your customers coming back with targeted rewards and referral incentives.</p>
        </div>
        <div className="w-full md:w-1/3">
          <img src="/tarSoc.png" alt="Feature 2" className="w-full rounded-lg shadow-md mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Targeted Social Reach</h3>
          <p className="text-gray-600">Maximize your social engagement by tapping into key influencers and user-generated content.</p>
        </div>
        <div className="w-full md:w-1/3">
          <img src="/bgHero.png" alt="Feature 3" className="w-full rounded-lg shadow-md mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Boosted Conversion</h3>
          <p className="text-gray-600">Turn your leads into loyal customers through targeted rewards and campaigns.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;