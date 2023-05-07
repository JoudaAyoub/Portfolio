"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import menuSvg from "/public/menu.svg";
import Image from "next/image";
import Link from "next/link";

const variantsli = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const variantss = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0 },
};
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const pathname = usePathname();

  return (
    <header className="max-w-[1000px] h-[54px] mx-auto">
      <nav className="flex items-center justify-between w-full h-full mt-5 text-secondary ">
        <Link href={"/"} className="mx-3 font-medium cursor-pointer text-md ">
          Ayoub jouda
        </Link>
        <ul className="hidden gap-8 mx-3 text-sm font-medium md:flex ">
          <Link
            href={"/"}
            className={`${
              pathname !== "/" ? "text-subtext" : ""
            } hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer`}
          >
            Work
          </Link>
          <Link
            href={"/about"}
            className={`${
              pathname !== "/about" ? "text-subtext" : ""
            } hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer`}
          >
            About
          </Link>
          <li className="text-subtext hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer">
            <a
              href="https://drive.google.com/file/d/1QbHja6Z71g4nW7Wmwv7XRcHG8ty_jrEI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="text-subtext hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer">
            <a href="mailto:ayoubjoudaw@gmail.com">Contact</a>
          </li>
        </ul>
        <div className="relative flex md:hidden">
          <motion.div
            className={` absolute top-8 right-6 border-stroke border bg-white w-[208px] z-10 rounded-tr-[10px] rounded-tl-[30px] rounded-b-[30px] h-[254px] md:hidden overflow-hidden ${
              navState ? "" : "hidden"
            } `}
            animate={navState ? "open" : "closed"}
            variants={variants}
          >
            <motion.ul
              variants={variantss}
              className="flex flex-col items-center justify-center h-full gap-8 text-sm font-medium"
            >
              <motion.li variants={variantsli}>
                <Link
                  href={"/"}
                  onClick={() => {
                    setNavState(!navState);
                  }}
                  className={`${
                    pathname !== "/" ? "text-subtext" : ""
                  } hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer`}
                >
                  Work
                </Link>
              </motion.li>
              <motion.li variants={variantsli}>
                <Link
                  href={"/about"}
                  onClick={() => {
                    setNavState(!navState);
                  }}
                  className={`${
                    pathname !== "/about" ? "text-subtext" : ""
                  } hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer`}
                >
                  About
                </Link>
              </motion.li>

              <motion.li
                variants={variantsli}
                className="text-subtext hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer"
              >
                <a
                  href="https://drive.google.com/file/d/1QbHja6Z71g4nW7Wmwv7XRcHG8ty_jrEI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </motion.li>
              <motion.li
                variants={variantsli}
                className="text-subtext hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer overflow-hidden"
              >
                <a href="mailto:ayoubjoudaw@gmail.com">Contact</a>
              </motion.li>
            </motion.ul>
          </motion.div>

          <Image
            className="mx-3 cursor-pointer md:hidden"
            src={menuSvg}
            alt="menuIcon"
            onClick={() => setNavState(!navState)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
