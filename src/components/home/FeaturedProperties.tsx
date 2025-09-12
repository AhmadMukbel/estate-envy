import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Modern Luxury Apartment",
    location: "Manhattan, New York",
    price: "$2,450,000",
    beds: 3,
    baths: 2,
    sqft: 2200,
    featured: true,
  },
  {
    id: 2,
    image: property2,
    title: "Suburban Family Estate",
    location: "Westchester, NY",
    price: "$1,850,000",
    beds: 5,
    baths: 4,
    sqft: 4500,
  },
  {
    id: 3,
    image: property3,
    title: "Downtown Penthouse",
    location: "Chicago, IL",
    price: "$3,200,000",
    beds: 4,
    baths: 3,
    sqft: 3800,
    featured: true,
  },
];

const FeaturedProperties = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of exceptional properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden group cursor-pointer transition-all duration-base hover:shadow-xl"
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-110"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-md text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md">
                  <span className="font-bold text-primary">{property.price}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1 text-gold" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-b border-border mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1 text-gold" />
                    <span className="text-sm">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1 text-gold" />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1 text-gold" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <Button 
                  variant={hoveredCard === property.id ? "gold" : "outline"}
                  className="w-full transition-all duration-base"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/properties">
            <Button 
              variant="navy" 
              size="lg" 
              className="hover:scale-105 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;