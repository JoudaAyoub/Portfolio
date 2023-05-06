import React from "react";

const Footer = () => {
  return (
    <div className="mt-[120px] pb-[120px] flex flex-col ">
      <span className="mx-auto my-[120px] mt-[65px]  font-semibold text-[32px] md:text-[64px] before:content-footerfirst  before:scale-50 md:before:scale-100 before:absolute relative before:-left-10  md:before:top-1 before:z-[-1] after:content-footerlast  after:absolute after:scale-50 md:after:scale-100  after:-right-4  after:top-2  after:z-[2]">
        Let’s Work Together
      </span>
      <ul className="flex gap-3 mx-auto font-medium ">
        <li className="leading-[40px] hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer">
          <a
            href="https://www.linkedin.com/in/ayoub-jouda-466561197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li className="leading-[30px] ">.</li>
        <li className="leading-[40px] hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer">
          <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li className="leading-[30px]">.</li>
        <li className="leading-[40px] hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer">
          <a href="https://github.com/Ayoubjouda" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </li>
        <li className="leading-[30px]">.</li>
        <li className="leading-[40px] hover:-translate-y-0.5 hover:text-secondary transition ease-in-out cursor-pointer">
          <a href="mailto:ayoubjoudaw@gmail.com">Email</a>
        </li>
      </ul>
      <div className="mt-[28px] mx-auto text-[12px] text-subtext leading-[40px] ">
        Copyright © 2022 Jouda. Made with ❤️.
      </div>
    </div>
  );
};

export default Footer;
