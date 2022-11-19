/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
        "<Serious-Designer />",
        "<Intense-Lover />",
        "<Passionate-Boxer />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden">
        <BackgroundCircles />
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent.fymq3-1.fna.fbcdn.net/v/t39.30808-6/311838232_3270823086578264_8983369096714301386_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3eu5bBLy1CMAX9zqmdx&_nc_ht=scontent.fymq3-1.fna&oh=00_AfBIQqAgQzbU6b_MHbvY3Wj_eMN8VKWb5ABT1ctwOGEeEw&oe=637AD30B" 
        alt="" />

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
            Programmer Analyst
          </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-br
          from-sky-200 to-sky-600">{text}</span>
          <Cursor cursorColor='#F7AB0A' />
          </h1>  

          <div className="pt-5 p-5">
            <Link href="#about"><button className="heroButton">About</button></Link>
            <Link href="#experience"><button className="heroButton">Experience</button></Link>
            <Link href="#skills"><button className="heroButton">Skills</button></Link>
            <Link href="#projects"><button className="heroButton">Projects</button></Link>            
          </div>
        </div>

    </div>
  );
}

