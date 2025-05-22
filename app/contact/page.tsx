"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [selectedVehicle, setSelectedVehicle] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("General Inquiry")

  useEffect(() => {
    const vehicle = searchParams.get('vehicle')
    if (vehicle) {
      setSelectedVehicle(vehicle)
      setSubject("Booking Request")
      setMessage(`I would like to book the ${vehicle}. Please provide me with availability and pricing information.`)
    }
  }, [searchParams])
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1000&width=2000"
            alt="Contact us"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">CONTACT US</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">We're Here to Assist You</p>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl">
              Have questions or ready to book? Our team is available to assist you with any inquiries about our premium
              services.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-600/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">REACH US</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-zinc-400 mb-8">
                Our dedicated team is ready to assist you with any inquiries or bookings. Reach out to us through any of
                the following channels:
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Our Location</h3>
                    <p className="text-zinc-400">31 Herbert Chitepo Ave, Belvedere, Harare</p>
                    <Link href="#map" className="text-red-500 hover:text-red-400 inline-flex items-center gap-2 mt-2">
                      View on Map <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Opening Hours</h3>
                    <p className="text-zinc-400">Monday to Friday: 08AM - 5PM</p>
                    <p className="text-zinc-400">Saturday: 09AM - 1PM</p>
                    <p className="text-zinc-400">Sunday: 9AM - 4PM</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Phone Numbers</h3>
                    <p className="text-zinc-400">Main: +263 77 999 9774</p>
                    <p className="text-zinc-400">Alternative: +263 71 611 5175</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Email Addresses</h3>
                    <p className="text-zinc-400">Email: info@worldclasscars.co.zw</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/share/18kYJPUFTx/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://x.com/worldclass25?s=21&t=yFfKoyfIq0Yyyb13effO6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/worldclass_carrental?igsh=MW0xMnBoaG9hb3dzNQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Full Name</label>
                        <input
                          type="text"
                          className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Email Address</label>
                        <input
                          type="email"
                          className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="+1234567890"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Subject</label>
                      <select 
                        className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      >
                        <option>General Inquiry</option>
                        <option>Booking Request</option>
                        <option>Customer Support</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Message</label>
                      <textarea
                        className="w-full bg-zinc-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[150px]"
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-lg shadow-lg shadow-red-700/20 py-6">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16 bg-zinc-900 relative">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-zinc-400">
              Located in the heart of Harare, our office is easily accessible and ready to welcome you.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.123456789!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4b1234567890%3A0x1234567890abcdef!2s31%20Herbert%20Chitepo%20Ave%2C%20Belvedere%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1234567890123!5m2!1sen!2szw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="World Class Car Rental Location - 31 Herbert Chitepo Ave, Harare, Zimbabwe"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 shadow-lg shadow-red-700/20">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 mb-4">QUICK ANSWERS</Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-400">
              Find quick answers to common questions about contacting and working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
            <div className="divide-y divide-white/5">
              {[
                {
                  question: "What is the minimum rental period?",
                  answer:
                    "Our vehicles have a minimum rental period of 24 hours. However, some of our larger vehicle models may require a minimum rental period of 2-3 days, except for special cases like chauffeur-driven weddings and events. For specific requirements, please contact us directly so we can provide details for the vehicle you're interested in.",
                },
                {
                  question: "What documents do I need to rent a vehicle?",
                  answer:
                    "To rent a vehicle, you'll need a valid driver's license (held for at least 2 years), a second form of ID (passport or national ID), and proof of residency (water bills or supporting documents). Foreign clients will also require a valid credit card and proof of residency in Zimbabwe. Additionally, drivers must be at least 25 years old, and a refundable security deposit is required.",
                },
                {
                  question: "Do you offer delivery services?",
                  answer:
                    "Yes, we offer vehicle delivery to your home, office, hotel, or airport. Delivery is complimentary within a 5 Kilometer radius of our location for rentals of 3+ days. For shorter rentals or longer distances, delivery fees may apply. Please inquire for specific rates based on your location.",
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
              ].map((faq, index) => (
                <details key={index} className="group p-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-medium text-white group-hover:text-red-500 transition-colors">
                      {faq.question}
                    </h3>
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-open:bg-red-500 group-open:border-red-500 transition-colors">
                      <Plus className="h-4 w-4 text-white group-open:hidden" />
                      <Minus className="h-4 w-4 text-white hidden group-open:block" />
                    </div>
                  </summary>
                  <div className="mt-4 text-zinc-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-900 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience Worldclass Service?</h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today to book your premium vehicle or inquire about our luxury services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-black hover:bg-zinc-900 text-white rounded-full px-8 py-6 text-lg">Book Now</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
