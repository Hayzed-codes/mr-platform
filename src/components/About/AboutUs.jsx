import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="MR Platform Logo" className="h-8" />
          <nav className="hidden md:flex space-x-4">
            <a href="/resources" className="text-gray-600 hover:text-blue-600">Resources</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact us</a>
          </nav>
        </div>
        <div className="space-x-4">
          <a href="/login" className="text-blue-600 hover:text-blue-800">Login</a>
          <a href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800">Sign up</a>
        </div>
      </header>

      <main className="p-8 md:p-16">
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-gray-700">
              At MR Platform, we believe in the power of community and social engagement. Our innovative social marketing reward platform is designed to help influencers, brand enthusiasts, and everyday social media users turn their activities into tangible rewards.
            </p>
            <p className="mt-4 text-gray-700">
              We provide a seamless way to earn rewards while promoting the brands you love. Our platform leverages cutting-edge technology to track your social media engagement and convert it into points that can be redeemed for various rewards. Whether you're sharing a product review, posting a photo, or engaging with your followers, every interaction counts towards your rewards.
            </p>
            <p className="mt-4 text-gray-700">
              Our mission is to transform the way you interact with social media, making it more rewarding and fun. By joining MR Platform, you become part of a vibrant community that values authentic engagement and genuine connections.
            </p>
            <p className="mt-4 text-gray-700">
              Join us today and discover how you can turn your social media influence into meaningful rewards. Together, we can revolutionize the marketing landscape, one post at a time.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/path/to/your-image.jpg" alt="About Us" className="rounded-md shadow-md" />
          </div>
        </section>
      </main>

      <footer className="bg-teal-600 text-white p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/path/to/logo-white.png" alt="MR Platform Logo" className="h-8 mb-4" />
            <p>© 2024 MR Platform, Inc. All rights reserved.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Quick Links</h3>
            <a href="/" className="block hover:underline">Home</a>
            <a href="/resources" className="block hover:underline">Resources</a>
            <a href="/about" className="block hover:underline">About</a>
            <a href="/contact" className="block hover:underline">Contact Us</a>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Company</h3>
            <a href="/privacy" className="block hover:underline">Privacy</a>
            <a href="/terms" className="block hover:underline">Terms</a>
            <a href="/careers" className="block hover:underline">Careers</a>
            <a href="/support" className="block hover:underline">Support</a>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Connect</h3>
            <a href="https://twitter.com" className="block hover:underline">Twitter</a>
            <a href="https://linkedin.com" className="block hover:underline">LinkedIn</a>
            <a href="https://instagram.com" className="block hover:underline">Instagram</a>
            <a href="https://facebook.com" className="block hover:underline">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
