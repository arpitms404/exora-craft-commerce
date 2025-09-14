import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      image: product1,
      rating: 4.8,
      reviews: 124,
      isNew: true,
      isOnSale: true,
    },
    {
      id: "2",
      name: "Luxury Smart Watch",
      price: 599,
      image: product2,
      rating: 4.9,
      reviews: 89,
      isNew: true,
    },
    {
      id: "3",
      name: "Premium Leather Laptop Bag",
      price: 199,
      originalPrice: 249,
      image: product3,
      rating: 4.7,
      reviews: 156,
      isOnSale: true,
    },
    {
      id: "4",
      name: "Wireless Charging Pad",
      price: 79,
      image: product1,
      rating: 4.6,
      reviews: 203,
    },
    {
      id: "5",
      name: "Premium Bluetooth Speaker",
      price: 149,
      originalPrice: 199,
      image: product2,
      rating: 4.8,
      reviews: 98,
      isOnSale: true,
    },
    {
      id: "6",
      name: "Luxury Phone Case",
      price: 49,
      image: product3,
      rating: 4.5,
      reviews: 267,
      isNew: true,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured
            <span className="bg-accent-gradient bg-clip-text text-transparent ml-3">
              Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that combine luxury, 
            functionality, and exceptional design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-xl font-semibold group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;