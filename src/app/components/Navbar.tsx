'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import menuSvg from '/public/menu.svg';
import Image from 'next/image';
import Link from 'next/link';

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
    <header className='mx-auto h-[54px] max-w-[1000px]'>
      <nav className='mt-5 flex h-full w-full items-center justify-between text-second '>
        <Link
          href={'/'}
          className='text-md mx-3 cursor-pointer font-medium '
        >
          Ayoub jouda
        </Link>
        <ul className='mx-3 hidden gap-8 text-sm font-medium md:flex '>
          <Link
            href={'/'}
            className={`${
              pathname !== '/' ? 'text-subtext' : ''
            } cursor-pointer transition ease-in-out hover:-translate-y-0.5 hover:text-second`}
          >
            Work
          </Link>
          <Link
            href={'/about'}
            className={`${
              pathname !== '/about' ? 'text-subtext' : ''
            } cursor-pointer transition ease-in-out hover:-translate-y-0.5 hover:text-second`}
          >
            About
          </Link>
          <li className='cursor-pointer text-subtext transition ease-in-out hover:-translate-y-0.5 hover:text-second'>
            <a
              href='https://drive.google.com/file/d/1QbHja6Z71g4nW7Wmwv7XRcHG8ty_jrEI/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </a>
          </li>
          <li className='cursor-pointer text-subtext transition ease-in-out hover:-translate-y-0.5 hover:text-second'>
            <a href='mailto:ayoubjoudaw@gmail.com'>Contact</a>
          </li>
        </ul>
        <div className='relative flex md:hidden'>
          <motion.div
            className={` absolute right-6 top-8 z-10 h-[254px] w-[208px] overflow-hidden rounded-b-[30px] rounded-tl-[30px] rounded-tr-[10px] border border-stroke bg-white md:hidden ${
              navState ? '' : 'hidden'
            } `}
            animate={navState ? 'open' : 'closed'}
            variants={variants}
          >
            <motion.ul
              variants={variantss}
              className='flex h-full flex-col items-center justify-center gap-8 text-sm font-medium'
            >
              <motion.li variants={variantsli}>
                <Link
                  href={'/'}
                  onClick={() => {
                    setNavState(!navState);
                  }}
                  className={`${
                    pathname !== '/' ? 'text-subtext' : ''
                  } cursor-pointer transition ease-in-out hover:-translate-y-0.5 hover:text-secondary`}
                >
                  Work
                </Link>
              </motion.li>
              <motion.li variants={variantsli}>
                <Link
                  href={'/about'}
                  onClick={() => {
                    setNavState(!navState);
                  }}
                  className={`${
                    pathname !== '/about' ? 'text-subtext' : ''
                  } cursor-pointer transition ease-in-out hover:-translate-y-0.5 hover:text-secondary`}
                >
                  About
                </Link>
              </motion.li>

              <motion.li
                variants={variantsli}
                className='cursor-pointer text-subtext transition ease-in-out hover:-translate-y-0.5 hover:text-secondary'
              >
                <a
                  href='https://drive.google.com/file/d/1zPlVNFYdde0dyzpbtXyFKzppHfZBHJJ_/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Resume
                </a>
              </motion.li>
              <motion.li
                variants={variantsli}
                className='cursor-pointer overflow-hidden text-subtext transition ease-in-out hover:-translate-y-0.5 hover:text-secondary'
              >
                <a href='mailto:ayoubjouda@hotmail.fr'>Contact</a>
              </motion.li>
            </motion.ul>
          </motion.div>

          <Image
            className='mx-3 cursor-pointer md:hidden'
            src={menuSvg}
            alt='menuIcon'
            onClick={() => setNavState(!navState)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
