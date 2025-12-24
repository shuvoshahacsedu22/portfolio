"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  
   const { ref } = useSectionInView({ sectionName: "About"});
 
  return (
    <motion.section ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
   >
        <SectionHeading>About Me</SectionHeading>
      <p className="text-lg">
        Hello! I'm Shuvo Shaha, a passionate full-stack developer with a knack
        for creating dynamic and responsive web applications. With a strong
        foundation in both front-end and back-end technologies, I thrive on
        transforming ideas into functional digital experiences.
      </p>
      <p className="text-lg">
        My journey in web development began with a fascination for how websites
        work, leading me to explore various programming languages and frameworks.
        Over the years, I've honed my skills in JavaScript, React, Node.js, and
        more, allowing me to build robust applications that meet user needs.
      </p>
      <p className="text-lg">
        Beyond coding, I enjoy collaborating with cross-functional teams,
        staying updated with industry trends, and continuously learning new
        technologies. When I'm not coding, you can find me exploring the
        outdoors or indulging in photography.
      </p>
    </motion.section>
  );
}   