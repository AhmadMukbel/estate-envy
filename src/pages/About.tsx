import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Home, TrendingUp, Award, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: Home, value: 1500, label: "Properties Sold", suffix: "+" },
  { icon: Users, value: 5000, label: "Happy Clients", suffix: "+" },
  { icon: Trophy, value: 25, label: "Years Experience", suffix: "" },
  { icon: TrendingUp, value: 98, label: "Client Satisfaction", suffix: "%" },
];

const milestones = [
  { year: "1999", title: "Company Founded", description: "Started with a vision to revolutionize luxury real estate" },
  { year: "2005", title: "Regional Expansion", description: "Expanded operations to cover the entire East Coast" },
  { year: "2010", title: "Industry Recognition", description: "Awarded 'Best Luxury Real Estate Agency' by Forbes" },
  { year: "2015", title: "Digital Innovation", description: "Launched cutting-edge virtual property viewing platform" },
  { year: "2020", title: "International Reach", description: "Established partnerships with global real estate networks" },
  { year: "2024", title: "Market Leader", description: "Recognized as the #1 luxury real estate agency in the US" },
];

const About = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 50;
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
          }
          return newCounters;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              About Prestige Estates
            </h1>
            <p className="text-xl text-white/90 animate-fade-up animation-delay-200">
              Setting the standard in luxury real estate for over two decades
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Founded in 1999, Prestige Estates began with a simple yet powerful vision: to redefine the luxury 
                real estate experience. What started as a small boutique agency has grown into one of the most 
                respected names in high-end property sales and management.
              </p>
              <p className="mb-6">
                Our journey has been marked by unwavering commitment to excellence, innovation, and most importantly, 
                our clients. We've built our reputation on trust, integrity, and an unparalleled understanding of the 
                luxury real estate market.
              </p>
              <p>
                Today, Prestige Estates represents more than just properties; we represent dreams, investments, and 
                lifestyles. Our team of expert agents, backed by cutting-edge technology and deep market insights, 
                continues to set new standards in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-8 text-center animate-scale-in">
                  <Icon className="h-12 w-12 text-gold mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">
                    {Math.floor(counters[index])}{stat.suffix}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-12 animate-fade-in">
                  {/* Circle */}
                  <div className="absolute left-8 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2 mt-1.5"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <div className="flex items-center mb-2">
                      <span className="text-gold font-bold text-lg mr-4">{milestone.year}</span>
                      <h3 className="font-serif text-xl font-semibold text-primary">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with complete transparency and honesty in every transaction
              </p>
            </Card>
            <Card className="p-8 text-center">
              <Award className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for perfection in every aspect of our service
              </p>
            </Card>
            <Card className="p-8 text-center">
              <Users className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">Client-First</h3>
              <p className="text-muted-foreground">
                Your dreams and goals are at the heart of everything we do
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Let us help you find your dream property or maximize your real estate investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="navy" size="lg">
              Browse Properties
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;