import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "../../../context/useContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  
  const logOut = async () => {
    try {
      await axios.post("http://localhost:3500/admin/logout", null, {
        withCredentials: true,
      });
      setUser(null);
      toast.success("User logged out 🙁");
      navigate("/user-log");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <div className="w-64 bg-gray-100 p-5 shadow-md">
      <div className="mb-5 text-3xl font-extrabold text-teal-600">
        {/* <img src="logo.png" alt="Logo" className="max-w-full" /> */}
        Boostify
      </div>
      <nav className="flex flex-col">
        <Link to="/dashboard" className="mb-4 p-2 text-gray-800 rounded hover:bg-blue-500 hover:text-white transition duration-200">
          Dashboard
        </Link>
        {/* <Link to="/users" className="mb-4 p-2 text-gray-800 rounded hover:bg-blue-500 hover:text-white transition duration-200">
          Users
        </Link> */}
        <Link to="#" className="mb-4 p-2 text-gray-800 rounded hover:bg-blue-500 hover:text-white transition duration-200">
          Rewards
        </Link>
        <Link to="#" className="mb-4 p-2 text-gray-800 rounded hover:bg-blue-500 hover:text-white transition duration-200">
          Setting
        </Link>
        <button onClick={logOut} className="p-2 text-gray-800 rounded hover:bg-blue-500 hover:text-white transition duration-200">
          Log out
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
