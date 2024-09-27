import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueAnalytics = ({ totalRevenue }) => {
  // Create dynamic data for the chart using the totalRevenue prop
  const data = [
    { name: 'May', revenue: 400 },
    { name: 'Jun', revenue: 600 },
    { name: 'July', revenue: 800 },
    { name: 'Aug', revenue: 900 },
    { name: 'Sep', revenue: totalRevenue }, // Use dynamic totalRevenue
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Revenue Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueAnalytics;
