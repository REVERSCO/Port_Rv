import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI SaaS Platform",
    description: "Full-stack AI platform with real-time collaboration and payment integration",
    tags: ["Next.js", "OpenAI", "Stripe"],
    color: "from-primary to-accent",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Analytics dashboard with real-time metrics and inventory management",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-secondary to-primary",
  },
  {
    title: "Social Media App",
    description: "Modern social platform with real-time messaging and media sharing",
    tags: ["React Native", "Firebase", "Redux"],
    color: "from-accent to-secondary",
  },
];

const ProjectsSection = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-6 md:p-8 shadow-glow-secondary"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-gradient-primary">
          <Folder className="w-6 h-6 text-primary-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass rounded-xl p-6 space-y-4 group cursor-pointer"
          >
            <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.color}`} />
            
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
