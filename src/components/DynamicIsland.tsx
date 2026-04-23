import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, X } from "lucide-react";
import gsap from "gsap";

const DynamicIsland = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const islandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (islandRef.current) {
      gsap.to(islandRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  const handleClick = () => {
    if (islandRef.current) {
      gsap.to(islandRef.current, {
        scale: isExpanded ? 1 : 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        ref={islandRef}
        onClick={handleClick}
        className={`glass cursor-pointer transition-all duration-500 shadow-soft hover:shadow-lift ${
          isExpanded
            ? "w-[90vw] max-w-md rounded-3xl p-6"
            : "w-40 rounded-full px-6 py-3"
        }`}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">About Me</span>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">About Me</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hi! I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with
                expertise in building modern web applications. I specialize in creating seamless user experiences with cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "React Native", "JavaScript", "PHP", "Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DynamicIsland;
