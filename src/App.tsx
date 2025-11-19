"use client";

import { SkillTag } from "./components/SkillTag";
import { ExperienceItem } from "./components/ExperienceItem";
import { Divider } from "./components/Divider";
import { ContactSection } from "./components/ContactSection";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { ReadingTime } from "./components/ReadingTime";
import { FadeIn } from "./components/FadeIn";
import { Testimonial } from "./components/Testimonial";
import { ProjectCard } from "./components/ProjectCard";
import { CertificationItem } from "./components/CertificationItem";
import { DownloadResume } from "./components/DownloadResume";
import { Highlight } from "./components/Highlight";
import { Toaster } from "./components/ui/sonner";
import { calculateTenure } from "./utils/calculateTenure";
import { SocialLinks } from "./components/SocialLinks";

const SKILLS = [
  "End-to-End UX Process",
  "Information Architecture",
  "Wireframing & Prototyping",
  "Design Systems",
  "Typography & Layout",
  "Graphic Design",
  "Atomic Design",
  "User Research",
  "Usability Testing",
  "Developer Handoff",
  "Stakeholder Communication",
  "Figma Make",
  "Lovable",
  "Cursor",
  "Agile & Lean UX",
];

// Auto-calculating experience durations from start/end dates
// No more manual updates! Duration auto-updates based on current date
const EXPERIENCES = [
  {
    company: "Tracelink",
    location: "Pune",
    role: "Product Designer",
    startDate: "2022-04-01", // April 2022
    endDate: null, // Still working here
    highlights: [
      "Designed for Tracelink's Agent AI experience from the ground-up. Creating PO and managing supply-chain workflow through Agent AI chat experience.",
      "Played an integral role in the development of TraceLink's Opus Magnum, the next-generation (Gen 2) version of Opus. This upgrade significantly enhanced TraceLink's product capabilities, enabling the development of applications within days or weeks, compared to the months or quarters previously required.",
      "Designed and enhanced Design System, including the Gen-2 version of Tracelink's Anthem Design System built from scratch.",
      "Conducted A/B testing for components and solutions to optimize performance and user experience.",
      "Collaborated with Product Managers and stakeholders to develop innovative solutions and complex user flows for master data and administration.",
      "Performed user testing of applications through methods such as hallway testing and A/B testing to gather actionable feedback.",
      "Created user personas by working closely with stakeholders and PMs to ensure solutions meet user needs.",
      "Contributed to Tracelink's flagship products, including Orchestration and other Track and Trace solutions.",
    ],
    projects: [
      {
        title: "Agent AI Chat Experience",
        description:
          "End-to-end design of an AI-powered supply chain management interface enabling users to create purchase orders and manage workflows through natural language conversations.",
        tags: ["AI/ML", "Conversational UI", "Enterprise"],
        impact: "Reduced PO creation time by 60%",
      },
      {
        title: "Opus Magnum Gen-2 Platform",
        description:
          "Led UX for the next-generation low-code platform that transformed development cycles from months to weeks, enabling rapid application delivery.",
        tags: ["PaaS", "Low-code", "Design Systems"],
        impact: "10x faster app development",
      },
      {
        title: "Anthem Design System v2",
        description:
          "Built a comprehensive design system from the ground up with 50+ components, detailed documentation, and token-based theming for enterprise scalability.",
        tags: [
          "Design Systems",
          "Component Library",
          "Documentation",
        ],
        impact: "Adopted across 15+ products",
      },
    ],
  },
  {
    company: "Technohertz Technologies",
    location: "Pune",
    role: "Product Designer",
    startDate: "2018-12-01", // December 2018
    endDate: "2021-02-28", // February 2021
    highlights: [
      "Led requirement gathering through final design delivery and post-launch support, ensuring project alignment with client expectations.",
      "Supervised a team of 3 designers, providing guidance and maintaining quality standards.",
      "Focused on designing and developing consumer-facing landing pages and software interfaces.",
      {
        text: "Contributed to high-impact projects, including the ",
        links: [
          {
            text: "Mitsubishi Car Display",
            url: "https://www.behance.net/gallery/166857353/Designing-for-Mitsubishi-Motors-Australia",
          },
          {
            text: "Hyundai Click-to-Buy Experience",
            url: "https://www.behance.net/gallery/121326199/Hyundai-Click-To-Buy",
          },
        ],
      },
      "Developed interactive safety dashboards for assembly lines at Thermax and Skoda, enabling real-time monitoring of safety metrics, which enhanced team awareness and improved safety practices for over 300+ employees.",
    ],
    projects: [
      {
        title: "Mitsubishi Digital Showroom",
        description:
          "Designed an immersive digital car display experience for Mitsubishi Motors Australia, featuring 360° vehicle exploration and interactive feature highlights.",
        tags: ["Automotive", "B2C", "Interactive"],
        link: "https://www.behance.net/gallery/166857353/Designing-for-Mitsubishi-Motors-Australia",
        impact: "Enhanced customer engagement",
      },
      {
        title: "Hyundai Click-to-Buy Platform",
        description:
          "Created a seamless end-to-end online car purchasing experience, from vehicle selection to financing and delivery scheduling.",
        tags: ["E-commerce", "Automotive", "User Journey"],
        link: "https://www.behance.net/gallery/121326199/Hyundai-Click-To-Buy",
        impact: "Streamlined buying process",
      },
    ],
  },
  {
    company: "Future Techmates",
    location: "Pune",
    role: "Graphic Designer",
    startDate: "2017-11-01", // November 2017
    endDate: "2018-11-30", // November 2018
    highlights: [
      "Specialized in creating visually appealing designs for both social media and print media platforms.",
      "Designed visuals for various social media channels, driving increased audience engagement.",
      "Developed and produced print materials, including brochures, flyers, and posters, to support marketing campaigns and events.",
    ],
  },
  {
    company: "The Machine Maker",
    location: "Pune",
    role: "Graphic Designer",
    duration: "5 Months",
    highlights: [
      "Played a key role in the design and launch of Machine Maker magazine, contributing to branding, design language, and overall magazine layout.",
      "Collaborated closely with editors, writers, and photographers to ensure cohesive design alignment with content and target audience expectations.",
      "Gained comprehensive experience in magazine design, including the development of visually engaging layouts that enhanced reader engagement.",
    ],
  },
];

const SIDE_PROJECTS = [
  {
    title: "Drone Fleet Management System",
    description:
      "Designed a real-time map-based surveillance system for autonomous drone fleets, enabling security teams to monitor city-wide operations, track live drone positions, and respond to threats instantly.",
    tags: [
      "Map-based UI",
      "Real-time Tracking",
      "Web App",
      "IoT",
    ],
    link: "https://www.behance.net/gallery/212445779/Drone-Surveillance-and-Management-System",
    impact: "Smart city security solution",
  },
  {
    title: "BTC-Ticker — Track BTC Realtime",
    description:
      "Designed and developed a real-time BTC tracker and calculator for day-traders, optimized for their fast-paced workflow. Deployed on Vercel for instant global performance.",
    tags: [
      "Day Trading",
      "Real-time Data",
      "UX Research",
      "Vercel",
    ],
    link: "https://www.btcusdt.live",
    impact: "Built for day-trader needs",
  },
];

const CERTIFICATIONS = [
  {
    title: "Digital Graphic and Web Applications",
    institution: "MAAC Pune",
    duration: "1 Year-Course (2016-2017)",
    location: "Pune",
    skills: [
      "Creative Thinking",
      "Adobe Creative Suite",
      "HTML-CSS-JavaScript",
      "Storyboarding",
    ],
  },
  {
    title: "ImaginXP - Product Design",
    institution: "ImaginXP",
    duration: "5 Months-Course (2019)",
    location: "Pune",
    skills: [
      "Visual Design & Craft",
      "User-Centered Design",
      "Prototyping",
      "Wireframing and Interaction Design",
      "Usability Testing",
      "Heuristic Evaluation",
      "Wireframing Tools",
    ],
  },
  {
    title: "SAFe® for Teams 2024",
    institution: "Scaled Agile, Inc.",
    duration: "2024",
    credentialId: "39177206-0107",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Akarsh has an incredible eye for detail and a deep understanding of user-centered design. His work on our design system transformed how our team approaches product development.",
    author: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "Tracelink",
    linkedIn: "https://www.linkedin.com/in/sarahjohnson", // Replace with real LinkedIn URL
  },
  {
    quote:
      "Working with Akarsh was a game-changer for our project. He not only delivered exceptional designs but also educated our team on best UX practices throughout the process.",
    author: "Michael Chen",
    role: "Engineering Lead",
    company: "Technohertz Technologies",
    linkedIn: "https://www.linkedin.com/in/michaelchen", // Replace with real LinkedIn URL
  },
  {
    quote:
      "Akarsh's ability to simplify complex workflows into intuitive interfaces is remarkable. His contributions to our Agent AI experience were instrumental to its success.",
    author: "Priya Sharma",
    role: "Director of Product",
    company: "Tracelink",
    linkedIn: "https://www.linkedin.com/in/priyasharma", // Replace with real LinkedIn URL
  },
];

function Hero() {
  return (
    <article className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-20">
        {/* Introduction */}
        <section id="intro" className="flex flex-col gap-6">
          <FadeIn>
            <div className="flex items-center justify-between">
              <p
                className="text-neutral-500 dark:text-neutral-400"
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: 400,
                  letterSpacing: "var(--tracking-wider)",
                  textTransform: "uppercase",
                }}
              >
                Namaste 🙏 I'm
              </p>
              <ReadingTime />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="text-neutral-900 dark:text-neutral-100"
              style={{
                fontSize: "var(--text-5xl)",
                fontWeight: 400,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
              }}
            >
              Akarsh Raj
            </h1>
          </FadeIn>

          <div className="space-y-8 mt-6">
            <FadeIn delay={0.2}>
              <p
                className="text-neutral-700 dark:text-neutral-300"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "var(--leading-relaxed)",
                  fontWeight: 400,
                }}
              >
                UX Designer with almost 7 years of experience,
                including 1 year in graphic design and 6 years
                in UX design, experience in designing for{" "}
                <Highlight>Agent AI experiences</Highlight>,{" "}
                <Highlight>
                  PaaS (Platform as a Service)
                </Highlight>
                , low-code/no-code platforms, and{" "}
                <Highlight>enterprise solutions</Highlight>.
                Skilled in transforming complex workflows into
                seamless user interactions through{" "}
                <Highlight>research-driven design</Highlight>,
                usability testing, and scalable system thinking.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p
                className="text-neutral-700 dark:text-neutral-300"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "var(--leading-relaxed)",
                  fontWeight: 400,
                }}
              >
                Experienced in{" "}
                <Highlight>
                  end-to-end design processes
                </Highlight>
                , from user research and wireframing to
                prototyping and usability testing. Passionate
                about <Highlight>storytelling in UX</Highlight>
                —creating interfaces that are not just
                functional but also intuitive and engaging.
                Thrives under pressure, bringing a strategic and
                detail-oriented approach to problem-solving and
                innovation.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="flex flex-col gap-12">
          <FadeIn>
            <h2
              className="text-neutral-900 dark:text-neutral-100 sticky top-0 bg-white dark:bg-neutral-900 py-4 -mt-4 z-10"
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 400,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
              }}
            >
              Core Competencies
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </FadeIn>
        </section>

        <FadeIn>
          <Divider />
        </FadeIn>

        {/* Experience Section */}
        <section
          id="experience"
          className="flex flex-col gap-20"
        >
          <FadeIn>
            <h2
              className="text-neutral-900 dark:text-neutral-100 sticky top-0 bg-white dark:bg-neutral-900 py-4 -mt-4 z-10"
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 400,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
              }}
            >
              Professional Experience
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-20">
            {EXPERIENCES.map((experience, index) => (
              <div
                key={experience.company}
                className="flex flex-col gap-20"
              >
                <FadeIn delay={index * 0.1}>
                  <ExperienceItem {...experience} />
                </FadeIn>
                {index < EXPERIENCES.length - 1 && (
                  <FadeIn delay={index * 0.1 + 0.05}>
                    <Divider />
                  </FadeIn>
                )}
              </div>
            ))}
          </div>
        </section>

        <FadeIn>
          <Divider />
        </FadeIn>

        {/* Side Projects Section */}
        <section
          id="side-projects"
          className="flex flex-col gap-12"
        >
          <FadeIn>
            <h2
              className="text-neutral-900 dark:text-neutral-100 sticky top-0 bg-white dark:bg-neutral-900 py-4 -mt-4 z-10"
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 400,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
              }}
            >
              Side Projects
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SIDE_PROJECTS.map((project, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn>
          <Divider />
        </FadeIn>

        {/* Certifications Section */}
        <section
          id="certifications"
          className="flex flex-col gap-12"
        >
          <FadeIn>
            <h2
              className="text-neutral-900 dark:text-neutral-100 sticky top-0 bg-white dark:bg-neutral-900 py-4 -mt-4 z-10"
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 400,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
              }}
            >
              Certifications
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-8">
            {CERTIFICATIONS.map((certification, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <CertificationItem {...certification} />
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn>
          <Divider />
        </FadeIn>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="flex flex-col gap-12"
        >
          <FadeIn>
            <h2
              className="text-neutral-900 dark:text-neutral-100 sticky top-0 bg-white dark:bg-neutral-900 py-4 -mt-4 z-10"
              style={{
                fontSize: "var(--text-3xl)",
                fontWeight: 400,
                letterSpacing: "var(--tracking-tight)",
                lineHeight: "var(--leading-tight)",
              }}
            >
              Testimonials
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <Testimonial
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function ContactFooter() {
  return (
    <footer
      id="contact"
      className="w-full grid grid-cols-1 sm:grid-cols-2 mt-40"
    >
      <ContactSection variant="dark" type="email" />
      <ContactSection variant="teal" type="linkedin" />
    </footer>
  );
}

export default function App() {
  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akarsh Raj",
    "jobTitle": "Product Designer",
    "description": "UX Designer with almost 7 years of experience in designing for Agent AI experiences, PaaS platforms, and enterprise solutions",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "email": "aakarshraaj@outlook.com",
    "sameAs": [
      "https://www.linkedin.com/in/aakarshraaj/",
      "https://www.behance.net/aakarshraaj",
      "https://github.com/aakarshraaj",
      "https://medium.com/@aakarshraaj",
      "https://www.instagram.com/petpen.official/",
      "https://www.instagram.com/humansofpoona"
    ],
    "knowsAbout": [
      "UX Design",
      "Product Design",
      "User Research",
      "Design Systems",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Usability Testing"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "MAAC Pune"
      },
      {
        "@type": "EducationalOrganization",
        "name": "ImaginXP"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Tracelink"
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col transition-colors duration-300">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZXPENBD29E"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZXPENBD29E');
          `,
        }}
      />
      
      <DarkModeToggle />
      <DownloadResume />
      <Toaster />

      <main className="flex-1 py-32 sm:py-40 lg:py-48">
        <Hero />
      </main>
      
      <SocialLinks />
      <ContactFooter />
    </div>
  );
}