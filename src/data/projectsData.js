// src/data/projectsData.js

export const PROJECTS_DATA = [
  {
    id: "collabx",
    title: "CollabX",
    subtitle: "Real-Time Collaborative Code Platform",
    description:
      "A full-stack, real-time collaborative workspace allowing students and developers to pair-program, execute code in sandboxed environments, and communicate seamlessly with multi-room WebSockets.",
    images: [
      new URL("@/assets/collabx_pics/COLLABX_CAROUSEL/1.png", import.meta.url).href,
      new URL("@/assets/collabx_pics/COLLABX_CAROUSEL/2.png", import.meta.url).href,
      new URL("@/assets/collabx_pics/COLLABX_CAROUSEL/3.png", import.meta.url).href,
    ],
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "Docker", "Railway"],
    Live: "https://collabx.vercel.app",
    github: "https://github.com/Anas-Sd/CollabX",
    caseStudy: {
      caseStudyImages: [
        new URL("@/assets/collabx_pics/COLLABX_CASE_STUDY/6.png", import.meta.url).href,
        new URL("@/assets/collabx_pics/COLLABX_CASE_STUDY/1.png", import.meta.url).href,
        new URL("@/assets/collabx_pics/COLLABX_CASE_STUDY/2.png", import.meta.url).href,
        new URL("@/assets/collabx_pics/COLLABX_CASE_STUDY/3.png", import.meta.url).href,
        new URL("@/assets/collabx_pics/COLLABX_CASE_STUDY/5.png", import.meta.url).href,
        new URL("@/assets/collabx_pics/COLLABX_CASE_STUDY/4.png", import.meta.url).href,
      ],
      executiveSummary:
        "CollabX is a real-time collaborative coding platform designed to make pair-programming, group study sessions, and technical interviews seamless. It allows students and developers to join the same room, write code together live, run programs in 4+ programming languages, and chat in real-time without any lag or setup friction.",
      problemStatement:
        "When students or developers want to code together remotely, they often have to share their screens or copy-paste code snippets back and forth. Screen shares lag, and static code snippets don't allow live editing. CollabX solves this by bringing everyone into a single shared workspace where every keystroke and code execution is synced instantly across all connected users.",
      architecture:
        "CollabX is built with a Next.js frontend connected to a Java Spring Boot backend using WebSockets. When a user types or clicks 'Run Code', WebSockets instantly broadcast the updates to everyone in the room. For code execution, the backend safely runs the code in an isolated environment and returns the output (stdout/stderr) and execution time to all users simultaneously.",
      keyFeatures: [
        "Live Collaborative Editor: Type and write code together in real-time with zero delay.",
        "Multi-Language Code Execution: Run C++, Java, Python, and JavaScript code instantly.",
        "Instant Room Creation: Generate unique room codes and share links with teammates.",
        "Built-in Live Chat: Communicate seamlessly with teammates directly inside the coding workspace.",
        "Database Persistence: Save session state and chat history securely using PostgreSQL on Supabase."
      ],
      engineeringChallenges: [
        {
          challenge: "Keeping Code Synced Across Users Without Glitches",
          solution:
            "Used Spring Boot WebSockets with instant event buffering to make sure code edits from students and developers merge smoothly in real-time, even over slow internet connections."
        },
        {
          challenge: "Managing Database Connections Under Heavy Traffic",
          solution:
            "Configured Supabase PostgreSQL connection poolers on Railway to handle multiple active user rooms without dropping database connections."
        },
        {
          challenge: "Running User Code Safely & Instantly",
          solution:
            "Integrated Judge0 API to safely execute user code in isolated environments with strict execution timeouts, ensuring fast output without server risks."
        }
      ],
      techStackDetailed: {
        frontend: "Next.js, Tailwind CSS, Framer Motion",
        backend: "Java, Spring Boot, WebSockets",
        database: "PostgreSQL (Supabase Session Pooler)",
        hosting: "Vercel (Frontend), Railway (Spring Boot Backend)"
      }
    }
  },
  {
    id: "prompt2paint",
    title: "Prompt 2 Paint",
    subtitle: "AI-Powered Image Generation SaaS",
    description:
      "An AI-powered SaaS platform that converts text prompts into high-quality images. Built with a scalable MERN architecture, secure authentication, and a credit-based monetization system.",
    images: [
      new URL("@/assets/P2P_PICS/P2P_CAROUSEL/1.svg", import.meta.url).href,
      new URL("@/assets/P2P_PICS/P2P_CAROUSEL/2.png", import.meta.url).href,
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs"],
    Live: "https://prompt2paint.app",
    github: "https://github.com/Anas-Sd/Prompt_2_Paint",
    caseStudy: {
      caseStudyImages: [
        new URL("@/assets/P2P_PICS/P2P_CASE_STUDY/1.png", import.meta.url).href,
        new URL("@/assets/P2P_PICS/P2P_CASE_STUDY/2.png", import.meta.url).href,
        new URL("@/assets/P2P_PICS/P2P_CASE_STUDY/3.png", import.meta.url).href,
        new URL("@/assets/P2P_PICS/P2P_CASE_STUDY/4.png", import.meta.url).href,
        new URL("@/assets/P2P_PICS/P2P_CASE_STUDY/5.png", import.meta.url).href,
        new URL("@/assets/P2P_PICS/P2P_CASE_STUDY/6.jpg", import.meta.url).href,
      ],
      executiveSummary:
        "Prompt 2 Paint is an AI image generation web application that turns text prompts into digital images in seconds. Users can sign in, use credits to generate images, save their favorite artwork to a personal gallery, and download high-definition images instantly.",
      problemStatement:
        "Accessing AI generative APIs directly can be complex for everyday users and expensive for platform owners without proper usage caps. Prompt 2 Paint addresses this by introducing an intuitive SaaS layer with credit tracking, promotional coupons, and instant image downloading.",
      architecture:
        "The application utilizes a MERN stack architecture. User authentication is managed via JWT tokens alongside OAuth 2.0. Credit deductions occur atomically on the MongoDB server prior to dispatching requests to external AI model APIs, guaranteeing platform protection against un-credited API consumption.",
      keyFeatures: [
        "High-performance Text-to-Image Generation Engine",
        "JWT Authentication & OAuth 2.0 Third-Party Integration",
        "OTP-Based Account Email Verification",
        "Credit-Based Subscription & Monetization System",
        "Cloud Image Bookmarking & Personal Gallery",
        "User Analytics Dashboard"
      ],
      techStackDetailed: {
        frontend: "React.js, Tailwind CSS, Framer Motion",
        backend: "Node.js, Express.js, REST APIs",
        database: "MongoDB Atlas",
        deployment: "Vercel, Render"
      }
    }
  },
  {
    id: "islamiq",
    title: "IslamiQ",
    subtitle: "Modern Quran Companion Platform",
    description:
      "IslamiQ is a responsive Quran reading platform enabling instant navigation across Surahs, Aayahs, Rukus, and pages. Integrates translation support, real-time Salah timings, and daily content features.",
    images: [
      new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CAROUSEL/2.png", import.meta.url).href,
      new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CAROUSEL/3.png", import.meta.url).href,
      new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CAROUSEL/1.png", import.meta.url).href,
    ],
    tags: ["React.js", "Tailwind CSS", "Supabase", "REST APIs"],
    Live: "https://islamiq.vercel.app",
    github: "https://github.com/Anas-Sd/ISLAMIQ",
    caseStudy: {
      caseStudyImages: [
        new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CASE_STUDY/1.png", import.meta.url).href,
        new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CASE_STUDY/2.png", import.meta.url).href,
        new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CASE_STUDY/3.png", import.meta.url).href,
        new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CASE_STUDY/4.png", import.meta.url).href,
        new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CASE_STUDY/5.png", import.meta.url).href,
        new URL("@/assets/ISLAMIQ_PICS/ISLAMIQ_CASE_STUDY/6.png", import.meta.url).href,
      ],
      executiveSummary:
        "IslamiQ is a distraction-free, modern digital Quran companion focused on accessibility, speed, and clean typography. It enables users worldwide to read, study, and navigate scriptures with instant indexed jumps.",
      problemStatement:
        "Many digital Quran platforms suffer from cluttered interfaces, heavy ad popups, or difficult pagination. IslamiQ was built to provide a clean, mobile-first experience with direct indexing across Surahs, Verses, and Pages.",
      architecture:
        "Built on a client-side React architecture leveraging optimized JSON indexing structures. Geolocation APIs retrieve localized prayer timings dynamically, while Supabase provides real-time cloud data storage for user preferences and bookmarks.",
      keyFeatures: [
        "Instant Navigation by Surah, Aayah, Ruku, and Page numbers",
        "Side-by-side English translation with Arabic text rendering",
        "Real-time Geolocation Salah Timings calculation engine",
        "Daily Verse & Hadith inspiration engine",
        "Mobile-first responsive Obsidian aesthetic"
      ],
      engineeringChallenges: [
        {
          challenge: "Fast Scripture Searching across 6,000+ Verses",
          solution:
            "Pre-indexed Quranic meta structure in localized memory arrays, reducing search lookups to O(1) time complexity."
        }
      ],
      techStackDetailed: {
        frontend: "React.js, Tailwind CSS, Framer Motion",
        database: "Supabase",
        apis: "Aladhan Geolocation Prayer API, Quran Meta API",
        deployment: "Vercel"
      }
    }
  },
  {
    id: "sstraders",
    title: "SS TRADERS",
    subtitle: "Inventory Management System",
    isFreelance: true,
    isOngoing: true,
    isRestricted: true,
    description:
      "A custom freelance solution built for a commercial trading enterprise to digitize their physical catalog into an organized A-Z inventory system. Features public catalog browsing and a secure admin panel to add, edit, and update items.",
    images: [
      new URL("@/assets/SS_TRADERS_PICS/CAROUSAL/2.png", import.meta.url).href,
      new URL("@/assets/SS_TRADERS_PICS/CAROUSAL/1.png", import.meta.url).href,
    ],
    tags: ["Ongoing", "Freelance", "React", "Supabase", "Cloudinary"],
    Live: "https://sstraders1.vercel.app/",
    github: "https://github.com/Anas-Sd/SS-TRADERS",
    caseStudy: {
      executiveSummary:
        "SS Traders is a custom freelance software solution created for a commercial trading enterprise to digitalize their extensive catalog into an organized A-Z inventory system with admin modification tools.",
      problemStatement:
        "The client previously managed inventory manually using paper records and spreadsheets, leading to mismatched item counts and delayed customer inquiries regarding item availability.",
      architecture:
        "The application separates public catalog browsing from private management. Public users view read-only inventory categorized alphabetically, while authenticated admins perform CRUD operations linked to Cloudinary media storage.",
      keyFeatures: [
        "Category-based A–Z item listing engine",
        "Nested item structure for multi-part equipment listings",
        "Secure Admin Portal with authentication access control",
        "CRUD Operations (Add, Edit, Remove inventory items)",
        "Direct Cloudinary media upload integration"
      ],
      engineeringChallenges: [
        {
          challenge: "Dynamic Nested Parts Management",
          solution:
            "Designed a relational database schema supporting parent-child item dependencies while keeping UI components clean and modular."
        }
      ],
      techStackDetailed: {
        frontend: "React.js, Tailwind CSS",
        database: "Supabase Database",
        media: "Cloudinary Image API",
        deployment: "Vercel"
      }
    }
  },
  {
    id: "flip2win",
    title: "Flip 2 Win",
    subtitle: "Interactive Memory Card Matching Game",
    description:
      "A fun, fast-paced memory card game designed with smooth 3D card flips, score tracking, and randomized card shuffling. Players test their memory skills by matching pairs within a limited number of moves.",
    images: [
      new URL("@/assets/flip the card logo.png", import.meta.url).href,
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    Live: "https://flip2win.vercel.app/",
    github: "https://github.com/Anas-Sd/FLIP---THE---CARD",
    caseStudy: {
      executiveSummary:
        "Flip 2 Win is a classic card-matching game designed to demonstrate mastery over pure vanilla JavaScript, event loops, DOM state manipulation, and CSS 3D card flips.",
      problemStatement:
        "Building interactive web games without heavy frameworks requires strict state management to prevent bugs such as rapid double-clicking during card evaluation.",
      architecture:
        "Built using lightweight vanilla JavaScript. Game board states are tracked using custom object models, utilizing CSS 3D transforms (`rotateY`) for physical card flip visual feedback.",
      keyFeatures: [
        "3D CSS Card Flipping visual transitions",
        "Fisher-Yates Shuffle Algorithm for randomized card decks",
        "State lock protection during card match evaluation",
        "Score & Life tracking system",
        "Replayability & instant session reset"
      ],
      engineeringChallenges: [
        {
          challenge: "Preventing Click Exploits during Flip Transitions",
          solution:
            "Implemented a boolean state flag `isFlipping` that locks user inputs until CSS transitions complete."
        }
      ],
      techStackDetailed: {
        frontend: "HTML5, CSS3 3D Transforms, Vanilla JavaScript",
        deployment: "Vercel"
      }
    }
  },
  {
    id: "passwordgen",
    title: "PASSWORD GENERATOR",
    subtitle: "Customizable Strong Password Generator",
    description:
      "A quick, secure web utility that generates strong, randomized passwords instantly. Users can customize password length, include special characters, and copy high-security passwords with a single click.",
    images: [
      new URL("@/assets/lock.jpg", import.meta.url).href,
    ],
    tags: ["API", "JavaScript", "Security Utility"],
    Live: "https://password-chesko.vercel.app/",
    github: "https://github.com/Anas-Sd/Strong_Password_Generator",
    caseStudy: {
      executiveSummary:
        "A web security tool engineered to produce cryptographically randomized passwords tailored to user specifications, prioritizing speed and client-side privacy.",
      problemStatement:
        "Weak user passwords remain one of the biggest vulnerabilities in cyber security. This utility gives users an effortless way to generate high-entropy passwords.",
      architecture:
        "Runs 100% on the client browser using Web Crypto APIs and math randomization routines, ensuring zero network transmission of generated passwords.",
      keyFeatures: [
        "Customizable length & character set selection",
        "Entropy-focused randomization logic",
        "One-click clipboard copy with visual notification",
        "Minimalist Obsidian UI theme"
      ],
      engineeringChallenges: [
        {
          challenge: "Guaranteeing Character Diversity",
          solution:
            "Enforced rule validation checking that generated output contains at least one character from every selected set."
        }
      ],
      techStackDetailed: {
        frontend: "HTML5, CSS3, JavaScript",
        deployment: "Vercel"
      }
    }
  },
  {
    id: "jokesgen",
    title: "JOKES GENERATOR",
    subtitle: "Instant Random Joke Generator App",
    description:
      "A lighthearted web app that delivers fresh jokes at the tap of a button. Features instant one-click joke updates, smooth loading states, and a clean dark theme for daily entertainment.",
    images: [
      new URL("@/assets/jokes_logo.png", import.meta.url).href,
    ],
    tags: ["REST API", "JavaScript", "Async JS"],
    Live: "https://navvuko.vercel.app/",
    github: "https://github.com/Anas-Sd/JOKES-API",
    caseStudy: {
      executiveSummary:
        "An asynchronous API consumer web app delivering instant humor content with seamless loading states and error fallback mechanisms.",
      problemStatement:
        "Demonstrates handling external third-party API latency, HTTP error responses, and DOM updates cleanly without page reloads.",
      architecture:
        "Utilizes modern JavaScript Async/Await syntax and standard Fetch API promises to communicate with open REST endpoints.",
      keyFeatures: [
        "Asynchronous REST API Integration",
        "Instant one-click joke refresh",
        "Error handling & loading indicators",
        "Responsive dark mode interface"
      ],
      engineeringChallenges: [
        {
          challenge: "Graceful API Failures",
          solution:
            "Implemented try-catch fallback structures displaying cached friendly fallback content if remote API endpoints time out."
        }
      ],
      techStackDetailed: {
        frontend: "HTML5, CSS3, Vanilla JavaScript",
        apis: "Public Joke REST API",
        deployment: "Vercel"
      }
    }
  },
  {
    id: "qrgen",
    title: "QR CODE GENERATOR",
    subtitle: "Instant Scannable QR Code Creation Tool",
    description:
      "A simple utility tool that converts website links, text, and contact information into high-resolution scannable QR codes instantly. Users can type any input and download ready-to-use QR codes right away.",
    images: [
      new URL("@/assets/qr_code_logo.png", import.meta.url).href,
    ],
    tags: ["QR API", "JavaScript", "Tooling"],
    Live: "https://scan-chey.netlify.app/",
    github: "https://github.com/Anas-Sd/QR_CODE_GENERATOR",
    caseStudy: {
      executiveSummary:
        "A developer utility app converting text, URLs, and contact strings into high-resolution scannable QR codes instantly.",
      problemStatement:
        "Provides a quick, zero-login tool for generating dynamic QR codes suitable for print or digital sharing.",
      architecture:
        "Reads user input events in real time and queries encoding endpoints, rendering SVG/PNG matrix graphics directly into the DOM.",
      keyFeatures: [
        "Real-time QR Code matrix rendering",
        "Supports URLs, plain text, and custom payloads",
        "Instant high-res image download",
        "Clean, distraction-free UI"
      ],
      engineeringChallenges: [
        {
          challenge: "Input Debouncing for API Optimization",
          solution:
            "Added input debouncing to prevent excessive API requests while the user is actively typing."
        }
      ],
      techStackDetailed: {
        frontend: "HTML5, CSS3, JavaScript",
        apis: "QR Code Generator API",
        deployment: "Netlify"
      }
    }
  }
];
