import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew,
  isOnSale,
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              New
            </Badge>
          )}
          {isOnSale && (
            <Badge variant="destructive" className="font-semibold">
              Sale
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-foreground shadow-md"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-accent fill-accent"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;