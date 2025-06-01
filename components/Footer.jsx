"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

import WaitlistForm from "./WaitlistForm";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Flame
          </h4>
          <p className="text-sm md:text-md text-[#ff5722] tracking-wider">
            Don’t Miss Out — Get First Access & Limitless Benefits
          </p>
        </div>
        <WaitlistForm />
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">SMAUG-X</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2025 Smaug-X. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <Image
                  width={24}
                  height={24}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
