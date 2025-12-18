"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-study" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex fixed z-99 justify-center md:justify-between px-2 md:px-10 lg:px-26 portrait:h-[10vh] portrait:md:h-[10vh] landscape:h-[20vh] w-full  items-center ">
      <div className="hidden md:flex">
        <Image src="/logo-black.svg" alt="Logo" width={60} height={60} />
      </div>
      <ul className="flex gap-2 md:gap-2 lg:gap-4 bg-neutral-50/60 border-neutral-100 border backdrop-blur-md rounded-full  p-1 lg:p-2">
        {links.map((link, idx) => (
          <li
            key={idx}
            onClick={() => setActive(link.name)}
            className={
              active === link.name
                ? `bg-secondary-text rounded-full text-white text-sm portrait:md:text-xl landscape:md:text-md px-3 py-1 lg:px-6 lg:py-2 font-medium cursor-pointer transition-all duration-300`
                : `text-secondary-text rounded-full text-sm portrait:md:text-xl landscape:md:text-md  px-3 py-1 lg:px-6 lg:py-2 font-medium cursor-pointer transition-all duration-300 hover:text-white hover:bg-accent`
            }
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
