import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AnalyticsCards from "./AnalyticsCards";
import RevenueAnalytics from "./RevenueAnalytics";
import PaymentActivity from "./PaymentActivity";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3500/user/auth-user", { withCredentials: true });
        // Check if the response is okay
        if (response) {
          const result = response.data; // Parse the response data
          setUser(result); // Update the state with the fetched user data
          // Store user data in local storage
          localStorage.setItem("user", JSON.stringify(result));
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, []);

  console.log(user);

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-grow bg-gray-100 p-4">
        <Header />
        <AnalyticsCards userId={user?._id} />
        <RevenueAnalytics />
        <PaymentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
