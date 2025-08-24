// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Building, MapPin, Plane, Bus, Hotel, ArrowLeft, Phone, Info, ExternalLink } from "lucide-react";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// export default function TravelPage() {
//   const hotelData = [
//     // High-End
//     { category: "High-End", name: "MAYFAIR Lagoon, Bhubaneswar", tariff: "8,000 upwards", contact: "+91 92375 00101" },
//     { category: "High-End", name: "Welcomhotel by ITC Hotels", tariff: "7,000 upwards", contact: "+91 674 714 7140" },
//     { category: "High-End", name: "Trident Bhubaneswar", tariff: "6,000 upwards", contact: "Contact via booking sites)" },
//     { category: "High-End", name: "The Crown, Bhubaneswar - IHCL SeleQtions", tariff: "5,500 upwards", contact: "+91 19127 40050" },
//     { category: "High-End", name: "Vivanta Bhubaneswar DN Square", tariff: "5,000 upwards", contact: "+91 674 674 6888" },
//     { category: "High-End", name: "Swosti Premium", tariff: "4,500 upwards", contact: "Contact via booking sites)" },

//     // Mid-Range
//     { category: "Mid-Range", name: "The New Marrion", tariff: "4,000 - 6,000", contact: "Contact via booking sites)" },
//     { category: "Mid-Range", name: "Mayfair Convention", tariff: "3,500 - 5,500", contact: "Contact via booking sites)" },
//     { category: "Mid-Range", name: "Hotel Pushpak", tariff: "3,000 - 5,000", contact: "Contact via booking sites)" },
//     { category: "Mid-Range", name: "Empires Hotel Bhubaneswar", tariff: "3,000 - 5,000", contact: "+91 93380 16624" },
//     { category: "Mid-Range", name: "Ginger Bhubaneswar", tariff: "2,500 - 4,000", contact: "+91 674 666 3333" },
//     { category: "Mid-Range", name: "Hotel Sandy's Tower", tariff: "2,500 - 4,000", contact: "Contact via booking sites)" },

//     // Budget-Friendly
//     { category: "Budget-Friendly", name: "Hotel Eden Roc", tariff: "2,000 - 3,000", contact: "Contact via booking sites)" },
//     { category: "Budget-Friendly", name: "Hotel Nirmal Inn", tariff: "1,200 - 2,500", contact: "Contact via booking sites)" },
//     { category: "Budget-Friendly", name: "Hotel Vintage Villa", tariff: "1,000 - 2,000", contact: "Contact via booking sites)" },
//     { category: "Budget-Friendly", name: "Ratna Resort", tariff: "1,000 - 2,000", contact: "+91 79786 72184" },
//     { category: "Budget-Friendly", name: "Hello Stay Hotel Bhubaneswar", tariff: "800 - 1,500", contact: "+91 90360 74897" },
//     { category: "Budget-Friendly", name: "Janapath Inn", tariff: "800 - 1,500", contact: "+91 82807 75539" },
//   ];

//   const groupedHotels = hotelData.reduce((acc, hotel) => {
//     if (!acc[hotel.category]) {
//       acc[hotel.category] = [];
//     }
//     acc[hotel.category].push(hotel);
//     return acc;
//   }, {} as Record<string, typeof hotelData>);

//   return (
//     <div className="relative">
//       <div className="absolute top-4 left-4 z-10">
//         <Link to="/">
//           <Button
//             variant="ghost"
//             className="flex items-center gap-2 text-maroon-700 hover:text-maroon-800 hover:bg-transparent"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to Home
//           </Button>
//         </Link>
//       </div>

//       <div className="container mx-auto px-4 py-16 max-w-6xl">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-maroon-800 mb-4">Travel & Accommodation</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Find information about the conference venue, nearby hotels, transportation options, and travel recommendations.
//           </p>
//         </div>

//         <div className="space-y-12">
//           {/* Venue Section */}
//           <div className="bg-white rounded-lg shadow-md p-8 border border-maroon-100">
//             <h2 className="text-2xl font-bold text-maroon-800 mb-6 flex items-center gap-2">
//               <Building className="h-6 w-6" />
//               Conference Venue
//             </h2>

//             <div className="space-y-4">
//               <div className="flex flex-col lg:flex-row gap-6">
//                 <div className="lg:w-2/3">
//                   <h3 className="text-xl font-semibold mb-2">AIIMS Bhubaneswar</h3>
//                   <p className="text-gray-700 mb-4">
//                     The conference will be held at the All India Institute of Medical Sciences (AIIMS) Bhubaneswar, a premier medical institution in Eastern India.
//                   </p>
//                   <div className="mb-4">
//                     <p className="flex items-center gap-2 mb-2">
//                       <MapPin className="h-4 w-4 text-maroon-600" />
//                       <span className="text-gray-700">Sijua, Patrapada, Bhubaneswar, Odisha 751019, India</span>
//                     </p>
//                     <a
//                       href="https://maps.app.goo.gl/ykLdzqbQCcd8FES17?g_st=aw"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline"
//                     >
//                       <ExternalLink className="h-4 w-4" />
//                       View on Google Maps
//                     </a>
//                   </div>
//                 </div>
//                 <div className="lg:w-1/3">
//                   <div className="w-full h-64 rounded-md overflow-hidden border border-gray-200">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9147662088756!2d85.82267831495412!3d20.282053320613856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7aeb30b9c65%3A0x3b9d36f2b9b5c5c5!2sAIIMS%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin!3m3!1m2!1s0x3a19a7aeb30b9c65%3A0x3b9d36f2b9b5c5c5!2sAIIMS%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       title="AIIMS Bhubaneswar Location"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Transportation Section */}
//           <div className="bg-white rounded-lg shadow-md p-8 border border-maroon-100">
//             <h2 className="text-2xl font-bold text-maroon-800 mb-6 flex items-center gap-2">
//               <Plane className="h-6 w-6" />
//               Transportation
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">By Air</h3>
//                 <p className="text-gray-700">
//                   Bhubaneswar is well connected by air to major cities in India. The Biju Patnaik International Airport (BBI) is approximately 12 km from the conference venue.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-2">By Train</h3>
//                 <p className="text-gray-700">
//                   Bhubaneswar Railway Station is well connected to major cities across India. The railway station is around 15 km from the conference venue.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-2">Local Transportation</h3>
//                 <p className="text-gray-700">
//                   Taxis, ride-sharing services (Uber, Ola), and auto-rickshaws are readily available for local transportation. The organizing committee will also arrange shuttle services from major hotels to the venue during the conference days.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Accommodation Section */}
//           <div className="bg-white rounded-lg shadow-md p-8 border border-maroon-100">
//             <h2 className="text-2xl font-bold text-maroon-800 mb-6 flex items-center gap-2">
//               <Hotel className="h-6 w-6" />
//               Accommodation
//             </h2>

//             <div className="space-y-6">
//               <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//                 <p className="text-gray-700 mb-2">
//                   A general idea of hotels in Bhubaneswar categorized by likely tariff ranges (from higher to lower) and some examples with available contact details. Please note that the tariffs mentioned are indicative and may vary. It's always best to check the latest prices and availability directly with the hotels or through booking websites.
//                 </p>
//               </div>

//               {Object.entries(groupedHotels).map(([category, hotels]) => (
//                 <Card key={category} className="border border-maroon-100">
//                   <CardHeader>
//                     <CardTitle className="text-xl text-maroon-800">{category}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead className="font-semibold">Hotel Name</TableHead>
//                           <TableHead className="font-semibold">Likely Tariff (INR per night)</TableHead>
//                           <TableHead className="font-semibold">Contact Information</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {hotels.map((hotel, index) => (
//                           <TableRow key={index}>
//                             <TableCell className="font-medium">{hotel.name}</TableCell>
//                             <TableCell>{hotel.tariff}</TableCell>
//                             <TableCell>
//                               {hotel.contact.startsWith('+91') ? (
//                                 <div className="flex items-center gap-1">
//                                   <Phone className="h-4 w-4 text-maroon-600" />
//                                   <span>{hotel.contact}</span>
//                                 </div>
//                               ) : (
//                                 <span className="text-gray-600">{hotel.contact}</span>
//                               )}
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </CardContent>
//                 </Card>
//               ))}

//               {/* Important Notes Section */}
//               <Card className="border border-blue-200 bg-blue-50">
//                 <CardHeader>
//                   <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
//                     <Info className="h-5 w-5" />
//                     Important Notes:
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3 text-gray-700">
//                     <li className="flex items-start gap-2">
//                       <span className="text-blue-600 font-bold mt-1">•</span>
//                       <div>
//                         <strong>Tariff Variation:</strong> The tariffs mentioned are approximate and can change. Always check the latest prices.
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-blue-600 font-bold mt-1">•</span>
//                       <div>
//                         <strong>Contact Information:</strong> For hotels where direct phone numbers are not readily available in the search results, it's best to visit their official websites or use booking platforms to find contact details.
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-blue-600 font-bold mt-1">•</span>
//                       <div>
//                         <strong>Booking Platforms:</strong> Websites like MakeMyTrip, Goibibo, OYO Rooms, Booking.com, and Expedia often provide detailed information and contact options.
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-blue-600 font-bold mt-1">•</span>
//                       <div>
//                         <strong>Corporate Discounts:</strong> Some hotels may offer corporate discounts. It's worth inquiring if you are traveling for business.
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-blue-600 font-bold mt-1">•</span>
//                       <div>
//                         <strong>GST and Extra Charges:</strong> Be aware that the mentioned tariffs might not include GST (Goods and Services Tax) and other extra charges like breakfast.
//                       </div>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-blue-600 font-bold mt-1">•</span>
//                       <div>
//                         <strong>Up-to-date Information:</strong> To get the most accurate and up-to-date information, I recommend visiting the websites of these hotels or using reliable online travel agencies.
//                       </div>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <Link to="/">
//             <Button className="bg-maroon-700 hover:bg-maroon-800">Back to Home</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Hotel, ArrowLeft, Phone, Info } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TravelPage() {
  const hotelData = [
    // High-End
    {
      category: "High-End",
      name: "MAYFAIR Lagoon, Bhubaneswar",
      tariff: "8,000 upwards",
      contact: "+91 92375 00101",
    },
    {
      category: "High-End",
      name: "Welcomhotel by ITC Hotels",
      tariff: "7,000 upwards",
      contact: "+91 6747147140",
    },
    {
      category: "High-End",
      name: "Trident Bhubaneswar",
      tariff: "6,000 upwards",
      contact: "0674-2301010",
    },
    {
      category: "High-End",
      name: "The Crown, Bhubaneswar - IHCL SeleQtions",
      tariff: "5,500 upwards",
      contact: "+91 19127 40050\n0674-3108888",
    },
    {
      category: "High-End",
      name: "Vivanta Bhubaneswar DN Square",
      tariff: "5,000 upwards",
      contact: "+91 674 674 6888\n0674-6888888",
    },
    {
      category: "High-End",
      name: "Swosti Premium",
      tariff: "4,500 upwards",
      contact: "0674-6611111 \n0674-3530600",
    },

    // Mid-Range
    {
      category: "Mid-Range",
      name: "The New Marrion",
      tariff: "4,000 - 6,000",
      contact: "0674-2380850",
    },
    {
      category: "Mid-Range",
      name: "Mayfair Convention",
      tariff: "3,500 - 5,500",
      contact: "0674-2360111",
    },
    {
      category: "Mid-Range",
      name: "Hotel Pushpak",
      tariff: "3,000 - 5,000",
      contact: "0674-2310185",
    },
    {
      category: "Mid-Range",
      name: "Empires Hotel Bhubaneswar",
      tariff: "3,000 - 5,000",
      contact: "+91 93380 16624",
    },
    {
      category: "Mid-Range",
      name: "Ginger Bhubaneswar",
      tariff: "2,500 - 4,000",
      contact: "+91 674 666 3333",
    },
    {
      category: "Mid-Range",
      name: "Hotel Sandy's Tower",
      tariff: "2,500 - 4,000",
      contact: "0674-6665555",
    },

    // Budget-Friendly
    {
      category: "Budget-Friendly",
      name: "Hotel Eden Roc",
      tariff: "2,000 - 3,000",
      contact: "07852938080",
    },
    {
      category: "Budget-Friendly",
      name: "Hotel Nirmal Inn",
      tariff: "1,200 - 2,500",
      contact: "8191900072 \n8191900073",
    },
    {
      category: "Budget-Friendly",
      name: "Hotel Vintage Villa",
      tariff: "1,000 - 2,000",
      contact: "08895222999",
    },
    {
      category: "Budget-Friendly",
      name: "Ratna Resort",
      tariff: "1,000 - 2,000",
      contact: "+91 79786 72184",
    },
    {
      category: "Budget-Friendly",
      name: "Hello Stay Hotel Bhubaneswar",
      tariff: "800 - 1,500",
      contact: "+91 90360 74997",
    },
    {
      category: "Budget-Friendly",
      name: "Janapath Inn",
      tariff: "800 - 1,500",
      contact: "+91 82807 75539",
    },
  ]

  const groupedHotels = hotelData.reduce(
    (acc, hotel) => {
      if (!acc[hotel.category]) {
        acc[hotel.category] = []
      }
      acc[hotel.category].push(hotel)
      return acc
    },
    {} as Record<string, typeof hotelData>,
  )

  const importantNotes = [
    "Tariff Variation: The tariffs mentioned are approximate and can change. Always check the latest prices.",
    "Contact Information: For hotels where direct phone numbers are not readily available in online directories, it's best to visit their official websites or use booking platforms to find contact details.",
    "Booking Platform: Websites like MakeMyTrip, Goibibo, OYO Rooms, Booking.com, and Expedia often provide detailed tariff information and contact options.",
    "Corporate Discounts: Some hotels may offer corporate discounts. It's worth inquiring if you are traveling for business.",
    "GST and Extra Charges: Be aware that the mentioned tariffs might not include GST (Goods and Services Tax) and other charges may also apply.",
    "To get the most accurate and up-to-date information, I recommend visiting the websites of these hotels or using reliable online travel agencies.",
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Top-left back button */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-maroon-700 hover:text-maroon-800 hover:bg-maroon-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-maroon-800 mb-6">Travel & Accommodation</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Find information about the conference venue, nearby hotels, transportation options, and travel
            recommendations for PHYSICON 2025.
          </p>
        </div>

        <div className="space-y-12">
          {/* Accommodation Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-maroon-800 mb-8 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              Accommodation
            </h2>

            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-200">
                <p className="text-gray-700 leading-relaxed">
                  A general idea of hotels in Bhubaneswar categorized by likely tariff ranges (from higher to lower) and
                  some examples with available contact details. Please note that the tariffs mentioned are indicative
                  and may vary. It's always best to check the latest prices and availability directly with the hotels or
                  through booking websites.
                </p>
              </div>

              {/* Hotel Tables by Category */}
              {Object.entries(groupedHotels).map(([category, hotels]) => (
                <Card key={category} className="border-2 border-maroon-200 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-maroon-50 to-maroon-100">
                    <CardTitle className="text-2xl text-maroon-800">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-bold text-gray-900 py-4">Hotel Name</TableHead>
                          <TableHead className="font-bold text-gray-900 py-4">Likely Tariff (per night)</TableHead>
                          <TableHead className="font-bold text-gray-900 py-4">Contact Information</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {hotels.map((hotel, index) => (
                          <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                            <TableCell className="font-medium py-4 text-gray-900">{hotel.name}</TableCell>
                            <TableCell className="py-4 font-semibold text-maroon-700">₹{hotel.tariff}</TableCell>
                            <TableCell className="py-4">
                              <div className="flex items-start gap-2">
                                <Phone className="h-4 w-4 text-maroon-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 whitespace-pre-line">
                                  {hotel.contact ? hotel.contact : "Contact via booking sites"}
                                </span>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              ))}

              {/* Important Notes Section */}
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800 flex items-center gap-3">
                    <Info className="h-6 w-6" />
                    Important Notes:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {importantNotes.map((note, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          •
                        </div>
                        <p className="text-gray-700 leading-relaxed">{note}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button className="bg-maroon-700 hover:bg-maroon-800">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
