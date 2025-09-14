import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const categories = ["Electronics", "Fashion", "Home & Garden", "Sports", "Beauty", "Books"];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-accent-gradient bg-clip-text text-transparent">
              EXORA CREATION
            </h1>
            
            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center space-x-6">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-secondary/50 border-0 focus-visible:ring-accent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background border shadow-hover">
                {categories.map((category) => (
                  <DropdownMenuItem key={category} className="hover:bg-secondary">
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-accent text-accent-foreground">
                3
              </Badge>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-secondary">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-accent text-accent-foreground">
                2
              </Badge>
            </Button>

            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-secondary">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background border shadow-hover">
                <DropdownMenuItem className="hover:bg-secondary">Sign In</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary">Create Account</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary">My Orders</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-secondary">Wishlist</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-secondary/50 border-0 focus-visible:ring-accent"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;