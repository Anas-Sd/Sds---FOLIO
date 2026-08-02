import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { certifications } from "@/assets/assets";
import { Award, Trophy, Briefcase, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCardWrapper = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["16deg", "-16deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "16deg"]);

  const handleMouseMove = (e) => {
    if (e.target.closest("[data-no-tilt]")) {
      x.set(0);
      y.set(0);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={className} style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Certifications = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation();
  const { ref: hacksRef, isVisible: hacksVisible } = useScrollAnimation();
  const { ref: internsRef, isVisible: internsvisible } = useScrollAnimation();

  const certsContainerRef = useRef(null);
  const hacksContainerRef = useRef(null);
  const internsContainerRef = useRef(null);

  const scrollCertsLeft = () => {
    if (certsContainerRef.current) {
      certsContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollCertsRight = () => {
    if (certsContainerRef.current) {
      certsContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  const scrollHacksLeft = () => {
    if (hacksContainerRef.current) {
      hacksContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollHacksRight = () => {
    if (hacksContainerRef.current) {
      hacksContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  const scrollInternsLeft = () => {
    if (internsContainerRef.current) {
      internsContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollInternsRight = () => {
    if (internsContainerRef.current) {
      internsContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  const interns = [
    {
      bigname: "Service Now Virtual Internship",
      issuedOn: "14/04/2026",
      credentialID: "SNU2016577",
      name: "By ServiceNow",
      url: "/SERVICE_NOW_INTERNSHIP_CERTIFICATE.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg",
    },
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
      bigname: "Guidewire DevTrails",
      name: "Team Lead",
      url: "/GUIDEWIRE_HACKATHON_CERTIFICATE.pdf",
      logo: "/GUIDEWIRE_DEVTRAILS_LOGO.png",
      issuedOn: "19/04/2026",
    },
    {
      bigname: "IIT - MADRAS",
      name: "Participant",
      url: "/Visa-Hackathon-Certificate",
      logo: "IIT-MADRAS-LOGO.png",
      issuedOn: "04/01/2026",
    },
    {
      bigname: "VR SIDDHARTHA",
      name: "Team Lead",
      url: "VR-Siddhartha-Hackathon-Certificate",
      logo: "/VR_SIDDHARTHA_LOGO.png",
      issuedOn: "24/01/2026",
    }
  ];

  return (
    <section
      id="certifications"
      className="relative py-10 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#050505] text-zinc-900 dark:text-white overflow-hidden flex flex-col justify-center min-h-[auto] md:min-h-screen w-full"
    >
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01f_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01f_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-8 sm:mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500">
            Recognitions & Achievements
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black mt-1 tracking-tighter uppercase text-zinc-900 dark:text-white">
            Certifications & <span className="text-zinc-600 dark:text-zinc-400">Accomplishments</span>
          </h2>
          <div className="w-16 h-[2px] bg-zinc-300 dark:bg-zinc-800 mx-auto mt-3" />
        </div>

        <div className="w-full space-y-10 sm:space-y-16">

          {/* Professional Certifications Subsection */}
          <div
            ref={certsRef}
            className={`transition-all duration-700 ${certsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-sm xs:text-base sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300 flex items-center gap-1.5 sm:gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 dark:text-white shrink-0" /> Professional Certifications
              </h3>

              {/* Top-Right Arrows for Professional Certifications */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={scrollCertsLeft}
                  aria-label="Scroll certificates left"
                  className="w-8 h-8 hidden sm:block sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollCertsRight}
                  aria-label="Scroll certificates right"
                  className="w-8 h-8 hidden sm:block sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={certsContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {certifications.map((cert) => (
                <TiltCardWrapper
                  key={cert.name}
                  className="snap-start flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] py-2"
                >
                  <Card className="h-full p-5 sm:p-6 bg-[#fcfcfc] dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800/80 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all duration-300 rounded-3xl flex flex-col justify-between group shadow-sm hover:shadow-xl dark:hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-2xl p-2 flex-shrink-0 group-hover:border-zinc-500 dark:group-hover:border-zinc-500 transition-colors shadow-xs">
                          <img
                            src={cert.logo}
                            alt={cert.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-lg font-extrabold uppercase text-zinc-900 dark:text-white tracking-tight leading-snug">
                            {cert.bigname}
                          </h4>
                          <p className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold mt-1">
                            {cert.name}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1 border-t border-zinc-200 dark:border-zinc-900 pt-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono font-medium">
                        <div>Issued: <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{cert.issuedOn}</span></div>
                        {cert.credentialID && (
                          <div className="truncate">
                            ID: <span className="text-zinc-800 dark:text-zinc-300 font-semibold">{cert.credentialID}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      data-no-tilt="true"
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-900 transition-colors relative z-20"
                    >
                      View Credential <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Card>
                </TiltCardWrapper>
              ))}
            </div>
          </div>

          {/* Hackathons Subsection */}
          <div
            ref={hacksRef}
            className={`transition-all duration-700 ${hacksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-sm xs:text-base sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300 flex items-center gap-1.5 sm:gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 dark:text-white shrink-0" /> Hackathons & Competitions
              </h3>

              {/* Top-Right Arrows for Hackathons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={scrollHacksLeft}
                  aria-label="Scroll hackathons left"
                  className="w-8 h-8 hidden sm:block sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollHacksRight}
                  aria-label="Scroll hackathons right"
                  className="w-8 h-8 hidden sm:block sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={hacksContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {hackathons.map((hacks) => (
                <TiltCardWrapper
                  key={hacks.bigname}
                  className="snap-start flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] py-2"
                >
                  <Card className="h-full p-5 sm:p-6 bg-[#fcfcfc] dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800/80 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all duration-300 rounded-3xl flex flex-col justify-between group shadow-sm hover:shadow-xl dark:hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-2xl p-2 flex-shrink-0 group-hover:border-zinc-500 dark:group-hover:border-zinc-500 transition-colors shadow-xs">
                          <img
                            src={hacks.logo}
                            alt={hacks.bigname}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-lg font-extrabold uppercase text-zinc-900 dark:text-white tracking-tight leading-snug">
                            {hacks.bigname}
                          </h4>
                          <p className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold capitalize mt-1">
                            Role: {hacks.name}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-zinc-200 dark:border-zinc-900 pt-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono font-medium">
                        Issued: <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{hacks.issuedOn}</span>
                      </div>
                    </div>

                    <a
                      data-no-tilt="true"
                      href={hacks.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-900 transition-colors relative z-20"
                    >
                      View Certificate <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Card>
                </TiltCardWrapper>
              ))}
            </div>
          </div>

          {/* Internships Subsection */}
          <div
            ref={internsRef}
            className={`transition-all duration-700 ${internsvisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-sm xs:text-base sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300 flex items-center gap-1.5 sm:gap-2">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 dark:text-white shrink-0" /> Internships & Experience
              </h3>

              {/* Top-Right Arrows for Internships */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={scrollInternsLeft}
                  aria-label="Scroll internships left"
                  className="w-8 h-8 sm:w-10 hidden sm:block sm:h-10 rounded-xl bg-white dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollInternsRight}
                  aria-label="Scroll internships right"
                  className="w-8 h-8 sm:w-10 hidden sm:block sm:h-10 rounded-xl bg-white dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800 hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={internsContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {interns.map((intern) => (
                <TiltCardWrapper
                  key={intern.bigname}
                  className="snap-start flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[380px] py-2"
                >
                  <Card className="h-full p-5 sm:p-6 bg-[#fcfcfc] dark:bg-[#0c0c0f] border border-zinc-300 dark:border-zinc-800/80 hover:border-zinc-500 dark:hover:border-zinc-500 transition-all duration-300 rounded-3xl flex flex-col justify-between group shadow-sm hover:shadow-xl dark:hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-2xl p-2 flex-shrink-0 group-hover:border-zinc-500 dark:group-hover:border-zinc-500 transition-colors shadow-xs">
                          <img
                            src={intern.logo}
                            alt={intern.bigname}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-lg font-extrabold uppercase text-zinc-900 dark:text-white tracking-tight leading-snug">
                            {intern.bigname}
                          </h4>
                          <p className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold mt-1">
                            {intern.name}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1 border-t border-zinc-200 dark:border-zinc-900 pt-3 text-xs text-zinc-600 dark:text-zinc-400 font-mono font-medium">
                        <div>Issued: <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{intern.issuedOn}</span></div>
                        {intern.credentialID && (
                          <div className="truncate">
                            ID: <span className="text-zinc-800 dark:text-zinc-300 font-semibold">{intern.credentialID}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      data-no-tilt="true"
                      href={intern.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-900 transition-colors relative z-20"
                    >
                      Verify Certificate <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Card>
                </TiltCardWrapper>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
