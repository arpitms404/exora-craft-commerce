import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    "Shop": ["All Products", "New Arrivals", "Best Sellers", "Sale Items", "Gift Cards"],
    "Support": ["Contact Us", "FAQ", "Shipping Info", "Returns", "Size Guide"],
    "Company": ["About Us", "Careers", "Press", "Partnerships", "Sustainability"],
    "Account": ["Sign In", "Create Account", "Order Tracking", "Wishlist", "My Orders"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with
              <span className="bg-accent-gradient bg-clip-text text-transparent ml-2">
                EXORA CREATION
              </span>
            </h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Subscribe to our newsletter and be the first to know about new products, 
              exclusive offers, and style inspiration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-4">
              EXORA CREATION
            </h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Experience luxury shopping like never before. We curate premium products 
              that define elegance and sophistication for the modern lifestyle.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">hello@exoracreation.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">Premium Shopping District</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4 text-accent">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-primary-foreground/60 text-center md:text-left">
              © 2024 EXORA CREATION. All rights reserved. Crafted with excellence.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/60 hover:text-accent hover:bg-accent/10 transition-colors"
                  asChild
                >
                  <a href={href} aria-label={name}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;