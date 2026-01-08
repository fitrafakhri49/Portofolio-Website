// components/about.tsx
export default function About() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">About</h2>
        <div className="h-[1px] w-32 bg-gray-700" />
      </div>

      <div className="space-y-4 text-secondary">
        <p>
          Hi, I'm Fakhri Fitra Perdana, a passionate FullStack and Mobile
          Developer with experience in building scalable web and mobile
          applications. I specialize in React, React Native, Next.js, Node.js,
          Express, and Go, and I enjoy exploring new technologies and solving
          challenging problems.
        </p>

        <p>
          I have a strong interest in cloud computing, database management, and
          real-time applications, and I love integrating APIs and services to
          create efficient and user-friendly solutions. In my projects, I focus
          not only on functionality but also on maintainable and clean code.
          When I'm not coding, I enjoy learning about AI, IoT, and hardware
          programming, tinkering with Arduino and ESP32 devices. I'm always
          looking to collaborate with other developers and work on projects that
          make a meaningful impact.
        </p>

        <p>
          Currently, I'm working on personal projects, experimenting with
          full-stack architectures, and enhancing my skills in mobile
          development and cloud technologies. I'm open to opportunities where I
          can grow as a developer, contribute to innovative projects, and learn
          from a community of talented engineers.
        </p>
      </div>
    </div>
  );
}
