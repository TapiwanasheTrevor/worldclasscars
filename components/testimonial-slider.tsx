"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    position: "CEO, Global Enterprises",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Excellent car rental experience! The Toyota Corolla was in perfect condition, fuel efficient, and very comfortable for our business trip around Harare.",
    rating: 5,
    backgroundImage: "/four/img1.jpeg",
  },
  {
    id: 2,
    name: "Sophia Chen",
    position: "Fashion Designer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I needed a reliable vehicle for a business event, and World Class delivered beyond my expectations. The Honda Civic was perfect for the occasion.",
    rating: 5,
    backgroundImage: "/four/img2.jpeg",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "Film Director",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "For our film production, we required several reliable vehicles. The team at World Class was professional, accommodating, and provided exactly what we needed.",
    rating: 5,
    backgroundImage: "/four/img3.jpeg",
  },
  {
    id: 4,
    name: "Emma Thompson",
    position: "Executive VP, Finance",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The chauffeur service was exceptional. Our corporate clients were impressed with both the Toyota Camry and the professional driver provided.",
    rating: 5,
    backgroundImage: "/four/img4.jpeg",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-square md:aspect-auto">
                      <Image
                        src={testimonial.backgroundImage || "/placeholder.svg?height=600&width=600"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 md:bg-gradient-to-l"></div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-xl text-white italic mb-8">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden relative">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                          <p className="text-zinc-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left")
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-red-500 w-10" : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
