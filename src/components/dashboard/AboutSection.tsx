import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="glass rounded-2xl p-6 md:p-8 h-full shadow-soft hover:shadow-lift transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary/10">
          <User className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
      </div>
      
      <div className="space-y-4 text-muted-foreground">
        <p className="text-base md:text-lg leading-relaxed">
          Hi! I'm a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> with
          expertise in building modern web applications.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          I specialize in creating seamless user experiences with cutting-edge technologies,
          focusing on performance, scalability, and beautiful design.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source, or sharing knowledge with the dev community.
      </p>              
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {["React", "JavaScript", "Node.js", "Tailwind"].map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutSection;
