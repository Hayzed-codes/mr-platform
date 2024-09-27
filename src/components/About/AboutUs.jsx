import React from "react";
import Header from "../HomePage/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto p-8 md:p-16 space-y-16">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-teal-600 mb-4">About Us</h1>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              At Boostify, we believe in the power of community and social
              engagement. Our innovative social marketing reward platform is
              designed to help influencers, brand enthusiasts, and everyday
              social media users turn their activities into tangible rewards.
            </p>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              We provide a seamless way to earn rewards while promoting the
              brands you love. Our platform leverages cutting-edge technology to
              track your social media engagement and convert it into points that
              can be redeemed for various rewards.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/aboutUs.png"
              alt="About Us"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
            <img
              src="/about2.jpeg"
              alt="About Us"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out w-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Whether you're sharing a product review, posting a photo, or engaging with your followers, every interaction counts towards your rewards.
            </p>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Our mission is to transform the way you interact with social media, making it more rewarding and fun. By joining Boostify, you become part of a vibrant community that values authentic engagement and genuine connections.
            </p>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Join us today and discover how you can turn your social media influence into meaningful rewards. Together, we can revolutionize the marketing landscape, one post at a time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
