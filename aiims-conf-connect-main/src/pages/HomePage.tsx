"use client"
import { Link } from "react-router-dom";
import { CalendarCheck, UserPlus, Users, FileText, Plane, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Enhanced scroll animation observer with better threshold settings
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")

            // For debugging purposes
            console.log(`Element with class ${entry.target.className} is now visible`)
          }
        })
      },
      {
        threshold: 0.15, // Lower threshold to trigger earlier
        rootMargin: "0px 0px -100px 0px", // Trigger before element reaches bottom of viewport
      },
    )

    const scrollElements = document.querySelectorAll(".scroll-fade-in")
    scrollElements.forEach((el) => {
      // Ensure elements start as invisible
      el.classList.remove("visible")
      observer.observe(el)
    })

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience-physicon-2025")
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with improved height, styling, and animations */}
      <section
        className="relative min-h-[100vh] flex items-center py-20 md:py-0 overflow-hidden"
        style={{
          backgroundImage: "url('/bgimage.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for better text visibility */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"
          style={{ backdropFilter: "blur(3px)" }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10 py-16 mt-20">
          <div className="text-center mx-auto">
            {/* PHYSICON 2025 Title with improved styling */}
            <h1
              className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-loose mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <span className="relative">
                <span className="text-white">PHYSICON 2025</span>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-5xl text-white mb-8 mt-14 animate-fade-up opacity-0 whitespace-nowrap text-ellipsis"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              The XXXVI Annual Conference of The Physiological Society of India
            </p>

            <div
              className="mt-10 mb-12 animate-fade-up opacity-0"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              <div
                className="px-8 py-4 rounded-md inline-block backdrop-blur-md"
                style={{
                  backgroundColor: "#fce4ec", // light pink
                }}
              >
                <p className="text-lg md:text-3xl font-medium" style={{ color: "rgb(95, 21, 21)" }}>
                  Innovations in Physiology; From Cell to Systems
                </p>
              </div>
            </div>

            {/* Conference dates with improved styling */}
            <div
              className="bg-maroon-800/90 backdrop-blur-md text-white p-6 rounded-lg max-w-6xl mx-auto mb-12 animate-fade-up opacity-0 mt-20"
              style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
              <p className="text-lg md:text-3xl whitespace-nowrap">
                Pre-conference - 20<sup>th</sup> November | Conference - 21<sup>st</sup> November - 23<sup>rd</sup>{" "}
                November
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-up opacity-0"
              style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
            >
              <Link to="/registration-details">
                <Button
                  size="lg"
                  className="bg-maroon-700 hover:bg-maroon-800 text-white font-medium px-6 py-3 text-base sm:text-lg h-auto transition-transform hover:scale-105"
                >
                  Register Now
                </Button>
              </Link>
              <Button
                // onClick={scrollToExperience}
                onClick={() => window.open("/PHYSICON_2025.pdf", "_blank")}
                size="lg"
                className="bg-maroon-700 text-white hover:bg-maroon-800 font-medium px-6 py-3 text-base sm:text-lg h-auto transition-transform hover:scale-105"
              >
                Event Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
      <marquee>Abstract submission last date has been extended to 30.09.25  and Early bird registration is extended till 15.10.25</marquee>         
       
      {/* Welcome to PHYSICON 2025 section */}
      {/* <section className="py-20 overflow-hidden relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/a8b3ebdd-c1c9-4d8d-98c5-86355635b79d.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-white to-maroon-50 z-0 opacity-90"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-maroon-800 mb-10 text-center scroll-fade-in">
              Welcome to PHYSICON 2025
            </h2>

            <div className="space-y-8 text-gray-700 welcome-text">
              <p className="text-xl leading-relaxed scroll-fade-in opacity-0" style={{ transitionDelay: "0.2s" }}>
                Together, let us celebrate the boundless curiosity that drives human understanding at PHYSICON 2025 — a
                spectacular convergence of knowledge, discovery, and innovation. This prestigious three days of Conference along with one day of pre-conference workshop,
                hosted by the Department of Physiology, AIIMS Bhubaneswar, is dedicated to unraveling the wonders of
                human biology — from the intricacies of single cells to the complexities of entire systems.
              </p>

              <p className="text-xl leading-relaxed scroll-fade-in opacity-0" style={{ transitionDelay: "0.4s" }}>
                With the inspiring theme <strong>From Cells to Systems</strong>, PHYSICON 2025 brings together leading
                researchers, academicians, clinicians, and students from across the nation and beyond. Over the next few
                days, we will explore <em>groundbreaking advancements</em>, foster <em>meaningful collaborations</em>,
                and celebrate the <em>vibrant spirit</em> of physiological research.
              </p>

              <p className="text-xl leading-relaxed scroll-fade-in opacity-0" style={{ transitionDelay: "0.6s" }}>
                We invite you to immerse yourself in thought-provoking sessions, dynamic discussions, and hands-on
                experiences that will shape the future of medicine and biomedical sciences. Let us embark on this
                exciting journey together — a journey from the <strong>microscopic to the macroscopic</strong>, from{" "}
                <strong>foundational science to transformative healthcare</strong>.
              </p>
            </div>

            <div className="mt-10 flex justify-center scroll-fade-in opacity-0" style={{ transitionDelay: "0.8s" }}>
              <Link to="/about">
                <Button className="bg-maroon-700 hover:bg-maroon-800 text-white transform transition-all duration-300 hover:scale-105">
                  Learn More About the Conference
                </Button>
              </Link>
            </div> 
          </div>
        </div>
      </section> */}

      <section className="py-20 overflow-hidden relative">
        {/* Background image with contain to avoid cropping */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/a8b3ebdd-c1c9-4d8d-98c5-86355635b79d.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-maroon-50 z-0 opacity-90"></div>

        <div className=" container px-4 md:px-6 mx-auto relative z-10" style={{display:"flex",flexDirection:windowSize?.width < 800 ? "column":"row"}}>
          <div className="max-w-4xl mx-auto" style={{width:windowSize?.width < 800 ?"100%":"50%"}}>
            <h2 className="text-3xl md:text-5xl font-bold text-maroon-800 mb-10 text-center scroll-fade-in">
              Welcome to PHYSICON 2025
            </h2>


            <div className="space-y-8 text-gray-700 welcome-text">
              <p className="text-xl leading-relaxed scroll-fade-in opacity-0" style={{ transitionDelay: "0.2s" }}>
                Together, let us celebrate the boundless curiosity that drives human understanding at PHYSICON 2025 — a spectacular convergence of knowledge, discovery, and innovation. This prestigious four-day conference, hosted by the Department of Physiology, AIIMS Bhubaneswar, is dedicated to unraveling the wonders of human biology — from the intricacies of single cells to the complexities of entire systems.
              </p>

              <p className="text-xl leading-relaxed scroll-fade-in opacity-0" style={{ transitionDelay: "0.4s" }}>
                With the inspiring theme <strong>From Cells to Systems</strong>, PHYSICON 2025 brings together leading researchers, academicians, clinicians, and students from across the nation and beyond. Over the next few days, we will explore <em>groundbreaking advancements</em>, foster <em>meaningful collaborations</em>, and celebrate the <em>vibrant spirit</em> of physiological research.
              </p>

              <p className="text-xl leading-relaxed scroll-fade-in opacity-0" style={{ transitionDelay: "0.6s" }}>
                We invite you to immerse yourself in thought-provoking sessions, dynamic discussions, and hands-on experiences that will shape the future of medicine and biomedical sciences. Let us embark on this exciting journey together — a journey from the <strong>microscopic to the macroscopic</strong>, from <strong>foundational science to transformative healthcare</strong>.
              </p>
            </div>

            <div className="mt-10 flex justify-center scroll-fade-in opacity-0" style={{ transitionDelay: "0.8s" }}>
              <Link to="/about">
                <Button className="bg-maroon-700 hover:bg-maroon-800 text-white transform transition-all duration-300 hover:scale-105">
                  Learn More About the Conference
                </Button>
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto"  style={{width:windowSize?.width < 800 ?"100%":"50%",marginTop:windowSize?.width < 800 ?39:0}}>
          <div className="max-w-4xl mx-auto md-w-2xl">
          
          <img src="/PHYSICON 2025_CALL FOR ABSTRACT final.png" alt="Background" style={{width:"100%",height:"100%"}} />
          </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights with maroon theme - with fixed positioning */}
      <section id="experience-physicon-2025" className="relative py-16 bg-gradient-to-b from-maroon-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-maroon-800 md:text-4xl animate-fade-up delay-100">
              Experience PHYSICON 2025
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-up delay-200">
              Discover the highlights that make this conference unmissable — from expert-led sessions to hands-on
              workshops.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link to="/events">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-fade-up h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-maroon-50 p-3 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                    <CalendarCheck className="h-7 w-7 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-maroon-600 transition-colors">Event Details</h3>
                  <p className="text-gray-600">
                    View the comprehensive schedule and details for all conference events, sessions, and activities.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/registration-details">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-fade-up delay-100 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-maroon-50 p-3 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                    <UserPlus className="h-7 w-7 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-maroon-600 transition-colors">Registration</h3>
                  <p className="text-gray-600">
                    Register for the conference and select your participation options, workshop preferences, and more.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/speakers">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-fade-up delay-200 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-maroon-50 p-3 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                    <Users className="h-7 w-7 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-maroon-600 transition-colors">Expert Speakers</h3>
                  <p className="text-gray-600">
                    Learn from internationally renowned medical experts and researchers from top institutions around the
                    world.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/abstract">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-fade-up delay-100 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-maroon-50 p-3 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                    <FileText className="h-7 w-7 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-maroon-600 transition-colors">Call for Participation(symposium/ abstract)</h3>
                  <p className="text-gray-600">
                    Submit your research abstract for consideration and potential presentation at the conference.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/travel">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-fade-up delay-200 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-maroon-50 p-3 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                    <Plane className="h-7 w-7 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-maroon-600 transition-colors">
                    Travel and Accommodation
                  </h3>
                  <p className="text-gray-600">
                    Find information about conference venue, nearby hotels, transportation options, and travel
                    recommendations.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/places">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group animate-fade-up delay-300 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-maroon-50 p-3 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-maroon-100 transition-colors">
                    <MapPin className="h-7 w-7 text-maroon-600" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-maroon-600 transition-colors">Places to Visit</h3>
                  <p className="text-gray-600">
                    Explore local attractions, cultural sites, and recommended places to visit during your stay.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Vertical Timeline Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-maroon-100 text-maroon-700 rounded-full text-sm font-semibold mb-6 animate-fade-up">
              <CalendarCheck className="w-4 h-4 mr-2" />
              Conference Schedule
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-maroon-800 mb-6 animate-fade-up delay-100">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up delay-200">
              Join us for four days of groundbreaking research, networking, and innovation in physiology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Vertical Timeline */}
            <div className="relative">
              {/* Central vertical line */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-maroon-200 via-maroon-400 to-maroon-600"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Day 1 */}
                <div className="relative flex items-center animate-fade-up delay-100">
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-maroon-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  {/* Connection line for desktop - left side */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-16 h-0.5 bg-maroon-300 transform -translate-y-1/2 -translate-x-1/2 -ml-16"></div>
                  {/* Connection line for mobile */}
                  <div className="md:hidden absolute left-8 top-1/2 w-12 h-0.5 bg-maroon-300 transform -translate-y-1/2"></div>

                  <div className="ml-20 md:ml-0 md:w-5/12 md:pr-8">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
                      <div className="flex items-center mb-4">
                        <div className="bg-maroon-100 p-2 rounded-lg mr-4">
                          <CalendarCheck className="w-6 h-6 text-maroon-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-maroon-800">November 20</h3>
                          <p className="text-maroon-600 font-semibold">Pre-Conference Day</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Registration opens, welcome kit distribution, and specialized pre-conference workshops. Network
                        with fellow researchers and get oriented with the conference venue.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium">
                          Registration
                        </span>
                        <span className="px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium">
                          Workshops
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 2-3 */}
                <div className="relative flex items-center animate-fade-up delay-200">
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-maroon-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  {/* Connection line for desktop - right side */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-16 h-0.5 bg-maroon-300 transform -translate-y-1/2 translate-x-1/2 ml-0"></div>
                  {/* Connection line for mobile */}
                  <div className="md:hidden absolute left-8 top-1/2 w-12 h-0.5 bg-maroon-300 transform -translate-y-1/2"></div>

                  <div className="ml-20 md:ml-0 md:w-5/12 md:ml-auto md:pl-8">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-maroon-100 p-2 rounded-lg mr-4">
                          <Users className="w-6 h-6 text-maroon-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-maroon-800">November 21-22</h3>
                          <p className="text-maroon-600 font-semibold">Main Conference</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Keynote speeches from renowned experts, panel discussions on cutting-edge research, research
                        presentations, and hands-on specialized workshops covering the latest in physiology.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium">
                          Keynotes
                        </span>
                        <span className="px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium">
                          Presentations
                        </span>
                        <span className="px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium">
                          Panels
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="relative flex items-center animate-fade-up delay-300">
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-maroon-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  {/* Connection line for desktop - left side */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-16 h-0.5 bg-maroon-300 transform -translate-y-1/2 -translate-x-1/2 -ml-16"></div>
                  {/* Connection line for mobile */}
                  <div className="md:hidden absolute left-8 top-1/2 w-12 h-0.5 bg-maroon-300 transform -translate-y-1/2"></div>

                  <div className="ml-20 md:ml-0 md:w-5/12 md:pr-8">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-maroon-100 p-2 rounded-lg mr-4">
                          <FileText className="w-6 h-6 text-maroon-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-maroon-800">November 23</h3>
                          <p className="text-maroon-600 font-semibold">Closing Day</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Final research presentations, awards ceremony recognizing outstanding contributions, and closing
                        remarks summarizing the conference achievements and future directions.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium">
                          Awards
                        </span>
                        <span className="px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-medium">
                          Closing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with maroon theme */}
      <section className="relative py-14 overflow-hidden bg-gradient-to-r from-maroon-700 to-maroon-900 ">
        <div className="absolute bottom-1 left-0 w-full h-40 overflow-hidden z-0 ">
          <div className="w-[110%] h-full animate-wave-scroll">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                fill="#AD9976"
                fillOpacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"
              />
            </svg>
          </div>
        </div>

        <div className="container px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white animate-fade-up">Ready to join us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-100 animate-fade-up delay-100">
            Secure your spot at this premier physiology conference. Join leading researchers and practitioners at
            PHYSICON 2025.
          </p>
          <Link to="/registration-details">
            <Button
              size="lg"
              className="bg-maroon-700 hover:bg-maroon-800 text-white font-medium px-6 py-3 text-base sm:text-lg h-auto transition-transform hover:scale-105"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}