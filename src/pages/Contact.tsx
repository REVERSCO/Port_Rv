import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (shapeRef.current) {
      gsap.to(shapeRef.current, {
        y: -50,
        rotation: 180,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

const contactInfo = [
  {
    icon: Mail,
    href: "mailto:reversco5@gmail.com",
    label: "Email",
    value: "reversco5@gmail.com",
  },
  {
    icon: Phone,
    href: "tel:+2349074551630",
    label: "Phone",
    value: "+234 907 455 1630",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2349074551630",
    label: "WhatsApp",
    value: "Chat on WhatsApp",
  },
];


  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-8 px-4 md:px-8">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground">
          Have a project in mind? Let's create something amazing together
        </p>

        {/* Subtle Animated Background Shape */}
        <motion.div
          ref={shapeRef}
          className="absolute -top-20 right-10 w-60 h-60 opacity-5 pointer-events-none"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <polygon
              points="100,10 40,198 190,78 10,78 160,198"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 shadow-soft hover:shadow-lift transition-shadow duration-300"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-muted/50 border-border"
                aria-label="Your name"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-muted/50 border-border"
                aria-label="Your email"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="bg-muted/50 border-border resize-none"
                aria-label="Your message"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 shadow-soft hover:shadow-lift transition-all duration-300"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-primary transition-colors"
              >
              {item.value}
        </a>

                          </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass rounded-2xl p-6 text-center shadow-soft"
          >
            <p className="text-muted-foreground mb-2">Typical response time</p>
            <p className="text-2xl font-bold text-primary">~24 hours</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
