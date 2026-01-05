// app/page.tsx
import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/project";

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-[1fr_1fr]">
      {/* Sidebar column */}
      <div className="sticky top-0 flex h-screen justify-center">
        <Sidebar />
      </div>

      {/* Main content column */}
      <div className="h-screen overflow-y-auto">
        <main>
          <section
            id="about"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
          >
            <About />
          </section>

          <section
            id="experience"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
          >
            <Experience />
          </section>

          <section
            id="projects"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
          >
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
