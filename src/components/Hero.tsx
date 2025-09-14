import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury shopping background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Premium Quality Products
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover
            <span className="block bg-accent-gradient bg-clip-text text-transparent">
              EXORA CREATION
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            Experience luxury shopping like never before. Curated collections of premium products 
            that define elegance and sophistication.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-hover group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur px-8 py-4 rounded-xl transition-all duration-300">
              View Collections
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/60 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-white/60 text-sm">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-white/60 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;