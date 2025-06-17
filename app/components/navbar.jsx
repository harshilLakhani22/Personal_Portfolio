'use client';
// @flow strict
import Link from "next/link";
import Image from "next/image";


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-0">
        <div className="flex flex-shrink-0 items-center p-0 m-0">
          <Link
            href="/"
            className="flex items-center justify-center p-0 m-0 h-auto"
            // className=" text-[#16f2b3] text-3xl font-bold">
            // Portfolio
          >
            <Image
              src="/image/logo.png"
              width={90} // Adjust width as needed
              height={90} // Adjust height as needed
              alt="logo"
            />
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#achievements">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ACHIEVEMENTS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
            </Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;