
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Award, Users, Presentation, MessageSquare, BookOpen } from "lucide-react";

export default function MainConferencePage() {
  return (
    <div className="relative">
      {/* Top-left back button */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/events">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-maroon-700 hover:text-maroon-800 hover:bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Button>
        </Link>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">Main Conference</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">November 21st-22nd, 2025</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-maroon-100 mb-8">
          <div className="text-center mb-8">
            <Calendar className="w-16 h-16 text-maroon-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-maroon-800 mb-4">Highlights of the Event</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us for an exceptional gathering of physiologists featuring cutting-edge research and educational
              excellence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-lg p-6 border border-maroon-200 overflow-hidden">
              <Award className="absolute top-4 right-4 w-24 h-24 text-maroon-200 opacity-30" />
              <div className="relative z-10">
                <h3 className="font-semibold text-maroon-800 mb-3 text-lg">Keynote Lectures</h3>
                <p className="text-gray-700">
                  Keynote Lectures by eminent physiologists
                  of national and international repute
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-lg p-6 border border-maroon-200 overflow-hidden">
              <BookOpen className="absolute top-4 right-4 w-24 h-24 text-maroon-200 opacity-30" />
              <div className="relative z-10">
                <h3 className="font-semibold text-maroon-800 mb-3 text-lg">Plenary Lectures</h3>
                <p className="text-gray-700">
                  Comprehensive overviews deliberating the themes of the symposiums and current research trends.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-lg p-6 border border-maroon-200 overflow-hidden">
              <Users className="absolute top-4 right-4 w-24 h-24 text-maroon-200 opacity-30" />
              <div className="relative z-10">
                <h3 className="font-semibold text-maroon-800 mb-3 text-lg">Symposiums</h3>
                <p className="text-gray-700">
                  Sessions oscillating from cellular to system physiology, covering the full spectrum of physiological
                  research.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-lg p-6 border border-maroon-200 overflow-hidden">
              <Award className="absolute top-4 right-4 w-24 h-24 text-maroon-200 opacity-30" />
              <div className="relative z-10">
                <h3 className="font-semibold text-maroon-800 mb-3 text-lg">PSI Oration Awards</h3>
                <p className="text-gray-700">
                  Prestigious awards recognizing excellence in physiological research through oral and poster
                  presentations.
                </p>
              </div>
            </div>

            {/* <div className="relative bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-lg p-6 border border-maroon-200 overflow-hidden">
              <Presentation className="absolute top-4 right-4 w-24 h-24 text-maroon-200 opacity-30" />
              <div className="relative z-10">
                <h3 className="font-semibold text-maroon-800 mb-3 text-lg">Presentations</h3>
                <p className="text-gray-700">
                  Comprehensive oral and poster presentation sessions showcasing cutting-edge research findings.
                </p>
              </div>
            </div> */}

            <div className="relative bg-gradient-to-br from-maroon-50 to-maroon-100 rounded-lg p-6 border border-maroon-200 overflow-hidden">
              <MessageSquare className="absolute top-4 right-4 w-24 h-24 text-maroon-200 opacity-30" />
              <div className="relative z-10">
                <h3 className="font-semibold text-maroon-800 mb-3 text-lg">Panel Discussions</h3>
                <p className="text-gray-700">
                  Interactive panel discussions focusing on physiology education and contemporary teaching
                  methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="bg-maroon-50 rounded-lg p-6 mt-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-maroon-700" />
              <span className="font-semibold text-maroon-800">Conference Schedule</span>
            </div>
            <div className="text-center text-gray-700">
              <p className="mb-2">
                Detailed schedule with session timings and venue information will be available soon.
              </p>
              <p>Stay tuned for the complete program with speaker details and presentation schedules.</p>
            </div>
          </div> */}

          {/* <div className="text-center mt-8">
            <Button className="bg-maroon-700 hover:bg-maroon-800" size="lg">
              Register for Main Conference
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}