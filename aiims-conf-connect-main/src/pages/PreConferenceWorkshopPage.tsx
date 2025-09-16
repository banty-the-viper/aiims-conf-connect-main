
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, MapPin, Users, CheckSquare } from "lucide-react";

export default function PreConferenceWorkshopPage() {
  const workshops = [
    {
      id: 1,
      title: "Decoding Skeletal Muscle Health: Clinical Insights & immunohistochemistry (IHC) Analysis of Age-Related Fiber-Type Shifts",
      duration: "Full Day",
      sessions: [
        "Session 1: Clinical Tools for Assessing Muscle Health and Disease (Forenoon)",
        "Session 2: Fiber-Type Dynamics & IHC Insights in Sarcopenia (Afternoon)"
      ],
      facilitator: "Dr. Nibedita Priyadarshini (Associate Prof., AIIMS BBSR)",
      price: "Rs 2000/-"
    },
    {
      id: 2,
      title: "Wiring the Brain In Vitro: Advanced Techniques for Neuronal Culture and Protein Expression Analysis",
      duration: "Full Day",
      sessions: [
        "Session 1: Establishing Primary Neuronal Networks – Optimized Protocols for Culturing Functional Neurons In Vitro (Forenoon)",
        "Session 2: Quantitative and Qualitative Protein Profiling – Molecular Approaches to Assess Protein Expression in Neuronal Systems (Afternoon)"
      ],
      facilitator: "Dr. Kalpana Barhwal (Additional Prof., AIIMS BBSR)",
      price: "Rs 2000/-"
    },
    {
      id: 3,
      title: "Neurodiagnostics in Action: Autonomic Testing Demystified",
      duration: "Forenoon",
      facilitators: "Dr Manisha Kar (Prof. & HOD AIIMS BBSR), Dr Jayanti Mishra (Prof. AIIMS BBSR)",
      price: "Rs 1000/-"
    },
    {
      id: 4,
      title: "Constructing inclusive student-centered learning sessions (ISCLS) in Physiology: through the lens of Universal Design aided by AI tools",
      duration: "Afternoon",
      facilitators: "Dr. Sarmishtha Ghosh (Professor, AIIMS Jodhpur), Dr. Prasunpriya Nayak (Prof. AIIMS Jodhpur)",
      price: "Rs 500/-"
    },
    {
      id: 5,
      title: "Comprehensive yoga workshop on 'From stillness to strength: Hatha yoga, Heartfulness and Inner Awareness'",
      duration: "Forenoon",
      facilitator: "Dr. Varun Malhotra (Additional Prof., AIIMS Bhopal)",
      price: "Rs 500/-"
    },
    {
      id: 6,
      title: "Polysomnography a gold standard diagnostic tool for sleep studies'",
      duration: "Forenoon",
      facilitator: "Dr Basanta Manjari Naik, Additional Professor, JIPMER,Puducherry",
      price: "Rs 1000/-"
    },
  ];

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
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">PHYSICON 2025 - PRE-CONFERENCE WORKSHOPS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            20th Nov, 2025
          </p>
        </div>

        <div className="space-y-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="border border-maroon-100 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckSquare className="w-6 h-6 text-maroon-700" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-maroon-800 mb-3">
                      WORKSHOP {workshop.id}: ({workshop.duration})
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {workshop.title}
                    </h3>

                    {workshop.sessions && (
                      <div className="mb-3">
                        {workshop.sessions.map((session, index) => (
                          <p key={index} className="text-gray-700 mb-1">
                            {session}
                          </p>
                        ))}
                      </div>
                    )}

                    <div className="text-sm">
                      <p className="text-maroon-700 font-medium">
                        Facilitator{workshop.facilitators ? 's' : ''}: {workshop.facilitator || workshop.facilitators}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-8 bg-orange-100 border-l-4 border-orange-500 p-6 rounded-r-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-orange-500 text-lg font-bold">NOTE:</span>
            </div>
            <div className="ml-3">
              <p className="text-orange-700 font-medium">
                Participants can choose 2 half day workshops in combination
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-maroon-50 rounded-lg p-8 text-center">
          <div className="mt-6">
            <a
              href="https://register.physicon2025.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-maroon-700 hover:bg-maroon-800" size="lg">
                Register for Workshops
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
