import React, { useEffect } from "react";
import { Collapse, initTE } from "tw-elements";

export const Faq = () => {
  useEffect(() => {
    initTE({ Collapse });
  });

  const faqData = [
    {
      question: "What equipment can I rent?",
      answer:
        "We offer a wide range of equipment for rent, including cameras, drones, lenses, tripods, and lighting equipment. You can explore our catalog to see the full list of available equipment.",
    },
    {
      question: "Do I need to pay a deposit when renting equipment?",
      answer:
        "Yes, we require a refundable deposit when renting equipment. The deposit amount may vary depending on the value of the rented items. The deposit will be fully refunded upon returning the equipment in its original condition.",
    },
    {
      question: "How do I return the rented equipment?",
      answer:
        "You can return the rented equipment by shipping it back to us using a reliable courier service. We provide detailed instructions and a prepaid shipping label for your convenience. Please make sure to pack the equipment securely to avoid any damage during transit.",
    },
    {
      question: "Can I extend the rental period?",
      answer:
        "Yes, you can extend the rental period if the equipment is available for the desired extension. Please contact our customer support team at least 24 hours before the original return date to inquire about the extension and arrange the necessary payment.",
    },
    {
      question: "What happens if I damage or lose the rented equipment?",
      answer:
        "If the rented equipment is damaged or lost during your rental period, you will be responsible for the repair or replacement costs. We recommend reviewing our rental agreement for more details on our terms and conditions regarding damages and losses.",
    },
  ];

  return (
    <div className="container my-24 mx-auto md:px-6 xl:px-24">
      <section className="mb-32">
        <h2 className="mb-6 pl-6 text-3xl font-bold text-center">
          Frequently asked questions
        </h2>
  
        <div id="accordionFlushExample">
          {faqData.map((faq, index) => (
            <div
              className={`rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200 ${
                index === faqData.length - 1 ? "rounded-b-lg" : ""
              }`}
              key={index}
            >
              <h2 className="mb-0" id={`flush-heading${index + 1}`}>
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-red-300"
                  type="button"
                  data-te-collapse-init
                  data-te-target={`#flush-collapse${index + 1}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index + 1}`}
                >
                  {faq.question}
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#ec4c33] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-red-500 motion-reduce:transition-none dark:fill-[#f47272] dark:group-[[data-te-collapse-collapsed]]:fill-[#959292]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path 
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id={`flush-collapse${index + 1}`}
                className={`!visible ${index === 0 ? "border-0" : "hidden"}`}
                data-te-collapse-item
                data-te-collapse-show={index === 0 ? "" : null}
                aria-labelledby={`flush-heading${index + 1}`}
                data-te-parent="#accordionFlushExample"
              >
                <div className="py-4 px-5 text-neutral-800 dark:text-neutral-500">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
            }  
