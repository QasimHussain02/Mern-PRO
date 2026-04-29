import React from "react";
import { Navbar } from "../components/navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-[#050505] text-white overflow-hidden font-sans flex flex-col">
        <Navbar></Navbar>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
