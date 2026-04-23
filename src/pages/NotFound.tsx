import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center glass rounded-2xl p-8 md:p-12 shadow-soft max-w-lg"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-4 text-8xl font-bold text-primary"
        >
          404
        </motion.h1>
        <h2 className="mb-2 text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="shadow-soft hover:shadow-lift transition-all duration-300">
            <HomeIcon className="w-4 h-4 mr-2" />
            Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
