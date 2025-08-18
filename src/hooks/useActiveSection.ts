import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], threshold = 0.5) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold },
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, threshold, pathname]);

  return activeSection;
}
