import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {FaCss3Alt, FaJs, FaReact , FaPhp} from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { SiReact} from "react-icons/si";

interface SkillCircleProps {
  name: string;
  level: number;
  icon: React.ElementType;
  delay?: number;
}

const SkillCircle = ({ name, level, icon: Icon, delay = 0 }: SkillCircleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay }}
      >
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="6"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDashoffset: strokeDashoffset }
                : { strokeDashoffset: circumference }
            }
            transition={{
              duration: 1.2,
              delay: delay + 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          />
        </svg>
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary"/>
        </div>
        {/* Percentage badge */}
        <motion.div
          className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full shadow-soft"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: delay + 1 }}
        >
          {level}%
        </motion.div>
      </motion.div>
      <span className="text-sm font-medium text-foreground text-center">
        {name}
      </span>
    </div>
  );
};

export default SkillCircle;
