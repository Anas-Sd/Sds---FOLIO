import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { certifications } from "@/assets/assets";
import { Award, Trophy, Briefcase, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export const Certifications = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation();
  const { ref: hacksRef, isVisible: hacksVisible } = useScrollAnimation();
  const { ref: internsRef, isVisible: internsvisible } = useScrollAnimation();

  const certsContainerRef = useRef(null);

  const scrollCertsLeft = () => {
    if (certsContainerRef.current) {
      certsContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollCertsRight = () => {
    if (certsContainerRef.current) {
      certsContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const interns = [
    {
      bigname: "AIML Virtual Internship",
      issuedOn: "10/06/2025",
      credentialID: "0de15c82e9068f86545983cc92b18511",
      name: "By AWS - via EduSkills",
      url: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=0de15c82e9068f86545983cc92b18511",
      logo: "/AICTE_LOGO.png",
    }
  ];

  const hackathons = [
    {
      bigname: "IIT - MADRAS",
      name: "Participant",
      url: "/Visa-Hackathon-Certificate",
      logo: "IIT-MADRAS-LOGO.png",
      issuedOn: "04/01/2026",
    },
    {
      bigname: "VR SIDDHARTHA",
      name: "Participant",
      url: "VR-Siddhartha-Hackathon-Certificate",
      logo: "/VR_SIDDHARTHA_LOGO.png",
      issuedOn: "24/01/2026",
    }
  ];

  return (
    <section
      id="certifications"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden flex flex-col justify-center min-h-screen w-full"
    >
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            Recognitions & Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-1 tracking-tighter uppercase">
            Certifications & <span className="text-zinc-400">Accomplishments</span>
          </h2>
          <div className="w-16 h-[2px] bg-zinc-800 mx-auto mt-3" />
        </div>

        <div className="w-full space-y-12 sm:space-y-16">
          
          {/* Professional Certifications Subsection (with Top-Right Left/Right Arrows) */}
          <div
            ref={certsRef}
            className={`transition-all duration-700 ${
              certsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Award className="w-5 h-5 text-white" /> Professional Certifications
              </h3>

              {/* Top-Right Arrows for Professional Certifications */}
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollCertsLeft}
                  aria-label="Scroll certificates left"
                  className="w-10 h-10 rounded-xl bg-[#0c0c0f] border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-all shadow-md active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollCertsRight}
                  aria-label="Scroll certificates right"
                  className="w-10 h-10 rounded-xl bg-[#0c0c0f] border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-all shadow-md active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={certsContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {certifications.map((cert) => (
                <Card
                  key={cert.name}
                  className="p-6 bg-[#0c0c0f] border-zinc-800/80 hover:border-zinc-600 transition-all rounded-3xl w-[300px] sm:w-[380px] snap-start flex-shrink-0 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-2xl p-2 flex-shrink-0">
                        <img
                          src={cert.logo}
                          alt={cert.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-extrabold uppercase text-white tracking-tight leading-snug">
                          {cert.bigname}
                        </h4>
                        <p className="text-xs text-zinc-400 font-medium mt-1">
                          {cert.name}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 border-t border-zinc-900 pt-3 text-xs text-zinc-500 font-mono">
                      <div>Issued: <span className="text-zinc-300">{cert.issuedOn}</span></div>
                      {cert.credentialID && (
                        <div className="truncate">
                          ID: <span className="text-zinc-400">{cert.credentialID}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white hover:text-zinc-300 pt-4 mt-2 border-t border-zinc-900 transition-colors"
                  >
                    View Credential <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Hackathons Subsection */}
          <div
            ref={hacksRef}
            className={`transition-all duration-700 ${
              hacksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-zinc-300 mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-white" /> Hackathons & Competitions
            </h3>
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none scroll-smooth">
              {hackathons.map((hacks) => (
                <Card
                  key={hacks.bigname}
                  className="p-6 bg-[#0c0c0f] border-zinc-800/80 hover:border-zinc-600 transition-all rounded-3xl w-[300px] sm:w-[380px] snap-start flex-shrink-0 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-2xl p-2 flex-shrink-0">
                        <img
                          src={hacks.logo}
                          alt={hacks.bigname}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-extrabold uppercase text-white tracking-tight leading-snug">
                          {hacks.bigname}
                        </h4>
                        <p className="text-xs text-zinc-400 font-medium capitalize mt-1">
                          Role: {hacks.name}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-zinc-900 pt-3 text-xs text-zinc-500 font-mono">
                      Issued: <span className="text-zinc-300">{hacks.issuedOn}</span>
                    </div>
                  </div>

                  <a
                    href={hacks.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white hover:text-zinc-300 pt-4 mt-2 border-t border-zinc-900 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships Subsection */}
          <div
            ref={internsRef}
            className={`transition-all duration-700 ${
              internsvisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-zinc-300 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-white" /> Internships & Experience
            </h3>
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none scroll-smooth">
              {interns.map((intern) => (
                <Card
                  key={intern.bigname}
                  className="p-6 bg-[#0c0c0f] border-zinc-800/80 hover:border-zinc-600 transition-all rounded-3xl w-[300px] sm:w-[380px] snap-start flex-shrink-0 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-zinc-950 border border-zinc-800 rounded-2xl p-2 flex-shrink-0">
                        <img
                          src={intern.logo}
                          alt={intern.bigname}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-extrabold uppercase text-white tracking-tight leading-snug">
                          {intern.bigname}
                        </h4>
                        <p className="text-xs text-zinc-400 font-medium mt-1">
                          {intern.name}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 border-t border-zinc-900 pt-3 text-xs text-zinc-500 font-mono">
                      <div>Issued: <span className="text-zinc-300">{intern.issuedOn}</span></div>
                      {intern.credentialID && (
                        <div className="truncate">
                          ID: <span className="text-zinc-400">{intern.credentialID}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={intern.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white hover:text-zinc-300 pt-4 mt-2 border-t border-zinc-900 transition-colors"
                  >
                    Verify Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Card>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
