'use client';
// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';

function BlogCard({ blog }) {
  // Determine the main link (demo > code)
  const mainLink = blog.demo || blog.code || null;

  return (
    <div className="bg-gradient-to-br from-[#232946] to-[#181c2f] border border-[#232946] shadow-xl rounded-2xl overflow-hidden group relative">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt={blog.title}
          className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        {mainLink ? (
          <Link target='_blank' href={mainLink}>
            <h3 className='text-xl md:text-2xl font-bold text-white mb-1 hover:text-[#16f2b3] transition-colors duration-200'>
              {blog.title}
            </h3>
          </Link>
        ) : (
          <h3 className='text-xl md:text-2xl font-bold text-white mb-1'>
            {blog.title}
          </h3>
        )}
        <p className='text-[#d3d8e8] text-sm md:text-base mb-2 '>
          {blog.description}
        </p>
        {blog.tech && blog.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {blog.tech.map((tech, idx) => (
              <span key={idx} className="bg-[#181c2f] border border-[#16f2b3] text-[#16f2b3] px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-3 mt-2">
          {blog.demo && (
            <Link href={blog.demo} target="_blank" className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-full text-xs font-semibold shadow-md hover:scale-105 hover:from-violet-600 hover:to-pink-500 transition">
              <FaPlay /> Demo
            </Link>
          )}
          {blog.code && (
            <Link href={blog.code} target="_blank" className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-700 text-white rounded-full text-xs font-semibold shadow-md hover:scale-105 hover:from-blue-700 hover:to-cyan-500 transition">
              <FaCode /> Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;