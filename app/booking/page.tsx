import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1000&width=2000"
              alt="Booking"
              fill
              className="object-cover brightness-[0.2]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">BOOKING</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Book Your <span className="text-red-500">Dream Car</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Complete your booking in a few simple steps and get ready to experience luxury on wheels.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-16 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl"></div>

          <div className="container relative z-10">
            <Tabs defaultValue="vehicle" className="w-full">
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -translate-y-1/2"></div>
                  <TabsList className="relative z-10 bg-transparent space-x-8 md:space-x-16">
                    <TabsTrigger
                      value="vehicle"
                      className="rounded-full w-12 h-12 p-0 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                    >
                      1
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="rounded-full w-12 h-12 p-0 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                    >
                      2
                    </TabsTrigger>
                    <TabsTrigger
                      value="payment"
                      className="rounded-full w-12 h-12 p-0 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                    >
                      3
                    </TabsTrigger>
                    <TabsTrigger
                      value="confirmation"
                      className="rounded-full w-12 h-12 p-0 data-[state=active]:bg-red-600 data-[state=active]:text-white"
                    >
                      4
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <div className="flex justify-center mb-12">
                <div className="grid grid-cols-4 gap-4 md:gap-8 text-center max-w-3xl w-full">
                  <div className="text-sm md:text-base font-medium text-red-500">Select Vehicle</div>
                  <div className="text-sm md:text-base font-medium text-zinc-500">Rental Details</div>
                  <div className="text-sm md:text-base font-medium text-zinc-500">Payment</div>
                  <div className="text-sm md:text-base font-medium text-zinc-500">Confirmation</div>
                </div>
              </div>

              <TabsContent value="vehicle" className="mt-0">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Vehicle</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Mercedes-Benz S-Class",
                        category: "Luxury Sedan",
                        price: 350,
                        image: "/placeholder.svg?height=400&width=600",
                      },
                      {
                        name: "BMW 7 Series",
                        category: "Luxury Sedan",
                        price: 320,
                        image: "/placeholder.svg?height=400&width=600",
                      },
                      {
                        name: "Range Rover Autobiography",
                        category: "Luxury SUV",
                        price: 450,
                        image: "/placeholder.svg?height=400&width=600",
                      },
                      {
                        name: "Ferrari 488 GTB",
                        category: "Sports Car",
                        price: 1200,
                        image: "/placeholder.svg?height=400&width=600",
                      },
                      {
                        name: "Porsche 911 Turbo S",
                        category: "Sports Car",
                        price: 950,
                        image: "/placeholder.svg?height=400&width=600",
                      },
                      {
                        name: "Rolls-Royce Ghost",
                        category: "Luxury Sedan",
                        price: 1800,
                        image: "/placeholder.svg?height=400&width=600",
                      },
                    ].map((vehicle, index) => (
                      <Card
                        key={index}
                        className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden group hover:border-red-500/20 transition-all duration-300"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-600 text-white border-0">{vehicle.category}</Badge>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-lg font-bold text-white">
                                ${vehicle.price}
                                <span className="text-sm">/day</span>
                              </div>
                              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
                                Select
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-12 flex justify-center">
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-red-700/20 flex items-center gap-2">
                      Continue to Details <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-0">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Rental Details</h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-white mb-6">Your Information</h3>
                          <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">First Name</label>
                                <input
                                  type="text"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="John"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Last Name</label>
                                <input
                                  type="text"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="Doe"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Email Address</label>
                                <input
                                  type="email"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="john@example.com"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                                <input
                                  type="tel"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="+1234567890"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-zinc-400">Address</label>
                              <input
                                type="text"
                                className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                placeholder="123 Main St"
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">City</label>
                                <input
                                  type="text"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="New York"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">State/Province</label>
                                <input
                                  type="text"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="NY"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Zip/Postal Code</label>
                                <input
                                  type="text"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="10001"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-zinc-400">Driver's License Number</label>
                              <input
                                type="text"
                                className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                placeholder="DL12345678"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-zinc-400">Special Requests</label>
                              <textarea
                                className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[100px]"
                                placeholder="Any special requests or requirements..."
                              ></textarea>
                            </div>
                          </form>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden sticky top-24">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
                          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/placeholder.svg?height=400&width=600"
                              alt="Mercedes-Benz S-Class"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-1">Toyota Corolla</h4>
                          <p className="text-zinc-400 text-sm mb-4">Sedan</p>

                          <div className="space-y-2 mb-6">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Pick-up Date:</span>
                              <span className="text-white">Jun 15, 2025</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Return Date:</span>
                              <span className="text-white">Jun 18, 2025</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Duration:</span>
                              <span className="text-white">3 Days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Location:</span>
                              <span className="text-white">Harare Airport</span>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10">
                            <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                              <p className="text-red-500 font-medium mb-2">Custom Pricing</p>
                              <p className="text-zinc-400 text-sm">
                                Pricing will be provided based on your specific requirements and rental duration.
                              </p>
                              <p className="text-white font-bold mt-2">Contact us for quote</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-center gap-4">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                    >
                      Back
                    </Button>
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20 flex items-center gap-2">
                      Continue to Payment <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="payment" className="mt-0">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Payment Information</h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-white mb-6">Payment Method</h3>
                          <div className="space-y-6">
                            <div className="flex gap-4 mb-6">
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id="credit-card"
                                  name="payment-method"
                                  className="w-4 h-4 text-red-500 focus:ring-red-500"
                                  defaultChecked
                                />
                                <label htmlFor="credit-card" className="ml-2 text-white">
                                  Credit Card
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id="paypal"
                                  name="payment-method"
                                  className="w-4 h-4 text-red-500 focus:ring-red-500"
                                />
                                <label htmlFor="paypal" className="ml-2 text-white">
                                  PayPal
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id="bank-transfer"
                                  name="payment-method"
                                  className="w-4 h-4 text-red-500 focus:ring-red-500"
                                />
                                <label htmlFor="bank-transfer" className="ml-2 text-white">
                                  Bank Transfer
                                </label>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Cardholder Name</label>
                                <input
                                  type="text"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="John Doe"
                                />
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400">Card Number</label>
                                <input
                                  type="text"
                                  className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                  placeholder="1234 5678 9012 3456"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium text-zinc-400">Expiration Date</label>
                                  <input
                                    type="text"
                                    className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    placeholder="MM/YY"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium text-zinc-400">CVV</label>
                                  <input
                                    type="text"
                                    className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                    placeholder="123"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                              <h4 className="text-lg font-bold text-white mb-4">Billing Address</h4>
                              <div className="flex items-center mb-4">
                                <input
                                  type="checkbox"
                                  id="same-address"
                                  className="w-4 h-4 rounded border-white/10 text-red-500 focus:ring-red-500"
                                  defaultChecked
                                />
                                <label htmlFor="same-address" className="ml-2 text-white">
                                  Same as rental information
                                </label>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden sticky top-24">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
                          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/placeholder.svg?height=400&width=600"
                              alt="Mercedes-Benz S-Class"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-1">Toyota Corolla</h4>
                          <p className="text-zinc-400 text-sm mb-4">Sedan</p>

                          <div className="space-y-2 mb-6">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Pick-up Date:</span>
                              <span className="text-white">Jun 15, 2025</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Return Date:</span>
                              <span className="text-white">Jun 18, 2025</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Duration:</span>
                              <span className="text-white">3 Days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Location:</span>
                              <span className="text-white">Harare Airport</span>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10">
                            <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                              <p className="text-red-500 font-medium mb-2">Custom Pricing</p>
                              <p className="text-zinc-400 text-sm">
                                Pricing will be provided based on your specific requirements and rental duration.
                              </p>
                              <p className="text-white font-bold mt-2">Contact us for quote</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-center gap-4">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                    >
                      Back
                    </Button>
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20 flex items-center gap-2">
                      Complete Booking <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="confirmation" className="mt-0">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
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
                        className="h-10 w-10 text-white"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
                    <p className="text-xl text-zinc-400 mb-2">Thank you for your booking.</p>
                    <p className="text-zinc-400">
                      Your booking reference number is <span className="text-white font-bold">WC-12345678</span>
                    </p>
                  </div>

                  <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden mb-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-6">Booking Details</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                            <Image
                              src="/placeholder.svg?height=400&width=600"
                              alt="Mercedes-Benz S-Class"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-1">Mercedes-Benz S-Class</h4>
                          <p className="text-zinc-400 text-sm">Luxury Sedan</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-medium text-zinc-500 mb-1">Rental Period</h5>
                            <p className="text-white">Jun 15, 2025 - Jun 18, 2025 (3 Days)</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-zinc-500 mb-1">Pick-up Location</h5>
                            <p className="text-white">Harare Airport</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-zinc-500 mb-1">Return Location</h5>
                            <p className="text-white">Harare Airport</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-zinc-500 mb-1">Total Amount</h5>
                            <p className="text-white font-bold">$1,155</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden mb-12">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-6">What's Next?</h3>

                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
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
                              className="h-5 w-5 text-red-500"
                            >
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                              <line x1="16" x2="16" y1="2" y2="6" />
                              <line x1="8" x2="8" y1="2" y2="6" />
                              <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">Booking Confirmation Email</h4>
                            <p className="text-zinc-400">
                              We've sent a confirmation email to your registered email address with all the details of
                              your booking.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
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
                              className="h-5 w-5 text-red-500"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">Customer Service</h4>
                            <p className="text-zinc-400">
                              Our customer service team will contact you 24 hours before your pickup to confirm all
                              details.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
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
                              className="h-5 w-5 text-red-500"
                            >
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">Required Documents</h4>
                            <p className="text-zinc-400">
                              Please bring your driver's license, ID/passport, and the credit card used for payment when
                              picking up your vehicle.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center gap-4">
                    <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                      Download Booking Details
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                      Return to Home
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
