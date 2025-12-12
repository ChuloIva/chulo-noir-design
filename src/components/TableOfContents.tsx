import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "about-me", label: "About Me" },
  { id: "published-research", label: "Published Research" },
  { id: "research-projects", label: "Research Projects" },
  { id: "dev-projects", label: "Dev Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "education-experience", label: "Education & Experience" },
];

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // IntersectionObserver callback
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the highest intersection ratio
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        setActiveSection(mostVisible.target.id);
      }
    };

    // Create observer with configuration
    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: "-100px 0px -50%", // Top offset for header, bottom for early detection
      threshold: [0, 0.5, 1], // Multiple thresholds for better detection
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section
    const firstSection = document.getElementById(sections[0].id);
    if (firstSection && !activeSection) {
      setActiveSection(sections[0].id);
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed left-0 top-48 hidden lg:block w-60 pl-8 pr-4 z-10"
      aria-label="Table of Contents"
    >
      <div className="space-y-2">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              aria-current={isActive ? "true" : undefined}
              className={`
                w-full text-left py-2 text-sm transition-colors duration-200
                ${
                  isActive
                    ? "text-primary font-semibold border-l-2 border-primary pl-4"
                    : "text-muted-foreground hover:text-primary pl-4"
                }
              `}
            >
              {section.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default TableOfContents;
