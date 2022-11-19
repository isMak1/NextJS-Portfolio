/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center text-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:h-[650px] snap-center bg-gradient-to-br
  from-gray-200 to-sky-400 p-10 hover:opacity-100 opacity-60 cursor-pointer 
    transition-opacity duration:200 overflow-hidden">
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }} 
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/becee5fe9b1748925b3c7b42ff75dfb7" 
        alt="" 
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO</h4>
            <p className="font-semibold text-[#9c4d2d] uppercase text-2xl mt-1">ADDSON Marketing Agency</p>
        <div className="flex space-x-2 my-2">
            <img 
                className="h-10 w-10 rounded-full"
                src="https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/311838232_3270823086578264_8983369096714301386_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3eu5bBLy1CMAX9zqmdx&_nc_ht=scontent.fymq3-1.fna&oh=00_AfBIQqAgQzbU6b_MHbvY3Wj_eMN8VKWb5ABT1ctwOGEeEw&oe=637AD30B" 
                alt="" 
            />
            <img 
                className="h-10 w-10 rounded-full"
                src="https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/311838232_3270823086578264_8983369096714301386_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3eu5bBLy1CMAX9zqmdx&_nc_ht=scontent.fymq3-1.fna&oh=00_AfBIQqAgQzbU6b_MHbvY3Wj_eMN8VKWb5ABT1ctwOGEeEw&oe=637AD30B" 
                alt="" 
            />
            <img 
                className="h-10 w-10 rounded-full"
                src="https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/311838232_3270823086578264_8983369096714301386_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3eu5bBLy1CMAX9zqmdx&_nc_ht=scontent.fymq3-1.fna&oh=00_AfBIQqAgQzbU6b_MHbvY3Wj_eMN8VKWb5ABT1ctwOGEeEw&oe=637AD30B" 
                alt="" 
            />
            <img 
                className="h-10 w-10 rounded-full"
                src="https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/311838232_3270823086578264_8983369096714301386_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3eu5bBLy1CMAX9zqmdx&_nc_ht=scontent.fymq3-1.fna&oh=00_AfBIQqAgQzbU6b_MHbvY3Wj_eMN8VKWb5ABT1ctwOGEeEw&oe=637AD30B" 
                alt="" 
            />
            {/* Tech Used */}
            {/* Tech Used */}
            {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-500">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points </li>
            <li>Summary points Summary points Summary points </li>
        </ul>
        </div>
    </article>
  )
}