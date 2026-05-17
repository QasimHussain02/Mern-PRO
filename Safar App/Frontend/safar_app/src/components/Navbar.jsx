import React from "react";
import { Navigation, LogOut } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="relative z-10 py-2 px-5 md:px-10 flex items-center justify-between bg-[#080808] border-b border-white/[0.06]">
      <div className="text-lg font-black tracking-tighter flex items-center gap-2 cursor-pointer text-white">
        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
          <Navigation className="text-black w-3.5 h-3.5 fill-current" />
        </div>
        SAFAR
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] hover:bg-red-500/10 text-white hover:text-red-400 text-sm font-semibold rounded-xl transition-all border border-white/[0.04] hover:border-red-500/20 cursor-pointer">
        <LogOut size={16} />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </nav>
  );
};
