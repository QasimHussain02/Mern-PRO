import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Navigation,
  Car,
  Hash,
  Palette,
  Users,
  ChevronDown,
} from "lucide-react";
import { NavLink } from "react-router";

const CaptainSignup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    vehicleType: "Car",
    color: "",
    plate: "",
    capacity: "",
  });

  const [errors, setErrors] = useState({});

  // Validation Logic
  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
        break;
      case "password":
        if (value.length < 6) error = "Min 6 characters";
        break;
      case "capacity":
        const num = parseInt(value);
        if (isNaN(num) || num <= 0) error = "Must be > 0";
        if (formData.vehicleType === "Bike" && num > 2)
          error = "Max 2 for Bike";
        if (formData.vehicleType === "Auto" && num > 4)
          error = "Max 4 for Auto";
        if (formData.vehicleType === "Car" && num > 8) error = "Max 8 for Car";
        break;
      case "plate":
        if (value.length < 3) error = "Invalid plate";
        break;
      default:
        if (value.trim() === "") error = "Required";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(formData);
    validate(name, value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 flex-grow flex items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl bg-white/[0.02] border border-white/10 backdrop-blur-3xl rounded-[2rem] p-6 md:p-8 shadow-2xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h2 className="text-xl font-bold tracking-tight">
              Captain Registration
            </h2>
            <p className="text-gray-500 text-[11px]">
              Register your vehicle and start earning.
            </p>
          </motion.div>

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  First Name
                </label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  type="text"
                  placeholder="John"
                  className={`w-full bg-white/[0.05] border ${errors.firstName ? "border-red-500/50" : "border-white/5"} rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-blue-500/50 transition-all`}
                />
                {errors.firstName && (
                  <p className="text-[9px] text-red-400 ml-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  Last Name
                </label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  type="text"
                  placeholder="Doe"
                  className={`w-full bg-white/[0.05] border ${errors.lastName ? "border-red-500/50" : "border-white/5"} rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-blue-500/50 transition-all`}
                />
              </div>
            </div>

            {/* Email & Password */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full bg-white/[0.05] border ${errors.email ? "border-red-500/50" : "border-white/5"} rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-blue-500/50 transition-all`}
                />
                {errors.email && (
                  <p className="text-[9px] text-red-400 ml-1">{errors.email}</p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••"
                    className={`w-full bg-white/[0.05] border ${errors.password ? "border-red-500/50" : "border-white/5"} rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-blue-500/50 transition-all`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[9px] text-red-400 ml-1">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-1" />

            {/* Vehicle Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  Vehicle Type
                </label>
                <div className="relative">
                  <select
                    name="vehicleType"
                    onChange={handleChange}
                    className="w-full bg-white/[0.05] border border-white/5 rounded-xl py-2 px-3 text-xs appearance-none focus:outline-none focus:border-blue-500/50"
                  >
                    <option className="bg-black" value="Car">
                      Car
                    </option>
                    <option className="bg-black" value="Bike">
                      Bike
                    </option>
                    <option className="bg-black" value="Auto">
                      Auto
                    </option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  Plate Number
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                  <input
                    name="plate"
                    onChange={handleChange}
                    placeholder="ABC-1234"
                    className={`w-full bg-white/[0.05] border ${errors.plate ? "border-red-500/50" : "border-white/5"} rounded-xl py-2 pl-8 pr-3 text-xs focus:outline-none focus:border-blue-500/50`}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  Vehicle Color
                </label>
                <div className="relative">
                  <Palette className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                  <input
                    name="color"
                    onChange={handleChange}
                    placeholder="Black"
                    className={`w-full bg-white/[0.05] border border-white/5 rounded-xl py-2 pl-8 pr-3 text-xs focus:outline-none focus:border-blue-500/50`}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-400 ml-1 uppercase">
                  Capacity
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                  <input
                    name="capacity"
                    onChange={handleChange}
                    type="number"
                    placeholder="4"
                    className={`w-full bg-white/[0.05] border ${errors.capacity ? "border-red-500/50" : "border-white/5"} rounded-xl py-2 pl-8 pr-3 text-xs focus:outline-none focus:border-blue-500/50`}
                  />
                </div>
                {errors.capacity && (
                  <p className="text-[9px] text-red-400 ml-1">
                    {errors.capacity}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full mt-4 bg-white text-black font-bold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Complete Registration <ArrowRight size={16} />
            </motion.button>
          </form>

          <p className="text-center mt-4 text-[11px] text-gray-500">
            Already a captain?{" "}
            <NavLink
              to="/CaptainLogin"
              className="text-white font-semibold hover:underline decoration-blue-500"
            >
              Log in
            </NavLink>
          </p>
        </motion.div>
      </main>

      <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </>
  );
};

export default CaptainSignup;
