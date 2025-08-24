import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, CheckCircle, Award, Mail, Clock } from "lucide-react"

export default function AbstractPageVisit() {
    const abstractGuidelines = [
        "One person can not submit more than one abstract",
        "Abstract must be typed in the given field, single-spaced in English using at least 12-point size font, Times New Roman font style, 1.15 spacing, and should not exceed 300 Words.",
        "Authors should be listed by initials and surname. Not more than 5 authors are to be included. In case more than 5 authors are mentioned, the first five will be taken.",
        "The presenting author must be a registered delegate for the conference.",
    ]

    const benefits = [
        "Abstracts are invited for paper/poster presentation",
        "Registration is mandatory for participation",
        "Best paper will be awarded under oral and poster category",
        "Opportunity to present your research to leading experts",
        "Networking with researchers from across the nation and beyond",
    ]

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white">
            {/* Top-left back button */}
            <div className="absolute top-4 left-4 z-10">
                <Link to="/call-for-participation">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Participation
                    </Button>
                </Link>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                        <FileText className="w-4 h-4 mr-2" />
                        Abstract Submission
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">Call for Abstracts</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Submit your research abstract for presentation at PHYSICON 2025
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mt-6" />
                </div>

                {/* Main content card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-200">
                    {/* Header section */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-blue-800">Abstract Submission</h2>
                            <p className="text-gray-600">Share your research with the scientific community</p>
                        </div>
                    </div>

                    {/* Benefits section */}
                    <div className="mb-8">
                        <div className="bg-blue-100 p-6 rounded-xl mb-6">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5" />
                                Why Submit Your Abstract?
                            </h3>
                        </div>

                        <div className="grid gap-3">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                                >
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guidelines section */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Abstract Submission Guidelines
                        </h3>
                        <div className="space-y-4">
                            {abstractGuidelines.map((guideline, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="bg-blue-600 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-700">{guideline}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Important deadlines */}
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mb-8">
                        <h4 className="text-lg font-bold text-orange-800 mb-3">Important Dates</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold text-orange-700 mb-1">Submission Deadline:</p>
                                <p className="text-orange-600">August 15, 2025</p>
                            </div>
                            <div>
                                <p className="font-semibold text-orange-700 mb-1">Conference Dates:</p>
                                <p className="text-orange-600">November 21-23, 2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact and submission info */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="w-6 h-6" />
                            <h3 className="text-xl font-bold">Submission Information</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold mb-1">Submit to:</p>
                                <a href="mailto:physicon@aiimsbhubaneswar.edu.in" className="underline hover:no-underline">
                                    physicon@aiimsbhubaneswar.edu.in
                                </a>
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Registration Required:</p>
                                <p>All presenting authors must be registered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
