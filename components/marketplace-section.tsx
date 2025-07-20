"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Plus, Star } from "lucide-react"
import Image from "next/image"

export function MarketplaceSection() {
  const featuredCars = [
    {
      id: 1,
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      price: "₹20,74,917",
      rating: 4.8,
      reviews: 892,
      image: "/images/tesla model 3.jpg",
      mileage: "15,000 km",
      fuelType: "Electric",
    },
    {
      id: 2,
      make: "BMW",
      model: "3 Series",
      year: 2022,
      price: "₹16,59,933",
      rating: 4.6,
      reviews: 567,
      image: "/images/bmw 3 series.jpg",
      mileage: "25,000 km",
      fuelType: "Petrol",
    },
    {
      id: 3,
      make: "Audi",
      model: "A4",
      year: 2023,
      price: "₹27,39,889",
      rating: 4.7,
      reviews: 743,
      image: "/images/audi a4.jpg",
      mileage: "12,000 km",
      fuelType: "Diesel",
    },
  ]

  return (
    <section id="marketplace" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Marketplace
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Resale Page</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Find your perfect car or sell your current one with our secure and trusted marketplace.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="rounded-full h-12 px-8 text-base">
            <Search className="mr-2 size-4" />
            Browse Cars
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base bg-transparent">
            <Plus className="mr-2 size-4" />
            Sell Your Car
          </Button>
        </div>

        {/* Featured Cars */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Home Page Listings</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCars.map((car, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                  <div className="aspect-video relative">
                    <Image
                      src={car.image || "/placeholder.svg"}
                      alt={`${car.year} ${car.make} ${car.model}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2">
                      {car.year} {car.make} {car.model}
                    </h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-primary">{car.price}</span>
                      <span className="text-sm text-muted-foreground">{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-4 ${
                              i < Math.floor(car.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {car.rating} ({car.reviews})
                      </span>
                    </div>
                    {/* <p className="text-sm text-muted-foreground mb-4">{car.location}</p> */}
                    <Button className="w-full rounded-full">View Details</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marketplace Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold">₹207.5Cr+</h4>
            <p className="text-muted-foreground">Total Sales</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold">₹207.5Cr+</h4>
            <p className="text-muted-foreground">Total Sales</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold">₹207.5Cr+</h4>
            <p className="text-muted-foreground">Total Sales</p>
          </div>
        </div>
      </div>
    </section>
  )
}
