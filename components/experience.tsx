// components/experience.tsx
const experiences = [
  {
    period: "2024 — Present",
    company: "Klaviyo",
    role: "Senior Front-End Engineer",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    tech: ["JavaScript", "TypeScript", "React", "Storybook", "Accessibility"],
  },
  {
    period: "2018 — 2024",
    company: "Upstatement",
    role: "Front End Engineer",
    description:
      "Built, styled, and shipped high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more.",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Node.js",
    ],
  },
  {
    period: "July — Dec 2017",
    company: "Apple",
    role: "UI Engineer Co-op",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    tech: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
  },
  {
    period: "2016 — 2017",
    company: "Scout Studio",
    role: "Lead Developer",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    tech: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
  },
];

export default function Experience() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">
          <span className="text-accent">02.</span> Experience
        </h2>
        <div className="h-[1px] w-32 bg-gray-700" />
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 h-full w-[1px] bg-gray-700" />

        <div className="space-y-16 pl-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-primary" />

              <div>
                <span className="text-sm text-accent font-mono">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-primary">
                  {exp.role} · {exp.company}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-secondary">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent-light px-3 py-1 text-xs text-accent font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
