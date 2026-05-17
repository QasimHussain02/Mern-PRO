import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Users,
  Clock,
  ArrowRight,
  Banknote,
  MapPin,
  Home as HomeIcon,
  Briefcase,
  Building2,
  ShoppingBag,
  GraduationCap,
  Search,
} from "lucide-react";

// ─── HARDCODED DATA ─────────────────────────────────────────
const savedAddresses = [
  { id: 1, name: "Home", address: "123 Main Street, Downtown", icon: "home" },
  {
    id: 2,
    name: "Office",
    address: "456 Business Ave, Financial District",
    icon: "briefcase",
  },
  {
    id: 3,
    name: "Shopping Mall",
    address: "789 Shopping Blvd, Westside",
    icon: "shopping",
  },
  {
    id: 4,
    name: "University",
    address: "321 Campus Road, Education City",
    icon: "education",
  },
  {
    id: 5,
    name: "Airport",
    address: "100 Aviation Way, Terminal 2",
    icon: "building",
  },
];

const rideOptions = [
  {
    id: 1,
    name: "SafarGo",
    type: "Economy",
    capacity: 4,
    eta: 3,
    price: 250,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=200&q=80",
  },
  {
    id: 2,
    name: "SafarX",
    type: "Premium",
    capacity: 4,
    eta: 5,
    price: 450,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=200&q=80",
  },
  {
    id: 3,
    name: "SafarXL",
    type: "SUV",
    capacity: 6,
    eta: 8,
    price: 650,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&q=80",
  },
  {
    id: 4,
    name: "SafarBike",
    type: "Bike",
    capacity: 1,
    eta: 2,
    price: 120,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200&q=80",
  },
  {
    id: 5,
    name: "SafarAuto",
    type: "Auto",
    capacity: 3,
    eta: 4,
    price: 180,
    image:
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=200&q=80",
  },
];

const iconMap = {
  home: HomeIcon,
  briefcase: Briefcase,
  shopping: ShoppingBag,
  education: GraduationCap,
  building: Building2,
};

// ─── ANIMATION VARIANTS ─────────────────────────────────────
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 280 : -280, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir < 0 ? 280 : -280, opacity: 0 }),
};

const springTransition = { type: "spring", stiffness: 320, damping: 32 };

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};
const fadeUp = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35 } },
};

// ─── ROUTE BADGE (reused) ────────────────────────────────────
const RouteBadge = ({ pickup, destination }) => (
  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5">
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center gap-0.5 pt-0.5 shrink-0">
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="w-[1.5px] h-6 bg-gradient-to-b from-emerald-400/50 to-blue-400/50" />
        <div className="w-2 h-2 rounded-sm bg-blue-400" />
      </div>
      <div className="flex flex-col gap-3 min-w-0">
        <p className="text-xs text-gray-400 truncate">{pickup}</p>
        <p className="text-xs text-white font-medium truncate">{destination}</p>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// ─── HOME COMPONENT ──────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════
export const Home = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedRide, setSelectedRide] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const go = (s) => {
    setDirection(s > step ? 1 : -1);
    setStep(s);
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* ═══════ SIDEBAR (20%) ═══════ */}
      <div className="w-[20%] min-w-[360px] h-full bg-[#080808] border-r border-white/[0.06] flex flex-col relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          {/* ──── PANEL 0 : Location Input ──── */}
          {step === 0 && (
            <motion.div
              key="p0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
              className="flex flex-col h-full"
            >
              {/* Search Header */}
              <div className="p-5 pb-0">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h2
                    variants={fadeUp}
                    className="text-xl font-bold tracking-tight text-white mb-1"
                  >
                    Good afternoon ☀️
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="text-gray-500 text-xs mb-5"
                  >
                    Where are you heading today?
                  </motion.p>

                  {/* Inputs */}
                  <motion.div
                    variants={fadeUp}
                    className="relative flex flex-col gap-2"
                  >
                    {/* Connecting line */}
                    <div className="absolute left-[19px] top-[20px] bottom-[20px] w-[2px] bg-gradient-to-b from-emerald-400/60 to-blue-400/60 rounded-full z-0" />

                    <div className="relative flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 group hover:border-emerald-500/30 transition-all">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-[3px] ring-emerald-400/20 shrink-0 z-10" />
                      <input
                        type="text"
                        defaultValue="Current Location"
                        placeholder="Pickup location"
                        className="w-full bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none"
                      />
                    </div>

                    <div className="relative flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 group hover:border-blue-500/30 transition-all">
                      <div className="w-2.5 h-2.5 rounded-sm bg-blue-400 ring-[3px] ring-blue-400/20 shrink-0 z-10" />
                      <input
                        type="text"
                        placeholder="Where to?"
                        className="w-full bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none"
                      />
                      <Search size={14} className="text-gray-600 shrink-0" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 px-5 my-4">
                <div className="h-[1px] flex-grow bg-white/[0.05]" />
                <span className="text-[9px] font-semibold text-gray-600 uppercase tracking-[0.15em]">
                  Saved Places
                </span>
                <div className="h-[1px] flex-grow bg-white/[0.05]" />
              </div>

              {/* Saved Addresses */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1 px-3 flex-grow overflow-y-auto sidebar-scroll pb-4"
              >
                {savedAddresses.map((addr) => {
                  const Icon = iconMap[addr.icon];
                  return (
                    <motion.div
                      key={addr.id}
                      variants={fadeUp}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedAddress(addr);
                        go(1);
                      }}
                      className="flex items-center gap-3 p-3 rounded-xl cursor-pointer group transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.04] flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/[0.08] transition-all">
                        <Icon
                          size={15}
                          className="text-gray-500 group-hover:text-blue-400 transition-colors"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="text-[13px] font-medium text-white truncate">
                          {addr.name}
                        </p>
                        <p className="text-[11px] text-gray-600 truncate">
                          {addr.address}
                        </p>
                      </div>
                      <ArrowRight
                        size={13}
                        className="text-gray-700 group-hover:text-gray-400 shrink-0 transition-colors"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* ──── PANEL 1 : Ride Selection ──── */}
          {step === 1 && (
            <motion.div
              key="p1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
              className="flex flex-col h-full"
            >
              <div className="p-5 pb-0">
                <div className="flex items-center gap-3 mb-5">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => go(0)}
                    className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.04] flex items-center justify-center hover:bg-white/[0.1] transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={16} className="text-white" />
                  </motion.button>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      Choose your ride
                    </h2>
                    <p className="text-[11px] text-gray-500">
                      5 rides available
                    </p>
                  </div>
                </div>

                <RouteBadge
                  pickup="Current Location"
                  destination={selectedAddress?.address || "Destination"}
                />
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 px-5 my-4">
                <div className="h-[1px] flex-grow bg-white/[0.05]" />
                <span className="text-[9px] font-semibold text-gray-600 uppercase tracking-[0.15em]">
                  Available Rides
                </span>
                <div className="h-[1px] flex-grow bg-white/[0.05]" />
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-2 px-3 flex-grow overflow-y-auto sidebar-scroll pb-4"
              >
                {rideOptions.map((ride) => (
                  <motion.div
                    key={ride.id}
                    variants={fadeUp}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedRide(ride);
                      go(2);
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.04] bg-white/[0.02] cursor-pointer hover:border-white/[0.1] transition-all group"
                  >
                    <div className="w-[68px] h-[48px] rounded-lg overflow-hidden bg-white/[0.04] shrink-0 border border-white/[0.04]">
                      <img
                        src={ride.image}
                        alt={ride.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-white">
                          {ride.name}
                        </p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-white/[0.05] text-gray-500 font-medium">
                          {ride.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[11px] text-gray-500 flex items-center gap-1">
                          <Users size={10} /> {ride.capacity}
                        </span>
                        <span className="text-[11px] text-gray-500 flex items-center gap-1">
                          <Clock size={10} /> {ride.eta} min
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-white shrink-0">
                      Rs {ride.price}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ──── PANEL 2 : Confirm Ride ──── */}
          {step === 2 && (
            <motion.div
              key="p2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
              className="flex flex-col h-full overflow-y-auto sidebar-scroll"
            >
              <div className="p-5 flex flex-col min-h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => go(1)}
                    className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.04] flex items-center justify-center hover:bg-white/[0.1] transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={16} className="text-white" />
                  </motion.button>
                  <h2 className="text-lg font-bold text-white">
                    Confirm your ride
                  </h2>
                </div>

                {/* Selected Ride */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] rounded-2xl p-4 mb-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-14 rounded-xl overflow-hidden bg-white/[0.05] border border-white/[0.04]">
                      <img
                        src={selectedRide?.image}
                        alt={selectedRide?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-base font-bold text-white">
                        {selectedRide?.name}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {selectedRide?.type} · {selectedRide?.capacity} seats
                      </p>
                      <p className="text-[11px] text-emerald-400 mt-0.5 font-medium">
                        {selectedRide?.eta} min away
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Route */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                >
                  <RouteBadge
                    pickup="Current Location"
                    destination={selectedAddress?.address || "Destination"}
                  />
                </motion.div>

                {/* Payment */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl p-3.5 mt-4"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Banknote size={14} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500">
                        Payment Method
                      </p>
                      <p className="text-sm font-semibold text-white">Cash</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-white">
                    Rs {selectedRide?.price}
                  </p>
                </motion.div>

                {/* Spacer */}
                <div className="flex-grow min-h-[30px]" />

                {/* Confirm Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => go(3)}
                  className="w-full relative group overflow-hidden bg-white text-black font-bold py-3.5 rounded-xl transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    Confirm SafarGo <ArrowRight size={16} />
                  </span>
                </motion.button>
                <div className="h-6 w-full shrink-0" />
              </div>
            </motion.div>
          )}

          {/* ──── PANEL 3 : Looking for Driver ──── */}
          {step === 3 && (
            <motion.div
              key="p3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
              className="flex flex-col h-full overflow-y-auto sidebar-scroll"
            >
              <div className="p-5 flex flex-col min-h-full items-center">
                {/* Animated Pulse */}
                <div className="relative flex items-center justify-center mt-8 mb-6">
                  <div className="absolute w-28 h-28 rounded-full bg-blue-500/10 pulse-ring" />
                  <div
                    className="absolute w-28 h-28 rounded-full bg-blue-500/10 pulse-ring"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-white/[0.08] flex items-center justify-center backdrop-blur-xl">
                    <MapPin size={28} className="text-blue-400" />
                  </div>
                </div>

                {/* Looking text with bouncing dots */}
                <div className="flex items-center gap-1 mb-2">
                  <p className="text-base font-bold text-white">
                    Looking for a driver
                  </p>
                  <div className="flex gap-0.5 ml-1 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dot-bounce-1" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dot-bounce-2" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 dot-bounce-3" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-8">
                  This usually takes a few seconds
                </p>

                {/* Car Image */}
                <motion.div
                  animate={{ x: [0, 8, 0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full max-w-[220px] h-[120px] rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.06] mb-8"
                >
                  <img
                    src={selectedRide?.image}
                    alt={selectedRide?.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Ride + Route Info */}
                <div className="w-full space-y-3">
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">Your Ride</p>
                    <p className="text-sm font-semibold text-white">
                      {selectedRide?.name}{" "}
                      <span className="text-gray-500 font-normal">
                        · {selectedRide?.type}
                      </span>
                    </p>
                  </div>

                  <RouteBadge
                    pickup="Current Location"
                    destination={selectedAddress?.address || "Destination"}
                  />

                  <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <Banknote size={14} className="text-emerald-400" />
                      <p className="text-sm text-white font-medium">Cash</p>
                    </div>
                    <p className="text-sm font-bold text-white">
                      Rs {selectedRide?.price}
                    </p>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-grow min-h-[30px]" />

                {/* Cancel */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => go(0)}
                  className="w-full py-3 rounded-xl border border-red-500/20 text-red-400 text-sm font-semibold hover:bg-red-500/10 transition-all cursor-pointer"
                >
                  Cancel Ride
                </motion.button>
                <div className="h-6 w-full shrink-0" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══════ MAP AREA (80%) ═══════ */}
      <div className="flex-grow h-full relative bg-[#0c0c0c]">
        {/* Map Image */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
          alt="Map"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark gradient overlay from left edge for seamless sidebar blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent w-[15%]" />
        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />

        {/* Map Pin Markers (decorative) */}
        {/* <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2"
        >
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/30 shadow-[0_0_20px_rgba(52,211,153,0.4)]" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-3 bg-emerald-400/50" />
          </div>
        </motion.div> */}

        {/* <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[55%] left-[60%]"
        >
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-blue-400 ring-4 ring-blue-400/30 shadow-[0_0_20px_rgba(96,165,250,0.4)]" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-3 bg-blue-400/50" />
          </div>
        </motion.div> */}

        {/* Dashed route line between pins */}
        {/* <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <motion.path
            d="M 50% 36% Q 55% 45% 62% 56%"
            stroke="rgba(96,165,250,0.3)"
            strokeWidth="2"
            strokeDasharray="6 4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg> */}
      </div>
    </div>
  );
};
