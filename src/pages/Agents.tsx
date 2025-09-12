import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Award, Star } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";

const agents = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Real Estate Advisor",
    image: agent1,
    email: "sarah.mitchell@prestigeestates.com",
    phone: "+1 (555) 0124",
    experience: "15+ years",
    specialization: "Luxury Homes & Estates",
    bio: "Sarah brings over 15 years of experience in luxury real estate, specializing in high-end residential properties. Her deep market knowledge and negotiation skills have helped countless clients find their dream homes.",
    sales: 250,
    rating: 4.9,
  },
  {
    id: 2,
    name: "David Thompson",
    title: "Investment Property Specialist",
    image: agent2,
    email: "david.thompson@prestigeestates.com",
    phone: "+1 (555) 0125",
    experience: "12+ years",
    specialization: "Investment Properties",
    bio: "David is an expert in investment properties and commercial real estate. He provides strategic insights to help investors maximize their returns and build successful property portfolios.",
    sales: 180,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Jennifer Park",
    title: "Relocation Specialist",
    image: agent3,
    email: "jennifer.park@prestigeestates.com",
    phone: "+1 (555) 0126",
    experience: "10+ years",
    specialization: "Corporate Relocation",
    bio: "Jennifer specializes in helping families and executives relocate smoothly. Her attention to detail and personalized approach ensures a stress-free transition to your new home.",
    sales: 150,
    rating: 5.0,
  },
];

const Agents = () => {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Meet Our Expert Agents
          </h1>
          <p className="text-lg text-white/90 text-center max-w-2xl mx-auto">
            Our team of dedicated professionals is here to guide you through every step of your real estate journey
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className="overflow-hidden transition-all duration-base hover:shadow-xl animate-fade-up"
              >
                <div className="relative">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-md flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">Top Agent</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-gold font-medium mb-4">{agent.title}</p>

                  <p className="text-muted-foreground mb-6">{agent.bio}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Experience</span>
                      <span className="font-medium">{agent.experience}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Specialization</span>
                      <span className="font-medium">{agent.specialization}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Properties Sold</span>
                      <span className="font-medium">{agent.sales}+</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Client Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-gold text-gold mr-1" />
                        <span className="font-medium">{agent.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">{agent.email}</span>
                    </a>
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">{agent.phone}</span>
                    </a>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="navy" className="flex-1">
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Listings
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Are you a passionate real estate professional looking to take your career to the next level? 
            We're always looking for talented agents to join our growing team.
          </p>
          <Button variant="gold" size="lg">
            View Career Opportunities
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Agents;