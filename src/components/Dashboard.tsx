import { motion, Variants } from "framer-motion";
import AboutSection from "./dashboard/AboutSection";
import SkillsSection from "./dashboard/SkillsSection";
import ProjectsSection from "./dashboard/ProjectsSection";
import SocialLinks from "./dashboard/SocialLinks";
import ContactSection from "./dashboard/ContactSection";

const Dashboard = () => {
  // Container variants for staggered animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants for fade + up animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-hidden relative">
      {/* Dashboard Content Below Hero */}
      <div className="relative z-10 min-h-screen p-4 md:p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto space-y-6"
        >
          {/* Dashboard Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
              Portfolio Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Welcome to my digital space
            </p>
          </motion.div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* About Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <AboutSection />
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <SkillsSection />
            </motion.div>

            {/* Projects Section */}
            <motion.div variants={itemVariants} className="lg:col-span-12">
              <ProjectsSection />
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <SocialLinks />
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <ContactSection />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
