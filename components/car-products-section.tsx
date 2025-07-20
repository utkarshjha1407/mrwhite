"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"

export function CarProductsSection() {
  const products = [
    {
      name: "Premium Car Shampoo",
      description: "Professional-grade car wash solution",
      price: "₹1,079",
      rating: 4.8,
      reviews: 1247,
      image: "/images/car shampoo.png",
    },
    {
      name: "Glass Cleaner",
      description: "Streak-free glass cleaning formula",
      price: "₹1,327",
      rating: 4.6,
      reviews: 892,
      image: "/images/glass cleaner.png",
    },
    {
      name: "Dashboard Polish",
      description: "Restore your dashboards shine",
      price: "₹912",
      rating: 4.7,
      reviews: 567,
      image: "/images/dashboard-polish.png",
    },
    {
      name: "Quick Detailer",
      description: "Fast touch-up solution",
      price: "₹829",
      rating: 4.5,
      reviews: 743,
      image: "/images/quick detailer.png",
    },
    {
      name: "Tire Shiner",
      description: "Make your tires look new",
      price: "₹746",
      rating: 4.4,
      reviews: 456,
      image: "/images/tyre shinner.png",
    },
    {
      name: "Car Care Kit",
      description: "Complete car care package",
      price: "₹2,489",
      rating: 4.9,
      reviews: 1892,
      image: "/images/car care kit.png",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Popular Products
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Top Car Products</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Discover the most popular car products and accessories trusted by thousands of car owners.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4 rounded-lg overflow-hidden bg-muted">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{product.price}</span>
                    <Button size="sm" className="rounded-full">
                      <ShoppingCart className="size-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
