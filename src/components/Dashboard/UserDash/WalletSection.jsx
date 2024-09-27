// WalletSection.js
import React, { useState, useEffect } from 'react';
import AddFundsModal from '../AddFundsModal'; // Your existing modal for adding funds

const WalletSection = ({ userId }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        const response = await fetch(`http://localhost:3500/api/wallet-balance/${userId}`);
        const data = await response.json();
        setWalletBalance(data.balance);
      } catch (error) {
        console.error('Error fetching wallet balance:', error);
      }
    };

    fetchWalletBalance();
  }, [userId]);

  const handleAddFunds = async (amount) => {
    // Code to add funds to the wallet
    // After success, update the balance
    setWalletBalance(walletBalance + amount);
    setIsModalOpen(false);
  };

  return (
    <div className="wallet-section">
      <h3>Wallet Balance</h3>
      <p>${walletBalance}</p>
      <button onClick={() => setIsModalOpen(true)}>Add Funds</button>
      {isModalOpen && (
        <AddFundsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddFunds}
        />
      )}
    </div>
  );
};

export default WalletSection;
