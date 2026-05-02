import { useState } from "react";
import { CaptainContext } from "./CaptainContext";
export const CaptainProvider = ({ children }) => {
  const [captainData, setCaptainData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  function updateCaptain(value) {
    setCaptainData(value);
  }
  const value = {
    captainData,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
  };

  return (
    <CaptainContext.Provider value={value}>{children}</CaptainContext.Provider>
  );
};
