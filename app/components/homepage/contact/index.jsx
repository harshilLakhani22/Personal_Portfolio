'use client';
// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import ContactForm from './contact-form';
import { useEffect } from "react";

function ContactSection() {

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const CONTAINER = document.querySelector(`.glow-container-contact-info`);
      const CARD = document.querySelector(`.glow-card-contact-info`);

      if (!CONTAINER || !CARD) return;

      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 12,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      const UPDATE = (event) => {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', ANGLE + 90);
      };

      document.body.addEventListener('pointermove', UPDATE);

      const RESTYLE = () => {
        CONTAINER.style.setProperty('--gap', CONFIG.gap);
        CONTAINER.style.setProperty('--blur', CONFIG.blur);
        CONTAINER.style.setProperty('--spread', CONFIG.spread);
        CONTAINER.style.setProperty(
          '--direction',
          CONFIG.vertical ? 'column' : 'row'
        );
      };

      RESTYLE();
      UPDATE();

      return () => {
        document.body.removeEventListener('pointermove', UPDATE);
      };
    }
  }, []);

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Get in Touch</p>
          <ContactForm />
        </div>
        <div className="glow-container-contact-info">
          <div className="glow-card-contact-info lg:w-3/4 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full border border-[#2a2e5a] transition-all duration-300 p-5">
            <div className="glows"></div>
            <div className="flex flex-col gap-5 lg:gap-9">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdMail
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>{personalData.email}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>
                  {personalData.phone}
                </span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>
                  {personalData.address}
                </span>
              </p>
            </div>
            <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
              <Link target="_blank" href={personalData.github}>
                <IoLogoGithub
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
              <Link target="_blank" href={personalData.twitter}>
                <FaXTwitter
                  className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={48}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;