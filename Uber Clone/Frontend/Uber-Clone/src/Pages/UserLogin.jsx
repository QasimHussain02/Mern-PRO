import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Navigation,
  Link,
} from "lucide-react";
import { NavLink } from "react-router";

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <>
      {/* --- BACKGROUND ORBS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px]"
        />
      </div>

      {/* --- SIGNUP FORM CARD --- */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-sm bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[2rem] p-6 md:p-8 shadow-2xl"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
              Login User Account
            </h2>
          </motion.div>

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-white/[0.05] border border-white/5 rounded-xl py-2.5 pl-9 pr-3 text-xs focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase tracking-widest">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white/[0.05] border border-white/5 rounded-xl py-2.5 pl-9 pr-10 text-xs focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-4 relative group overflow-hidden bg-white text-black font-bold py-3 rounded-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                Log in <ArrowRight size={16} />
              </span>
            </motion.button>
          </form>

          {/* Footer Link */}
          <motion.p
            variants={itemVariants}
            className="text-center mt-6 text-xs text-gray-500"
          >
            Not on Safar?
            <NavLink
              to="/UserSignup"
              className="text-white font-semibold hover:underline decoration-blue-500 underline-offset-4"
            >
              Sign up
            </NavLink>
          </motion.p>
        </motion.div>
      </main>

      {/* Bottom Decoration */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </>
  );
};

export default UserLogin;
