import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-6 md:p-8 h-full shadow-soft flex flex-col justify-between"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Have a project in mind or want to collaborate?
          Let’s talk and build something great.
        </p>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to="/contact">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg shadow-soft hover:shadow-lift transition-all duration-300">
            <Send className="w-5 h-5 mr-2" />
            Start a Conversation
          </Button>
        </Link>
      </motion.div>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Response time:{" "}
          <span className="text-primary font-semibold">~24 hours</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSection;
