"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React, { useEffect } from "react";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.5 });
  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

