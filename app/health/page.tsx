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
import { useTheme } from "next-themes"

export default function HomePage() {
  const [selectedCar] = useState("BMW X5")

  const healthMetrics = [
    {
      title: "Engine Health",
      value: 85,
      status: "Good",
      icon: <Car className="size-5" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Battery Level",
      value: 92,
      status: "Excellent",
      icon: <Battery className="size-5" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Brake System",
      value: 78,
      status: "Good",
      icon: <Gauge className="size-5" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Tire Condition",
      value: 65,
      status: "Fair",
      icon: <AlertTriangle className="size-5" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  const alerts = [
    {
      type: "warning",
      title: "Oil Change Due",
      description: "Your next oil change is due in 500 miles",
      icon: <Wrench className="size-4" />,
      date: "Due in 2 weeks",
    },
    {
      type: "info",
      title: "Tire Rotation Recommended",
      description: "Consider rotating tires for even wear",
      icon: <Car className="size-4" />,
      date: "Recommended",
    },
    {
      type: "critical",
      title: "Low Brake Fluid",
      description: "Brake fluid level is below recommended",
      icon: <AlertTriangle className="size-4" />,
      date: "Immediate attention",
    },
  ]

  const maintenanceHistory = [
    {
      date: "2024-01-15",
      service: "Oil Change",
      mileage: "45,230",
      cost: "₹3,816",
      status: "completed",
    },
    {
      date: "2023-12-10",
      service: "Brake Inspection",
      mileage: "44,890",
      cost: "₹89.99",
      status: "completed",
    },
    {
      date: "2023-11-05",
      service: "Tire Rotation",
      mileage: "44,200",
      cost: "₹29.99",
      status: "completed",
    },
  ]

  const upcomingMaintenance = [
    {
      service: "Oil Change",
      dueDate: "2024-02-15",
      dueMileage: "47,500",
      estimatedCost: "₹3,816",
    },
    {
      service: "Brake Pad Replacement",
      dueDate: "2024-03-01",
      dueMileage: "48,000",
      estimatedCost: "₹189.99",
    },
    {
      service: "Air Filter Replacement",
      dueDate: "2024-04-10",
      dueMileage: "50,000",
      estimatedCost: "₹35.99",
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
            <span>Carrify</span>
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
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
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
              Log in
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
          className="mb-8"
        >
          <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            Car Health Dashboard
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Vehicle Health Monitor</h1>
          <p className="text-lg text-muted-foreground">
            Keep track of your cars health with real-time diagnostics and maintenance alerts.
          </p>
        </motion.div>

        {/* Car Selection */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{selectedCar}</h3>
                <p className="text-muted-foreground">Current Mileage: 46,750 miles</p>
              </div>
              <Button variant="outline">Switch Vehicle</Button>
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {healthMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-full ${metric.bgColor}`}>
                      <div className={metric.color}>{metric.icon}</div>
                    </div>
                    <Badge variant={metric.value > 80 ? "default" : metric.value > 60 ? "secondary" : "destructive"}>
                      {metric.status}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{metric.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Health Score</span>
                      <span className="font-medium">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="alerts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="alerts">Alerts & Notifications</TabsTrigger>
            <TabsTrigger value="history">Maintenance History</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Services</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Active Alerts</h2>
              {alerts.map((alert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card
                    className={`border-l-4 ${
                      alert.type === "critical"
                        ? "border-l-red-500"
                        : alert.type === "warning"
                          ? "border-l-yellow-500"
                          : "border-l-blue-500"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-2 rounded-full ${
                            alert.type === "critical"
                              ? "bg-red-500/10 text-red-500"
                              : alert.type === "warning"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {alert.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{alert.title}</h3>
                          <p className="text-muted-foreground mb-2">{alert.description}</p>
                          <p className="text-sm font-medium">{alert.date}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Schedule Service
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Maintenance History</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {maintenanceHistory.map((record, i) => (
                      <div key={i} className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-full bg-green-500/10">
                            <CheckCircle className="size-4 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{record.service}</h3>
                            <p className="text-sm text-muted-foreground">
                              {record.date} • {record.mileage} miles
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{record.cost}</p>
                          <Badge variant="outline" className="text-xs">
                            Completed
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Upcoming Maintenance</h2>
              <div className="grid gap-4">
                {upcomingMaintenance.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-full bg-blue-500/10">
                              <Calendar className="size-4 text-blue-500" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{service.service}</h3>
                              <p className="text-sm text-muted-foreground">
                                Due: {service.dueDate} • {service.dueMileage} miles
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{service.estimatedCost}</p>
                            <Button size="sm" className="mt-2">
                              Schedule Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
