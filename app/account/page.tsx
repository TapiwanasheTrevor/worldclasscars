import Image from "next/image"
import Link from "next/link"
import { User, Calendar, Car, CreditCard, Settings, Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=1000&width=2000"
              alt="Account"
              fill
              className="object-cover brightness-[0.2]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
          </div>

          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">MY ACCOUNT</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Welcome Back, John</h1>
                <p className="text-xl text-white/80">Manage your account and bookings</p>
              </div>
              <div>
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                  Book a Vehicle
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Account Dashboard */}
        <section className="py-16 relative">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                        <User className="h-8 w-8 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">John Doe</h3>
                        <p className="text-zinc-400">Premium Member</p>
                      </div>
                    </div>

                    <nav className="space-y-1">
                      {[
                        { icon: <User className="h-5 w-5" />, label: "Profile", active: false },
                        { icon: <Calendar className="h-5 w-5" />, label: "My Bookings", active: true },
                        { icon: <Car className="h-5 w-5" />, label: "Favorite Vehicles", active: false },
                        { icon: <CreditCard className="h-5 w-5" />, label: "Payment Methods", active: false },
                        { icon: <Bell className="h-5 w-5" />, label: "Notifications", active: false },
                        { icon: <Settings className="h-5 w-5" />, label: "Settings", active: false },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href="#"
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                            item.active ? "bg-red-500 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                          }`}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </Link>
                      ))}
                      <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors mt-8"
                      >
                        <LogOut className="h-5 w-5" />
                        <span>Sign Out</span>
                      </Link>
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="current" className="w-full">
                  <TabsList className="bg-zinc-900 border border-white/10 rounded-xl p-1 mb-8">
                    <TabsTrigger value="current" className="rounded-lg data-[state=active]:bg-red-600">
                      Current Bookings
                    </TabsTrigger>
                    <TabsTrigger value="upcoming" className="rounded-lg data-[state=active]:bg-red-600">
                      Upcoming
                    </TabsTrigger>
                    <TabsTrigger value="past" className="rounded-lg data-[state=active]:bg-red-600">
                      Past Bookings
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="current" className="mt-0">
                    <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden mb-8">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                          <div>
                            <Badge className="bg-green-500/20 text-green-500 border-green-500/20 mb-2">Active</Badge>
                            <h3 className="text-2xl font-bold text-white">Toyota Corolla</h3>
                            <p className="text-zinc-400">Booking #WC-12345678</p>
                          </div>
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 rounded-lg"
                            >
                              Modify
                            </Button>
                            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg">Extend Rental</Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="md:col-span-1">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Toyota Corolla"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Rental Period</h4>
                                <p className="text-white mb-4">Jun 15, 2025 - Jun 18, 2025</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Pick-up Location</h4>
                                <p className="text-white mb-4">Harare Airport</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Return Location</h4>
                                <p className="text-white">Harare Airport</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Time Remaining</h4>
                                <p className="text-white mb-4">1 Day, 8 Hours</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Pricing</h4>
                                <p className="text-red-500 mb-4">Custom Quote</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Status</h4>
                                <p className="text-green-500">Active</p>
                              </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                              <h4 className="text-white font-medium mb-2">Additional Services</h4>
                              <div className="flex flex-wrap gap-2">
                                <Badge className="bg-zinc-800 text-white">Premium Insurance</Badge>
                                <Badge className="bg-zinc-800 text-white">GPS Navigation</Badge>
                                <Badge className="bg-zinc-800 text-white">Additional Driver</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="text-center">
                      <p className="text-zinc-400 mb-4">Need assistance with your current booking?</p>
                      <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
                        Contact Support
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="upcoming" className="mt-0">
                    <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden mb-8">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                          <div>
                            <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/20 mb-2">Upcoming</Badge>
                            <h3 className="text-2xl font-bold text-white">Honda Civic</h3>
                            <p className="text-zinc-400">Booking #WC-23456789</p>
                          </div>
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10 rounded-lg"
                            >
                              Modify
                            </Button>
                            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg">Cancel</Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="md:col-span-1">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                              <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Honda Civic"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Rental Period</h4>
                                <p className="text-white mb-4">Jul 10, 2025 - Jul 12, 2025</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Pick-up Location</h4>
                                <p className="text-white mb-4">City Center</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Return Location</h4>
                                <p className="text-white">City Center</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Time Until Pickup</h4>
                                <p className="text-white mb-4">25 Days</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Pricing</h4>
                                <p className="text-red-500 mb-4">Custom Quote</p>

                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Status</h4>
                                <p className="text-blue-500">Confirmed</p>
                              </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10">
                              <h4 className="text-white font-medium mb-2">Additional Services</h4>
                              <div className="flex flex-wrap gap-2">
                                <Badge className="bg-zinc-800 text-white">Full Insurance</Badge>
                                <Badge className="bg-zinc-800 text-white">Vehicle Delivery</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="past" className="mt-0">
                    <div className="space-y-8">
                      {[...Array(3)].map((_, index) => (
                        <Card key={index} className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                              <div>
                                <Badge className="bg-zinc-500/20 text-zinc-400 border-zinc-500/20 mb-2">
                                  Completed
                                </Badge>
                                <h3 className="text-2xl font-bold text-white">
                                  {index === 0
                                    ? "Range Rover Autobiography"
                                    : index === 1
                                      ? "BMW 7 Series"
                                      : "Porsche 911 Turbo S"}
                                </h3>
                                <p className="text-zinc-400">Booking #{`WC-${34567890 + index}`}</p>
                              </div>
                              <div className="flex gap-3">
                                <Button
                                  variant="outline"
                                  className="border-white/20 text-white hover:bg-white/10 rounded-lg"
                                >
                                  View Details
                                </Button>
                                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
                                  Book Again
                                </Button>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                              <div className="md:col-span-1">
                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                  <Image
                                    src="/placeholder.svg?height=400&width=600"
                                    alt="Past booking"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                              <div className="md:col-span-3">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div>
                                    <h4 className="text-sm font-medium text-zinc-500 mb-1">Rental Period</h4>
                                    <p className="text-white">
                                      {index === 0
                                        ? "May 5, 2025 - May 8, 2025"
                                        : index === 1
                                          ? "Apr 12, 2025 - Apr 15, 2025"
                                          : "Mar 20, 2025 - Mar 22, 2025"}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-zinc-500 mb-1">Location</h4>
                                    <p className="text-white">
                                      {index === 0 ? "Victoria Falls" : index === 1 ? "Harare Airport" : "City Center"}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-zinc-500 mb-1">Total Amount</h4>
                                    <p className="text-white">
                                      ${index === 0 ? "1,350" : index === 1 ? "960" : "1,900"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                        Load More Bookings
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Recommended Vehicles */}
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-white mb-8">Recommended for You</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, index) => (
                      <Card
                        key={index}
                        className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden group hover:border-red-500/20 transition-all duration-300"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Recommended vehicle"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-600 text-white border-0">
                              {index === 0 ? "Sports Car" : index === 1 ? "Luxury SUV" : "Luxury Sedan"}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-xl font-bold text-white">
                              {index === 0
                                ? "Lamborghini Huracán"
                                : index === 1
                                  ? "Bentley Bentayga"
                                  : "Rolls-Royce Ghost"}
                            </h3>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-lg font-bold text-white">
                                ${index === 0 ? "1,400" : index === 1 ? "1,200" : "1,800"}
                                <span className="text-sm">/day</span>
                              </div>
                              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
