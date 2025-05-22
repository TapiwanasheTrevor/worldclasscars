"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const packageImages = [
  "/packages/img1.jpeg",
  "/packages/img2.jpeg",
  "/packages/img3.jpeg",
  "/packages/img4.jpeg",
  "/packages/img5.jpeg",
  "/packages/img6.jpeg",
  "/packages/img7.jpeg",
]

export default function CarShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(4)
      }
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const maxIndex = Math.max(0, packageImages.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const visibleImages = packageImages.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="border-white/10 text-white hover:bg-white/5 rounded-full p-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="border-white/10 text-white hover:bg-white/5 rounded-full p-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-red-500 w-6" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {visibleImages.map((imageSrc, index) => (
          <div
            key={currentIndex + index}
            className="group relative aspect-[3/2] rounded-xl overflow-hidden border border-white/10 hover:border-red-500/20 transition-all duration-300"
          >
            <Image
              src={imageSrc}
              alt={`Luxury vehicle ${currentIndex + index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}