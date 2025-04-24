import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="bg-[#f7fee7] py-10">
    <section className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What do you feed your pigs?</AccordionTrigger>
          <AccordionContent>
            Our pigs are fed a balanced diet that includes grains, vegetables, and locally sourced feed to ensure optimal health and growth.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Are your pigs raised in humane conditions?</AccordionTrigger>
          <AccordionContent>
            Yes! Our pigs are raised in clean, spacious environments with proper veterinary care and ethical treatment throughout their life cycle.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Do you sell pork products directly to consumers?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer fresh pork cuts for sale directly to customers. You can order through our website or visit us on-site.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Can I visit the farm?</AccordionTrigger>
          <AccordionContent>
            Absolutely! We welcome scheduled visits so you can see how our pigs are raised. Please contact us to book a tour.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Do you offer bulk or wholesale sales?</AccordionTrigger>
          <AccordionContent>
            Yes, we provide wholesale options for restaurants, butcheries, and retailers. Reach out to us for pricing and delivery details.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
    </section>
  );
};
