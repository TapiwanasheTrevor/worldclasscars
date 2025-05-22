import Image from "next/image"
import { ChevronRight, ArrowRight, Star, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import CarShowcase from "@/components/car-showcase"
import TestimonialSlider from "@/components/testimonial-slider"
import HeroSlider from "@/components/hero-slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroSlider />

        {/* Booking Form */}
        <div className="container relative z-10 -mt-8">
          <Card className="bg-black/90 border border-white/10 backdrop-blur-lg shadow-2xl shadow-red-900/10 rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <Tabs defaultValue="rent" className="w-full">
                <div className="px-6 pt-6">
                  <TabsList className="grid w-full grid-cols-2 bg-black/50 rounded-xl">
                    <TabsTrigger value="rent" className="data-[state=active]:bg-red-600 rounded-lg">
                      Rent a Car
                    </TabsTrigger>
                    <TabsTrigger value="chauffeur" className="data-[state=active]:bg-red-600 rounded-lg">
                      Chauffeur Service
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="rent" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Pick-up Location</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option>Harare Airport</option>
                        <option>City Center</option>
                        <option>Victoria Falls</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Pick-up Date</label>
                      <input
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Return Date</label>
                      <input
                        type="date"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                      Search Available Cars
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="chauffeur" className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Pickup Location</label>
                      <input
                        type="text"
                        placeholder="Enter address"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Date & Time</label>
                      <input
                        type="datetime-local"
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white">Service Type</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500">
                        <option>Airport Transfer</option>
                        <option>Hourly Hire</option>
                        <option>Special Event</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                      Book Chauffeur
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">PREMIUM SELECTION</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Experience Luxury <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
                  Without Compromise
                </span>
              </h2>
            </div>
            <div className="mt-6 md:mt-0">
              <Button
                variant="outline"
                className="border-red-500/50 text-red-500 hover:bg-red-500/10 rounded-full flex items-center gap-2"
              >
                View All Vehicles <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <CarShowcase />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">OUR SERVICES</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Exceptional Services for Discerning Clients</h2>
            <p className="text-zinc-400">
              We offer a comprehensive range of premium services designed to exceed the expectations of our most
              discerning clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚗",
                title: "Compact & Economy Cars",
                description:
                  "Reliable and fuel-efficient vehicles perfect for city driving and everyday transportation needs.",
                features: ["Toyota Vitz", "Honda Fit", "Mazda Demio", "Hyundai i10"],
              },
              {
                icon: "🚘",
                title: "Sedans & Family Cars",
                description:
                  "Comfortable and spacious sedans ideal for business trips, family outings, and longer journeys.",
                features: ["Toyota Corolla", "Honda Civic", "Mazda 6", "Hyundai Elantra"],
              },
              {
                icon: "👨‍✈️",
                title: "Chauffeur Services",
                description: "Sit back and relax with our professional chauffeur services, available for any occasion.",
                features: ["Airport Transfers", "Corporate Events", "Weddings", "City Tours"],
              },
              {
                icon: "🚙",
                title: "SUVs & Crossovers",
                description:
                  "Versatile SUVs and crossovers perfect for family trips, group travel, and navigating Zimbabwe's diverse terrain.",
                features: ["Toyota RAV4", "Honda CR-V", "Mazda CX-5", "Hyundai Tucson"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 border border-white/5 hover:border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 rounded-xl overflow-hidden group"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-red-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-red-500 hover:text-red-400 hover:bg-red-500/10 p-0"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">WHY CHOOSE US</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">The World Class Difference</h2>
              <p className="text-zinc-400 mb-8">
                At World Class Car Rental, we go beyond just providing vehicles. We deliver experiences that exceed
                expectations, with attention to every detail and a commitment to excellence that sets us apart.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Meticulously Maintained Fleet",
                    description:
                      "Every vehicle in our collection is maintained to the highest standards, ensuring performance, safety, and comfort.",
                  },
                  {
                    title: "Personalized Service",
                    description:
                      "Our dedicated team provides tailored solutions to meet your specific requirements and preferences.",
                  },
                  {
                    title: "Seamless Experience",
                    description:
                      "From booking to return, we ensure a smooth, hassle-free experience with 24/7 support.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                  Learn More About Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 via-red-600/5 to-transparent rounded-2xl blur-sm"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/hero-slider/img4.jpeg"
                  alt="Luxury car experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-white text-xl font-medium italic">
                    "The finest car rental experience I've ever had. Truly world class in every aspect."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500"></div>
                    <div>
                      <p className="text-white font-medium">James Wilson</p>
                      <p className="text-zinc-400 text-sm">CEO, Global Enterprises</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-black border border-white/10 rounded-xl p-6 shadow-xl w-64">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-white font-bold">Our Stats</div>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <Star className="h-4 w-4 text-red-500" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-zinc-500 text-sm">Luxury Vehicles</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">1000+</p>
                    <p className="text-zinc-500 text-sm">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">10+</p>
                    <p className="text-zinc-500 text-sm">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="text-zinc-500 text-sm">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">TESTIMONIALS</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-zinc-400">
              Don't just take our word for it. Hear from our satisfied clients who have experienced the World Class
              difference.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1000&width=2000"
            alt="Luxury car background"
            fill
            className="object-cover brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">READY TO EXPERIENCE</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Elevate Your Journey With World Class</h2>
              <p className="text-zinc-300 mb-8 text-lg">
                Whether it's a special occasion, business trip, or simply the desire to experience the extraordinary,
                we're here to make it unforgettable.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                  Book Your Experience
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏆", title: "Award-Winning Service" },
                { icon: "🔒", title: "Secure Booking Process" },
                { icon: "🌍", title: "Global Coverage" },
                { icon: "💯", title: "100% Satisfaction Guarantee" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe To Our Newsletter</h2>
                <p className="text-red-100">
                  Stay updated with our latest offers, new vehicles, and exclusive deals tailored for our premium
                  clients.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 flex-1 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <Button className="bg-white hover:bg-gray-100 text-red-600 font-medium rounded-full px-6 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-red-200/80 text-sm mt-3">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
