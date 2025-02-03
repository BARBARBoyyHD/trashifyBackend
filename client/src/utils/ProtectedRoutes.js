import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingSpinner from "../component/Loading/LoadingSpinner";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const handleAuthUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/authUser", {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setIsAuthenticated(data.message === "Access Passed");
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error Fetching Data:", error);
        setIsAuthenticated(false);
      }
    };

    handleAuthUser();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <LoadingSpinner />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/pages/login" replace />;
};

export default ProtectedRoutes;
