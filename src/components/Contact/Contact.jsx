import React from 'react';

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      </div>
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 px-6 mb-12 md:mb-0">
          <img src="path/to/your/image.jpg" alt="Contact" className="w-full rounded-lg mb-6"/>
          <p className="text-gray-600">
            Are you ready to earn rewards while promoting the brands you love? Our innovative social marketing reward platform offers you the opportunity to turn your social media activity into tangible benefits. Whether you’re an influencer, a brand enthusiast, or just someone who loves sharing great products, we have something exciting for you.
            <br/><br/>
            Interested in learning more? Contact us today to find out how you can start earning rewards.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">First Name *</label>
                <input type="text" placeholder="John" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name *</label>
                <input type="text" placeholder="Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email *</label>
                <input type="email" placeholder="johndoe@example.com" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message *</label>
                <textarea placeholder="Your message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
