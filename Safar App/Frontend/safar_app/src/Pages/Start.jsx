import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Navigation, ShieldCheck, Zap, Globe } from "lucide-react";
import { useNavigate } from "react-router";

const Start = () => {
  const navigate = useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    // Changed to h-screen and overflow-hidden to prevent scrolling
    <>
      {/* --- BACKGROUND ORBS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"
        />
      </div>

      {/* --- MAIN HERO (Centered & Balanced) --- */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md text-blue-400"
          >
            Evolution of Motion
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-[0.85]"
          >
            Move <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Beyond.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed"
          >
            Premium rides and urban exploration.{" "}
            <br className="hidden md:block" />
            Seamlessly integrated into your lifestyle.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            onClick={() => navigate("/UserSignup")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:cursor-pointer"
          >
            <span className="relative z-10">Start Your Journey</span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </main>

      {/* Subtle Glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-blue-500/50 blur-2xl opacity-50" />
    </>
  );
};

export default Start;
