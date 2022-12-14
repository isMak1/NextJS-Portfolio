import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1.5 }} 
    className="h-screen flex relative overflow-hidden flex-col 
    max-w-full px-10 justify-evenly mx-auto items-center">

        <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Education
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
        scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#79e0e0]/80">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            { /* ExperienceCard */}
            { /* ExperienceCard */}
            { /* ExperienceCard */}

        </div>
    </motion.div>
  )
}