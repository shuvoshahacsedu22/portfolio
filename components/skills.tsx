"use client";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index:number)=>
        ({ opacity: 1, y: 0, transition: { delay: 0.05*index } })
    ,
};

export default function Skills() {
      const { ref } = useSectionInView({ sectionName: "Skills"});
    
  return (
    <section ref={ref} className="mb-28 max-w-[53rem] 
        scroll-mt-28 text-center sm:mb-40" id="skills">
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex gap-2 flex-wrap justify-center text-lg text-gray-800">
            {
                skillsData.map((skill,index) => (
                    <motion.li className="bg-white border 
                    border-black/[0.1]  
                    rounded-xl px-5 py-3"
                    key={index}
                    variants={fadeInAnimationsVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    >{skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}