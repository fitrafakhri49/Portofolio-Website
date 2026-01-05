// app/page.tsx
import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/project";

export default function Home() {
  return (
    <div className="relative mx-auto flex max-w-[1800px] px-4 md:px-8 lg:px-12 xl:px-16">
      <Sidebar />

      <div className="flex-1 lg:pl-32">
        {" "}
        {/* Spacing container */}
        <main className="w-full px-4 py-20 lg:px-8 lg:py-24 xl:px-12">
          <section id="about" className="mb-28 scroll-mt-20">
            <About />
          </section>

          <section id="experience" className="mb-28 scroll-mt-20">
            <Experience />
          </section>

          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
        </main>
      </div>

      {/* Vertical line separator - positioned relative to container */}
      <div className="fixed left-[calc(40%-1px)] top-0 hidden h-full w-[1px] bg-gray-700/30 lg:block" />
    </div>
  );
}
