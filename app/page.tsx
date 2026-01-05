// app/page.tsx
import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/project";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-[3fr_3fr]">
      {/* Sidebar column - ALWAYS show on large screens */}
      <div className="h-screen sticky top-0 overflow-hidden">
        <Sidebar />
      </div>

      {/* Main content column */}
      <div className="h-screen overflow-y-auto">
        <main>
          <section
            id="about"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
            style={{ scrollMarginTop: "6rem" }}
          >
            <About />
          </section>

          <section
            id="experience"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
            style={{ scrollMarginTop: "6rem" }}
          >
            <Experience />
          </section>

          <section
            id="projects"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
            style={{ scrollMarginTop: "6rem" }}
          >
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
