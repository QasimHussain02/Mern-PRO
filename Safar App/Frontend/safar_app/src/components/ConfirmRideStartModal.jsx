import React from "react";
import { motion } from "framer-motion";
import { IndianRupee, MapPin } from "lucide-react";

const ConfirmRideStartModal = ({ rideRequest, onCancel, onConfirm }) => {
  return (
    <motion.div
      initial={{ y: 36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 24, opacity: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="rounded-2xl border border-white/[0.06] bg-[#101010] p-3.5"
    >
      {/* header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-400 font-semibold">
            Confirm to Start
          </p>
          <h3 className="mt-1 text-base font-semibold text-white">
            Confirm this ride to Start
          </h3>
        </div>
        <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold text-white shrink-0">
          {rideRequest.distance}
        </span>
      </div>

      {/* rider row */}
      <div className="mt-3 rounded-2xl bg-white/[0.04] px-3 py-2.5 flex items-center gap-3">
        <img
          src={rideRequest.riderAvatar}
          alt={rideRequest.riderName}
          className="h-10 w-10 rounded-full object-cover border border-white/[0.08]"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-white truncate">
            {rideRequest.riderName}
          </p>
          <p className="text-[11px] text-gray-500 truncate">Cash trip</p>
        </div>
      </div>

      {/* route rows */}
      <div className="mt-3 space-y-2.5">
        <div className="flex gap-2.5 rounded-xl bg-white/[0.02] px-3 py-2.5">
          <MapPin size={15} className="mt-0.5 text-emerald-400 shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {rideRequest.pickupTitle}
            </p>
            <p className="text-[11px] text-gray-500 truncate">
              {rideRequest.pickupSubtitle}
            </p>
          </div>
        </div>

        <div className="flex gap-2.5 rounded-xl bg-white/[0.02] px-3 py-2.5">
          <div className="mt-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-blue-400/40 shrink-0">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {rideRequest.dropTitle}
            </p>
            <p className="text-[11px] text-gray-500 truncate">
              {rideRequest.dropSubtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/[0.02] px-3 py-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0">
              <IndianRupee size={14} className="text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white">
                Rs {rideRequest.fare}
              </p>
              <p className="text-[11px] text-gray-500 truncate">
                {rideRequest.paymentMode}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
            Fare
          </span>
        </div>
      </div>

      {/* OTP input */}
      <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 shrink-0">
          OTP
        </span>
        <input
          type="text"
          maxLength={6}
          placeholder="Enter OTP"
          className="w-full bg-transparent text-sm font-medium text-white placeholder:text-gray-600 focus:outline-none"
        />
      </div>

      {/* actions */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          onClick={onCancel}
          className="rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="rounded-xl bg-emerald-500 px-3 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-400 cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </motion.div>
  );
};

export default ConfirmRideStartModal;
