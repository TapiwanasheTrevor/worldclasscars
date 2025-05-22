import Image from "next/image"
import { Users, Clock, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">ABOUT US</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-red-500">Story</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">Redefining Luxury Transportation in Zimbabwe</p>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
              Founded with a passion for exceptional service and luxury vehicles, Worldclass Car Rental has grown to
              become Zimbabwe's premier luxury transportation provider.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">OUR JOURNEY</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">From Vision to Excellence</h2>
              <p className="text-zinc-400 mb-8">
                Established in 2013, Worldclass Car Rental began with a simple vision: to provide an unparalleled luxury
                transportation experience in Zimbabwe. What started as a small fleet of premium vehicles has evolved
                into the country's most respected luxury car rental service.
              </p>
              <p className="text-zinc-400 mb-8">
                Our founder, driven by a passion for exceptional service and automotive excellence, recognized a gap in
                the market for truly premium transportation solutions. Today, that vision has expanded to encompass a
                comprehensive range of services that cater to discerning clients from around the world.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">10+</div>
                  <div className="text-white font-medium">Years of Excellence</div>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                  <div className="text-white font-medium">Luxury Vehicles</div>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">1000+</div>
                  <div className="text-white font-medium">Happy Clients</div>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">30+</div>
                  <div className="text-white font-medium">Expert Staff</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 via-red-600/5 to-transparent rounded-2xl blur-sm"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[4/3]">
                    <Image
                      src="/four/img1.jpeg"
                      alt="Our journey"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full rounded-tl-2xl"
                    />
                  </div>
                  <div className="aspect-[4/3]">
                    <Image
                      src="/four/img2.jpeg"
                      alt="Our journey"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full rounded-tr-2xl"
                    />
                  </div>
                  <div className="aspect-[4/3]">
                    <Image
                      src="/four/img3.jpeg"
                      alt="Our journey"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full rounded-bl-2xl"
                    />
                  </div>
                  <div className="aspect-[4/3]">
                    <Image
                      src="/four/img4.jpeg"
                      alt="Our journey"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full rounded-br-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">OUR VALUES</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">The Principles That Guide Us</h2>
            <p className="text-zinc-400">
              At Worldclass Car Rental, our core values shape everything we do, from how we maintain our vehicles to how
              we interact with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-red-500" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service, from vehicle maintenance to customer interactions.",
              },
              {
                icon: <Shield className="h-8 w-8 text-red-500" />,
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty, building trust with our clients through every interaction.",
              },
              {
                icon: <Users className="h-8 w-8 text-red-500" />,
                title: "Customer Focus",
                description:
                  "Our clients' needs and satisfaction are at the center of everything we do, driving our decisions and innovations.",
              },
              {
                icon: <Clock className="h-8 w-8 text-red-500" />,
                title: "Reliability",
                description:
                  "We deliver on our promises consistently, ensuring dependable service that our clients can count on.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 border border-white/5 hover:border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 rounded-xl overflow-hidden h-full"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">OUR GALLERY</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Experience Luxury in Motion</h2>
            <p className="text-zinc-400">
              Discover our premium fleet and luxury experience through our curated gallery of exceptional vehicles and memorable moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/hero-slider/img1.jpeg",
              "/hero-slider/img2.jpeg",
              "/hero-slider/img3.jpeg",
              "/hero-slider/img4.jpeg",
              "/hero-slider/img5.jpeg",
              "/hero-slider/img6.jpeg",
              "/hero-slider/img7.jpeg",
              "/hero-slider/img8.jpeg",
              "/hero-slider/img9.jpeg",
            ].map((imageSrc, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-red-500/20 transition-all duration-500"
              >
                <Image
                  src={imageSrc}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">Premium Experience</p>
                  <p className="text-white/70 text-sm">Luxury Vehicle Collection</p>
                </div>
              </div>
            ))}
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
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">JOIN OUR JOURNEY</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Luxury Transportation Redefined
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Discover why discerning clients choose Worldclass Car Rental for their premium transportation needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-red-700/20">
                Book Your Experience
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
