"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { footerVariants } from "../utils/motion";
import styles from "../styles";

const footerLinks = [
  { ref: "/", label: "Home" },
  { ref: "#faq", label: "Faq" },
  { ref: "#why-us", label: "Why Us" },
  { ref: "#services", label: "Services" },
  { ref: "#contact", label: "Contact" },
];

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-24 relative bg-transparent text-white`}
  >
    <div
      className={`${styles.innerWidth} mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12`}
    >
      {/* Left section */}
      <div className="col-span-2 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] text-orange-600">
          SMAUG-X
        </h1>
        <span className="text-6xl md:text-7xl font-light mt-4">
          Your goals, our mission
        </span>
      </div>

      {/* Middle circle with divider */}
      <div className="relative flex justify-center items-center">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full bg-orange-600 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg hover:scale-105 transition-all">
            <FaWhatsapp size={28} className="text-white mb-2" />
            <span className="text-white text-sm">Let's Chat</span>
          </div>
        </div>
      </div>

      {/* Right columns */}
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h4 className="text-lg font-semibold mb-4">Our services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>1 on 1 Coaching</li>
            <li>Small group sessions</li>
            <li>Kids Programs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Useful links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.ref}
                  className="hover:text-orange-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom divider */}
    <div className="w-full border-t border-white/10 mt-16 pt-8 text-sm opacity-80 flex flex-col lg:flex-row justify-between gap-6">
      <p>© 2025 Smaug-X. All rights reserved.</p>
      <p>
        Coaching sessions are held at your preferred gym, outdoor spot, or any
        place that fits your routine.
      </p>
    </div>

    {/* Floating WhatsApp button */}
    <a
      href="https://wa.me/0588646955"
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-transparent border border-white/20 flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-all"
    >
      <IoIosArrowUp size={32} className="text-white" />
    </a>
  </motion.footer>
);

export default Footer;
