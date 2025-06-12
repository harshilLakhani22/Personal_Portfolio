'use client';
import * as React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function AchievementCard({ achievement }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-semibold">
          {achievement.title}
          {achievement.year && <span className="ml-2 text-xs text-gray-400">({achievement.year})</span>}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">achievement</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">title:</span>
            <span className="text-gray-400">{'`'}</span>
            <span className="text-amber-300">{achievement.title}</span>
            <span className="text-gray-400">{'`,'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">description:</span>
            <span className="text-cyan-400">{'`' + achievement.description + '`'}</span>
            <span className="text-gray-400">,</span>
          </div>
          {achievement.year && (
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">year:</span>
              <span className="text-orange-400">{achievement.year}</span>
              <span className="text-gray-400">,</span>
            </div>
          )}
          {achievement.link && (
            <div className="flex items-center ml-4 lg:ml-8 mt-2">
              <span className="mr-2 text-white">link:</span>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#181c2f] hover:bg-[#16f2b3] transition-colors duration-300 text-[#16f2b3] hover:text-[#181c2f] shadow-md"
                title="Open achievement link"
                aria-label="Open achievement link"
              >
                <FaExternalLinkAlt size={18} />
              </a>
              <span className="text-gray-400 ml-1">,</span>
            </div>
          )}
          <div><span className="text-gray-400">{'}'}</span></div>
        </code>
      </div>
    </div>
  );
};

export default AchievementCard; 