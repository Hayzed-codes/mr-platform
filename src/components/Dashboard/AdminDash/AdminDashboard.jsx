import DashSidebar from "./DashSidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaUsers, FaChartLine } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [reach, setReach] = useState(0);
  const [mediaValue, setMediaValue] = useState(0);

  const analytics = [
    { title: "Users", figure: data.length, icon: FaUsers, bgColor: "bg-blue-500" },
    { title: "Missions", figure: 25, icon: FaChartLine, bgColor: "bg-green-500" },
    { title: "Reach", figure: reach, icon: FaUsers, bgColor: "bg-yellow-500" },
    { title: "Media Value", figure: mediaValue, icon: FaChartLine, bgColor: "bg-red-500" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:3500/user");
        setData(userResponse.data);

        const reachResponse = await axios.get("http://localhost:3500/api/reach");
        setReach(reachResponse.data.totalReach);

        const mediaValueResponse = await axios.get("http://localhost:3500/api/media-value");
        setMediaValue(mediaValueResponse.data.totalValue);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    { name: 'Week 1', users: 1, reach: 1000, mediaValue:2000 },
    { name: 'Week 2', users: 2, reach: 1500, mediaValue:4000 },
    { name: 'Week 3', users: 3, reach: 3000, mediaValue:6000 },
    { name: 'Week 4', users: data.length, reach, mediaValue },
  ];

  return (
    <div className="flex h-full">
      <DashSidebar />

      <div className="flex-1 bg-gray-100 p-8"> {/* Increased padding */}
        <div className="border-b border-gray-400 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Hayzed 🤗</h2>
          <p className="text-gray-600">Analyze the performance of your missions</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6"> {/* Container for analytics */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">Analytics Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {analytics.map((item, index) => (
              <div key={index} className={`${item.bgColor} p-6 rounded-lg shadow-lg text-white flex justify-between items-center`}>
                <div className="flex items-center">
                  <item.icon className="text-4xl mr-4" />
                  <div>
                    <span className="text-lg font-semibold">{item.title}</span>
                    <span className="block text-xl font-bold mt-1">{item.figure}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">User Reach and Media Value Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="reach" stroke="#82ca9d" />
              <Line type="monotone" dataKey="mediaValue" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
