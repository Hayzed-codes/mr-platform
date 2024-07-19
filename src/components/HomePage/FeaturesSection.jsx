import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12 px-[18rem]">
        <h2 className=" text-3xl font-bold text-gray-800">Discover the Transformative Power of our Social Reward Platform</h2>
        <p className="text-gray-600 mt-4 text-sm">Elevate your marketing efforts and unlock unprecedented growth. Our innovative platform seamlessly integrates with your existing strategies, empowering you to reach new heights of success. Enjoy unmatched rewards, streamlined engagements</p>
      </div>
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 px-6 mb-12 md:mb-0">
          <img src="/ref&loy.png" alt="Referral and loyalty" className="w-full rounded-lg mb-6"/>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Referral and loyalty</h3>
          <p className="text-gray-600 text-xl">Turn your first-time users into loyal users.</p>
        </div>
        <div className="w-full md:w-1/2 px-6">
          <img src="/tarSoc.png" alt="Targeted social" className="w-full rounded-lg mb-6"/>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Unlock the power of targeted social</h3>
          <p className="text-gray-600 text-xl">Elevate your brand's social presence with social incentives.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
