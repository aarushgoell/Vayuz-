import "./index.css";
import { useState } from "react";
import vayuzLogo from "./Assets/vayuz-logo.png";
import heroImage from "./Assets/hero-image.png";
import codeImage1 from "./Assets/code-image-1.png";
import codeImage2 from "./Assets/code-image-2.png";
import servicesBg from "./Assets/services-bg.png";
import MobileNav from "./Components/MobileNav";

function App() {
  const [activeService, setActiveService] = useState("Flutter App Development");

  const services = [
    "Flutter App Development",
    "UI/UX Design",
    "Customization & integration",
    "Testing & Quality Assurance",
    "Maintenance & Support",
    "Consulting & Training",
    "Migration & Upgrades",
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-white">
      {/* Header */}
      <header className="relative z-10 px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <img src={vayuzLogo} alt="Vayuz Logo" className="h-8 w-auto" />
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-sm font-semibold">App Development</span>
            <span className="text-sm font-semibold">Challenges</span>
            <span className="text-sm font-semibold">Hire Developer</span>
            <span className="text-sm font-semibold">Community</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#08A7CE] hover:bg-[#0698b8] px-6 py-3 rounded-full font-bold text-sm transition-colors">
              CONTACT US
            </button>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-3xl lg:text-5xl font-medium leading-tight">
                Unlock the <span className="gradient-text">Potential</span> of
                Flutter
              </h1>
              <p className="text-lg lg:text-xl text-gray-300">
                Your Premier Partner for Cross-Platform App Excellence!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#08A7CE] hover:bg-[#0698b8] px-8 py-4 rounded-full font-bold text-sm transition-colors interactive-hover">
                  UPGRADE YOUR TECH
                </button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#08A7CE] rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#09D809] rounded-full opacity-20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Images Section */}
      <section className="px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={codeImage1}
                alt="Code Example 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src={codeImage2}
                alt="Code Example 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

            {/* Flutter History Section */}
      <section className="px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#08A7CE]/10 to-transparent rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* First Container: Flutter's Dawn Section */}
              <div className="flutter-dawn-container">
                <span className="flutter-dawn-line1">Flutter's</span>
                <span className="flutter-dawn-line2">Dawn</span>
                <span className="flutter-dawn-line3">History of flutter</span>
              </div>
              
                             {/* Second Container: Main Content (Middle) */}
               <div className="flutter-dawn-middle-container">
                 <p className="flutter-dawn-paragraph text-gray-300 text-center">
                   Uncover the fascinating story of Flutter in 'Flutter's Dawn:
                   History of Flutter.' From humble origins to global acclaim,
                   delve into its captivating narrative. Explore milestones,
                   triumphs, and challenges. Whether tech enthusiast or curious
                   mind, join us on this captivating journey! <span className="text-blue-100">Click to begin!</span>
                 </p>
               </div>
              
                             {/* Third Container: BEGIN Button with Arrow */}
               <div className="relative h-full">
                 {/* BEGIN button positioned at bottom right */}
                 <div className="absolute bottom-0 right-0">
                   <button className="bg-[#08A7CE] hover:bg-[#0698b8] px-8 py-4 rounded-full font-bold text-sm transition-colors flex items-center gap-3">
                     BEGIN
                                           <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                                                 <path
                           d="M5 16L15 6M15 6H5M15 6V16"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         />
                      </svg>
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-normal mb-4">
              Our Dynamic Services Suite!
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Embrace Innovation: Let's Create Together!
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Step into innovation! Explore our range of services and let's
              create something extraordinary together. Your vision, our
              expertise. Let's begin!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all interactive-hover ${
                    activeService === service
                      ? "bg-[#08A7CE]/20 border border-[#08A7CE]"
                      : "hover:bg-gray-800/50"
                  }`}
                  onClick={() => setActiveService(service)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base lg:text-xl font-medium">
                      {service}
                    </h3>
                    <button className="text-[#08A7CE] p-1">
                      {activeService === service ? (
                        <svg
                          className="w-5 h-5 lg:w-6 lg:h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 lg:w-6 lg:h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {activeService === service && (
                    <p className="mt-4 text-sm text-gray-400 leading-relaxed animate-fade-in">
                      Unlock endless possibilities with Flutter App Development.
                      Build beautiful, high-performance applications for any
                      platform - faster and easier than ever before. Ready to
                      revolutionize your app experience? Let's get started
                      today!
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="relative animate-fade-in">
              <img
                src={servicesBg}
                alt="Services Background"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 lg:px-8 py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-8 text-sm font-semibold">
                <span>Events</span>
                <span>Gen AI</span>
                <span>Careers</span>
                <span>Case study</span>
                <span>SME Talks</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl lg:text-7xl font-medium">
                  Connect With Us
                </h3>
                <p className="text-lg lg:text-2xl text-gray-300 max-w-md">
                  For any collaborative projects or enquiries feel free to
                  connect with us.
                </p>
                <p className="text-xl lg:text-3xl font-semibold">vayuz.com</p>
              </div>

              <div className="flex flex-wrap gap-8 text-sm text-gray-400">
                <span>About</span>
                <span>Insights</span>
                <span>Community</span>
                <span>Privacy & Policies</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="border-b border-gray-600 pb-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div className="border-b border-gray-600 pb-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <div className="border-b border-gray-600 pb-2">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <button className="bg-[#08A7CE]/40 hover:bg-[#08A7CE]/60 border border-[#08A7CE] px-6 py-3 rounded-full font-bold text-sm transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
