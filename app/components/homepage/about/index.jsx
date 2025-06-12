'use client';
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center px-6 py-10 bg-gradient-to-br from-[#181c2f] to-[#232946] rounded-2xl shadow-2xl max-w-2xl mx-auto border-l-8 border-l-[#16f2b3] animate-fade-in">
          <h2 className="font-bold mb-5 text-[#16f2b3] text-2xl md:text-3xl uppercase tracking-wide drop-shadow-lg">
            <span className="inline-block align-middle mr-2">👋</span>Who I am?
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed font-medium mb-4">
            Hi, I&apos;m <span className="text-pink-400 font-bold animate-pulse">Harshil Lakhani</span> — a curious developer driven by code, creativity, and continuous learning. I turn ideas into real-world solutions through clean code and thoughtful design.
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed font-medium mb-4">
            From building intuitive mobile apps in Flutter to crafting scalable Node.js APIs, I thrive across the full-stack. Lately, I&apos;ve been diving deeper into the MERN stack, expanding my toolkit to create modern, impactful web apps.
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed font-medium mb-4">
            Always eager to explore new tech, solve meaningful problems, and contribute to a more open, user-focused web.
          </p>
          <p className="text-[#16f2b3] text-base md:text-lg leading-relaxed font-semibold">
            💼 Open to opportunities where innovation meets execution.
          </p>
        </div>
        <div className="flex justify-start order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={400}
            height={400}
            alt="Harshil Lakhani"
            className="rounded-2xl shadow-2xl border-4 border-[#25213b] object-cover max-h-[480px] max-w-[480px] transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;