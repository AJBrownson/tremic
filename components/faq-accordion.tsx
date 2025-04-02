import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[650px] flex flex-col gap-y-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-kumbh font-medium lg:text-base text-blue-900 bg-[#F9F9F9] px-5 hover:no-underline cursor-pointer">
            What areas do you service?
          </AccordionTrigger>
          <AccordionContent className="font-kumbh text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10">
            We provide water systems installation and maintenance services
            throughout Lagos, with our primary service area covering the Lagos
            metropolitan area. For larger commercial and industrial projects, we
            serve clients nationwide.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-kumbh font-medium lg:text-base text-blue-900 bg-[#F9F9F9] px-5 hover:no-underline cursor-pointer">
            {" "}
            Do you offer free consultations?
          </AccordionTrigger>
          <AccordionContent className="font-kumbh text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10">
            Yes, we provide complimentary initial consultations for all
            residential and commercial projects. Our experts will assess your
            needs, discuss potential solutions, and provide a detailed quote
            before any work begins.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-kumbh font-medium lg:text-base text-blue-900 bg-[#F9F9F9] px-5 hover:no-underline cursor-pointer">
            What is your response time for emergencies?
          </AccordionTrigger>
          <AccordionContent className="font-kumbh text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10">
            Our emergency response team is available 24/7. For urgent issues, we
            typically dispatch technicians within 1-2 hours in our local service
            area. We understand that water system failures can cause significant
            disruption and damage, so we prioritize emergency calls.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
