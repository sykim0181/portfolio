"use client";

import { useRef } from "react";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Navigation from "./Navigation";

const Sections = () => {
  const refs = Array(3)
    .fill(0)
    .map(() => useRef<HTMLDivElement>(null));
  const sections = [
    { name: "ABOUT", id: "about", ref: refs[0] },
    { name: "PROJECT", id: "projects", ref: refs[1] },
    { name: "CONTACT", id: "contact", ref: refs[2] },
  ];

  return (
    <>
      <AboutSection ref={refs[0]} />
      <ProjectSection ref={refs[1]} />
      <ContactSection ref={refs[2]} />

      <Navigation sections={sections} />
    </>
  );
};

export default Sections;
