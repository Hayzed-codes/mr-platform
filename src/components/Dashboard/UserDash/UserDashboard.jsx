import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// Components for different dashboard sections
import WalletSection from './WalletSection';
import RewardsSection from './RewardsSection';
import TransactionHistory from './TransactionHistory';
import UserProfile from './UserProfile';

const UserDashboard = ({ userId }) => {
  const [userName, setUserName] = useState(''); // Store user name

  // Fetch user data when component mounts (e.g., profile)
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3500/api/user-profile/${userId}`);
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div className="dashboard-content">
      <h2>Welcome, {userName}</h2>
      <div className="dashboard-sections">
        {/* Wallet Balance Section */}
        <WalletSection userId={userId} />

        {/* Rewards Section */}
        <RewardsSection userId={userId} />

        {/* Transaction History */}
        <TransactionHistory userId={userId} />

        {/* User Profile Section */}
        <UserProfile userId={userId} />
      </div>
    </div>
  );
}

export default UserDashboard;
