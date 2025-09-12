import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of properties does Prestige Estates specialize in?",
    answer: "We specialize in luxury residential properties including single-family homes, condominiums, penthouses, and estates. Our portfolio ranges from modern urban apartments to sprawling suburban estates."
  },
  {
    question: "How do I schedule a property viewing?",
    answer: "You can schedule a viewing by clicking the 'Schedule Viewing' button on any property listing, calling us directly at +1 (555) 0123, or filling out the contact form on our website. Our agents will arrange a convenient time for you."
  },
  {
    question: "What are the costs involved in buying a property?",
    answer: "Beyond the purchase price, buyers typically need to budget for closing costs (2-5% of purchase price), inspection fees, attorney fees, title insurance, and potential property taxes. Our agents provide detailed cost breakdowns for each transaction."
  },
  {
    question: "Can you help with property financing?",
    answer: "Yes, we work with trusted mortgage brokers and financial institutions to help our clients secure competitive financing options. We can connect you with lenders who specialize in luxury property financing."
  },
  {
    question: "Do you offer property management services?",
    answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting for investment properties."
  },
  {
    question: "What makes Prestige Estates different from other real estate agencies?",
    answer: "Our commitment to excellence, deep market knowledge, personalized service, and exclusive access to off-market properties sets us apart. We have over 20 years of experience in luxury real estate and maintain the highest standards of professionalism."
  },
  {
    question: "How long does the typical home buying process take?",
    answer: "The timeline varies, but typically ranges from 30-60 days from offer acceptance to closing. Cash purchases can close faster, while financed purchases may take longer depending on lender requirements."
  },
  {
    question: "Do you assist with international buyers?",
    answer: "Absolutely! We have extensive experience working with international clients and can guide you through the entire process, including legal requirements, tax implications, and financing options for foreign buyers."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-gold/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 hover:bg-muted/50 text-left">
                <span className="font-semibold text-primary">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;