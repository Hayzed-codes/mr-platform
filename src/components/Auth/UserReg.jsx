import React, { useCallback, useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput/PasswordInput";
import { UserContext } from "../../../context/useContext";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";

const UserReg = () => {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const [formValidMessage, setFormValidMessage] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const navigate = useNavigate();

  const timesIcon = <FaTimes color="red" size={20} />;
  const checkIcon = <BsCheck2All color="green" size={20} />;

  const switchIcon = (condition) => {
    return condition ? checkIcon : timesIcon;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { password } = formData;

    setUCase(/([a-z].[A-Z])|([A-Z].[a-z])/.test(password));
    setNum(/[0-9]/.test(password));
    setSChar(/[!,%,&,@,#,$,^,*,?,_,~]/.test(password));
    setPassLength(password.length > 5);
  }, [formData.password]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const { name, email, password, password2 } = formData;

      if (!name || !email || !password || !password2) {
        setFormValidMessage("Oops!! All fields are required😵");
        return;
      }

      if (password !== password2) {
        setFormValidMessage("Password does not match!");
        return;
      }

      setIsSubmitting(true);

      axios
        .post("http://localhost:3500/user/create", formData)
        .then((response) => {
          setUser(response.data);
          setIsSubmitting(false);
          setFormCompleted(true);
          toast.success("Registration Successful");
          navigate("/dashboard", { state: { user: response.data } });
        })
        .catch((error) => {
          setIsSubmitting(false);
          const message =
            error.response?.status === 400
              ? "A user with the same email already exists"
              : "Server error, unable to register";
          setFormValidMessage(message);
        });
    },
    [formData, navigate, setUser]
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
              Create an account
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-teal-500"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-teal-500"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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

              <div>
                <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                  Confirm password:
                </label>
                <PasswordInput
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-teal-500"
                  placeholder="Confirm Password"
                  name="password2"
                  value={formData.password2}
                  onChange={handleInputChange}
                  onPaste={(e) => {
                    e.preventDefault();
                    toast.error("Cannot paste into input field");
                    return false;
                  }}
                />
              </div>

              <div className="mb-6">
                <ul className="list-disc pl-5">
                  <li className="flex items-center">
                    <span className="mr-2">{switchIcon(uCase)}</span>
                    <span>Lowercase & Uppercase</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">{switchIcon(num)}</span>
                    <span>Number (0-9)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">{switchIcon(sChar)}</span>
                    <span>Special characters (!@#$%^&*~)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">{switchIcon(passLength)}</span>
                    <span>At least 6 Characters.</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-500 transition duration-200" disabled={isSubmitting}>
                {isSubmitting ? "Signing you up..." : "Create Account"}
              </button>
            </form>
            {formValidMessage && <p className="text-red-500 text-center mt-4">{formValidMessage}</p>}

            <p className="text-center mt-4">
              Already have an account? 
              <Link to="/user-log" className="text-teal-600 hover:underline"> Login</Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserReg;
