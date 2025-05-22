"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Search, Filter, Star, Users, Gauge, Fuel, Calendar, Shield, Zap, Wrench, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const vehicles = [
  {
    id: 1,
    name: "Honda Fit",
    category: "compact",
    brand: "honda",
    image: "/fleet/honda-fit.jpeg",
    features: {
      seats: "5",
      speed: "170 km/h",
      fuel: "Petrol",
      engine: "1.3L 4-Cylinder",
      transmission: "CVT Automatic",
      year: "2018",
    },
    amenities: [
      "Air Conditioning",
      "Power Steering",
      "Electric Windows",
      "Central Locking",
      "Audio System",
      "USB Charging Ports",
      "Safety Airbags",
      "ABS Braking System",
    ],
    description: "The Honda Fit is a reliable and fuel-efficient compact car, perfect for city driving and daily commuting in Zimbabwe. Known for its spacious interior and excellent fuel economy.",
    available: true,
  },
  {
    id: 2,
    name: "Honda Fit Hybrid",
    category: "compact",
    brand: "honda",
    image: "/fleet/honda-fit-hybrid.jpg",
    features: {
      seats: "5",
      speed: "165 km/h",
      fuel: "Hybrid",
      engine: "1.5L Hybrid",
      transmission: "CVT Automatic",
      year: "2019",
    },
    amenities: [
      "Hybrid Technology",
      "Air Conditioning",
      "Power Steering",
      "Electric Windows",
      "Central Locking",
      "Audio System",
      "USB Charging Ports",
      "Eco Mode",
    ],
    description: "The Honda Fit Hybrid combines excellent fuel efficiency with Honda's reliable hybrid technology. Perfect for eco-conscious drivers looking for outstanding fuel economy.",
    available: true,
  },
  {
    id: 3,
    name: "Toyota Aqua",
    category: "compact",
    brand: "toyota",
    image: "/fleet/toyota-aqua.png",
    features: {
      seats: "5",
      speed: "165 km/h",
      fuel: "Hybrid",
      engine: "1.5L Hybrid",
      transmission: "CVT Automatic",
      year: "2020",
    },
    amenities: [
      "Toyota Hybrid System",
      "Air Conditioning",
      "Smart Entry",
      "Push Button Start",
      "Touchscreen Display",
      "Reverse Camera",
      "Toyota Safety Sense",
      "Eco Driving Assist",
    ],
    description: "The Toyota Aqua is a popular hybrid hatchback known for exceptional fuel efficiency and Toyota's proven reliability. Ideal for urban driving with minimal environmental impact.",
    available: true,
  },
  {
    id: 4,
    name: "Mercedes S-Class",
    category: "sedan",
    brand: "mercedes",
    image: "/fleet/sclass.avif",
    features: {
      seats: "5",
      speed: "250 km/h",
      fuel: "Petrol",
      engine: "3.0L V6 Turbo",
      transmission: "9-Speed Automatic",
      year: "2021",
    },
    amenities: [
      "Premium Leather Seats",
      "Climate Control",
      "Sunroof",
      "Premium Sound System",
      "Navigation System",
      "Heated Seats",
      "Memory Seats",
      "Advanced Safety Features",
    ],
    description: "The Mercedes S-Class represents the pinnacle of luxury and comfort. Perfect for executive travel, special occasions, and when you need to make a lasting impression.",
    available: true,
  },
  {
    id: 5,
    name: "Toyota Fortuner D4D",
    category: "suv",
    brand: "toyota",
    image: "/fleet/toyota-fortuner-d4d.jpeg",
    features: {
      seats: "7",
      speed: "190 km/h",
      fuel: "Diesel",
      engine: "2.4L D4D Turbo Diesel",
      transmission: "6-Speed Manual",
      year: "2019",
    },
    amenities: [
      "4WD Capability",
      "Air Conditioning",
      "Power Steering",
      "Electric Windows",
      "Central Locking",
      "Audio System",
      "Roof Rails",
      "Hill Start Assist",
    ],
    description: "The Toyota Fortuner D4D is a robust SUV perfect for family trips and adventures. With excellent ground clearance and 4WD capability, it handles Zimbabwe's diverse terrain with ease.",
    available: true,
  },
  {
    id: 6,
    name: "Toyota Fortuner GD6",
    category: "suv",
    brand: "toyota",
    image: "/fleet/toyota-fortuner-gd6.jpeg",
    features: {
      seats: "7",
      speed: "190 km/h",
      fuel: "Diesel",
      engine: "2.8L GD6 Turbo Diesel",
      transmission: "6-Speed Automatic",
      year: "2020",
    },
    amenities: [
      "4WD Capability",
      "Climate Control",
      "Leather Seats",
      "Touchscreen Display",
      "Reverse Camera",
      "Cruise Control",
      "Toyota Safety Sense",
      "Differential Lock",
    ],
    description: "The Toyota Fortuner GD6 offers premium SUV comfort with powerful diesel performance. Ideal for long journeys and family adventures with advanced safety features.",
    available: true,
  },
  {
    id: 7,
    name: "Nissan NP200 (Baby Quantum)",
    category: "bakkie",
    brand: "nissan",
    image: "/fleet/baby-quantum.webp",
    features: {
      seats: "2",
      speed: "160 km/h",
      fuel: "Petrol",
      engine: "1.6L 4-Cylinder",
      transmission: "5-Speed Manual",
      year: "2018",
    },
    amenities: [
      "Load Bed",
      "Air Conditioning",
      "Power Steering",
      "Central Locking",
      "Audio System",
      "Durable Build",
      "Easy Loading",
      "Fuel Efficient",
    ],
    description: "The Nissan NP200 (Baby Quantum) is a compact and reliable bakkie perfect for small business needs, deliveries, and personal transport with cargo capability.",
    available: true,
  },
  {
    id: 8,
    name: "Toyota Coaster",
    category: "bus",
    brand: "toyota",
    image: "/fleet/toyota-coaster.jpg",
    features: {
      seats: "22",
      speed: "120 km/h",
      fuel: "Diesel",
      engine: "4.0L Diesel",
      transmission: "5-Speed Manual",
      year: "2017",
    },
    amenities: [
      "22 Passenger Seats",
      "Air Conditioning",
      "Large Windows",
      "Luggage Compartment",
      "PA System",
      "Safety Features",
      "Comfortable Seating",
      "Reliable Performance",
    ],
    description: "The Toyota Coaster is ideal for group transport, tours, and events. With seating for 22 passengers and reliable performance, it's perfect for schools, organizations, and tour groups.",
    available: true,
  },
]

export default function FleetPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const openVehicleDetails = (vehicle: typeof vehicles[0]) => {
    setSelectedVehicle(vehicle)
    setIsDetailsOpen(true)
  }

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
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">OUR FLEET</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-red-500">Vehicles</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">Explore Our Premium Collection</p>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
              Discover our extensive fleet of well-maintained vehicles, from fuel-efficient compact cars
              to spacious SUVs and commercial vehicles.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 relative">
        <div className="container relative z-10">
          <Card className="bg-zinc-900/80 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Vehicle Type</label>
                  <select className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option value="">All Types</option>
                    <option value="compact">Compact Car</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="bakkie">Bakkie/Pickup</option>
                    <option value="bus">Bus/Minibus</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Brand</label>
                  <select className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option value="">All Brands</option>
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="nissan">Nissan</option>
                    <option value="mercedes">Mercedes-Benz</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Fuel Type</label>
                  <select className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option value="">All Fuel Types</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Features</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search features..."
                      className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                <Button
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/5 rounded-lg flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Advanced Filters
                </Button>
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-lg">
                  Search Vehicles
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fleet Categories Section */}
      <section className="py-16 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-zinc-900 border border-white/10 rounded-full p-1">
                <TabsTrigger value="all" className="rounded-full px-6 data-[state=active]:bg-red-600">
                  All Vehicles
                </TabsTrigger>
                <TabsTrigger value="compact" className="rounded-full px-6 data-[state=active]:bg-red-600">
                  Compact Cars
                </TabsTrigger>
                <TabsTrigger value="sedan" className="rounded-full px-6 data-[state=active]:bg-red-600">
                  Sedans
                </TabsTrigger>
                <TabsTrigger value="suv" className="rounded-full px-6 data-[state=active]:bg-red-600">
                  SUVs
                </TabsTrigger>
                <TabsTrigger value="commercial" className="rounded-full px-6 data-[state=active]:bg-red-600">
                  Commercial
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} onDetailsClick={openVehicleDetails} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="compact" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.filter(v => v.category === 'compact').map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} onDetailsClick={openVehicleDetails} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sedan" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.filter(v => v.category === 'sedan').map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} onDetailsClick={openVehicleDetails} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suv" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.filter(v => v.category === 'suv').map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} onDetailsClick={openVehicleDetails} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.filter(v => v.category === 'bakkie' || v.category === 'bus').map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} onDetailsClick={openVehicleDetails} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-8">
              Load More Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Fleet Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">FLEET EXCELLENCE</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Premium Fleet, Maintained to Perfection</h2>
              <p className="text-zinc-400 mb-8">
                Our fleet of vehicles undergoes rigorous maintenance and inspection protocols to ensure peak
                performance, safety, and comfort for every client.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Regular Maintenance",
                    description:
                      "Every vehicle in our fleet undergoes scheduled maintenance by certified technicians, exceeding manufacturer recommendations.",
                  },
                  {
                    title: "Detailed Cleaning",
                    description:
                      "Our vehicles are meticulously cleaned and sanitized before and after each rental, ensuring a pristine experience.",
                  },
                  {
                    title: "Performance Checks",
                    description:
                      "Comprehensive performance checks are conducted regularly to ensure optimal driving dynamics and safety.",
                  },
                  {
                    title: "Reliable Models",
                    description:
                      "We maintain a fleet of proven, reliable vehicle models that are well-suited for Zimbabwe's roads and conditions.",
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
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 via-red-600/5 to-transparent rounded-2xl blur-sm"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/sedan.avif"
                  alt="Fleet maintenance"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-white text-xl font-medium italic">
                    "The vehicles are always in immaculate condition. It's clear they take pride in their fleet
                    maintenance."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500"></div>
                    <div>
                      <p className="text-white font-medium">Sarah Johnson</p>
                      <p className="text-zinc-400 text-sm">Frequent Client</p>
                    </div>
                  </div>
                </div>
              </div>
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
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">READY TO DRIVE</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Your Perfect Vehicle</h2>
            <p className="text-xl text-white/80 mb-8">
              Browse our extensive fleet and book your ideal car today for a reliable driving experience.
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

      {/* Vehicle Details Popup */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl bg-zinc-900 border border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {selectedVehicle?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedVehicle && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge className="bg-red-600 text-white">{selectedVehicle.category}</Badge>
                  <Badge className="bg-zinc-800 text-white capitalize">{selectedVehicle.brand}</Badge>
                  <Badge className={`text-white ${selectedVehicle.available ? 'bg-green-600' : 'bg-red-600'}`}>
                    {selectedVehicle.available ? 'Available' : 'Rented'}
                  </Badge>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-300 leading-relaxed">{selectedVehicle.description}</p>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-red-500" />
                    Specifications
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Users className="h-4 w-4 text-red-500" />
                          <span className="text-white font-medium">{selectedVehicle.features.seats}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Gauge className="h-4 w-4 text-red-500" />
                          <span className="text-white font-medium">{selectedVehicle.features.speed}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Fuel className="h-4 w-4 text-red-500" />
                          <span className="text-white font-medium">{selectedVehicle.features.fuel}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Zap className="h-4 w-4 text-red-500" />
                          <span className="text-white font-medium">{selectedVehicle.features.engine}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-red-500" />
                          <span className="text-white font-medium">{selectedVehicle.features.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-4 w-4 text-red-500" />
                      <span className="text-white font-medium">{selectedVehicle.features.transmission}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-red-500" />
                    Features & Amenities
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedVehicle.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link 
                    href={`/contact?vehicle=${encodeURIComponent(selectedVehicle.name)}`}
                    className="flex-1"
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg">
                      Book This Vehicle
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-white/10 text-white hover:bg-white/5 rounded-lg px-6"
                    onClick={() => setIsDetailsOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface VehicleCardProps {
  vehicle: {
    id: number
    name: string
    category: string
    brand: string
    image: string
    features: {
      seats: string
      speed: string
      fuel: string
      engine: string
      transmission: string
      year: string
    }
    amenities: string[]
    description: string
    available: boolean
  }
  onDetailsClick: (vehicle: VehicleCardProps['vehicle']) => void
}

function VehicleCard({ vehicle, onDetailsClick }: VehicleCardProps) {
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'compact': return 'Compact'
      case 'sedan': return 'Sedan'
      case 'suv': return 'SUV'
      case 'bakkie': return 'Bakkie'
      case 'bus': return 'Bus'
      default: return 'Vehicle'
    }
  }

  return (
    <Card className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden group hover:border-red-500/20 transition-all duration-300 h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <Badge className={`text-white border-0 ${vehicle.available ? 'bg-green-600' : 'bg-red-600'}`}>
            {vehicle.available ? 'Available' : 'Rented'}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/70 text-sm">Custom</p>
            <p className="text-xl font-bold text-red-500">Quote</p>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-zinc-800 text-white">{getCategoryLabel(vehicle.category)}</Badge>
          <Badge className="bg-zinc-800 text-white capitalize">{vehicle.brand}</Badge>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-red-500" />
            </div>
            <p className="text-white font-medium">{vehicle.features.seats} Seats</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-2">
              <Gauge className="h-5 w-5 text-red-500" />
            </div>
            <p className="text-white font-medium">{vehicle.features.speed}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-2">
              <Fuel className="h-5 w-5 text-red-500" />
            </div>
            <p className="text-white font-medium">{vehicle.features.fuel}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`} className="flex-1">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg">Book Now</Button>
          </Link>
          <Button
            variant="outline"
            className="border-white/10 text-white hover:bg-white/5 rounded-lg flex items-center gap-2"
            onClick={() => onDetailsClick(vehicle)}
          >
            Details <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}