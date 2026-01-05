// components/projects.tsx
const projects = [
  {
    title: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    tech: [],
    link: "#",
    featured: false,
  },
  {
    title: "Spotify Profile",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks.",
    tech: ["React", "Express", "Spotify API", "Heroku"],
    link: "#",
    featured: true,
  },
  {
    title: "Halcyon Theme",
    description:
      "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 100k+ Installs",
    tech: ["VS Code", "Sublime Text", "Atom", "Theme Design"],
    link: "#",
    featured: false,
  },
  {
    title: "Your Portfolio (v4)",
    description:
      "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks on GitHub.",
    tech: ["Gatsby", "Styled Components", "Netlify"],
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">
          <span className="text-accent">03.</span> Projects
        </h2>
        <div className="h-[1px] w-32 bg-gray-700" />
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-4 rounded-lg bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-secondary">
                    {project.description}
                  </p>

                  {project.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-accent-light px-3 py-1 text-xs text-accent font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.featured && (
                  <span className="ml-4 rounded-full border border-accent px-3 py-1 text-xs text-accent font-mono">
                    Featured Project
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
