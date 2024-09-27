// PaymentActivity.js
import React from 'react';

const payments = [
  { name: "Nitro Eef", invoiceId: "INV-0234", amount: "$55", status: "Completed", date: "18/07/2023" },
  { name: "Abobi Ade", invoiceId: "INV-0583", amount: "$610", status: "Pending", date: "16/07/2023" },
  { name: "Folarin Imade", invoiceId: "INV-0921", amount: "$30", status: "Canceled", date: "11/07/2023" },
  { name: "Sammy Nuel", invoiceId: "INV-1025", amount: "$310", status: "Completed", date: "13/01/2024" },
  { name: "Grumpy Sass", invoiceId: "INV-1134", amount: "$150", status: "Pending", date: "04/03/2024" },
];

const PaymentActivity = () => {
  return (
    <div className=" mt-5">
      <h2 className="text-xl font-bold mb-4">Payment Activity</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 border-b border-gray-300">Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Invoice ID</th>
            <th className="py-2 px-4 border-b border-gray-300">Amount</th>
            <th className="py-2 px-4 border-b border-gray-300">Status</th>
            <th className="py-2 px-4 border-b border-gray-300">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">{payment.name}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">{payment.invoiceId}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">{payment.amount}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">{payment.status}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentActivity;
