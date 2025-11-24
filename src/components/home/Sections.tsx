"use client";

import { useCallback, useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Navigation from "./Navigation";
import SectionItem from "./SectionItem";

const SECTIONS = [
  { name: "ABOUT", id: "about", Component: AboutSection },
  { name: "PROJECT", id: "projects", Component: ProjectSection },
  { name: "CONTACT", id: "contact", Component: ContactSection },
] as const;

const NAV_SECTIONS = SECTIONS.map(({ name, id }) => ({ name, id }));

const Sections = () => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const projectSection = document.getElementById("projects");
    const contactSection = document.getElementById("contact");
    if (!projectSection || !contactSection) return;

    const threshold = 50;

    let startY = 0;

    // wheel (PC)
    const handleWheel = (e: WheelEvent) => {
      const projectRect = projectSection.getBoundingClientRect();
      const contactRect = contactSection.getBoundingClientRect();

      if (
        e.deltaY > 0 &&
        projectRect.bottom <= window.innerHeight + threshold &&
        projectRect.bottom >= window.innerHeight - threshold
      ) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
      }

      if (
        e.deltaY < 0 &&
        contactRect.top >= -threshold &&
        contactRect.top <= threshold
      ) {
        e.preventDefault();
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    // touch (모바일)
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;

      const projectRect = projectSection.getBoundingClientRect();
      const contactRect = contactSection.getBoundingClientRect();

      if (
        deltaY > 0 &&
        projectRect.bottom <= window.innerHeight + threshold &&
        projectRect.bottom >= window.innerHeight - threshold
      ) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
      }

      if (
        deltaY < 0 &&
        contactRect.top >= -threshold &&
        contactRect.top <= threshold
      ) {
        e.preventDefault();
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const handleSectionChange = useCallback((id: string, inView: boolean) => {
    setActiveSectionId((prev) => {
      if (prev === id && !inView) {
        return null;
      }
      if (prev !== id && inView) {
        return id;
      }
      return prev;
    });
  }, []);

  return (
    <>
      {SECTIONS.map(({ id, Component }) => (
        <SectionItem key={id} id={id} onChange={handleSectionChange}>
          <Component />
        </SectionItem>
      ))}

      <Navigation sections={NAV_SECTIONS} activeSectionId={activeSectionId} />
    </>
  );
};

export default Sections;
