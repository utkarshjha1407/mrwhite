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
  Search,
  Plus,
  Filter,
  MapPin,
  Calendar,
  Users,
  BarChart,
  Layers,
  TrendingUp,
  Heart,
  Share,
  Settings,
  Fuel,
  Phone,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [carType, setCarType] = useState("")

  const featuredCars = [
    {
      id: 1,
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      price: "₹20,74,917",
      originalPrice: "₹22,40,917",
      mileage: "15,000 km",
      image: "/images/tesla model 3.jpg",
      location: "Seattle, WA",
      fuelType: "Electric",
      transmission: "Automatic",
      seller: "Private Seller",
      features: ["Autopilot", "Premium Interior", "19\" Wheels"],
      isFeatured: true,
      rating: 4.8,
      reviews: 892,
    },
    {
      id: 2,
      make: "BMW",
      model: "3 Series",
      year: 2022,
      price: "₹16,59,933",
      originalPrice: "₹17,20,933",
      mileage: "25,000 km",
      image: "/images/bmw 3 series.jpg",
      location: "Miami, FL",
      fuelType: "Petrol",
      transmission: "Automatic",
      seller: "Certified Dealer",
      features: ["M Sport Package", "Harman Kardon", "LED Headlights"],
      isFeatured: false,
      rating: 4.6,
      reviews: 567,
    },
    {
      id: 3,
      make: "Audi",
      model: "A4",
      year: 2023,
      price: "₹27,39,889",
      originalPrice: "₹28,00,889",
      mileage: "12,000 km",
      image: "/images/audi a4.jpg",
      location: "Denver, CO",
      fuelType: "Diesel",
      transmission: "Automatic",
      seller: "Private Seller",
      features: ["Quattro AWD", "Virtual Cockpit", "Matrix LED"],
      isFeatured: true,
      rating: 4.7,
      reviews: 743,
    },
    {
      id: 4,
      make: "Mercedes",
      model: "C-Class",
      year: 2023,
      price: "₹29,87,889",
      originalPrice: "₹30,50,889",
      mileage: "8,000 km",
      image: "/images/mercedes.jpg",
      location: "Austin, TX",
      fuelType: "Petrol",
      transmission: "Automatic",
      seller: "Certified Dealer",
      features: ["AMG Line", "Burmester Audio", "Panoramic Roof"],
      isFeatured: false,
      rating: 4.9,
      reviews: 456,
    },
    {
      id: 5,
      make: "Honda",
      model: "Civic",
      year: 2022,
      price: "₹24,07,933",
      originalPrice: "₹24,50,933",
      mileage: "18,000 km",
      image: "/images/honda civic.jpg",
      location: "San Francisco, CA",
      fuelType: "Petrol",
      transmission: "CVT",
      seller: "Private Seller",
      features: ["Honda Sensing", "Apple CarPlay", "Android Auto"],
      isFeatured: false,
      rating: 4.5,
      reviews: 678,
    },
    {
      id: 6,
      make: "Toyota",
      model: "Camry",
      year: 2023,
      price: "₹22,40,917",
      originalPrice: "₹22,80,917",
      mileage: "10,000 km",
      image: "/images/toyota camry.jpg",
      location: "Los Angeles, CA",
      fuelType: "Hybrid",
      transmission: "CVT",
      seller: "Certified Dealer",
      features: ["Toyota Safety Sense", "JBL Audio", "Heated Seats"],
      isFeatured: false,
      rating: 4.7,
      reviews: 567,
    },
  ]

  const marketplaceStats = [
    {
      title: "Cars Listed",
      value: "50,000+",
      icon: <Layers className="size-6" />,
      change: "+12% this month",
    },
    {
      title: "Cars Sold",
      value: "₹207.5Cr+",
      icon: <BarChart className="size-6" />,
      change: "+8% this month",
    },
    {
      title: "Happy Customers",
      value: "1M+",
      icon: <Users className="size-6" />,
      change: "+15% this month",
    },
    {
      title: "Average Days to Sell",
      value: "14 days",
      icon: <TrendingUp className="size-6" />,
      change: "-2 days improved",
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
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/health"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Car Health
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
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
          className="text-center mb-12"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Car Marketplace
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Buy & Sell Cars with Confidence</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find your perfect car or sell your current one with our secure and trusted marketplace.
          </p>

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
        </motion.div>

        {/* Marketplace Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-12">
          {marketplaceStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{stat.title}</p>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                <Input
                  placeholder="Search make, model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-20k">Under ₹16.6L</SelectItem>
                  <SelectItem value="20k-30k">₹16.6L - ₹24.9L</SelectItem>
                  <SelectItem value="30k-50k">₹24.9L - ₹41.5L</SelectItem>
                  <SelectItem value="over-50k">Over ₹41.5L</SelectItem>
                </SelectContent>
              </Select>
              <Select value={carType} onValueChange={setCarType}>
                <SelectTrigger>
                  <SelectValue placeholder="Car Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="coupe">Coupe</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                </SelectContent>
              </Select>
              <Button className="flex items-center gap-2">
                <Filter className="size-4" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for different views */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Cars</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recently Added</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCars.map((car, i) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md group">
                    <div className="relative">
                      <div className="aspect-video relative">
                        <Image
                          src={car.image || "/placeholder.svg"}
                          alt={`${car.year} ${car.make} ${car.model}`}
                          fill
                          className="object-cover"
                        />
                        {car.isFeatured && <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>}
                        {car.originalPrice && (
                          <Badge variant="destructive" className="absolute top-2 right-2">
                            Price Drop
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                        <Button size="icon" variant="secondary" className="size-8">
                          <Heart className="size-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="size-8">
                          <Share className="size-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold">
                          {car.year} {car.make} {car.model}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {car.seller}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-2xl font-bold text-primary">{car.price}</span>
                          {car.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">{car.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Settings className="size-3" />
                          {car.mileage}
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel className="size-3" />
                          {car.fuelType}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="size-3" />
                          {car.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Settings className="size-3" />
                          {car.transmission}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {car.features.slice(0, 3).map((feature, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 rounded-full">View Details</Button>
                        <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                          <Phone className="size-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                          <MessageCircle className="size-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCars
                .filter((car) => car.isFeatured)
                .map((car, i) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                        <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">
                          {car.year} {car.make} {car.model}
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-primary">{car.price}</span>
                          <span className="text-sm text-muted-foreground">{car.mileage}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{car.location}</p>
                        <Button className="w-full rounded-full">View Details</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCars.slice(0, 3).map((car, i) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      <Badge variant="secondary" className="absolute top-2 left-2">
                        New Listing
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        {car.year} {car.make} {car.model}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-primary">{car.price}</span>
                        <span className="text-sm text-muted-foreground">{car.mileage}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{car.location}</p>
                      <Button className="w-full rounded-full">View Details</Button>
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
