// RewardsSection.js
import React, { useState, useEffect } from 'react';

const RewardsSection = ({ userId }) => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchUserRewards = async () => {
      try {
        const response = await fetch(`http://localhost:3500/api/user-rewards/${userId}`);
        const data = await response.json();
        setRewards(data.rewards);
      } catch (error) {
        console.error('Error fetching user rewards:', error);
      }
    };

    fetchUserRewards();
  }, [userId]);

  return (
    <div className="rewards-section">
      <h3>Your Rewards</h3>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>{reward.description} - {reward.progress}% completed</li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsSection;
