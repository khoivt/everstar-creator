"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollSpy() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            history.replaceState(null, "", `${pathname}#${sectionId}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [pathname]);

  return null;
}
