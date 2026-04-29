// import { Navigation } from "lucide-react";
import React from "react";
import { Navigation } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="relative z-10 p-4 md:px-10">
      <div className="text-lg font-black tracking-tighter flex items-center gap-2 cursor-pointer">
        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
          <Navigation className="text-black w-3.5 h-3.5 fill-current" />
        </div>
        SAFAR
      </div>
    </nav>
  );
};
