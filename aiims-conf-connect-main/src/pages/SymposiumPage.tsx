import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, CheckCircle, Clock, Mail } from "lucide-react"

export default function SymposiumPage() {
    const symposiaThemes = [
        "Advances in Genomic and Cellular Physiology",
        "Neurophysiology",
        "Cardiovascular Physiology",
        "Respiratory Physiology",
        "Exercise and Sports Physiology",
        "Endocrinology and Reproductive Physiology",
        "Nanomedicine, nanotherapeutics, and drug delivery: Precision-based personalized approach",
        "Stress Physiology",
        "Application of artificial intelligence in Physiological sciences",
    ]

    const symposiumGuidelines = [
        "The proposal should have a brief outline of the symposium delineating the concept of the symposium",
        "The proposal for the symposium should have 3-4 eminent speakers with adequate experience in the relevant field",
        "The proposal should have a lead convenor to coordinate the symposium",
        "The duration of the symposium should not exceed 90 minutes",
    ]

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-white">
            {/* Top-left back button */}
            <div className="absolute top-4 left-4 z-10">
                <Link to="/call-for-participation">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-orange-700 hover:text-orange-800 hover:bg-orange-50"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Participation
                    </Button>
                </Link>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                        <Users className="w-4 h-4 mr-2" />
                        Symposium Proposals
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6">Call for Symposium</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Submit your symposium proposal for PHYSICON 2025</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full mt-6" />
                </div>

                {/* Main content card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-200">
                    {/* Header section */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-orange-800">Symposium Proposals</h2>
                            <p className="text-gray-600">Expert-led sessions on cutting-edge research</p>
                        </div>
                    </div>

                    {/* Themes section */}
                    <div className="mb-8">
                        <div className="bg-orange-100 p-6 rounded-xl mb-6">
                            <h3 className="text-xl font-bold text-orange-800 mb-4">
                                Proposals for Symposia are invited from experts under the following broad themes:
                            </h3>
                        </div>

                        <div className="grid gap-3">
                            {symposiaThemes.map((theme, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
                                >
                                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{theme}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guidelines section */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                        <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Guidelines for Symposium Proposals
                        </h3>
                        <div className="space-y-4">
                            {symposiumGuidelines.map((guideline, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="bg-orange-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700">{guideline}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Important note */}
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
                        <h4 className="text-lg font-bold text-blue-800 mb-3">Important Requirements</h4>
                        <p className="text-blue-700 leading-relaxed">
                            <strong>Note:</strong> The faculty/expert proposing symposia are expected to have sufficient academic and
                            research experience in the proposed field. The proposer of symposium should have at least{" "}
                            <strong>10 published publications</strong> in the related field and each speaker of the symposium should
                            have at least <strong>5 published publications</strong>.
                        </p>
                    </div>

                    {/* Contact and submission info */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="w-6 h-6" />
                            <h3 className="text-xl font-bold">Submission Information</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold mb-1">Submission Deadline:</p>
                                <p>August 15, 2025</p>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Contact Email:</p>
                                <a href="mailto:physicon@aiimsbhubaneswar.edu.in" className="underline hover:no-underline">
                                    physicon@aiimsbhubaneswar.edu.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
