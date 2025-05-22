import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Users, Gauge, Fuel, Check, Calendar, Shield, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the vehicle data based on the ID
  // For this example, we'll use mock data
  const vehicle = {
    id: params.id,
    name: "Toyota Corolla",
    category: "Sedan",
    rating: 5,
    description:
      "Experience reliability and comfort with the Toyota Corolla, one of the world's most trusted sedans. Perfect for business trips, family outings, and everyday transportation around Zimbabwe. Known for its excellent fuel efficiency, spacious interior, and proven dependability.",
    features: {
      seats: "5",
      speed: "180 km/h",
      fuel: "Petrol",
      engine: "1.8L 4-Cylinder",
      transmission: "CVT Automatic",
      acceleration: "0-100 km/h in 9.2s",
    },
    amenities: [
      "Cloth Upholstery",
      "Audio System with Bluetooth",
      "Air Conditioning",
      "Electric Windows",
      "Central Locking",
      "Power Steering",
      "Toyota Safety Sense",
      "Backup Camera",
      "USB Charging Ports",
      "Cruise Control",
      "Anti-lock Braking System",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1000&width=2000"
              alt={vehicle.name}
              fill
              className="object-cover brightness-[0.2]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
          </div>

          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Link href="/fleet" className="text-zinc-400 hover:text-white transition-colors">
                    Our Fleet
                  </Link>
                  <ChevronRight className="h-4 w-4 text-zinc-600" />
                  <Link href="/fleet" className="text-zinc-400 hover:text-white transition-colors">
                    {vehicle.category}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-zinc-600" />
                  <span className="text-white">{vehicle.name}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{vehicle.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(vehicle.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-zinc-400">|</span>
                  <Badge className="bg-red-500 text-white border-0">{vehicle.category}</Badge>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-zinc-400 text-sm">Custom Pricing</div>
                <div className="text-3xl font-bold text-red-500">
                  Get Quote
                </div>
                <Button className="mt-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Gallery */}
        <section className="py-12 relative">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src={vehicle.images[0] || "/placeholder.svg"}
                  alt={`${vehicle.name} - Main View`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {vehicle.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative rounded-xl overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${vehicle.name} - View ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Details */}
        <section className="py-12 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-white mb-6">Vehicle Overview</h2>
                <p className="text-zinc-400 mb-8">{vehicle.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                  <div className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="text-lg font-bold text-white">{vehicle.features.seats}</div>
                    <div className="text-zinc-500">Seats</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                      <Gauge className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="text-lg font-bold text-white">{vehicle.features.speed}</div>
                    <div className="text-zinc-500">Top Speed</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                      <Fuel className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="text-lg font-bold text-white">{vehicle.features.fuel}</div>
                    <div className="text-zinc-500">Fuel Type</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                      <Car className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="text-lg font-bold text-white">{vehicle.features.engine}</div>
                    <div className="text-zinc-500">Engine</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-red-500"
                      >
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <path d="M12 12h.01" />
                        <path d="M17 12h.01" />
                        <path d="M7 12h.01" />
                      </svg>
                    </div>
                    <div className="text-lg font-bold text-white">{vehicle.features.transmission}</div>
                    <div className="text-zinc-500">Transmission</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-zinc-900/50 border border-white/5 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-red-500"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    </div>
                    <div className="text-lg font-bold text-white">{vehicle.features.acceleration}</div>
                    <div className="text-zinc-500">Acceleration</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Premium Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {vehicle.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-red-500" />
                      </div>
                      <span className="text-zinc-300">{amenity}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Additional Information</h3>
                <Tabs defaultValue="rental" className="w-full">
                  <TabsList className="bg-zinc-900 border border-white/10 rounded-xl p-1 mb-6">
                    <TabsTrigger value="rental" className="rounded-lg data-[state=active]:bg-red-600">
                      Rental Terms
                    </TabsTrigger>
                    <TabsTrigger value="insurance" className="rounded-lg data-[state=active]:bg-red-600">
                      Insurance
                    </TabsTrigger>
                    <TabsTrigger value="faq" className="rounded-lg data-[state=active]:bg-red-600">
                      FAQs
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="rental" className="mt-0">
                    <Card className="bg-zinc-900/50 border border-white/5 rounded-xl">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Calendar className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">Minimum Rental Period</h4>
                              <p className="text-zinc-400">24 hours. Additional hours charged at hourly rate.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Shield className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">Security Deposit</h4>
                              <p className="text-zinc-400">
                                $1,000 - $5,000 depending on vehicle value and rental duration.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Users className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">Driver Requirements</h4>
                              <p className="text-zinc-400">
                                Minimum 25 years of age, valid driver's license for at least 3 years.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 text-red-500"
                              >
                                <path d="M12 2v20" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">Payment Methods</h4>
                              <p className="text-zinc-400">
                                Major credit cards accepted. Full payment required at booking.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="insurance" className="mt-0">
                    <Card className="bg-zinc-900/50 border border-white/5 rounded-xl">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Shield className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">Basic Insurance</h4>
                              <p className="text-zinc-400">Included in rental price. Covers third-party liability.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Shield className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">Premium Coverage</h4>
                              <p className="text-zinc-400">
                                Optional upgrade for comprehensive coverage with reduced excess.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Shield className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">Full Protection</h4>
                              <p className="text-zinc-400">
                                Our highest level of coverage with zero excess and additional benefits.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="faq" className="mt-0">
                    <Card className="bg-zinc-900/50 border border-white/5 rounded-xl">
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-white font-medium mb-2">Can I extend my rental period?</h4>
                            <p className="text-zinc-400">
                              Yes, subject to availability. Please contact us at least 24 hours before your scheduled
                              return.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">Is there a mileage limit?</h4>
                            <p className="text-zinc-400">
                              Our standard rentals include 200 km per day. Additional kilometers are charged at $1 per
                              km.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">
                              Can I take this vehicle outside the country?
                            </h4>
                            <p className="text-zinc-400">
                              International travel requires prior approval and additional documentation. Please inquire
                              at least 7 days in advance.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Book This Vehicle</h3>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Pick-up Location</label>
                        <select className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500">
                          <option>Harare Airport</option>
                          <option>City Center</option>
                          <option>Victoria Falls</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Pick-up Date</label>
                        <input
                          type="date"
                          className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Return Date</label>
                        <input
                          type="date"
                          className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Additional Services</label>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="chauffeur"
                              className="w-4 h-4 rounded border-white/10 text-red-500 focus:ring-red-500"
                            />
                            <label htmlFor="chauffeur" className="ml-2 text-white">
                              Chauffeur Service (+$150/day)
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="insurance"
                              className="w-4 h-4 rounded border-white/10 text-red-500 focus:ring-red-500"
                            />
                            <label htmlFor="insurance" className="ml-2 text-white">
                              Premium Insurance (+$50/day)
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="delivery"
                              className="w-4 h-4 rounded border-white/10 text-red-500 focus:ring-red-500"
                            />
                            <label htmlFor="delivery" className="ml-2 text-white">
                              Vehicle Delivery (+$75)
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <div className="flex justify-between mb-2">
                          <span className="text-zinc-400">Base Rate (per day)</span>
                          <span className="text-white">${vehicle.price}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-zinc-400">Estimated Total</span>
                          <span className="text-white font-bold">${vehicle.price}</span>
                        </div>
                        <div className="text-xs text-zinc-500 mb-4">
                          Final price will be calculated based on rental duration and selected options
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-lg shadow-lg shadow-red-700/20 py-6">
                        Book Now
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Vehicles */}
        <section className="py-16 bg-gradient-to-b from-black to-zinc-900 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

          <div className="container relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8">Similar Vehicles You Might Like</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <Card
                  key={index}
                  className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden group hover:border-red-500/20 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Similar vehicle"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <h3 className="text-xl font-bold text-white">BMW 7 Series</h3>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white/70 text-sm">Per Day</p>
                        <p className="text-xl font-bold text-white">$320</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-lg">View Details</Button>
                      <Button
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/5 rounded-lg flex items-center gap-2"
                      >
                        Book <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
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
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Ultimate Luxury Drive?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Book your {vehicle.name} today and discover why our clients keep coming back for the World Class
                experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                  Book Now
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
