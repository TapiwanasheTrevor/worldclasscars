"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Unparalleled Service",
    subtitle: "Premium Experience",
    description:
      "Our dedicated team ensures your experience exceeds all expectations, with personalized service and meticulous attention to detail.",
    image: "/hero-slider/img1.jpeg",
    cta: "Explore Our Fleet",
  },
  {
    id: 2,
    title: "Exotic Collection",
    subtitle: "Drive Your Dream",
    description:
      "Experience the thrill of driving the world's most prestigious vehicles, meticulously maintained to perfection.",
    image: "/hero-slider/img2.jpeg",
    cta: "View Exotic Cars",
  },
  {
    id: 3,
    title: "Luxury Redefined",
    subtitle: "Beyond Expectations",
    description:
      "Elevate your journey with our premium selection of luxury vehicles, designed for those who demand excellence.",
    image: "/hero-slider/img5.jpeg",
    cta: "Book Now",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover object-center brightness-50"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          </div>

          <div className="container relative z-10 h-full flex items-center">
            <div className="max-w-3xl">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 opacity-0 translate-y-10 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
                {slide.title} <br />
                <span className="text-red-500">{slide.subtitle}</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl opacity-0 translate-y-10 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
                {slide.description}
              </p>
              <div className="opacity-0 translate-y-10 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-red-700/20 flex items-center gap-2">
                  {slide.cta} <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-red-500 w-10" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
