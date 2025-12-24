"use client";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact", threshold: 0.5 });
    return (
    <motion.section id="contact" ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
        duration:1
    }}
    viewport={{once:true}}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p>Please contact me directly at {"  "} 
            <a className="underline" 
            href="mailto:shuvoshaha7@gmail.com">shuvoshaha7@gmail.com </a>
         or through this form
        </p>
        <form className="mt-10 flex flex-col">
            <input placeholder="Your email"
            className="h-14 rounded-lg border borderBlack p-4"
            type="email" required={true} maxLength={500}/>
            <textarea placeholder="Your Message"
            className="h-52 my-3 rounded-lg border borderBlack p-4" required={true} maxLength={500}></textarea>
            <button type="submit"
            className=" group flex items-center justify-center 
            gap-2 h-[3rem] w-[8rem]
            bg-gray-900 text-white rounded-full
             outline-none transition-all
             focus:scale-110
             hover:scale-105
             hover:bg-gray-950 active:scale-105"
            >Submit <FaPaperPlane 
            className="text-xs opacity-70 transition-all
            group-hover:translate-x-1
            group-hover:-translate-y-1"></FaPaperPlane> </button>
        </form>
        </motion.section>
    );
    }   