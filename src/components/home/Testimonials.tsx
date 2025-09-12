import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Prestige Estates made our dream of owning a luxury home a reality. Their expertise and dedication throughout the process was exceptional.",
    rating: 5,
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    content: "Working with Prestige Estates has been a game-changer for my investment portfolio. Their market insights are invaluable.",
    rating: 5,
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Buyer",
    content: "The team at Prestige Estates guided us through every step with patience and professionalism. Couldn't be happier with our new home!",
    rating: 5,
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Robert Thompson",
    role: "Luxury Home Seller",
    content: "Their marketing strategy and network helped us sell our property 20% above asking price. Truly exceptional service!",
    rating: 5,
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Maria Santos",
    role: "International Buyer",
    content: "As an overseas buyer, I needed extra guidance. Prestige Estates made the entire process smooth and stress-free.",
    rating: 5,
    avatar: avatar5,
  },
  {
    id: 6,
    name: "David Kim",
    role: "Real Estate Developer",
    content: "Their deep market knowledge and professional approach make them our go-to partner for all our luxury developments.",
    rating: 5,
    avatar: avatar6,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 relative transition-all duration-base hover:shadow-lg hover:-translate-y-1"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/30" />
              
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage 
                    src={testimonial.avatar} 
                    alt="AI-generated person"
                    width={48}
                    height={48}
                  />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
              </div>

              <p className="text-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;