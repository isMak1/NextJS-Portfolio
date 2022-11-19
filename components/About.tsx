import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{duration: 1.5 }}
        className="flex flex-col relative h-screen text-center 
         max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="bottom-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true}}
            src="https://scontent.fymq3-1.fna.fbcdn.net/v/t1.18169-9/13524466_1632642440396345_4331019349460332284_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F-GAbhktZ90AX_mX7BC&_nc_ht=scontent.fymq3-1.fna&oh=00_AfC8LWswLxCcHxkIq_2wI7OuHfuh6r-TAFEyekhZ3kzRtQ&oe=639CF698"
            className="md-50 md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
             Here is a {" "}
            <span className="text-gray-400 underline decoration-[#F7AB0A]">little</span> 
            {" "} background
            </h4>
            <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </motion.div>
  )
}