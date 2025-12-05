"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About us",
    },
    {
      href: "/about#services",
      label: "Services",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <nav className="w-full bg-white/20 shadow sticky top-0 left-0 z-50 md:border-b md:border-white/20 md:backdrop-blur md:rounded-full border-b border-white/20 backdrop-blur ">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
              SMAUG-X
            </h2>

            {/* Mobile toggle */}
            {isOpen ? (
              <RiCloseLargeLine
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl cursor-pointer md:hidden hover:text-orange-600 transition duration-300"
              />
            ) : (
              <RiMenu3Fill
                className="text-white text-2xl cursor-pointer md:hidden hover:text-orange-600 transition duration-300"
                onClick={() => setIsOpen(true)}
              />
            )}

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-8 items-center font-medium ">
              {menuItems.map((item) => (
                <li
                  key={item.href}
                  className="cursor-pointer text-white hover:text-orange-600 transition"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact" type="button">
                  <button
                    type="button"
                    className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-700 transition rounded-full border-b border-white/20 shadow-md "
                  >
                    Book Your Session
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile dropdown */}
          {isOpen && (
            <ul className="flex flex-col gap-4 px-4 py-4 bg-white/20 border-t md:hidden font-medium ">
              {menuItems.map((item) => (
                <li
                  key={item.href}
                  className="cursor-pointer text-white hover:text-orange-600 transition"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <hr className="border-white/20 mb-5" />
                <Link href="/contact">
                  <button
                    type="button"
                    className="bg-[#ff5722] text-white px-4 py-2 rounded w-full hover:bg-orange-700 transition border-b border-white/20 shadow-md "
                  >
                    Book Your Session
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </motion.nav>
  );
};

export default Navbar;
