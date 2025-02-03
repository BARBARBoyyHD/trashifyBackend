import React, { useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa"; // Import the React Icon for logout

const LogoutButton = () => {
  // Handle logout functionality
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/deleteCookies", {
        method: "GET",
        credentials: "include", // This sends cookies if they exist
      });

      if (res.ok) {
        // Optionally handle any post-logout actions like redirecting
        window.location.href = "/pages/login"; // Redirect to login page after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center text-red-600 font-semibold py-2 px-4"
    >
      <FaSignOutAlt className="mr-2 text-xl" /> {/* React icon for logout */}
    </button>
  );
};

export default LogoutButton;
