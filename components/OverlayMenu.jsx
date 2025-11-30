"use client";

import { useState } from "react";
import "../styles/overlayMenu.css";
import Image from "next/image";

const menuItems = [
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact Us" },
];

export default function OverlayMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={() => setIsOpen(false)}>
          &times;
        </button>

        <div className="overlayContent">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#ff5722] hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span
        onClick={() => setIsOpen(true)}
        className="fixed right-8 top-8 z-40"
      >
        <Image
          height={24}
          width={24}
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain hover:cursor-pointer hover:text-[#ff5722]"
        />
      </span>
    </>
  );
}
