import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ initialBalance }) => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [walletBalance, setWalletBalance] = useState(initialBalance); // Initialize with initial balance
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'amount') {
      setAmount(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Create a payment method using the card details
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          email: email,
        },
      });

      if (error) {
        console.error('Stripe Error:', error);
        navigate('/payment-result', {
          state: { success: false, errorMessage: error.message },
        });
        setLoading(false);
        return;
      }

      // Make API call to your backend for payment processing
      const response = await axios.post(
        'http://localhost:3500/api/deposit',
        {
          email: email,
          amount: amount,
          paymentMethodId: paymentMethod.id, // Send the payment method ID to the server
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Make sure your auth token is valid
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        // Update wallet balance
        setWalletBalance((prevBalance) => prevBalance + parseFloat(amount));

        // Clear the form fields
        setEmail('');
        setAmount('');
        elements.getElement(CardElement).clear();

        // Navigate to success page
        navigate('/payment-result', { state: { success: true, amount: amount } });
      } else {
        navigate('/payment-result', {
          state: { success: false, errorMessage: response.data.message || 'Unknown error' },
        });
      }
    } catch (error) {
      console.error('Payment Error:', error);
      navigate('/payment-result', {
        state: { success: false, errorMessage: error.response?.data?.message || error.message },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Fund Your Wallet</h2>
      <p className="text-2xl font-semibold">Balance: ${walletBalance.toFixed(2)}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-1 font-semibold text-gray-700">Amount to Deposit</label>
          <input
            id="amount"
            name="amount"
            type="number"
            value={amount}
            onChange={handleChange}
            placeholder="Amount"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-gray-700">Card Details</label>
          <CardElement className="p-2 border border-gray-300 rounded-md" />
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full py-2 px-4 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Processing...' : 'Fund Wallet'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
