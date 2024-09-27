import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../../context/useContext";

const DashSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await axios.post("http://localhost:3500/user/logout", null, {
        withCredentials: true,
      });
      setUser(null);
      toast.success("Admin logged out 🙁");
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  const handleLinkClick = (index) => {
    if (index === sidebarLinks.length - 1) {
      logOut(); // Call logOut if the last link (logout) is clicked
    } else {
      setActiveIndex(index); // Set active index for other links
      navigate(sidebarLinks[index].url); // Navigate to the selected URL
    }
  };

  const sidebarLinks = [
    { title: "Analytics", url: "/admindash" },
    { title: "Users", url: "/users" },
    { title: "Missions", url: "#" },
    { title: "Payments", url: "#" },
    { title: "Logout", url: "#" }, // Changed "logout" to "Logout" for consistency
  ];

  return (
    <div className="w-1/5 h-[800px] gap-10 flex flex-col items-left pt-20 pl-6 bg-gray-50">
      {sidebarLinks.map(({ title, url }, index) => (
        <div key={index}>
          <Link
            to={url}
            className={`p-4 rounded-lg ${
              index === activeIndex ? "bg-teal-500 text-white" : "text-black"
            }`}
            onClick={() => handleLinkClick(index)}
          >
            {title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashSidebar;
