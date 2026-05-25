import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CarFront,
  Clock3,
  IndianRupee,
  MapPinned,
  ShieldCheck,
  Star,
} from "lucide-react";
import ConfirmRideStartModal from "../components/ConfirmRideStartModal";
import FinishRideModal from "../components/FinishRideModal";
import NewRideAvailableCard from "../components/NewRideAvailableCard";

const captain = {
  name: "Harsh Patel",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  earnings: "295.20",
  hoursOnline: "10.2",
  completedRides: "18",
  rating: "4.9",
  vehicle: "White Suzuki Dzire",
  vehicleNumber: "GJ 01 RX 4821",
  status: "Online",
};

const statCards = [
  {
    id: "earnings",
    label: "Earned Today",
    value: `Rs ${captain.earnings}`,
    icon: IndianRupee,
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "hours",
    label: "Hours Online",
    value: captain.hoursOnline,
    icon: Clock3,
    accent: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    id: "rides",
    label: "Completed Rides",
    value: captain.completedRides,
    icon: CarFront,
    accent: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
  },
];

const quickUpdates = [
  {
    id: 1,
    title: "Airport pickup",
    detail: "Terminal 2 · 2.4 km away",
  },
  {
    id: 2,
    title: "High demand zone",
    detail: "MG Road is surging right now",
  },
  {
    id: 3,
    title: "Next incentive",
    detail: "2 more rides to unlock Rs 150 bonus",
  },
];

const rideRequest = {
  riderName: "Harshi Pateliya",
  riderAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  distance: "2.2 KM",
  pickupTitle: "562/11-A",
  pickupSubtitle: "Kankariya Talab, Bhopal",
  dropTitle: "562/11-A",
  dropSubtitle: "Kankariya Talab, Bhopal",
  fare: "193.20",
  paymentMode: "Cash Cash",
};

const CaptainHome = () => {
  const [activeModal, setActiveModal] = useState("request");

  return (
    <div className="flex h-full w-full overflow-hidden max-lg:flex-col">
      <div className="w-[20%] min-w-[360px] max-w-[430px] h-full bg-[#080808] border-r border-white/[0.06] flex flex-col relative z-10 max-lg:w-full max-lg:max-w-none max-lg:min-w-0 max-lg:h-auto">
        <div className="p-5 flex flex-col gap-5 h-full overflow-y-auto sidebar-scroll">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-1"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-400 font-semibold">
              Captain Dashboard
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Ready for your next ride
            </h1>
            <p className="text-sm text-gray-500">
              Track your active shift, earnings, and service health in one
              place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-4 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={captain.avatar}
                  alt={captain.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-white/[0.08]"
                />
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold text-white truncate">
                    {captain.name}
                  </h2>
                  <p className="text-xs text-gray-500 truncate">
                    {captain.vehicle} · {captain.vehicleNumber}
                  </p>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[11px] font-semibold text-emerald-400 shrink-0">
                {captain.status}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {statCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    className="rounded-2xl border border-white/[0.06] bg-[#111111] px-3 py-3.5 text-center"
                  >
                    <div
                      className={`w-10 h-10 mx-auto rounded-xl border flex items-center justify-center ${card.iconBg}`}
                    >
                      <Icon size={18} className={card.accent} />
                    </div>
                    <p className="mt-3 text-lg font-bold text-white leading-none">
                      {card.value}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500 leading-4">
                      {card.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                <Star size={18} className="text-blue-400" />
              </div>
              <p className="text-[11px] text-gray-500 uppercase tracking-[0.18em]">
                Rating
              </p>
              <p className="mt-1 text-2xl font-bold text-white">
                {captain.rating}
              </p>
              <p className="text-xs text-gray-500">Based on recent trips</p>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                <ShieldCheck size={18} className="text-emerald-400" />
              </div>
              <p className="text-[11px] text-gray-500 uppercase tracking-[0.18em]">
                Shift Status
              </p>
              <p className="mt-1 text-2xl font-bold text-white">Stable</p>
              <p className="text-xs text-gray-500">No alerts on your account</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-3xl border border-white/[0.06] bg-white/[0.03] p-4 flex-grow"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  Live Updates
                </p>
                <h3 className="text-lg font-semibold text-white">
                  What needs your attention
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
                <MapPinned size={18} className="text-blue-400" />
              </div>
            </div>

            <div className="space-y-3">
              {quickUpdates.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/[0.05] bg-[#101010] px-3.5 py-3"
                >
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex-grow h-full relative bg-[#0c0c0c] min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
          alt="Map"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent w-[15%] max-lg:w-full max-lg:h-[18%] max-lg:bg-gradient-to-b" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.18 }}
          className="absolute top-6 right-6 rounded-2xl border border-white/[0.08] bg-black/45 backdrop-blur-xl px-4 py-3 max-sm:left-4 max-sm:right-4"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400">
            Current zone
          </p>
          <p className="text-base font-semibold text-white mt-1">
            Ahmedabad Central
          </p>
          <p className="text-xs text-emerald-400 mt-1">
            High ride demand in your area
          </p>
        </motion.div>
      </div>

      {/* Complete Ride floating button — visible while a ride is in progress */}
      <AnimatePresence>
        {activeModal === "riding" && (
          <motion.div
            key="complete-ride-btn"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
          >
            <button
              onClick={() => setActiveModal("finish-ride")}
              className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_32px_rgba(16,185,129,0.35)] transition-colors hover:bg-emerald-400 cursor-pointer"
            >
              Complete Ride
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(activeModal === "request" ||
          activeModal === "confirm-start" ||
          activeModal === "finish-ride") && (
          <motion.div
            key="captain-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-[2px] px-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.08,
              }}
              className="w-full max-w-md"
            >
              {activeModal === "request" ? (
                <NewRideAvailableCard
                  rideRequest={rideRequest}
                  onIgnore={() => setActiveModal(null)}
                  onAccept={() => setActiveModal("confirm-start")}
                />
              ) : activeModal === "confirm-start" ? (
                <ConfirmRideStartModal
                  rideRequest={rideRequest}
                  onCancel={() => setActiveModal(null)}
                  onConfirm={() => setActiveModal("riding")}
                />
              ) : (
                <FinishRideModal
                  rideRequest={rideRequest}
                  onComplete={() => setActiveModal(null)}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaptainHome;
