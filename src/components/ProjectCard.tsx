import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
}
const images = ["./Form.png", "Management.png"]

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  demoUrl,
  codeUrl,
}: ProjectCardProps) => {
  return (
    <motion.div id="projects"
      whileHover={{ y: -6 }}
      className="group glass rounded-xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300"
    >
      {/* Project image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-subtle flex items-center justify-center">
            <span className="text-6xl font-bold text-muted-foreground opacity-20">
              {title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Hover overlay with action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-3"
        >
          {demoUrl && (
            <Button
              size="sm"
              className="shadow-soft"
              onClick={() => window.open(demoUrl, "_blank")}
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live
            </Button>
          )}
          {codeUrl && (
            <Button
              size="sm"
              variant="outline"
              className="shadow-soft"
              onClick={() => window.open(codeUrl, "_blank")}
              aria-label="View source code"
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          )}
        </motion.div>
      </div>

      {/* Project details */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
