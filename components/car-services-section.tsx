"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export function CarServicesSection() {
  const services = [
    {
      name: "Car Wash",
      description: "Professional exterior cleaning",
      price: "From ₹1,244",
      rating: 4.7,
      reviews: 2156,
      image: "/images/car wash.png",
    },
    {
      name: "Car Detailing",
      description: "Complete interior and exterior detailing",
      price: "From ₹8,297",
      rating: 4.9,
      reviews: 892,
      image: "/images/car detailing.png",
    },
    {
      name: "AC Services",
      description: "Air conditioning maintenance and repair",
      price: "From ₹4,148",
      rating: 4.6,
      reviews: 1347,
      image: "/images/ac services.png",
    },
    {
      name: "Denting & Painting",
      description: "Body repair and paint services",
      price: "From ₹3,318",
      rating: 4.5,
      reviews: 678,
      image: "/images/denting and painting.png",
    },
    {
      name: "Car Mechanic",
      description: "General repair and maintenance",
      price: "From ₹1,659",
      rating: 4.8,
      reviews: 1892,
      image: "/images/car mechanic.png",
    },
    {
      name: "Engine Diagnostic",
      description: "Complete engine health check and diagnostics",
      price: "From ₹2,489",
      rating: 4.8,
      reviews: 1123,
      image: "/images/engine diagnostic.png",
    },
    {
      name: "Car Insurance",
      description: "Comprehensive insurance coverage",
      price: "From ₹16,594",
      rating: 4.4,
      reviews: 456,
      image: "/images/car insurance.png",
    },
    {
      name: "Technical Support",
      description: "24/7 technical assistance",
      price: "₹4,148/mo",
      rating: 4.7,
      reviews: 743,
      image: "/images/technical-support.png",
    },
    {
      name: "Monthly Subscription",
      description: "All-inclusive monthly plan",
      price: "From ₹4,977",
      rating: 4.6,
      reviews: 567,
      image: "/images/monthly subscription.png",
    },
  ]

  return (
    <section id="products" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Car Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Car Services</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Book trusted mechanics and service centers near you for all your car maintenance needs.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="w-full flex justify-center mb-4">
                    <div className="aspect-square w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-border/30 shadow-sm bg-white/90 flex items-center justify-center">
                      <Image src={service.image} alt={service.name} width={96} height={96} className="object-contain w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  {/* Rating Section */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < Math.floor(service.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {service.rating} ({service.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full rounded-full">Book Service</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
