import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  async function logout() {
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/user/logout`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      localStorage.removeItem("token");
      navigate("/UserLogin");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="">
      <p className="text-white!">Home</p>
      <button className="cursor-pointer" onClick={logout}>
        logout
      </button>
    </div>
  );
};
