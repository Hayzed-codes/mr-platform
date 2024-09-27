import React, { useState } from 'react';
import StripeWrapper from '../stripe/StripeWrapper';

const AddFundsModal = ({ isOpen, onClose, userId, updateWalletBalance }) => {
  const [amount, setAmount] = useState(''); // State for holding the amount entered

  // Handler to update the amount input field
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
      // Call StripeWrapper to process the payment with the amount
      // StripeWrapper will handle the payment and pass the updated balance back to the parent
      console.log('Proceeding with payment:', amount);
    } else {
      alert("Please enter a valid amount.");
    }
  };

  // Don't render the modal if it's not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Funds</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            &times; {/* Close button */}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Enter Amount
            </label>
            <input
              id="amount"
              type="number"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              min="1"
              required
            />
          </div>

          {/* Pass the amount to StripeWrapper */}
          {/* <StripeWrapper
            amount={parseFloat(amount)}
            userId={userId}
            updateWalletBalance={updateWalletBalance}
          /> */}

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Funds
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFundsModal;
