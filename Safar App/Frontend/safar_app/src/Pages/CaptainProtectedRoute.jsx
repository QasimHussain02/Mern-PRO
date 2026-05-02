import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const CaptainProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("captainToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/captainLogin");
      return;
    }
  }, [token, navigate]);
  return <div>{children}</div>;
};

export default CaptainProtectedRoute;
