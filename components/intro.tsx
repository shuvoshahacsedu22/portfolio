"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.5 });
  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] 
    text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/C5103AQE7YlHQE_R5qA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1566328965911?e=1767830400&v=beta&t=021JfjBLPWF1o_PN0b-4gaXED8qxshPFdipojoTMox8"
              alt="Shuvo Shaha"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            ></Image>
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
          >
            &#128075;
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shuvo.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">6+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <motion.div 
      className="flex flex-col sm:flex-row items-center justify-center 
      gap-2 px-4 text-lg font-medium"
      initial={{opacity:0,y:100}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.1}}
      >
        <Link href="#contact"
        className="group bg-gray-900 text-white px-7 py-3 
        flex items-center gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            Contact me here <BsArrowRight className="opacity-70
            group-hover:translate-x-1 transition"></BsArrowRight>{" "} </Link>
        
        <a href="/CV.pdf" target="_blank"
        className=" group bg-white text-dark px-7 py-3 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 active-scale:105 transition cursor-pointer 
        border border-black/10">Download CV
         <HiDownload className="opacity-60 group-hover:translate-y-1 transition"></HiDownload>{" "} </a>
        <a href="https://www.linkedin.com/in/shuvoshahacsedu22/" target="_blank" 
        className="bg-white p-4 text-gray-700 flex items-center 
        gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950
        active:scale-105 transition cursor-pointer border border-black/10">
<BsLinkedin></BsLinkedin>{" "} </a>
        <a href="https://www.github.com/shuvoshahacsedu22/" target="_blank" 
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
        focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10">
<BsGithub></BsGithub>{" "} </a>

      </motion.div>
    </section>
  );
}
