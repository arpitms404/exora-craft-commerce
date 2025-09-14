import { Smartphone, Headphones, Watch, Gamepad2, Home, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      count: "2.5k+ Products",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Audio & Video",
      icon: Headphones,
      count: "1.2k+ Products",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Wearables",
      icon: Watch,
      count: "800+ Products",
      gradient: "from-green-500 to-green-600",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      count: "950+ Products",
      gradient: "from-red-500 to-red-600",
    },
    {
      name: "Home & Garden",
      icon: Home,
      count: "1.8k+ Products",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      name: "Automotive",
      icon: Car,
      count: "600+ Products",
      gradient: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Shop by
            <span className="bg-accent-gradient bg-clip-text text-transparent ml-3">
              Category
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of categories and find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="outline"
                className={`group relative h-40 p-6 border-2 border-border hover:border-accent rounded-2xl bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-hover animate-fade-in flex flex-col items-center justify-center text-center hover:-translate-y-1`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Background */}
                <div className={`relative mb-4 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Category Info */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;