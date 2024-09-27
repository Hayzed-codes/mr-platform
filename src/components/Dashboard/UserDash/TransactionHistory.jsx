// TransactionHistory.js
import React, { useState, useEffect } from "react";
import DashSidebar from "../AdminDash/DashSidebar";

const TransactionHistory = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        const response = await fetch(
          `http://localhost:3500/api/transactions/${userId}`
        );
        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      }
    };

    fetchTransactionHistory();
  }, [userId]);

  return (
    <div className="flex flex-row">
      <div className="transaction-history-section">
        <DashSidebar />
        <h3>Transaction History</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.type} of ${transaction.amount} on{" "}
              {new Date(transaction.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
