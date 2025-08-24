import { Card, CardContent } from "@/components/ui/card"

export default function PSIMembersPage() {
  return (
    <div className="min-h-screen relative py-12">
      {/* Primary texture background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/texture-1.jpg')`,
        }}
      />

      {/* Secondary texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/texture-2.jpg')`,
          backgroundBlendMode: "multiply",
        }}
      />

      {/* Gradient overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-100/80" />

      {/* Content container with relative positioning */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-sm">EXECUTIVE COMMITTEE, PSI</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto drop-shadow-sm">
            Meet the distinguished members of the Physiological Society of India Executive Committee
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-white/90 backdrop-blur-md shadow-2xl border-0 relative overflow-hidden">
            {/* Subtle inner texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url('/images/texture-2.jpg')`,
                backgroundSize: "200px 200px",
              }}
            />

            <CardContent className="space-y-12 relative z-10">
              {/* President and Immediate Past President */}
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h3 className="font-bold text-gray-800 text-lg">Prof. Prasunpriya Nayak</h3>
                  <p className="text-[#AD9976] font-semibold text-base underline decoration-2">President</p>
                </div>
                <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h3 className="font-bold text-gray-800 text-lg">Prof. Amar K Chandra</h3>
                  <p className="text-[#AD9976] font-semibold text-base underline decoration-2">
                    Immediate Past President
                  </p>
                </div>
              </div>

              {/* Vice Presidents and Secretaries Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vice Presidents Column */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-[#AD9976] text-center mb-6 underline decoration-2">
                    Vice Presidents
                  </h2>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Prof. Iqbal Alam</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Vice President</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Prof Atis K Chattopadhyay</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Vice President</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Prof. Sanjit Dey</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Vice President</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Dr. Kaushik Bharati</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Vice President</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Prof. Lata Mullur</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Vice President</p>
                  </div>
                </div>

                {/* Secretaries Column */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-[#AD9976] text-center mb-6 underline decoration-2">
                    Secretaries
                  </h2>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Dr. Rajen Haldar</h3>
                    <p className="text-[#AD9976] text-sm font-medium">General Secretary</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Dr. Subhasis Sahu</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Asst. Gen. Secretary</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Dr. Barnali Basu</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Asst. Gen. Secretary</p>
                  </div>
                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">Dr. Subhadeep Ganguly</h3>
                    <p className="text-[#AD9976] text-sm font-medium">Asst. Gen. Secretary</p>
                  </div>
                </div>
              </div>

              {/* Treasurer */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h3 className="font-bold text-gray-800 text-lg">Dr. Srimtiratan Tripathi</h3>
                  <p className="text-[#AD9976] font-semibold text-base underline decoration-2">Treasurer</p>
                </div>
              </div>

              {/* Members Section */}
              <div className="border-t-2 border-[#AD9976]/20 pt-8">
                <h2 className="text-2xl font-bold text-[#AD9976] text-center mb-8 underline decoration-2">
                  Committee Members
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column Members */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Deotima Sarkar</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Sudipta Pal</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Sandip K Sinha</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Prithviraj Karak</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Arjit Chattopadhyay</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Anish S Singhal</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                  </div>

                  {/* Right Column Members */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Prof. Krishna Roy</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Madhumita Debnath</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Soumendra Darba</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Amit Roy</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                      <h3 className="font-semibold text-gray-800">Dr. Sandip Mukherjee</h3>
                      <p className="text-gray-600 text-sm font-medium">Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
