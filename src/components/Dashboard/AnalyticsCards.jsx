import React, { useEffect, useState } from "react";
import axios from "axios";
import Stripe from "react-stripe-checkout";
import RevenueAnalytics from "./RevenueAnalytics"; // Import the component

const AnalyticsCards = ({ userId }) => {
  const [totalRevenue, setTotalRevenue] = useState(0); // State for total revenue as a number
  const [walletBalance, setWalletBalance] = useState(0); // State for wallet balance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [makePayment, setMakePayment] = useState(false);

  // Function to fetch the latest total revenue from the backend
  const fetchRevenue = async () => {
    try {
      const response = await axios.get('http://localhost:3500/api/revenue');
      if (!response.data || response.data.totalRevenue === undefined) {
        throw new Error('Invalid revenue data');
      }
      setTotalRevenue(response.data.totalRevenue); // Set revenue fetched from the backend
    } catch (error) {
      console.error("Error fetching total revenue:", error.message);
    }
  };

  useEffect(() => {
    fetchRevenue(); // Initial fetch for revenue

    const intervalId = setInterval(() => {
      fetchRevenue();
    }, 10000); // Fetch every 10 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [userId]); // Ensure useEffect runs when userId changes

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Total Revenue Card */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-xl p-6 flex flex-col justify-between h-full transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-900">Total Revenue</h2>
          <p className="text-4xl font-extrabold text-gray-900">${totalRevenue}</p>
          <span className="text-gray-700 text-sm">100% this month</span>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between h-full transition-transform transform hover:scale-105">
          <p className="text-2xl font-semibold text-gray-800">
            Balance: <span className="text-teal-600">${walletBalance.toFixed(2)}</span>
          </p>
          <button
            onClick={() => setMakePayment(true)}
            className="bg-teal-600 text-white rounded-lg px-6 py-2 mt-4 hover:bg-teal-700 transition duration-300 transform hover:scale-105"
          >
            Add Funds
          </button>

          {makePayment && (
            <div className="mt-4">
              <Stripe
                stripeKey="pk_test_51PqZGPDET1b9VVadBnUCE6PtXLNz0Jkv523o9yZztUBbACWgPEfJ2kTBntig2uBjL1JquuHEozwHe6RQt2b0zTtd00t3z0WiBz"
                token={handleToken}
              />
            </div>
          )}
        </div>
      </div>

      {/* Pass totalRevenue dynamically to RevenueAnalytics */}
      <RevenueAnalytics totalRevenue={totalRevenue} />
    </div>
  );
};

export default AnalyticsCards;
