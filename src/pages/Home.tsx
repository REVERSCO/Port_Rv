import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Folder, Users } from "lucide-react";
import SkillCircle from "@/components/SkillCircle";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/dashboard/SocialLinks";
import { FaJs, FaPhp, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { HeroSection } from "./Hero";
import management from "../../public/Management.png"
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React/React Native", level: 95, icon: FaReact },
  { name: "JavaScript", level: 90, icon: FaJs },
  { name: "Tailwind", level: 92, icon: SiTailwindcss },
  { name: "PHP", level: 80, icon: FaPhp },
  { name: "UI/UX", level: 88, icon: Users },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A Sign up from",
    tags: ["React", "tailwind", "Supabase", "Gsap"],
    image: "/Form.png",
    demoUrl: "https://example.com",
  },
  {
    title: "Management App",
    description:
      "Management services",
    tags: ["TypeScript", "React", "Supabase"],
    image: "./Management.png",
    demoUrl: "https://celebrity-management-sigma.vercel.app",
  },
  {
    title: "Broker website",
    description:
      "Broker website",
    tags: ["React.js", "TailwindCSS", "Supabase"],
    image: "./Broker.png",
    demoUrl: "https://https://nexbroker-ashy.vercel.app/",
  },
];
const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen p-4 md:px-8 pb-20 md:pb-auto">
      {/* Hero Section - subtle */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative"
      >
        {/* <div ref={parallaxRef}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Welcome to my workspace
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Building digital experiences with care
          </h2>
        </div> */}
      </motion.div>

      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-12"
      >
        {/* Hero section */}
        <HeroSection />

        {/* Skills Section */}
        <motion.section variants={itemVariants}>
          <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Skills & Technologies
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <SkillCircle
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section variants={itemVariants}>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Folder className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Featured Projects
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.section variants={itemVariants}>
          <SocialLinks />
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Home;
