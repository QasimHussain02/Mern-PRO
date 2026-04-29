import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const UserProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/UserLogin");
      return;
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default UserProtectedRoute;
