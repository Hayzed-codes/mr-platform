import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PasswordInput from "../PasswordInput/PasswordInput";
import { UserContext } from "../../../context/useContext";
import axios from "axios";

const Login = () => {
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
      .post(`http://localhost:3500/admin/login`, formData)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setIsSubmitting(false);
        toast.success("Login Successful");
        navigate("/admindash", { state: { user: response.data } });
      })
      .catch((error) => {
        setIsSubmitting(false);
        const message =
          error.response?.status === 401
            ? "Invalid credentials"
            : "Server error, unable to login";
        setFormValidMessage(message);
      });
  }, [formData, navigate, setUser]);

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <h2 className="text-center text-2xl text-teal-600 font-bold">Welcome Back</h2>

        <form className="flex flex-col gap-4" onSubmit={loginUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-teal-500"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password:</label>
            <PasswordInput
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button
            className={`mt-4 py-2 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging you in..." : "Login"}
          </button>
          {formValidMessage && <p className="text-red-500 text-sm mt-2">{formValidMessage}</p>}
        </form>

        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-teal-600 underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
