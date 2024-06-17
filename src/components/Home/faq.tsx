import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  const faqQuestions = [
    {
      id: "q1",
      question: "Do offer free services?",
      answer:
        "Yes, we offer free service applications. To support our services, we design, create, and maintain websites and mobile applications tailored to your needs. Contact us for a free consultation!",
    },
    {
      id: "q2",
      question: "What is the average cost for the web design and development?",
      answer:
        "the average cost for a website design and development is $2000 while a mobile application is $5,000",
    },

    {
      id: "q3",
      question: "Are we non-profit organization?",
      answer:
        "No, we are for profit organization that is registered in Michigan as Sangwas LLC",
    },
    {
      id: "q4",
      question: "Do we have plan to create non profit organization?",
      answer:
        "Yes, we are very passionate of giving back to the community. We are in the process of creating a non-profit organization",
    },
  ];
  return (
    <>
      <div className="py-32 flex flex-col z-[9] bg-background" id="faq">
        <h2 className="my-2 text-2xl  md:my-4 md:text-6xl font-bold text-primary text-center ">
          Frequently asked questions(FAQ)
        </h2>
        <Accordion type="single" collapsible>
          {faqQuestions.map((question) => (
            <AccordionItem value={question.id} key={question.id}>
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default FAQ;
