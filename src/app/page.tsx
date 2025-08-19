"use client";

import { useMemo, useRef } from "react";
import Cursor from "@/components/common/Cursor";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import Navigation from "@/components/home/Navigation";
import ProjectSection from "@/components/home/ProjectSection";
import Intro from "@/components/home/Intro";

export default function Home() {
  const refs = Array(3)
    .fill(0)
    .map(() => useRef<HTMLDivElement>(null));
  const sections = useMemo(
    () => [
      { name: "ABOUT", id: "about", ref: refs[0] },
      { name: "PROJECT", id: "projects", ref: refs[1] },
      { name: "CONTACT", id: "contact", ref: refs[2] },
    ],
    []
  );

  return (
    <div className="relative">
      <Intro />

      <AboutSection ref={refs[0]} />
      <ProjectSection ref={refs[1]} />
      <ContactSection ref={refs[2]} />

      <Navigation sections={sections} />
      <Cursor />
    </div>
  );
}
