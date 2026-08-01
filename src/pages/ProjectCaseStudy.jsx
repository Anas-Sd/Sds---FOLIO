import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PROJECTS_DATA } from "@/data/projectsData";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Layers,
  CheckCircle2,
  ShieldAlert,
  Cpu,
  Server,
  Code2,
  Sparkles,
  Maximize2,
  Zap,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-black uppercase tracking-tight mb-4">Project Not Found</h1>
        <Button onClick={() => navigate("/")} className="bg-white text-black font-bold">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>
      </div>
    );
  }

  const renderStyledTitle = (title) => {
    if (title === "CollabX") {
      return (
        <>
          Collab<span className="text-yellow-400">X</span>
        </>
      );
    }
    return title;
  };

  const { caseStudy } = project;
  const csImages = caseStudy.caseStudyImages || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#050505] text-white relative overflow-hidden antialiased py-10 px-4 sm:px-6 lg:px-12"
    >
      {/* Ambient Grid Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Top Header Navigation */}
      <nav className="sticky top-4 z-50 max-w-7xl mx-auto bg-[#0c0c0f]/90 backdrop-blur-xl border border-zinc-800/80 rounded-2xl px-5 py-3.5 shadow-2xl flex items-center justify-between gap-4">
        <Link
          to={`/?project=${project.id}#projects`}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800"
        >
          <ArrowLeft className="w-4 h-4" /> Portfolio
        </Link>

        {/* <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 bg-zinc-950 px-3.5 py-1.5 rounded-lg border border-zinc-800 hidden sm:flex items-center gap-2">
          <LayoutGrid className="w-3.5 h-3.5 text-zinc-400" />
          BENTO CASE STUDY MATRIX
        </span> */}

        <div className="flex items-center gap-2">
          {project.Live && (
            <Button asChild size="sm" className="bg-white text-black font-bold text-xs hover:bg-zinc-200">
              <a href={project.Live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button asChild size="sm" variant="outline" className="border-zinc-800 text-zinc-300 text-xs hover:text-white hover:bg-zinc-900">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5" /> Code
              </a>
            </Button>
          )}
        </div>
      </nav>

      {/* Hero Title Header */}
      <header className="max-w-5xl mx-auto text-center space-y-6 pt-12 pb-16 relative z-10">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-zinc-400 bg-zinc-950 px-4 py-1.5 rounded-full border border-zinc-800">
          {project.subtitle}
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight">
          {renderStyledTitle(project.title)}
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
          {project.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Restricted Freelance Notice Banner */}
      {project.isRestricted && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-10 p-5 bg-amber-950/30 border border-amber-500/30 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-amber-200 shadow-2xl backdrop-blur-md"
        >
          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                FREELANCE CLIENT PROJECT
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300/70">
                RESTRICTED ACCESS
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              This application was developed as a client commercial solution. Private source code repository and internal database schemas are restricted under Non-Disclosure Agreement (NDA). Public inventory features remain accessible via Live Demo.
            </p>
          </div>
        </motion.div>
      )}

      {/* BENTO GRID MATRIX CONTAINER */}
      <main className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
        
        {/* Tile 1 (Span 8): Executive Overview + Hero Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 bg-[#0c0c0f] border border-zinc-800/90 hover:border-zinc-600 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                01
              </span>
              <Layers className="w-5 h-5 text-zinc-400" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Executive Overview
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              {caseStudy.executiveSummary}
            </p>
          </div>

          {csImages[0] && (
            <div
              onClick={() => setSelectedImage(csImages[0])}
              className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 cursor-pointer group hover:border-zinc-500 transition-all duration-300 shadow-xl"
            >
              <img
                src={csImages[0]}
                alt="Executive Overview Screenshot"
                className="w-full h-auto max-h-[520px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 right-4 bg-zinc-900/90 text-white p-2 rounded-xl border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Tile 2 (Span 4): Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-4 bg-[#0c0c0f] border border-zinc-800/90 hover:border-zinc-600 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                02
              </span>
              <ShieldAlert className="w-5 h-5 text-zinc-400" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
              The Challenge
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
              {caseStudy.problemStatement}
            </p>
          </div>

          {csImages[1] && (
            <div
              onClick={() => setSelectedImage(csImages[1])}
              className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 cursor-pointer group hover:border-zinc-500 transition-all duration-300 shadow-xl"
            >
              <img
                src={csImages[1]}
                alt="Problem Statement Screenshot"
                className="w-full h-auto max-h-[220px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute top-3 right-3 bg-zinc-900/90 text-white p-1.5 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Tile 3 (Span 5): System Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-5 bg-[#0c0c0f] border border-zinc-800/90 hover:border-zinc-600 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                03
              </span>
              <Cpu className="w-5 h-5 text-zinc-400" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
              System Architecture
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
              {caseStudy.architecture}
            </p>
          </div>

          {csImages[2] && (
            <div
              onClick={() => setSelectedImage(csImages[2])}
              className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 cursor-pointer group hover:border-zinc-500 transition-all duration-300 shadow-xl"
            >
              <img
                src={csImages[2]}
                alt="System Architecture Screenshot"
                className="w-full h-auto max-h-[240px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute top-3 right-3 bg-zinc-900/90 text-white p-1.5 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Tile 4 (Span 7): Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-7 bg-[#0c0c0f] border border-zinc-800/90 hover:border-zinc-600 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                04
              </span>
              <Code2 className="w-5 h-5 text-zinc-400" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
              Core Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-950/90 border border-zinc-900">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {csImages[3] && (
            <div
              onClick={() => setSelectedImage(csImages[3])}
              className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 cursor-pointer group hover:border-zinc-500 transition-all duration-300 shadow-xl"
            >
              <img
                src={csImages[3]}
                alt="Core Capabilities Screenshot"
                className="w-full h-auto max-h-[240px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute top-3 right-3 bg-zinc-900/90 text-white p-1.5 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </motion.div>

        {/* Tile 5 (Span 7): Engineering Challenges */}
        {caseStudy.engineeringChallenges && caseStudy.engineeringChallenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-7 bg-[#0c0c0f] border border-zinc-800/90 hover:border-zinc-600 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                  05
                </span>
                <Server className="w-5 h-5 text-zinc-400" />
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                Engineering Challenges & Solutions
              </h2>

              <div className="space-y-3">
                {caseStudy.engineeringChallenges.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 space-y-1">
                    <h4 className="text-xs font-extrabold uppercase text-white tracking-wide flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-zinc-400" />
                      {idx + 1}. {item.challenge}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light pl-5.5">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {csImages[4] && (
              <div
                onClick={() => setSelectedImage(csImages[4])}
                className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 cursor-pointer group hover:border-zinc-500 transition-all duration-300 shadow-xl"
              >
                <img
                  src={csImages[4]}
                  alt="Engineering Challenges Screenshot"
                  className="w-full h-auto max-h-[240px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute top-3 right-3 bg-zinc-900/90 text-white p-1.5 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Tile 6 (Span 5 or 12): Tech Stack & Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`${
            caseStudy.engineeringChallenges && caseStudy.engineeringChallenges.length > 0
              ? "md:col-span-5"
              : "md:col-span-12"
          } bg-[#0c0c0f] border border-zinc-800/90 hover:border-zinc-600 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl transition-all duration-300 flex flex-col justify-between`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                {caseStudy.engineeringChallenges && caseStudy.engineeringChallenges.length > 0 ? "06" : "05"}
              </span>
              <Sparkles className="w-5 h-5 text-zinc-400" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
              Technology Stack
            </h2>

            {caseStudy.techStackDetailed && (
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${
                caseStudy.engineeringChallenges && caseStudy.engineeringChallenges.length > 0 ? "" : "lg:grid-cols-4"
              } gap-3`}>
                {Object.entries(caseStudy.techStackDetailed).map(([key, val]) => (
                  <div key={key} className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                      {key}
                    </span>
                    <p className="text-xs font-bold text-zinc-200">{val}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {csImages[4] && (!caseStudy.engineeringChallenges || caseStudy.engineeringChallenges.length === 0) && (
              <div
                onClick={() => setSelectedImage(csImages[4])}
                className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 cursor-pointer group hover:border-zinc-500 transition-all duration-300 shadow-xl"
              >
                <img
                  src={csImages[4]}
                  alt="Application Screenshot"
                  className="w-full h-auto max-h-[260px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute top-3 right-3 bg-zinc-900/90 text-white p-1.5 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            )}

            {csImages[5] && (
              <div
                onClick={() => setSelectedImage(csImages[5])}
                className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-2 cursor-pointer group hover:border-zinc-500 transition-all duration-300 shadow-xl"
              >
                <img
                  src={csImages[5]}
                  alt="Technology Stack Screenshot"
                  className="w-full h-auto max-h-[260px] object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute top-3 right-3 bg-zinc-900/90 text-white p-1.5 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </main>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-zinc-950 border-zinc-800 text-white p-4">
          <DialogTitle className="sr-only">Enlarged Screenshot</DialogTitle>
          {selectedImage && (
            <div className="w-full flex items-center justify-center p-2">
              <img
                src={selectedImage}
                alt="Case study screenshot enlarged"
                className="max-h-[84vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer Return CTA */}
      <footer className="py-14 text-center border-t border-zinc-900 relative z-10">
        <Link
          to={`/?project=${project.id}#projects`}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-zinc-300 bg-zinc-900 hover:bg-zinc-800 px-8 py-4 rounded-2xl transition-all border border-zinc-800 shadow-2xl"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Portfolio
        </Link>
      </footer>

    </motion.div>
  );
};
