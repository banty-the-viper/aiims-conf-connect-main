"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MapPin, Coffee, Utensils, ArrowLeft, Clock, Star, ChevronRight, Heart, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function PlacesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const attractions = [
    {
      name: "Lingaraj Temple",
      description:
        "Lingaraja Temple is a Hindu temple dedicated to Shiva and is one of the oldest temples in Bhubaneswar, the capital of the Indian state of Odisha, India. The Lingaraja temple is the largest temple in Bhubaneswar.",
      distance: "12 km from venue",
      category: "Historical",
      image: "/Aiims-uploads/c45dede2-490a-45cb-9710-961fff571407.png",
      visitTime: "2-3 hours",
      rating: 4.8,
    },
    {
      name: "Udayagiri and Khandagiri Caves",
      description:
        "Udayagiri and Khandagiri caves, formerly called Katraka Gumpha or Cuttack caves, are partly natural and partly artificial caves of archaeological, historical and religious importance 3 kms south of the city of Bhubaneswar in Odisha, India.",
      distance: "8 km from venue",
      category: "Historical",
      visitTime: "3-4 hours",
      image: "/places/PHYSICON 2025_2ND ANNOUNCEMENT.pdf-image-137.png?height=400&width=600",
      rating: 4.6,
    },
    {
      name: "Konark Sun Temple",
      description:
        "Konark Sun Temple is a 13th-century CE Hindu Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India. The temple is attributed to king Narasingha Deva I of the Eastern Ganga dynasty about 1250 CE.",
      distance: "65 km from venue",
      category: "Historical",
      visitTime: "Half day",
      image: "/places/PHYSICON 2025_2ND ANNOUNCEMENT.pdf-image-150.jpg?height=400&width=600",
      rating: 4.9,
    },
    {
      name: "Dhauli Shanti Stupa",
      description:
        "Shanti Stupa of Dhauligiri is also known as the Peace Pagoda. Dhauligiri lies at a distance of 7 Km from Bhubaneswar. As one travels from Bhubaneswar to Puri, one finds Shanti Stupa. The word 'shanti' in the name itself suggests peace.",
      distance: "7 km from venue",
      category: "Historical",
      visitTime: "1-2 hours",
      image: "/places/PHYSICON 2025_2ND ANNOUNCEMENT.pdf-image-122.jpg?height=400&width=600",
      rating: 4.5,
    },
    {
      name: "Shree Jagannath Temple, Puri",
      description:
        "The Jagannath Temple is a Hindu temple dedicated to the god Jagannath, a form of Vishnu in Hinduism and two of his siblings, Balaram and Subhadra, alongside Sudarshan (the deified form of Vishnu's primary weapon).",
      distance: "60 km from venue",
      category: "Historical",
      visitTime: "Half day",
      image: "/places/PHYSICON 2025_2ND ANNOUNCEMENT.pdf-image-128.png?height=400&width=600",
      rating: 4.9,
    },
    // {
    //   name: "Nandankanan Zoological Park",
    //   description: "Famous for its white tigers and various other wildlife species in a natural setting.",
    //   distance: "15 km from venue",
    //   category: "Nature",
    //   visitTime: "Full day",
    //   image: "/placeholder.svg?height=400&width=600",
    //   rating: 4.7,
    // },
    // {
    //   name: "Chilika Lake",
    //   description: "Asia's largest brackish water lagoon, famous for migratory birds and Irrawaddy dolphins.",
    //   distance: "100 km from venue",
    //   category: "Nature",
    //   visitTime: "Full day",
    //   image: "/placeholder.svg?height=400&width=600",
    //   rating: 4.8,
    // },
  ]

  const categories = ["All", ...new Set(attractions.map((attraction) => attraction.category))]

  const filteredAttractions =
    activeCategory === "All" ? attractions : attractions.filter((a) => a.category === activeCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Historical":
        return {
          bg: "bg-gradient-to-r from-amber-500 to-orange-600",
          text: "text-white",
          light: "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800",
        }
      case "Nature":
        return {
          bg: "bg-gradient-to-r from-emerald-500 to-green-600",
          text: "text-white",
          light: "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800",
        }
      default:
        return {
          bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
          text: "text-white",
          light: "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800",
        }
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-maroon-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-100/20 to-transparent rounded-full blur-3xl" /> */}

      <div className="absolute top-4 left-4 z-10">
        <Link to="/">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-maroon-700 hover:text-maroon-800 hover:bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-maroon-100 text-maroon-700 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Explore Bhubaneswar
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-600 bg-clip-text text-transparent">
              Places to Visit
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore local attractions, cultural sites, and recommended places to visit during your stay in Bhubaneswar.
          </p>
        </div>

        <div className="space-y-24">
          {/* Tourist Attractions */}
          <section>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-maroon-600 to-maroon-700 rounded-2xl shadow-lg">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Tourist Attractions</h2>
              </div>

              {/* Category filter */}
              {/* <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                      ? "bg-maroon-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div> */}
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredAttractions.map((attraction, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-0 relative z-10 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-t-3xl">
                      <img
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Category badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getCategoryColor(attraction.category).bg
                            } ${getCategoryColor(attraction.category).text}`}
                        >
                          {attraction.category}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-bold text-gray-800">{attraction.rating}</span>
                      </div>

                      {/* Save button */}
                      <button className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:text-maroon-600 transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="p-6 space-y-4 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-maroon-800 transition-colors">
                        {attraction.name}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                        {attraction.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 text-maroon-600" />
                          <span className="font-medium">{attraction.distance}</span>
                        </div>

                        {attraction.visitTime && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4 text-maroon-600" />
                            <span className="font-medium">{attraction.visitTime}</span>
                          </div>
                        )}
                      </div>

                      {/* View details button */}
                      {/* <button className="w-full mt-2 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-maroon-50 hover:to-maroon-100 text-gray-700 hover:text-maroon-700 rounded-xl text-sm font-medium transition-all border border-gray-200 hover:border-maroon-200">
                        View Details
                        <ChevronRight className="h-4 w-4" />
                      </button> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Food & Dining */}
          {/* <section>
            <div className="flex items-center gap-3 mb-12">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg">
                <Utensils className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Food & Dining</h2>
            </div>

            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-full min-h-[300px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/placeholder.svg?height=600&width=800')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
                      <div className="max-w-xs">
                        <h3 className="text-2xl font-bold text-white mb-4">Traditional Odia Cuisine</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          Don't miss trying Dalma (lentil preparation with vegetables), Pakhala (fermented rice), and
                          various seafood preparations that are unique to Odia cuisine.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-white to-orange-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Restaurants</h3>

                    <div className="space-y-4">
                      {[
                        {
                          name: "Dalma",
                          description: "Authentic Odia cuisine in a traditional setting",
                          rating: 4.8,
                          priceRange: "$$",
                        },
                        {
                          name: "Mayfair Lawns",
                          description: "Fine dining with a mix of Indian and international cuisine",
                          rating: 4.9,
                          priceRange: "$$$",
                        },
                        {
                          name: "Odisha Hotel",
                          description: "Traditional thali meals at affordable prices",
                          rating: 4.6,
                          priceRange: "$",
                        },
                        {
                          name: "Mainland China",
                          description: "Premium Asian cuisine with elegant ambiance",
                          rating: 4.7,
                          priceRange: "$$$",
                        },
                      ].map((restaurant, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-orange-100 hover:shadow-md hover:border-orange-200 transition-all"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-orange-500 font-bold text-lg">
                            {restaurant.name.charAt(0)}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-gray-900">{restaurant.name}</h4>
                            <p className="text-sm text-gray-600">{restaurant.description}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                              <span className="text-xs font-bold text-gray-800">{restaurant.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">{restaurant.priceRange}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-6">
                        View All Restaurants
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section> */}

          {/* Shopping */}
          {/* <section>
            <div className="flex items-center gap-3 mb-12">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                <Coffee className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Shopping & Souvenirs</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="md:col-span-2 border-0 shadow-2xl rounded-3xl overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 bg-gradient-to-br from-white to-purple-50">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Crafts & Souvenirs</h3>

                      <div className="space-y-4">
                        {[
                          {
                            name: "Sambalpuri Textiles",
                            description: "Traditional handloom products with unique patterns",
                            image: "/placeholder.svg?height=100&width=100",
                          },
                          {
                            name: "Pipili Appliqué Work",
                            description: "Colorful patchwork with intricate designs",
                            image: "/placeholder.svg?height=100&width=100",
                          },
                          {
                            name: "Dokra Metal Craft",
                            description: "Tribal metal craft using lost-wax casting technique",
                            image: "/placeholder.svg?height=100&width=100",
                          },
                          {
                            name: "Pattachitra Paintings",
                            description: "Traditional cloth-based scroll paintings",
                            image: "/placeholder.svg?height=100&width=100",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-purple-100 hover:shadow-md hover:border-purple-200 transition-all"
                          >
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-xl"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative h-full min-h-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: "url('/placeholder.svg?height=600&width=800')",
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent flex items-center justify-end p-8">
                        <div className="max-w-xs text-right">
                          <h3 className="text-2xl font-bold text-white mb-4">Take Home a Piece of Odisha</h3>
                          <p className="text-gray-200 text-sm leading-relaxed">
                            Discover unique handicrafts and souvenirs that showcase the rich cultural heritage of
                            Odisha.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-6">Where to Shop</h3>

                  <div className="space-y-4 flex-grow">
                    {[
                      {
                        name: "Ekamra Haat",
                        description: "Handicraft market with authentic local products",
                        address: "Near Bhubaneswar Exhibition Ground",
                      },
                      {
                        name: "Utkalika",
                        description: "State emporium for handloom and handicrafts",
                        address: "Sahid Nagar, Bhubaneswar",
                      },
                      {
                        name: "Market Building",
                        description: "Central shopping area with various stores",
                        address: "Unit-II, Bhubaneswar",
                      },
                    ].map((shop, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-colors"
                      >
                        <h4 className="font-bold text-white">{shop.name}</h4>
                        <p className="text-sm text-purple-100">{shop.description}</p>
                        <p className="text-xs text-purple-200 mt-1">{shop.address}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-6">
                      View Shopping Map
                      <MapPin className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  )
}
