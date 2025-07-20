"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Users,
  BarChart,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      name: "Premium Car Shampoo",
      description: "Professional-grade car wash solution",
      price: "₹2,074",
      rating: 4.8,
      reviews: 1247,
      image: "/images/car shampoo.png",
    },
    {
      name: "Glass Cleaner",
      description: "Streak-free glass cleaning formula",
      price: "₹7,467",
      rating: 4.6,
      reviews: 892,
      image: "/images/glass cleaner.png",
    },
    {
      name: "Dashboard Polish",
      description: "Restore your dashboards shine",
      price: "₹10,787",
      rating: 4.7,
      reviews: 567,
      image: "/images/dashboard-polish.png",
    },
    {
      name: "Quick Detailer",
      description: "Fast touch-up solution",
      price: "₹3,816",
      rating: 4.5,
      reviews: 743,
      image: "/images/quick detailer.png",
    },
    {
      name: "Tire Shiner",
      description: "Make your tires look new",
      price: "₹1,659",
      rating: 4.4,
      reviews: 456,
      image: "/images/tyre shinner.png",
    },
    {
      name: "Car Care Kit",
      description: "Complete car care package",
      price: "₹6,637",
      rating: 4.9,
      reviews: 1892,
      image: "/images/car care kit.png",
    },
    {
      name: "Car Wash",
      description: "Professional exterior cleaning",
      price: "₹1,079",
      rating: 4.7,
      reviews: 2156,
      image: "/images/car wash.png",
    },
    {
      name: "Car Detailing",
      description: "Complete interior and exterior detailing",
      price: "₹13,275",
      rating: 4.9,
      reviews: 892,
      image: "/images/car detailing.png",
    },
    {
      name: "AC Services",
      description: "Air conditioning maintenance and repair",
      price: "₹7,467",
      rating: 4.6,
      reviews: 1347,
      image: "/images/ac services.png",
    },
  ]

  const services = [
    {
      name: "Car Wash",
      description: "Professional exterior cleaning",
      price: "From ₹2,489",
      rating: 4.7,
      reviews: 2156,
      image: "/images/car wash.png",
    },
    {
      name: "Car Detailing",
      description: "Complete interior and exterior detailing",
      price: "From ₹7,467",
      rating: 4.9,
      reviews: 892,
      image: "/images/car detailing.png",
    },
    {
      name: "AC Services",
      description: "Air conditioning maintenance and repair",
      price: "From ₹1,659",
      rating: 4.6,
      reviews: 1347,
      image: "/images/ac services.png",
    },
    {
      name: "Denting & Painting",
      description: "Body repair and paint services",
      price: "From ₹4,148",
      rating: 4.5,
      reviews: 678,
      image: "/images/denting and painting.png",
    },
    {
      name: "Car Mechanic",
      description: "General repair and maintenance",
      price: "From ₹6,637",
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
      price: "From ₹8,297",
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 bg-background/80 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              C
            </div>
            <span>Caarify - GaadiGuru</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Products/Services
            </Link>
            <Link
              href="/health"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Car Health
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Marketplace
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Moon className="size-[18px]" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="rounded-full">
              Login
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Moon className="size-[18px]" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative z-20 bg-white/95 dark:bg-background border border-border/40 shadow-lg rounded-xl px-4 py-8"
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Products & Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 
  text-black dark:text-white">
            Your Complete Car Super App
          </h1>
          <p className="text-white">
            Find answers to common questions about our platform.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" /> */}
            <Input
              placeholder="Search products and services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            {/* <Filter className="size-4" /> */}
            Filter
          </Button>
        </div>

        {/* Tabs for Products and Services */}
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="aspect-square relative mb-4 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {product.name}
                      </Badge>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
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
                          {/* <ShoppingCart className="size-4 mr-1" /> */}
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {/* <Droplets className="size-6" /> */}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-primary">{service.price}</span>
                        <span className="text-sm text-muted-foreground">({service.rating})</span>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Includes:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {/* Assuming features are part of the service object or derived */}
                          {/* For now, we'll just show a placeholder or remove if not directly available */}
                          {/* <li key={j} className="flex items-center">
                            <div className="size-1.5 rounded-full bg-primary mr-2"></div>
                            {feature}
                          </li> */}
                        </ul>
                      </div>
                      <Button className="w-full rounded-full">Book Service</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
