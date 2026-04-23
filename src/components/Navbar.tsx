import { Home, User, Code, Mail, Github } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navItems = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Top Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 glass border-b border-border shadow-soft px-6 py-4">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary font-semibold"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-border shadow-soft">
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center gap-1 text-muted-foreground"
              activeClassName="text-primary"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
