import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface LockScreenProps {
  onUnlock: () => void;
}

const quotes = [
  "Simplicity beats cleverness.",
  "Design for humans, not robots.",
  "Code is poetry, make it readable.",
  "Build with purpose, not just passion.",
];

const LockScreen = ({ onUnlock }: LockScreenProps) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [dragY, setDragY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(quoteTimer);
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y < -100) {
      controls.start({ y: "-100vh", opacity: 0 });
      setTimeout(onUnlock, 600);
    } else {
      controls.start({ y: 0 });
      setDragY(0);
    }
  };

  const handleTapUnlock = () => {
    controls.start({ y: "-100vh", opacity: 0 });
    setTimeout(onUnlock, 600);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
      animate={controls}
      initial={{ y: 0 }}
    >
      <div className="absolute top-2 flex place-items-center justify-between w-full px-10">
          <div>
            <motion.img 
            initial={{y: '-100%', opacity: 0}}
            animate={{y: '0', opacity: 1}}
            transition={{
              y:{duration: 1, ease:'linear'}
          }}
            className="w-[90px] h-[90px]" src="/Reversco-logo.png" alt="" />
            {/* <motion.p 
            initial={{width: "0", opacity: 1}}
            animate={{width: [0, "100%", 0], opacity: 1}}
            transition={{duration: 3, delay: 1.5, ease: "linear"}}


            className="Rv absolute top-5 text-[2rem] overflow-hidden drop-shadow-lg filter grayscale-100">
              REVERSCO</motion.p> */}
          </div>
              {/* Theme Toggle */}
          <motion.div 
            initial={{y: '-100%', opacity: 0}}
            animate={{y: '0', opacity: 1}}
            transition={{
              y:{duration: 1, ease:'linear'}
          }}
          className="z-10">
              <ThemeToggle />
          </motion.div>
      </div>
     

      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000020_1px,transparent_1px),linear-gradient(to_bottom,#00000020_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
          <img src="/Reversco-logo.png" className="absolute left-5 bottom-0 md:bottom-[-300px] z-[-100] opacity-[0.5]" alt="" />

      {/* Rotating Quotes */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-12 px-6 max-w-2xl"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-medium text-foreground italic"
          >
            "{quotes[quoteIndex]}"
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {/* Name Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3">
          Dev Reversco
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium">Full Stack <span className="">Developer</span></p>
      </motion.div>

      {/* Swipe/Tap Indicator */}
      <motion.div
        drag="y"
        dragConstraints={{ top: -300, bottom: 0 }}
        dragElastic={0.2}
        onDrag={(_, info) => setDragY(info.offset.y)}
        onDragEnd={handleDragEnd}
        onClick={handleTapUnlock}
        className="cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="glass rounded-full p-6 shadow-soft">
            <ChevronUp className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">Swipe up or tap to unlock</p>
        </div>
      </motion.div>

      {/* Drag Progress Indicator */}
      {dragY < -10 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-64 h-1 bg-muted rounded-full overflow-hidden shadow-inner-soft">
            <motion.div
              className="h-full bg-primary"
              style={{
                width: `${Math.min(Math.abs(dragY), 100)}%`,
              }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LockScreen;
