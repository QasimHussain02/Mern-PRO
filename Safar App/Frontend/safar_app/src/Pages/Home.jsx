import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  async function logoutUser() {
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
  async function logoutCaptain() {
    try {
      await axios(`${import.meta.env.VITE_API_URL}/api/captains/logout`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_URL}`,
        },
      });
      localStorage.removeItem("captainToken");
      navigate("/CaptainLogin");
    } catch (err) {
      console.err(err);
    }
  }
  return (
    <div className="">
      <p className="text-white!">Home</p>
      <button className="cursor-pointer" onClick={logoutUser}>
        logout
      </button>
      <button className="cursor-pointer" onClick={logoutCaptain}>
        logout captain
      </button>
    </div>
  );
};
