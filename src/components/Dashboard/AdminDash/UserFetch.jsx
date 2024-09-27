import React, { useEffect, useState } from "react";
import DashSidebar from "./DashSidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";

const UserFetch = () => {
  const [search, setSearch] = useState("");
  const [issideBarToggle, setIsSideBarToggle] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3500/user");
        setData(response.data);
      } catch (error) {
        console.error("Error fethching data", error);
        setMessage(error.message);
      }
    };
    fetchUsers();
  }, []);

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedModal("");
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleModalSelect = (modalType) => {
    setSelectedModal(modalType);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div class="flex">
      {/* <!-- Sidebar --> */}
      <div class=" lg:block w-[250px] bg-gray-50 ">
        <DashSidebar />
      </div>

      {/* <!-- Main Content --> */}
      <div className="flex-1 overflow-hidden bg-gray-100">
  <div className="p-6">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-extrabold text-gray-800">User Management</h1>
      <FaBars
        className="text-5xl cursor-pointer text-gray-600 lg:hidden transition-transform transform hover:scale-110"
        onClick={() => setIsSideBarToggle(true)}
      />
    </div>

    {/* Search Input */}
    <p className="mt-6 text-lg font-medium text-gray-700">Search User</p>
    <input
      className="w-full max-w-[320px] rounded-lg bg-white shadow-md p-4 text-lg my-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
      placeholder="Search by name or email"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    {/* Table */}
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md mt-6 overflow-hidden">
      <table className="table-auto w-full text-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-6 py-4 font-semibold text-left">User's Name</th>
            <th className="px-6 py-4 font-semibold text-left">Email</th>
            <th className="px-6 py-4 font-semibold text-left">ID Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index} className={`hover:bg-gray-50 transition duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <td className="px-6 py-4 text-gray-800">{user.name}</td>
              <td className="px-6 py-4 text-gray-600">{user.email}</td>
              <td className="px-6 py-4 text-gray-600">{user._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  );
};

export default UserFetch;
