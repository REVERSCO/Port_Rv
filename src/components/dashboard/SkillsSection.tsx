import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: 95, color: "bg-primary" },
  { name: "TypeScript", level: 90, color: "bg-accent" },
  { name: "Node.js", level: 85, color: "bg-secondary" },
  { name: "Tailwind CSS", level: 92, color: "bg-primary" },
  { name: "Python", level: 80, color: "bg-accent" },
  { name: "UI/UX Design", level: 88, color: "bg-secondary" },
];

const SkillsSection = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass rounded-2xl p-6 md:p-8 h-full shadow-glow-accent hover:shadow-glow-primary transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-secondary">
          <Code2 className="w-6 h-6 text-accent-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills</h2>
      </div>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-base font-medium text-foreground">
                {skill.name}
              </span>
              <span className="text-sm text-primary font-semibold">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className={`h-full ${skill.color} rounded-full relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glow" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsSection;
