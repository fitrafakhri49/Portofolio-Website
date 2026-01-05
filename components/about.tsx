// components/about.tsx
export default function About() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">
          <span className="text-accent">01.</span> About
        </h2>
        <div className="h-[1px] w-32 bg-gray-700" />
      </div>

      <div className="space-y-4 text-secondary">
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.
        </p>

        <p>
          Currently, I'm a Senior Front-End Engineer specializing in
          accessibility. I contribute to the creation and maintenance of UI
          components that power frontend systems, ensuring our platforms meet
          web accessibility standards and best practices to deliver an inclusive
          user experience.
        </p>

        <p>
          In the past, I've had the opportunity to develop software across a
          variety of settings — from advertising agencies and large corporations
          to start-ups and small digital product studios.
        </p>

        <p>
          In my spare time, I'm usually hiking, playing tennis, hanging out with
          my pets, or exploring new technologies and frameworks.
        </p>
      </div>
    </div>
  );
}
