import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectRef, isVisible: projectVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {/* Prompt 2 Paint */}
          <ProjectCard
            projectRef={projectRef}
            projectVisible={projectVisible}
            title="Prompt 2 Paint [v2]"
            description="An AI-powered SaaS platform that converts text prompts into high-quality images. Built with a scalable MERN architecture, secure authentication, and a credit-based monetization system."
            image={new URL("@/assets/prompt2paint-screenshot.png", import.meta.url).href}
            tags={["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs"]}
            Live="https://prompt2paint.app"
            github="https://github.com/Anas-Sd/Prompt_2_Paint"
            details={{
              overview:
                "Prompt 2 Paint is a full-stack AI SaaS platform that transforms natural language prompts into high-quality images. It started as a foundational learning project (Version 1) and evolved into a production-ready system (Version 2) with real-world authentication, monetization, and user management features.",

              features: [
                "AI text-to-image generation",
                "JWT & OAuth authentication",
                "OTP-based account verification",
                "Credit-based usage system",
                "Payment integration with coupons",
                "Favorites & image storage",
                "User dashboard & profile management",
                "Download & preview generated images"
              ],

              stack:
                "React.js, Node.js, Express.js, MongoDB, JWT, OAuth 2.0, REST APIs, Vercel, Railway",

              role:
                "Designed, developed, and deployed both versions independently — including frontend, backend, authentication, payment systems, and overall architecture.",

              roadmap: [
                "Performance optimization & caching",
                "Advanced image controls",
                "Improved scaling infrastructure"
              ],

              versions: [
                {
                  title: "Version 1 – Foundation",
                  content:
                    "The first version focused on building a complete end-to-end MERN application. It included authentication, AI image generation, download functionality, and payment integration. This phase was about understanding full-stack flow, API handling, and building a usable product."
                },
                {
                  title: "Version 2 – Production Upgrade",
                  content:
                    "Version 2 transformed the project into a production-ready SaaS platform. It introduced secure JWT + OAuth authentication, OTP verification, credit-based monetization, coupon systems, user dashboards, and structured account management. The focus shifted from just building to designing scalable, real-world systems."
                }
              ]
            }}
          />


          <ProjectCard
            projectRef={projectRef}
            projectVisible={projectVisible}
            title="IslamiQ"
            description="IslamiQ is a responsive Quran reading platform that enables instant navigation across Surahs, Aayahs, Rukus, and pages. It integrates translation support, real-time Salah timings, and daily content features for an enhanced user experience."
            image={new URL("@/assets/IslamiQ_LOGO.png", import.meta.url).href}
            tags={["React.js", "Firebase", "Supabase"]}
            Live="https://islamiq.vercel.app"
            github="https://github.com/Anas-Sd/ISLAMIQ"
            details={{
              overview:
                "IslamiQ is a modern Quran companion designed to make reading simple, accessible, and structured. It eliminates the need to search through multiple screens by allowing users to instantly jump to any Surah, Aayah, Ruku, or page — creating a smooth and distraction-free reading experience.",

              features: [
                "Direct access by Surah, Aayah, Ruku, and Page",
                "English translation alongside Arabic text",
                "Real-time Salah timings",
                "Daily Verse generator",
                "Daily Hadith generator",
                "Reference section for navigation clarity",
                "Mobile-first responsive design"
              ],

              stack:
                "React.js, Tailwind CSS, Supabase Auth, Firebase, REST APIs, Framer Motion",

              role:
                "Designed and developed the entire application with a focus on usability, accessibility, and real-world user needs.",

              roadmap: [
                "Mobile app version",
                "Telugu translation support",
                "Bookmarking system",
                "Audio recitation"
              ],

              concept:
                "The idea came from a real problem — people, including my own family, found it difficult to quickly access specific parts of the Quran using existing apps. IslamiQ was built to remove that friction and make reading as simple as possible.",

              goal:
                "To make Quran reading easier, faster, and more accessible for everyone."
            }}
          />

          {/* Flip 2 Win */}
          <ProjectCard
            projectVisible={projectVisible}
            title="SS TRADERS"
            description="Inventory management system for structured item listing with category-based organization. Public users can browse inventory while admin controls all the modifications."
            image={new URL("@/assets/SS-TRADERS_LOGO.png", import.meta.url).href}
            tags={["Freelance", "Inventory System"]}
            Live="https://sstraders1.vercel.app/"
            github="https://github.com/Anas-Sd/SS-TRADERS"
            details={{
              overview:
                "SS Traders is an inventory management system designed to organize and display items in a structured A–Z category format with nested parts and admin-controlled operations.",
              features: [
                "Category-based A–Z item listing",
                "Nested item structure (items with parts)",
                "Admin authentication and access control",
                "Add, update, and delete inventory items",
                "Cloud-based image upload and storage",
              ],
              stack: "React, Supabase, Firebase, Cloudinary",
              role:
                "Developed the complete frontend, database integration, authentication system, and inventory management features for client delivery.",
            }}
          />
          <ProjectCard
            projectVisible={projectVisible}
            title="Flip 2 Win"
            description="A JavaScript-based Memory Card Matching Game featuring shuffle logic, score tracking, life system, and smooth flip animations. Built using HTML, CSS, and DOM manipulation to practice core frontend and game logic concepts."
            image={new URL("@/assets/flip the card logo.png", import.meta.url).href}
            tags={["JavaScript"]}
            Live="https://flip2win.vercel.app/"
            github="https://github.com/Anas-Sd/FLIP---THE---CARD"
           details={{
  overview:
    "A web-based memory game designed to challenge recall ability through interactive card matching. Built with a focus on performance, smooth visual feedback, and a distraction-free user experience.",
  features: [
    "Dynamic card flipping with fluid visual transitions",
    "Randomized game setup for unique gameplay each session",
    "Point-based progression system",
    "Limited attempts mechanic to increase difficulty",
    "Instant reset functionality for replayability",
    "Fully responsive layout across devices",
  ],
  stack: "HTML, CSS, JavaScript, Vercel",
  role:
    "Independently developed the complete application including UI design, interaction logic, and game state handling with emphasis on responsiveness and performance.",
}}
          />
           <ProjectCard
  projectVisible={projectVisible}
  title="PASSWORD GENERATOR"
  description="Generates secure passwords based on user-defined length with efficient randomization logic. Designed for simplicity and quick usage while ensuring strong password creation. Focuses on core JavaScript logic and input handling."
  image={new URL("@/assets/lock.png", import.meta.url).href}
  tags={["API", "JavaScript", "Practice"]}
  Live="https://password-chesko.vercel.app/"
  github="https://github.com/Anas-Sd/Strong_Password_Generator"
  details={{
    overview:
      "A web-based utility designed to generate strong passwords based on user-defined length, focusing on randomness and efficient input handling.",
    features: [
      "User-defined password length input",
      "Randomized secure password generation",
      "Instant output rendering",
      "Minimal and clean interface",
    ],
    stack: "HTML, CSS, JavaScript",
    role:
      "Developed the complete application including UI, input handling, and password generation logic as part of foundational JavaScript practice.",
  }}
/>

<ProjectCard
  projectVisible={projectVisible}
  title="JOKES GENERATOR"
  description="Fetches and displays random jokes using API integration with real-time updates. Built to demonstrate asynchronous data handling and dynamic content rendering. Provides a simple and interactive API-based experience."
  image={new URL("@/assets/jokes_logo.png", import.meta.url).href}
  tags={["API", "JavaScript", "Practice"]}
  Live="https://navvuko.vercel.app/"
  github="https://github.com/Anas-Sd/JOKES-API"
  details={{
    overview:
      "An API-based application that retrieves and displays random jokes, focusing on asynchronous operations and real-time UI updates.",
    features: [
      "API-based joke fetching",
      "One-click content generation",
      "Dynamic UI rendering",
      "Lightweight and responsive design",
    ],
    stack: "HTML, CSS, JavaScript, REST API",
    role:
      "Implemented API integration, asynchronous data handling, and UI updates to build an interactive application.",
  }}
/>

<ProjectCard
  projectVisible={projectVisible}
  title="QR CODE GENERATOR"
  description="Generates QR codes from user-defined text using API-based image rendering. Designed for instant visual output with real-time input handling. Focuses on simplicity and practical API usage."
  image={new URL("@/assets/qr_code_logo.png", import.meta.url).href}
  tags={["API", "JavaScript", "Practice"]}
  Live="https://scan-chey.netlify.app/"
  github="https://github.com/Anas-Sd/QR_CODE_GENERATOR"
  details={{
    overview:
      "A web tool that converts user input into QR codes in real-time, emphasizing API usage and dynamic content generation.",
    features: [
      "User input-based QR code generation",
      "Instant image rendering",
      "Real-time updates",
      "Simple and intuitive UI",
    ],
    stack: "HTML, CSS, JavaScript, QR API",
    role:
      "Built the complete application including API integration, input handling, and real-time rendering as part of early API learning projects.",
  }}
/>

        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  Live,
  github,
  details,
  projectRef,
  projectVisible,
}) => {
  return (
    <Card
      ref={projectRef}
      className={`p-6 w-[300px] sm:w-[420px] lg:w-[600px] snap-start flex-shrink-0 transition-all duration-700 ${projectVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
    >
      <img src={image} alt={title} className={`w-16 h-16 mb-4 object-contain ${title=== "PASSWORD GENERATOR" ? "bg-white py-1" : ""}`} />

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-xs ${tag === "Freelance"
                ? "bg-blue-900 text-white"
                : "bg-primary/10 text-primary"
              }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        {Live && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={Live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </a>
          </Button>
        )}

        <Button asChild variant="outline" size="sm" className="flex-1">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="flex-1">
              View More
            </Button>
          </DialogTrigger>


          <DialogContent className="max-w-lg max-h-[75vh] overflow-y-auto">

            <DialogHeader>
              <div className="flex items-center gap-3">
                <img src={image} alt={title} className="w-12 h-12 object-contain" />
                <DialogTitle>{title}</DialogTitle>
              </div>
            </DialogHeader>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>{details.overview}</p>

              <ul className="list-disc list-inside space-y-1">
                {details.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <p>
                <span className="font-semibold text-foreground">Tech Stack:</span>{" "}
                {details.stack}
              </p>

              <p>
                <span className="font-semibold text-foreground">My Role:</span>{" "}
                {details.role}
              </p>

              {details.roadmap && (
                <ul className="list-disc list-inside space-y-1">
                  {details.roadmap.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              )}

              {details.versions && (
                <div className="space-y-3">
                  {details.versions.map((v) => (
                    <div key={v.title}>
                      <p className="font-semibold text-foreground">{v.title}</p>
                      <p className="text-sm">{v.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};
