import React from "react";
import Header from "../HomePage/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto px-6 py-16 bg-gray-50 rounded-lg shadow-md">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-600">Contact Us</h2>
          <p className="text-gray-700 mt-2">
            We would love to hear from you!
          </p>
        </div>
        <div className="flex flex-wrap -mx-6">
          {/* Left Section: Image and Description */}
          <div className="w-full md:w-1/2 px-6 mb-12 md:mb-0">
            <img
              src="/contact.png"
              alt="Contact"
              className="w-full rounded-lg mb-6 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              Are you ready to earn rewards while promoting the brands you love?
              Our innovative social marketing reward platform offers you the
              opportunity to turn your social media activity into tangible
              benefits. Whether you&apos;re an influencer, a brand enthusiast, or
              just someone who loves sharing great products, we have something
              exciting for you.
              <br />
              <br />
              Interested in learning more? Contact us today to find out how you
              can start earning rewards.
            </p>
          </div>
          {/* Right Section: Contact Form */}
          <div className="w-full md:w-1/2 px-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name *</label>
                  <input
                    type="text"
                    placeholder="John"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email *</label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message *</label>
                  <textarea
                    placeholder="Your message"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
