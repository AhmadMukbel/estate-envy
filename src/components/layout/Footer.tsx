import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Prestige Estates
            </h3>
            <p className="text-white/80 mb-4">
              Your trusted partner in finding the perfect luxury property.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-gold transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-gold transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-gold transition-colors" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-gold transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-white/80 hover:text-gold transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-white/80 hover:text-gold transition-colors">
                  Our Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-white/80">Buy Property</li>
              <li className="text-white/80">Sell Property</li>
              <li className="text-white/80">Property Management</li>
              <li className="text-white/80">Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-white/80">+1 (555) 0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-white/80">info@prestigeestates.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-1" />
                <span className="text-white/80">
                  123 Luxury Lane<br />
                  Beverly Hills, CA 90210
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Prestige Estates. All rights reserved. | 
            <Link to="/privacy" className="ml-1 hover:text-gold transition-colors">Privacy Policy</Link> | 
            <Link to="/terms" className="ml-1 hover:text-gold transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;