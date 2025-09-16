
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, CreditCard, Building, QrCode } from "lucide-react";

export default function RegistrationDetailsPage() {
  const registrationData = [
    { category: "Faculty (PSI NM)", earlyBird: "8000/-", late: "9000/-" },
    { category: "Faculty (PSI Member)", earlyBird: "7000/-", late: "8000/-" },
    { category: "Student with MD (PSI NM)", earlyBird: "5500/-", late: "6500/-" },
    { category: "Student with MD (PSI Member)", earlyBird: "4500/-", late: "5500/-" },
    { category: "PhD Scholar (PSI NM)", earlyBird: "3500/-", late: "4500/-" },
    { category: "PhD Scholar (PSI Member)", earlyBird: "3000/-", late: "3500/-" },
    { category: "M.Sc. Student (PSI NM)", earlyBird: "2500/-", late: "3500/-" },
    { category: "M.Sc. Student (PSI Member)", earlyBird: "2000/-", late: "3000/-" },
    { category: "Accompanying Person", earlyBird: "5000/-", late: "6000/-" },
    { category: "Foreign Delegate", earlyBird: "100$", late: "150$" },
  ];

  const bankDetails = [
    { label: "Institution Account Name", value: "AIIMS BHUBANESWAR CME ACCOUNT" },
    { label: "Account No.", value: "55782011000033" },
    { label: "IFSC Code", value: "BKID0005578" },
    { label: "Bank Name", value: "BANK OF INDIA" },
    { label: "Complete Branch Address", value: "BANK OF INDIA, AIIMS, BHUBANESWAR, P.O.- Patrapada, Bhubaneswar-751019" },
    { label: "Type of Bank Account", value: "CURRENT PLUS" },
    { label: "MICR Code of Bank", value: "751013019" },
  ];

  const handleGoogleRegistration = () => {
    // Replace this URL with the actual Google registration form URL
    window.open("https://register.physicon2025.com/", "_blank");
  };

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
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">Registration Details</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete your registration for PHYSICON 2025
          </p>
        </div>

        {/* Registration Dates */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-maroon-800">Important Dates</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="font-semibold text-blue-800">Last date for early bird registration</p>
              <p className="text-lg text-gray-700">30th September 2025</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="font-semibold text-blue-800">Last date for late registration</p>
              <p className="text-lg text-gray-700">31st October 2025</p>
            </div>
          </div>
        </div>

        {/* Registration Pricing */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-maroon-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="h-6 w-6 text-maroon-700" />
            <h2 className="text-2xl font-bold text-maroon-800">Registration Fees</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-maroon-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-maroon-800">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-maroon-800">
                    Early Bird Registration
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-maroon-800">
                    Late Registration
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrationData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">
                      {row.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                      {row.earlyBird}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                      {row.late}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bank Account Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-maroon-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-6 w-6 text-maroon-700" />
            <h2 className="text-2xl font-bold text-maroon-800">Bank Account Details</h2>
          </div>

          <div className="grid gap-4">
            {bankDetails.map((detail, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="font-semibold text-gray-800 sm:w-1/3">{detail.label}:</span>
                <span className="text-gray-700 sm:w-2/3">{detail.value}</span>
              </div>
            ))}
          </div>

          {/* QR Code Section */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <QrCode className="h-6 w-6 text-maroon-700" />
              <h3 className="text-xl font-bold text-maroon-800">Scan to Pay</h3>
            </div>
            <div className="inline-block p-2 bg-white border-2 border-maroon-200 rounded-lg">
              <img
                src="/lovable-uploads/UPI.png"
                alt="QR Code for Payment"
                className="w-60 h-50 object-contain mx-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">Scan the QR code above for quick payment</p>
          </div>
        </div>

        {/* Registration Button */}
        <div className="text-center">
          <Button
            onClick={handleGoogleRegistration}
            className="bg-maroon-700 hover:bg-maroon-800 text-white text-lg px-8 py-4 h-auto"
            size="lg"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Register Now
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Click above to open the Google registration form in a new tab
          </p>
        </div>
      </div>
    </div>
  );
}
