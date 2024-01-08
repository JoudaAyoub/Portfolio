import React from 'react';

const Footer = () => {
  return (
    <div className='mt-[120px] flex flex-col pb-[120px] '>
      <span className='relative mx-auto my-[120px]  mt-[65px] cursor-pointer text-[32px] font-semibold  before:absolute before:-left-10 before:z-[-1] before:scale-50 before:content-footerfirst  after:absolute after:-right-4 after:top-2  after:z-[2] after:scale-50 after:content-footerlast  md:text-[64px]  md:before:top-1  md:before:scale-100 md:after:scale-100'>
        <a href='mailto:ayoubjoudaw@gmail.com'>Let’s Work Together</a>
      </span>
      <ul className='mx-auto flex gap-3 font-medium '>
        <li className='cursor-pointer leading-[40px] transition ease-in-out hover:-translate-y-0.5 hover:text-secondary'>
          <a
            href='https://www.linkedin.com/in/ayoub-jouda-466561197/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
        </li>
        <li className='leading-[30px] '>.</li>
        <li className='cursor-pointer leading-[40px] transition ease-in-out hover:-translate-y-0.5 hover:text-secondary'>
          <a
            href='https://twitter.com/home'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
        </li>
        <li className='leading-[30px]'>.</li>
        <li className='cursor-pointer leading-[40px] transition ease-in-out hover:-translate-y-0.5 hover:text-secondary'>
          <a
            href='https://github.com/Ayoubjouda'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </li>
        <li className='leading-[30px]'>.</li>
        <li className='cursor-pointer leading-[40px] transition ease-in-out hover:-translate-y-0.5 hover:text-secondary'>
          <a href='mailto:ayoubjoudaw@gmail.com'>Email</a>
        </li>
      </ul>
      <div className='mx-auto mt-[28px] text-[12px] leading-[40px] text-subtext '>
        Copyright © 2022 Jouda. Made with ❤️.
      </div>
    </div>
  );
};

export default Footer;
