import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LockScreen from "@/components/LockScreen";
import StartupLoader from "@/components/StartupLoader";

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowLoader(true);
  };

  const handleLoaderComplete = () => {
    navigate("/home");
  };

  return (
    <AnimatePresence mode="wait">
      {!isUnlocked && <LockScreen onUnlock={handleUnlock} />}
      {showLoader && <StartupLoader onComplete={handleLoaderComplete} />}
    </AnimatePresence>
  );
};

export default Index;
