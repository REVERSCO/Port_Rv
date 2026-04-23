import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import gsap from "gsap";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current && iconRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        iconRef.current,
        { rotation: -20, opacity: 0 },
        { rotation: 0, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [theme]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="glass p-3 rounded-full shadow-soft hover:shadow-lift transition-shadow duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div ref={iconRef}>
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-primary" />
        ) : (
          <Moon className="w-5 h-5 text-primary" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
