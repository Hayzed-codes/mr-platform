import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordInput from "../PasswordInput/PasswordInput";
import { UserContext } from "../../../context/useContext";
import axios from "axios";

const UserLog = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formValidMessage, setFormValidMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleInputChange = useCallback((e) => {
    setFormValidMessage("");
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const loginUser = useCallback((e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setFormValidMessage("Fill all the required fields");
      return;
    }
    setIsSubmitting(true);

    axios
      .post(`http://localhost:3500/user/login`, formData, { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        setIsSubmitting(false);
        toast.success("Login Successful");
        navigate("/dashboard", { state: { user: response.data } });
      }).catch((error) => {
        setIsSubmitting(false);
        const message =
          error.response?.status === 400
            ? "Invalid Credentials"
            : "Server error, unable to Login";
        setFormValidMessage(message);
      });
  }, [formData, navigate, setUser]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
          Welcome back
        </h2>

        <form className="space-y-4" onSubmit={loginUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-teal-500"
              name="email"
              placeholder="example@yahoo.com"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <PasswordInput
              className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-teal-500"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-500 transition duration-200" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {formValidMessage && (
          <p className="text-red-500 text-center mt-4">{formValidMessage}</p>
        )}

        <p className="text-center mt-4">
          Don’t have an account yet? 
          <Link to="/user-reg" className="text-teal-600 hover:underline"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLog;
