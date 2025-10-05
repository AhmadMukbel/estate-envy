import { Link, useLocation } from "react-router-dom";
import { Home, Building2, Users, Info, Mail, Calendar } from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/properties", label: "Properties", icon: Building2 },
    { path: "/agents", label: "Agents", icon: Users },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "#schedule", label: "Schedule", icon: Calendar },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 py-2">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Dock panelHeight={48} magnification={60} className="bg-background/80 backdrop-blur-md border border-border shadow-lg">
            {navLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                <DockItem
                  className={`aspect-square rounded-full transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <DockLabel>{item.label}</DockLabel>
                  <DockIcon>
                    <item.icon className="h-full w-full" />
                  </DockIcon>
                </DockItem>
              </Link>
            ))}
          </Dock>
        </div>
      </nav>
    </header>
  );
};

export default Header;