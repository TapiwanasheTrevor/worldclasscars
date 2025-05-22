import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/service-card"
import PricingCard from "@/components/pricing-card"
import FaqAccordion from "@/components/faq-accordion"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1000&width=2000"
            alt="Luxury car fleet"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">OUR SERVICES</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Experience <span className="text-red-500">Worldclass</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">Our Premium Services</p>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
              At Worldclass Car Rental, we're proud to offer a range of premium services designed to meet your
              transportation needs
            </p>
            <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-red-700/20 flex items-center gap-2">
              Book Now <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Premium Services</h2>
            <p className="text-zinc-400">
              Discover our comprehensive range of premium transportation solutions, each designed to provide exceptional
              comfort, style, and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="🚗"
              title="Private Vehicle Hire"
              description="Explore Zimbabwe in style and comfort with our state-of-the-art vehicles, perfect for self-drive adventures."
              image="/services/private.jpeg"
            />

            <ServiceCard
              icon="👨‍✈️"
              title="Chauffeur Driven"
              description="Relax in luxury while our professional drivers navigate the roads, ensuring a safe and enjoyable journey."
              image="/services/chauffer.jpeg"
            />

            <ServiceCard
              icon="✈️"
              title="Airport Transfers"
              description="Enjoy seamless airport pickups and drop-offs, tailored to your schedule for a stress-free travel experience."
              image="/services/airport.jpeg"
            />

            <ServiceCard
              icon="👥"
              title="Group Tours & Employee Shuttles"
              description="Travel with ease and convenience with our reliable and safe group transportation services, perfect for tours, events, and employee commutes."
              image="/services/group.jpeg"
            />

            <ServiceCard
              icon="🚕"
              title="Quick Taxi"
              description="Get around Harare with our affordable and convenient taxi service, covering a 40km radius from the CBD."
              image="/services/taxi.jpeg"
            />

            <ServiceCard
              icon="👑"
              title="Executive & Luxury Services"
              description="Make a statement with our luxurious vehicle hires, perfect for special occasions like weddings, proms, and high-profile events. (Chauffeured service only)"
              image="/services/sedan.avif"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">WHY CHOOSE US</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Premium Experience Every Time</h2>
              <p className="text-zinc-400 mb-8">
                Our commitment to excellence ensures that every journey with Worldclass Car Rental exceeds your
                expectations. Here's what sets us apart:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Proactive Fleet Maintenance",
                    description:
                      "Our vehicles undergo rigorous servicing and maintenance, adhering to a strict schedule to guarantee safety and performance.",
                  },
                  {
                    title: "Daily Vehicle Inspections",
                    description:
                      "Experienced technicians conduct thorough checks before and after every rental, ensuring our vehicles meet the highest standards.",
                  },
                  {
                    title: "Comprehensive Insurance",
                    description:
                      "All our vehicles are fully insured with a reputable provider, minimizing liability for our drivers and clients.",
                  },
                  {
                    title: "Expert Drivers",
                    description:
                      "Our drivers are highly trained, qualified, and licensed, including defensive driving certifications for your peace of mind.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 via-red-600/5 to-transparent rounded-2xl blur-sm"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/others/WhatsApp Image 2025-05-06 at 06.27.55.jpeg"
                  alt="Premium car experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 backdrop-blur-sm bg-black/30 rounded-xl border border-white/10 max-w-md">
                    <h3 className="text-3xl font-bold text-white mb-4">Premium Car Experience</h3>
                    <p className="text-white/80">
                      Our commitment to excellence means you'll experience the very best in luxury transportation, from
                      the vehicles themselves to every aspect of our service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-black border border-white/10 rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <p className="text-white font-bold">Years of Excellence</p>
                    <p className="text-zinc-500 text-sm">Serving premium clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">PRICING PLANS</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Our Premium Packages</h2>
            <p className="text-zinc-400">
              Discover our premium rental packages designed to provide exceptional value and service. All packages
              include comprehensive insurance, unlimited mileage, and 24/7 roadside assistance. Contact us for custom pricing based on your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Standard"
              description="Perfect for short trips and business travel"
              features={[
                "Luxury sedan or equivalent",
                "Unlimited mileage",
                "Comprehensive insurance",
                "24/7 roadside assistance",
                "Free cancellation",
              ]}
              popular={false}
            />

            <PricingCard
              title="Premium"
              description="Ideal for special occasions and weekend getaways"
              features={[
                "Luxury SUV or sports car",
                "Unlimited mileage",
                "Comprehensive insurance",
                "24/7 roadside assistance",
                "Free cancellation",
                "Airport pickup & drop-off",
              ]}
              popular={true}
            />

            <PricingCard
              title="Executive"
              description="The ultimate luxury experience for discerning clients"
              features={[
                "Exotic or ultra-luxury vehicle",
                "Professional chauffeur",
                "Unlimited mileage",
                "Comprehensive insurance",
                "24/7 concierge service",
                "Priority booking",
                "Complimentary refreshments",
              ]}
              popular={false}
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-zinc-400 mb-6">Ready to get started with your premium rental experience?</p>
            <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-red-700/20">
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">FREQUENTLY ASKED QUESTIONS</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Your Questions, Our Answers</h2>
            <p className="text-zinc-400">
              Find answers to common questions about our services, policies, and rental process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FaqAccordion />

            <div className="mt-16 text-center p-8 bg-zinc-900/50 border border-white/5 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Have More Questions?</h3>
              <p className="text-zinc-400 mb-6">
                Our dedicated customer service team is ready to assist you with any inquiries you may have.
              </p>
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1000&width=2000"
            alt="Luxury car"
            fill
            className="object-cover brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">START YOUR JOURNEY</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Worldclass Difference?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Book your reliable vehicle today and discover why we're Zimbabwe's trusted car rental service.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-red-700/20">
                Book Now
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
