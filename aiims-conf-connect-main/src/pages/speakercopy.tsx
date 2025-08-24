
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function SpeakersPageCopy() {
    const speakers = [
        {
            name: "Dr. Sarah Johnson",
            title: "Professor of Molecular Physiology",
            institution: "Harvard Medical School",
            bio: "Dr. Johnson is a leading researcher in the field of cellular physiology with over 20 years of experience in studying ion channel regulation.",
            topic: "Ion Channels: From Structure to Function"
        },
        {
            name: "Prof. Michael Chen",
            title: "Director, Institute of Neuroscience",
            institution: "University of California",
            bio: "Prof. Chen has pioneered innovative techniques for studying neural networks and synaptic plasticity in his distinguished 25-year career.",
            topic: "Neural Mechanisms of Learning and Memory"
        },
        {
            name: "Dr. Amelia Patel",
            title: "Head of Cardiovascular Research",
            institution: "Johns Hopkins University",
            bio: "Dr. Patel specializes in cardiovascular physiology and has contributed significantly to our understanding of heart failure mechanisms.",
            topic: "New Horizons in Cardiac Electrophysiology"
        },
        {
            name: "Prof. James Wilson",
            title: "Chair, Department of Exercise Science",
            institution: "University of Toronto",
            bio: "Prof. Wilson's research focuses on the physiological adaptations to exercise and their implications for health and disease prevention.",
            topic: "Exercise Physiology: From Lab to Life"
        },
        {
            name: "Dr. Elena Rodriguez",
            title: "Research Director",
            institution: "National Institute of Physiology",
            bio: "Dr. Rodriguez is renowned for her groundbreaking work on cellular respiration and mitochondrial function in metabolic diseases.",
            topic: "Mitochondrial Dynamics in Health and Disease"
        },
        {
            name: "Prof. David Kim",
            title: "Professor of Endocrinology",
            institution: "Seoul National University",
            bio: "Prof. Kim's research has revolutionized our understanding of hormone signaling pathways and their role in metabolic regulation.",
            topic: "Hormonal Regulation of Energy Homeostasis"
        }
    ];

    return (
        <div className="relative">
            {/* <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="flex items-center gap-2 text-maroon-700 hover:text-maroon-800">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div> */}

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

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {speakers.map((speaker, index) => (
                        <Card key={index} className="border border-maroon-100 hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-24 h-24 rounded-full bg-maroon-100 mx-auto mb-4 flex items-center justify-center text-maroon-800">
                                    {speaker.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-xl font-bold text-maroon-800 text-center mb-1">{speaker.name}</h3>
                                <p className="text-gray-600 text-center mb-3">{speaker.title}</p>
                                <p className="text-maroon-700 text-center mb-4 font-medium">{speaker.institution}</p>
                                <p className="text-gray-600 mb-4">{speaker.bio}</p>
                                <div className="bg-maroon-50 p-3 rounded-md">
                                    <p className="font-medium text-maroon-800">Keynote Topic:</p>
                                    <p className="text-gray-700">{speaker.topic}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg mb-6">More speakers to be announced soon. Stay tuned!</p>
                    <Link to="/">
                        <Button className="bg-maroon-700 hover:bg-maroon-800">Back to Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}