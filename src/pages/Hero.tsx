import { ThreeScene } from '../components/ThreeScene';
import { Button } from '../components/ui/button';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <section className="min-h-screen md:w-full overflow-hidden bg-background">
      {/* Three.js Background */}
      <ThreeScene />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in">
            <span className="text-primary font-mono text-sm tracking-wider">
              &lt;Hello World /&gt;
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            <span className="block text-foreground">
              Creative Developer
            </span>
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
              Building Digital Experiences
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Crafting innovative web solutions with modern technologies. <br />Creating immersive digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300"
                onClick={() => {
                    const el = document.getElementById("projects");
                    if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    }}}>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </section>
  );
};
