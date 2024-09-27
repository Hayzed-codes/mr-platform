// UserProfile.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/api/user-profile/${userId}`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div className="profile-section">
      <h3>Your Profile</h3>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      {/* Add form or options to update profile */}
    </div>
  );
};

export default UserProfile;
