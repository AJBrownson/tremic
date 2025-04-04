"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  id: number
  title: string
  image: string
  link: string
}

interface ServiceCarouselProps {
  services: Service[]
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // The minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
  }, [services.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1))
  }, [services.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    // Pause autoplay when user interacts
    setIsAutoPlaying(false)
    // Resume autoplay after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Handle touch events for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main carousel container */}
      <div
        className="relative h-[500px] md:h-[450px] w-full overflow-hidden rounded-lg shadow-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={service.id} className="min-w-full h-full relative bg-white">
              <div className="relative h-1/2 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 h-1/2 flex flex-col">
                <h3 className="text-xl font-bold text-blue-800">{service.title}</h3>
                <Link
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-auto"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-0 rounded-full shadow-md"
        onClick={prevSlide}
        aria-label="Previous service"
      >
        <ChevronLeft className="h-6 w-6 text-blue-800" />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-0 rounded-full shadow-md"
        onClick={nextSlide}
        aria-label="Next service"
      >
        <ChevronRight className="h-6 w-6 text-blue-800" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentIndex === index ? "bg-blue-600 w-6" : "bg-blue-300 hover:bg-blue-400",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

