import { Card, CardContent } from "@/components/ui/card"

export default function OrganizingCommitteeNewPage() {
  const chiefPatron = {
    name: "Prof. (Dr.) Ashutosh Biswas",
    position: "Executive Director",
    organization: "AIIMS Bhubaneswar",
  }

  const patrons = [
    {
      name: "Prof. (Dr.) P.R. Mahapatra",
      position: "Dean (Academics)",
      organization: "AIIMS Bhubaneswar",
    },
    {
      name: "Prof. (Dr.) D. K. Parida",
      position: "Medical Superintendent",
      organization: "AIIMS Bhubaneswar",
    },
    {
      name: "Prof. (Dr.) Satyajeet Mishra",
      position: "Dean (Research)",
      organization: "AIIMS Bhubaneswar",
    },
  ]

  const psiOfficeBearers = [
    { position: "President, PSI" },
    { position: "Vice President, PSI" },
    { position: "General Secretary, PSI" },
    { position: "Treasurer, PSI" },
  ]

  const organizingChairperson = {
    name: "Prof. (Dr.) Manisha Kar",
    position: "Prof. & Head",
    department: "Department of Physiology",
  }

  const organizingSecretary = {
    name: "Prof. (Dr.) Jayanti Mishra",
    position: "Professor, Department of Physiology",
  }

  const coConvener = {
    name: "Prof. (Dr.) Amit Ghosh",
    position: "Professor, Department of Physiology",
  }

  const jointSecretaries = [
    {
      name: "Dr. Kalpana Barhwal",
      position: "Addl. Prof., Department of Physiology",
    },
    {
      name: "Dr. Nibedita Priyadarsini",
      position: "Associate Prof., Department of Physiology",
    },
  ]

  const treasurer = {
    name: "Dr. B.N. Rao",
    position: "Addl. Prof., Department of Physiology",
  }

  const scientificCommitteeMembers = [
    {
      name: "Dr. Priyadarshini Mishra",
      position: "Addl. Prof., Department of Physiology",
    },
    {
      name: "Dr. Manish Goyal",
      position: "Addl. Prof., Department of Physiology",
    },
    {
      name: "Dr. Mangani Manavalli S",
      position: "Asst. Prof., Department of Physiology",
    },
  ]

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
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-amber-100/80" />

      {/* Content container with relative positioning */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-sm">ORGANIZING COMMITTEE</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto drop-shadow-sm">
            Meet the organizing committee members working to make this conference a success
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
              {/* Chief Patron */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h2 className="text-lg font-bold text-[#AD9976] mb-3 underline decoration-2">Chief Patron</h2>
                  <h3 className="font-bold text-gray-800 text-lg">{chiefPatron.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{chiefPatron.position}</p>
                  <p className="text-gray-500 text-xs">{chiefPatron.organization}</p>
                </div>
              </div>

              {/* Patrons and PSI Office Bearers Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Patrons Column - now takes 50% width */}
                <div>
                  <h2 className="text-lg font-bold text-[#AD9976] text-center mb-4 underline decoration-2">Patrons</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {patrons.map((patron, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg hover:border-[#AD9976]/30 transition-all duration-300"
                      >
                        <h3 className="font-semibold text-gray-800 text-sm">{patron.name}</h3>
                        <p className="text-gray-600 text-xs font-medium">{patron.position}</p>
                        <p className="text-gray-500 text-xs">{patron.organization}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PSI Office Bearers Column - now takes 50% width */}
                <div>
                  <h2 className="text-lg font-bold text-[#AD9976] text-center mb-4 underline decoration-2">
                    PSI Office Bearers
                  </h2>
                  <div className="space-y-3">
                    {psiOfficeBearers.map((bearer, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-md p-3 text-center border border-white/30 hover:shadow-lg hover:border-[#AD9976]/30 transition-all duration-300"
                      >
                        <p className="text-gray-700 text-sm font-medium">{bearer.position}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Organizing Chairperson */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h2 className="text-lg font-bold text-[#AD9976] mb-3 underline decoration-2">
                    Organizing Chairperson
                  </h2>
                  <h3 className="font-bold text-gray-800 text-lg">{organizingChairperson.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{organizingChairperson.position}</p>
                  <p className="text-gray-500 text-xs">{organizingChairperson.department}</p>
                </div>
              </div>

              {/* Organizing Secretary & Convener */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h2 className="text-lg font-bold text-[#AD9976] mb-3 underline decoration-2">
                    Organizing Secretary & Convener
                  </h2>
                  <h3 className="font-bold text-gray-800 text-lg">{organizingSecretary.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{organizingSecretary.position}</p>
                </div>
              </div>

              {/* Co-Convener */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h2 className="text-lg font-bold text-[#AD9976] mb-3 underline decoration-2">Co-Convener</h2>
                  <h3 className="font-bold text-gray-800 text-lg">{coConvener.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{coConvener.position}</p>
                </div>
              </div>

              {/* Joint Secretaries */}
              <div>
                <h2 className="text-lg font-bold text-[#AD9976] text-center mb-6 underline decoration-2">
                  Joint Secretaries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {jointSecretaries.map((secretary, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-white/30 hover:shadow-lg hover:border-[#AD9976]/30 transition-all duration-300"
                    >
                      <h3 className="font-semibold text-gray-800">{secretary.name}</h3>
                      <p className="text-gray-600 text-sm font-medium">{secretary.position}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treasurer */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-lg shadow-lg p-6 max-w-md mx-auto border-2 border-[#AD9976]/20 hover:border-[#AD9976]/40 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-1 bg-[#AD9976] mx-auto mb-3 rounded-full"></div>
                  <h2 className="text-lg font-bold text-[#AD9976] mb-3 underline decoration-2">Treasurer</h2>
                  <h3 className="font-bold text-gray-800 text-lg">{treasurer.name}</h3>
                  <p className="text-gray-600 text-sm font-medium">{treasurer.position}</p>
                </div>
              </div>

              {/* Scientific Committee Members */}
              <div className="border-t-2 border-[#AD9976]/20 pt-8">
                <h2 className="text-lg font-bold text-[#AD9976] text-center mb-6 underline decoration-2">
                  Scientific Committee Members
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  {scientificCommitteeMembers.slice(0, 2).map((member, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 text-center border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300"
                    >
                      <h3 className="font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-gray-600 text-sm font-medium">{member.position}</p>
                    </div>
                  ))}
                </div>
                {/* Third member centered */}
                <div className="text-center">
                  <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm rounded-lg shadow-md p-4 max-w-sm mx-auto border border-gray-200/50 hover:shadow-lg hover:border-gray-300/50 transition-all duration-300">
                    <h3 className="font-semibold text-gray-800">{scientificCommitteeMembers[2].name}</h3>
                    <p className="text-gray-600 text-sm font-medium">{scientificCommitteeMembers[2].position}</p>
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
