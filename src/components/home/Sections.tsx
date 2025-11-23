"use client";

import { useCallback, useState } from "react";
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
