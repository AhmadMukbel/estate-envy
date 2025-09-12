import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bed, Bath, Square, MapPin, Search, Filter } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const allProperties = [
  {
    id: 1,
    image: property1,
    title: "Modern Luxury Apartment",
    location: "Manhattan, New York",
    price: 2450000,
    beds: 3,
    baths: 2,
    sqft: 2200,
    type: "Apartment",
    description: "Stunning modern apartment with panoramic city views, featuring high-end finishes and smart home technology.",
  },
  {
    id: 2,
    image: property2,
    title: "Suburban Family Estate",
    location: "Westchester, NY",
    price: 1850000,
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "House",
    description: "Spacious family home in prime location with beautifully landscaped gardens and top-rated school district.",
  },
  {
    id: 3,
    image: property3,
    title: "Downtown Penthouse",
    location: "Chicago, IL",
    price: 3200000,
    beds: 4,
    baths: 3,
    sqft: 3800,
    type: "Penthouse",
    description: "Exclusive penthouse with private terrace, offering breathtaking skyline views and luxury amenities.",
  },
  {
    id: 4,
    image: property1,
    title: "Waterfront Condo",
    location: "Miami, FL",
    price: 1650000,
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "Condo",
    description: "Beautiful waterfront condo with resort-style amenities and direct beach access.",
  },
  {
    id: 5,
    image: property2,
    title: "Mountain View Villa",
    location: "Aspen, CO",
    price: 4500000,
    beds: 6,
    baths: 5,
    sqft: 5500,
    type: "House",
    description: "Luxurious mountain villa with ski-in/ski-out access and stunning alpine views.",
  },
  {
    id: 6,
    image: property3,
    title: "Urban Loft",
    location: "Seattle, WA",
    price: 950000,
    beds: 2,
    baths: 1,
    sqft: 1200,
    type: "Apartment",
    description: "Trendy urban loft in the heart of downtown with exposed brick and industrial charm.",
  },
];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("all");

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceRange === "all" || 
                        (priceRange === "under-1m" && property.price < 1000000) ||
                        (priceRange === "1m-2m" && property.price >= 1000000 && property.price < 2000000) ||
                        (priceRange === "2m-3m" && property.price >= 2000000 && property.price < 3000000) ||
                        (priceRange === "over-3m" && property.price >= 3000000);
    
    const matchesType = propertyType === "all" || property.type === propertyType;
    
    const matchesLocation = location === "all" || property.location.includes(location);

    return matchesSearch && matchesPrice && matchesType && matchesLocation;
  });

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Explore Our Properties
          </h1>
          <p className="text-lg text-white/90 text-center max-w-2xl mx-auto">
            Discover a curated selection of luxury homes and investment opportunities
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-1m">Under $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m-3m">$2M - $3M</SelectItem>
                  <SelectItem value="over-3m">Over $3M</SelectItem>
                </SelectContent>
              </Select>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Condo">Condo</SelectItem>
                  <SelectItem value="Penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>

              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="NY">New York</SelectItem>
                  <SelectItem value="FL">Florida</SelectItem>
                  <SelectItem value="IL">Illinois</SelectItem>
                  <SelectItem value="CO">Colorado</SelectItem>
                  <SelectItem value="WA">Washington</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProperties.length} of {allProperties.length} properties
            </p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden group cursor-pointer transition-all duration-base hover:shadow-xl animate-fade-in"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md">
                    <span className="font-bold text-primary">
                      ${property.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1 text-gold" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {property.description}
                  </p>

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

                  <div className="flex gap-2">
                    <Button variant="navy" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Schedule Tour
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Properties;