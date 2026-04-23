import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com", color: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "hover:text-primary" },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com", color: "hover:text-secondary" },
  { icon: Mail, label: "Email", url: "mailto:your@email.com", color: "hover:text-accent" },
];

const SocialLinks = () => {
  return (
    <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
        Connect With Me
      </h2>
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-xl bg-muted/30 text-muted-foreground transition-all duration-300 shadow-soft hover:shadow-lift ${social.color}`}
            aria-label={social.label}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
