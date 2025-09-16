
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-maroon-700 text-white py-16">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Institution and Department</h1>
          {/* <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Learn more about the AIIMS Annual Medical Conference and what to expect in November 2025
          </p> */}
        </div>
      </section>

      {/* AIIMS Bhubaneswar Section */}
      <section className="min-h-screen flex items-center py-16 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Aiims-uploads/0bc8375c-bedb-415d-be0f-9cd2512a7f8b.png')",
            filter: 'blur(6px)',
            transform: 'scale(1.05)'
          }}
        />

        {/* Overlay with gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/75 to-maroon-50/90"></div>

        <div className="container px-4 md:px-6 relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-maroon-800 mb-16 text-center">
              AIIMS BHUBANESWAR
            </h2>
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-maroon-200">
              <CardContent className="p-12 md:p-16">
                <div className="text-gray-700 leading-relaxed text-xl md:text-2xl space-y-8">
                  <p className="text-justify">
                    All India Institute of Medical Sciences, Bhubaneswar is one of the apex healthcare
                    Institutes established by the Ministry of Health & Family Welfare, Government of
                    India under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY). Under this
                    scheme six new All India Institutes of Medical Sciences have been established at
                    Patna, Raipur, Bhopal, Bhubaneswar, Jodhpur and Rishikesh apart from the one at
                    New Delhi. The foundation stone of this institute in Bhubaneswar was laid by then Prime Minister
                    Atal Bihari Vajpayee on July 15, 2003. All India Institute of Medical Sciences,
                    Bhubaneswar was established as autonomous institution and institute of National
                    importance through the All India Institute of Medical Sciences (Amendment) Ordinance
                    passed on 16th July, 2012.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department of Physiology Section */}
      <section className="min-h-screen flex items-center py-16 bg-gradient-to-br from-maroon-50 via-red-50 to-pink-50 relative">
        {/* Textured background overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-maroon-200/50 via-transparent to-maroon-300/50"></div>
        </div>

        {/* Additional texture pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8B0000 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #B83E3E 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="container px-4 md:px-6 relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-maroon-800 mb-16 text-center">
              DEPARTMENT OF PHYSIOLOGY
            </h2>
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-maroon-200">
              <CardContent className="p-12 md:p-16">
                <div className="space-y-8 text-gray-700 leading-relaxed text-xl md:text-2xl">
                  <p className="text-justify">
                    The Department of Physiology at AIIMS Bhubaneswar is dedicated to fostering a
                    comprehensive understanding of normal human body functions. Since its establishment in
                    2012, the department has played a pivotal role in academic and in advancing the
                    fundamental aspects of human physiology. It aims to bridge basic science with clinical
                    relevance, enabling students to appreciate physiological processes and their alterations in
                    disease states.
                  </p>

                  <p className="text-justify">
                    The department houses state-of-the-art undergraduate, postgraduate, and clinical research
                    laboratories, along with faculty offices, a seminar room, departmental library, storeroom
                    and administrative office. The clinical research laboratory is equipped with advanced
                    diagnostic and research tools including a nerve conduction velocity machine, ECG, EEG,
                    vascular function analysis system, polysomnography, electrogastrogram (EGG), and
                    treadmill for exercise testing.
                  </p>

                  <p className="text-justify">
                    Further, the department is equipped with specialized facilities for cellular, biochemical, and
                    molecular physiology research. These include real-time PCR, thermocyclers, SDS-PAGE,
                    Western blot apparatus, 2D-PAGE, agarose gel electrophoresis system, gel documentation
                    system, and cell culture equipment (such as a CO₂ incubator, biosafety cabinet, and
                    inverted microscope). Additional resources include a refrigerated centrifuge, -80°C and -
                    20°C freezers, spectrophotometer, ELISA reader, Millipore system, fume hood, and
                    incubator.
                  </p>

                  <p className="text-justify">
                    The department actively collaborates with both basic science and clinical departments,
                    enhancing the scope of teaching and interdisciplinary research. In addition to academic
                    activities, it provides vital laboratory services including diagnostic tests for Thalassemia,
                    G6PD deficiency, congenital deafness and cataract, EEG, nerve conduction studies, and
                    pulmonary function tests (PFT) for patients attending AIIMS Bhubaneswar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
