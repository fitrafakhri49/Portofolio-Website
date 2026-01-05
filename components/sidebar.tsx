// components/sidebar.tsx
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="h-screen w-2/5 flex-col px-8 py-24 lg:flex">
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-primary">
          Fakhri Fitra Perdana
        </h1>

        <h2 className="mt-4 text-xl text-accent font-semibold">
          Frontend Backend Mobile-pp
        </h2>

        <p className="mt-6 max-w-sm leading-relaxed text-secondary text-sm">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className="mt-16 flex flex-col gap-6 text-sm">
          {["About", "Experience", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group flex items-center gap-4 text-secondary hover:text-accent transition-colors duration-300"
            >
              <span className="w-8 text-right text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                0{["About", "Experience", "Projects"].indexOf(item) + 1}
              </span>
              <span className="tracking-widest uppercase">{item}</span>
              <div className="ml-auto h-[1px] w-8 bg-gray-700 group-hover:w-16 group-hover:bg-accent transition-all duration-300" />
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 text-secondary">
        <a
          href="https://github.com"
          className="hover:text-accent transition-colors duration-300"
          aria-label="GitHub"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://linkedin.com"
          className="hover:text-accent transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={20} />
        </a>
        <a
          href="https://instagram.com"
          className="hover:text-accent transition-colors duration-300"
          aria-label="Instagram"
        >
          <FiInstagram size={20} />
        </a>
      </div>
    </aside>
  );
}
