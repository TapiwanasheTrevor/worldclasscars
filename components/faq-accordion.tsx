"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqCategories = [
  {
    id: "rental",
    label: "Rental Info",
    questions: [
      {
        question: "What is the minimum rental period?",
        answer:
          "Our vehicles have a minimum rental period of 24 hours. However, some of our larger vehicle models may require a minimum rental period of 2-3 days, except for special cases like chauffeur-driven weddings and events. For specific requirements, please contact us directly so we can provide details for the vehicle you're interested in.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Reservations canceled more than 72 hours prior to the rental start time will receive a full refund. Cancellations between 24-72 hours will incur a one-day rental fee. Cancellations less than 24 hours before the rental start time or no-shows are subject to the full rental fee. Special events and holiday rentals may have different cancellation policies.",
      },
      {
        question: "Is insurance included in the rental price?",
        answer:
          "All our vehicles have comprehensive insurance. However, renters are responsible for insurance excess on any damage to the vehicle during the rental period and/or any damage due to negligence. We offer premium protection packages that provide additional coverage and peace of mind.",
      },
    ],
  },
  {
    id: "policies",
    label: "Policies",
    questions: [
      {
        question: "What documents do I need to rent a vehicle?",
        answer:
          "To rent a vehicle, you'll need a valid driver's license (held for at least 2 years), a second form of ID (passport or national ID), and proof of residency (water bills or supporting documents). Foreign clients will also require a valid credit card and proof of residency in Zimbabwe. Additionally, drivers must be at least 25 years old, and a refundable security deposit is required.",
      },
      {
        question: "What happens if the vehicle breaks down?",
        answer:
          "All our vehicles undergo rigorous maintenance, but in the rare event of a breakdown, our 24/7 roadside assistance will provide immediate support. We'll arrange for repairs or provide a replacement vehicle as quickly as possible.",
      },
      {
        question: "What is your fuel policy?",
        answer:
          "All vehicles are provided with a full tank of fuel and should be returned with a full tank. If the vehicle is not returned with a full tank, a refueling fee will be applied based on current fuel prices plus a service charge.",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    questions: [
      {
        question: "Do you offer delivery services?",
        answer:
          "Yes, we offer vehicle delivery to your home, office, hotel, or airport. Delivery is complimentary within a 5 Kilometer radius of our location for rentals of 3+ days. For shorter rentals or longer distances, delivery fees may apply. Please inquire for specific rates based on your location.",
      },
      {
        question: "Do you offer chauffeur services for all vehicles?",
        answer:
          "Yes, we offer professional chauffeur services for all vehicles in our fleet. Our chauffeurs are highly trained, experienced, and knowledgeable about local routes and attractions. Chauffeur services can be added to any rental package.",
      },
      {
        question: "Can you accommodate special requests?",
        answer:
          "We pride ourselves on personalized service. Whether you need child seats, specific vehicle features, or special arrangements for an event, our team will do everything possible to accommodate your requests.",
      },
    ],
  },
]

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState("rental")

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id ? "bg-red-600 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          {faqCategories
            .find((category) => category.id === activeCategory)
            ?.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/5 last:border-0">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-red-500 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-zinc-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  )
}
