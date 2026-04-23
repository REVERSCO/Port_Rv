import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StartupLoaderProps {
  onComplete: () => void;
}

const steps = [
  "Initializing workspace...",
  "Loading modules...",
  "Configuring environment...",
  "Ready!",
];

const StartupLoader = ({ onComplete }: StartupLoaderProps) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepDuration = 350;
    
    const stepTimer = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, stepDuration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 28);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1600);

    return () => {
      clearInterval(stepTimer);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background"
    >
      <div className="w-full max-w-md px-8 space-y-8">
        {/* Progress bar */}
        <div className="space-y-3">
          <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-muted-foreground text-center"
          >
            {steps[step]}
          </motion.p>
        </div>

        {/* Welcome message appears near end */}
        {progress > 80 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center space-y-2"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Welcome to Dev Reversco's Workspace
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-32 mx-auto bg-primary rounded-full"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default StartupLoader;
