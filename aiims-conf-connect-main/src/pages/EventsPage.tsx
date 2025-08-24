
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Calendar, ArrowLeft } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="relative">
      {/* Top-left back button */}
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

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">Event Details</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive schedule for PHYSICON 2025, featuring keynote speeches, panel discussions,
            workshops, and networking events.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Link to="/events/pre-conference" className="block">
            <div className="bg-white rounded-lg shadow-md p-6 border border-maroon-100 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="mb-4 text-maroon-700 ">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">November 20th, 2025</h3>

              <h3 className="text-4xl font-bold mb-2">Pre-Conference Workshop</h3>
              {/* <ul className="space-y-2 text-gray-600">
                <li>⏰ 9:00 AM - 11:00 AM: Registration & Welcome Kit</li>
                <li>⏰ 11:30 AM - 1:00 PM: Opening Ceremony</li>
                <li>⏰ 2:00 PM - 5:00 PM: Pre-Conference Workshops</li>
                <li>⏰ 6:30 PM - 8:30 PM: Welcome Reception</li>
              </ul> */}
              <div className="mt-4 text-maroon-700 font-medium">Click to view detailed schedule →</div>
            </div>
          </Link>

          <Link to="/events/main-conference" className="block">
            <div className="bg-white rounded-lg shadow-md p-6 border border-maroon-100 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="mb-4 text-maroon-700">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">November 21st-22nd, 2025</h3>

              <h3 className="text-4xl font-bold mb-2">Main Conference </h3>
              {/* <ul className="space-y-2 text-gray-600">
                <li>⏰ 9:00 AM - 10:30 AM: Keynote Speeches</li>
                <li>⏰ 11:00 AM - 1:00 PM: Parallel Sessions</li>
                <li>⏰ 2:00 PM - 4:00 PM: Panel Discussions</li>
                <li>⏰ 4:30 PM - 6:30 PM: Poster Presentations</li>
              </ul> */}
              <div className="mt-4 text-maroon-700 font-medium">Click to view details →</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
