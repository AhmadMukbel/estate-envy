import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { agents } from "@/data/agents";
import { Link } from "react-router-dom";

const FeaturedAgents = () => {
  // Show only the first 3 agents as featured
  const featuredAgents = agents.slice(0, 3);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Expert Agents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of professionals is ready to help you find your dream property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {featuredAgents.map((agent, index) => {
            const photo = agent.photos[agent.style].avatar;
            return (
              <Card key={agent.slug} className="p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={photo}
                  alt={`Headshot of ${agent.name}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-contain bg-muted"
                  loading={index === 0 ? "eager" : "lazy"}
                  width={800}
                  height={800}
                />
                <h3 className="font-serif text-xl font-bold text-primary mb-1">
                  {agent.name}
                </h3>
                <p className="text-gold font-medium mb-3">{agent.title}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {agent.bio}
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`tel:${agent.phone}`}
                    className="inline-block"
                  >
                    <Button variant="navy" size="sm">
                      Call Now
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/${agent.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="sm">
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/agents">
            <Button variant="gold" size="lg">
              View All Agents
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;