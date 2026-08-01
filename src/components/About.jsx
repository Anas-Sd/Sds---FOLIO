import { useRef } from "react";
import { Mail, MapPin, Phone, GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export const About = () => {
  const containerRef = useRef(null);

  // Set up scroll tracking for the entire About section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth entrance animations for About section content
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [0.98, 1]);
  
  const leftColY = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const leftColOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  
  const rightColY = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const rightColOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const achievementsY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);
  const achievementsOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);

  // Timeline fill height
  const timelineFill = useTransform(scrollYProgress, [0.2, 0.55], ["0%", "100%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white overflow-hidden"
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3333330f_1px,transparent_1px),linear-gradient(to_bottom,#3333330f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient background glow (strictly monochromatic) */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-zinc-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-2 tracking-tighter uppercase">
            My <span className="text-zinc-400">Story</span> &amp; Education
          </h2>
          <div className="w-16 h-[2px] bg-zinc-800 mx-auto mt-4" />
        </motion.div>

        {/* Split Grid: Bio/Contacts vs Education */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Bio & Minimal Contact Badge stack */}
          <motion.div
            style={{ y: leftColY, opacity: leftColOpacity }}
            className="lg:col-span-6 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6 border-b border-zinc-900 pb-3">
                Profile Narrative
              </h3>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-base sm:text-lg">
                <p>
                  Software Development Engineer with hands-on experience in Data Structures & Algorithms and strong proficiency in building secure and scalable web applications. Experienced in designing RESTful APIs, optimizing backend performance, and developing secure, production-ready systems.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science at KL University, I love solving real-world problems by actively building projects using modern technologies, including authentication systems, APIs, and cloud deployment. I strongly believe in continuous learning and consistently upskill myself through hands-on projects, certifications, and problem-solving.
                </p>
                {/* <p>
                  Driven by a mindset of constant growth, I consistently expand my skills through challenge-based learning, industry certifications, and collaborative project building.
                </p> */}
              </div>
            </div>

            {/* Monochromatic Info list */}
            <div className="space-y-4 pt-4 border-t border-zinc-900">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                Personal Index
              </h4>
              
              {/* Location */}
              <div className="flex items-center gap-4 py-2 border-b border-zinc-950">
                <MapPin className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                <div>
                  <span className="text-xs text-zinc-500 block uppercase tracking-wider">Location</span>
                  <span className="text-sm font-medium text-zinc-300">Vijayawada, Andhra Pradesh, India</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 py-2 border-b border-zinc-950">
                <Mail className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                <div>
                  <span className="text-xs text-zinc-500 block uppercase tracking-wider">Email</span>
                  <a
                    href="mailto:portfolio.syedanas@gmail.com"
                    className="text-sm font-medium text-zinc-300 hover:text-white transition-colors underline underline-offset-4"
                  >
                    portfolio.syedanas@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 py-2">
                <Phone className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                <div>
                  <span className="text-xs text-zinc-500 block uppercase tracking-wider">Phone</span>
                  <a
                    href="tel:+917674088150"
                    className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    +91 76740 88150
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Timeline */}
          <motion.div
            style={{ y: rightColY, opacity: rightColOpacity }}
            className="lg:col-span-6 relative"
          >
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-10 flex items-center gap-3 border-b border-zinc-900 pb-3">
              <GraduationCap className="w-6 h-6 text-zinc-400" />
              Academic History
            </h3>

            {/* Vertical timeline track line */}
            <div className="absolute left-[25px] top-16 bottom-0 w-[2px] bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                style={{ height: timelineFill }}
                className="w-full bg-zinc-400 origin-top shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              />
            </div>

            {/* Timeline Milestones */}
            <div className="space-y-8 pl-16 relative">
              {/* College */}
              <div className="relative group">
                <div className="absolute -left-[50px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-zinc-400 flex items-center justify-center transition-all duration-300 group-hover:border-white">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 group-hover:bg-white transition-colors" />
                </div>
                <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h4 className="font-bold text-lg text-white group-hover:text-zinc-300 transition-colors">
                      KL University
                    </h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> 2023 – 2027
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">B.Tech in Computer Science and Engineering</p>
                  <p className="text-sm text-white mt-2 font-mono font-medium">CGPA: 9.28</p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative group">
                <div className="absolute -left-[50px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-zinc-600 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-400">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors" />
                </div>
                <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h4 className="font-bold text-lg text-white group-hover:text-zinc-300 transition-colors">
                      Narayana Junior College
                    </h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> 2021 – 2023
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">Intermediate (BIEAP)</p>
                  <p className="text-sm text-white mt-2 font-mono font-medium">Percentage: 90%</p>
                </div>
              </div>

              {/* SSC */}
              <div className="relative group">
                <div className="absolute -left-[50px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-zinc-700 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-500">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors" />
                </div>
                <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h4 className="font-bold text-lg text-white group-hover:text-zinc-300 transition-colors">
                      Sri Chaitanya Techno School
                    </h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> 2020 – 2021
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">SSC</p>
                  <p className="text-sm text-white mt-2 font-mono font-medium">Percentage: 100%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Achievements Section */}
        <motion.div
          style={{ y: achievementsY, opacity: achievementsOpacity }}
          className="border-t border-zinc-900 pt-16"
        >
          <div className="flex items-center gap-3 mb-10">
            <Award className="w-6 h-6 text-zinc-400" />
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
              Achievements
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LeetCode & CodeChef */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 group flex gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/0 group-hover:via-zinc-400/60 to-transparent transition-all duration-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-500 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all" />
              <div>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Solved <strong className="text-white font-semibold">300+ problems</strong> on{" "}
                  <a
                    className="underline text-white hover:text-zinc-300 inline-flex items-center gap-1"
                    href="https://leetcode.com/u/2300032619/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode <ExternalLink className="w-3.5 h-3.5" />
                  </a>{" "}
                  and <strong className="text-white font-semibold">500+ problems</strong> on{" "}
                  <a
                    className="underline text-white hover:text-zinc-300 inline-flex items-center gap-1"
                    href="https://www.codechef.com/users/kl_2300032619"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodeChef <ExternalLink className="w-3.5 h-3.5" />
                  </a>{" "}
                  to strengthen problem-solving skills and algorithmic thinking.
                </p>
              </div>
            </motion.div>

            {/* CIIE Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 group flex gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/0 group-hover:via-zinc-400/60 to-transparent transition-all duration-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-500 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all" />
              <div>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Recognized by the CIIE Director for core innovation in the{" "}
                  <Link
                    to="/DTI-Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-white hover:text-zinc-300 inline-flex items-center gap-1"
                  >
                    Fuel Accessibility <ExternalLink className="w-3.5 h-3.5" />
                  </Link>{" "}
                  system under the University DTI initiative.
                </p>
              </div>
            </motion.div>

            {/* Japanese Language */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 group flex gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/0 group-hover:via-zinc-400/60 to-transparent transition-all duration-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-500 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all" />
              <div>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Self-taught and acquired proficiency in Japanese language
                  , showing strong self-motivation and adaptability.
                </p>
              </div>
            </motion.div>

            {/* Hackathons */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 group flex gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-600/0 group-hover:via-zinc-400/60 to-transparent transition-all duration-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-500 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all" />
              <div>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  Led development teams in <strong className="text-white font-semibold">2 National-level Hackathons</strong>. Designed, built, and presented web services for:
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <Link
                    to="/Visa-Hackathon-Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all flex items-center gap-1.5"
                  >
                    IIT - Madras <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/VR-Siddhartha-Hackathon-Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all flex items-center gap-1.5"
                  >
                    VR Siddhartha <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
