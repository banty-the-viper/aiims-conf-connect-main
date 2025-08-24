
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, ArrowLeft, Users, Megaphone } from "lucide-react";

export default function AbstractPage() {
  const symposiaThemes = [
    "Advances in Genomic and Cellular Physiology",
    "Neurophysiology",
    "Cardiovascular Physiology",
    "Respiratory Physiology",
    "Exercise and Sports Physiology",
    "Endocrinology and Reproductive Physiology",
    "Nanomedicine, nanotherapeutics, and drug delivery: Precision-based personalized approach",
    "Stress Physiology",
    "Application of artificial intelligence in Physiological sciences"
  ];

  const symposiumGuidelines = [
    "The proposal should have a brief outline of the symposium delineating the concept of the symposium",
    "The proposal for the symposium should have 3-4 eminent speakers with adequate experience in the relevant field",
    "The proposal should have a lead convenor to coordinate the symposium",
    "The duration of the symposium should not exceed 90 minutes"
  ];

  const abstractGuidelines = [
    "One person can not submit more than one abstract",
    "Abstract must be typed in the given field, single-spaced in English using at least 12-point size font, Times New Roman font style, 1.15 spacing, and should not exceed 300 Words.",
    "Authors should be listed by initials and surname. Not more than 5 authors are to be included. In case more than 5 authors are mentioned, the first five will be taken.",
    "The presenting author must be a registered delegate for the conference."
  ];

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
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">PHYSICON 2025 - CONFERENCE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            (21st - 23rd Nov, 2025)
          </p>
        </div>

        {/* Call for Abstract Component */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-xl p-8 border border-blue-200 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-maroon-800 mb-4">Call for Participation</h2>
            <p className="text-lg text-gray-600">
              Submit your research for presentation at PHYSICON 2025
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Symposium Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-maroon-800">Symposium</h3>
              </div>

              <div className="mb-6">
                <div className="bg-orange-100 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-orange-800 mb-2">
                    Proposals for Symposia are invited from the experts under following broad themes:
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {symposiaThemes.map((theme, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-maroon-600 font-bold">•</span>
                      <span className="text-gray-700 text-sm">{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-maroon-800 mb-3">Guidelines for Symposium</h4>
                <ol className="space-y-2">
                  {symposiumGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-maroon-600 font-bold text-sm">{index + 1}.</span>
                      <span className="text-gray-700 text-sm">{guideline}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-800">
                  <strong>Note:</strong> The faculty/expert proposing symposia are expected to have sufficient academic and research experience in the proposed field. The proposer of symposium should have at least 10 published publication in the related field and each speaker of the symposium should have at least 5 published publications.
                </p>
              </div>
            </div>

            {/* Call for Abstracts Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-maroon-800">Call for Abstracts</h3>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-maroon-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Abstracts are invited for paper/poster presentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-maroon-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Registration is mandatory for participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-maroon-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">Best paper will be awarded under oral and poster category</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-maroon-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm"><strong>Submission Deadline:</strong> 15th August 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-maroon-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">
                      <strong>Email:</strong>
                      <a href="mailto:physicon@aiimsbhubaneswar.edu.in" className="text-blue-600 hover:underline ml-1">
                        physicon@aiimsbhubaneswar.edu.in
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-maroon-800 mb-3">Guidelines for Abstract</h4>
                <ol className="space-y-2">
                  {abstractGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-maroon-600 font-bold text-sm">{index + 1}.</span>
                      <span className="text-gray-700 text-sm">{guideline}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//new Page Design
// import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ArrowLeft, Users, FileText, ArrowRight } from "lucide-react"

// export default function CallForParticipation() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       {/* Top-left back button */}
//       <div className="absolute top-4 left-4 z-10">
//         <Link to="/">
//           <Button
//             variant="ghost"
//             className="flex items-center gap-2 text-maroon-700 hover:text-maroon-800 hover:bg-maroon-50"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to Home
//           </Button>
//         </Link>
//       </div>

//       {/* Main content */}
//       <div className="container mx-auto px-4 py-20 max-w-6xl">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-maroon-100 text-maroon-700 rounded-full text-sm font-semibold mb-6">
//             <FileText className="w-4 h-4 mr-2" />
//             Call for Participation
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-maroon-800 mb-6">PHYSICON 2025</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Submit your symposium proposal or research abstract for consideration at the conference
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-maroon-500 to-maroon-700 mx-auto rounded-full mt-6" />
//         </div>

//         {/* Two main cards */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Symposium Card */}
//           <Link to="/symposium">
//             <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-orange-50 to-orange-100 h-full cursor-pointer">
//               <CardContent className="p-8 h-full flex flex-col">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Users className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
//                   Symposium
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed flex-grow mb-6">
//                   Submit proposals for symposia under various themes including Genomic and Cellular Physiology,
//                   Neurophysiology, Cardiovascular Physiology, and more. Lead expert discussions with 3-4 eminent
//                   speakers.
//                 </p>
//                 <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
//                   Submit Symposium Proposal
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>

//           {/* Abstract Card */}
//           <Link to="/abstract">
//             <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-50 to-blue-100 h-full cursor-pointer">
//               <CardContent className="p-8 h-full flex flex-col">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <FileText className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
//                   Abstract
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed flex-grow mb-6">
//                   Submit your research abstract for paper or poster presentation. Best papers will be awarded in both
//                   oral and poster categories. Deadline: August 15th, 2025.
//                 </p>
//                 <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
//                   Submit Research Abstract
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         </div>

//         {/* Additional info section */}
//         <div className="mt-16 text-center">
//           <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-100">
//             <h3 className="text-2xl font-bold text-maroon-800 mb-4">Important Information</h3>
//             <div className="grid md:grid-cols-2 gap-6 text-left">
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Conference Dates</h4>
//                 <p className="text-gray-600">November 21-23, 2025</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Submission Deadline</h4>
//                 <p className="text-gray-600">August 15, 2025</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Contact Email</h4>
//                 <p className="text-gray-600">
//                   <a href="mailto:physicon@aiimsbhubaneswar.edu.in" className="text-maroon-600 hover:underline">
//                     physicon@aiimsbhubaneswar.edu.in
//                   </a>
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Registration Required</h4>
//                 <p className="text-gray-600">All participants must be registered</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }