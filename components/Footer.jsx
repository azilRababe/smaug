"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import ContactForm from "./ContactForm";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-20 relative  text-white backdrop-blur-sm`}
  >
    <div className={`${styles.innerWidth} mx-auto`} id="contact">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {/* Brand & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[40px] md:text-[48px] leading-tight">
            SMAUG-X
          </h4>
          <p className="text-[#ff5722] text-sm opacity-90">
            Elite training for those who want real results.
          </p>
          <div className="flex gap-4 mt-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                className="transform transition hover:scale-110"
              >
                <Image
                  width={28}
                  height={28}
                  src={social.url}
                  alt={social.name}
                  className="w-[28px] h-[28px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-span-1 md:col-span-2 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <h5 className="font-semibold text-xl text-white mb-2">
            Get in touch
          </h5>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h5 className="font-semibold text-xl mb-1">Contact</h5>
            <p className="opacity-80">
              Email:{" "}
              <a href="mailto:contact@smaugx.com" className="text-[#ff5722]">
                contact@smaugx.com
              </a>
            </p>
            <p className="opacity-80">
              Phone:{" "}
              <a href="tel:+971588646955" className="text-[#ff5722]">
                0588646955
              </a>
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-xl mb-1">Location</h5>
            <p className="opacity-80">Dubai, UAE</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm opacity-60">
        © 2025 Smaug-X. All rights reserved.
      </div>
    </div>
  </motion.footer>
);

export default Footer;
