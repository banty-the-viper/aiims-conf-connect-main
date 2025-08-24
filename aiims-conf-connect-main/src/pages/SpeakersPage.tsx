
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SpeakersPage() {
  return (
    <div className="relative">
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
      <div className="container mx-auto px-4 py-16 max-w-6xl">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">Expert Speakers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from internationally renowned experts in physiology and medical research from leading institutions around the world.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-12 border border-maroon-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-maroon-800 mb-6">Updating Soon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're currently finalizing our impressive lineup of speakers for PHYSICON 2025.
              Please check back later for the complete list of distinguished experts who will
              be sharing their knowledge and insights.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="bg-maroon-700 hover:bg-maroon-800">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
