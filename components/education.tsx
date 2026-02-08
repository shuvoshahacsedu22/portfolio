"use client";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';  
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { useSectionInView } from "@/lib/hooks";
export default function Education() {
  const { ref } = useSectionInView({ sectionName: "Education", threshold: 0.5 });
    
return (
    <section ref={ref} id="education" className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My Education</SectionHeading>
        <div className="space-y-10">
        {/* Item 1 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="w-3 h-3 bg-gray-900 rounded-full mt-2"></span>
            <span className="w-px flex-1 bg-gray-300"></span>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              BSc in Computer Science
            </h3>
            <p className="text-gray-600">
              University of Dhaka
            </p>
            <p className="text-sm text-gray-500 mt-1">
              2016 – 2019 · CGPA: 3.47 / 4.00
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed w-[20rem]">
              
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="w-3 h-3 bg-gray-900 rounded-full mt-2"></span>
              <span className="w-px flex-1 bg-gray-300"></span>
         </div>

          <div>
            <h3 className="text-xl font-semibold">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-600">
              Dhaka College
            </p>
            <p className="text-sm text-gray-500 mt-1">
              2013 – 2015 · GPA: 5.00
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
            </p>
          </div>
        </div>
      </div>
    </section>
    )

}
