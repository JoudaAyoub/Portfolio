"use client";
import React from "react";
import profilePicture from "/public/profilepicture.jpg";
import metaIcon from "/public/meta.svg";
import googlesvg from "/public/google.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: -10 },
  };
  return (
    <motion.div
      exit={{ opacity: 0 }}
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-[60px] md:mt-[120px] mx-5 md:mx-0"
    >
      <div className="flex flex-col md:flex-row md:gap-[80px]">
        <motion.div variants={item} className="max-w-[450px]">
          <Image
            src={window.innerWidth > 450 ? profilePicture : profilePicture}
            alt=""
            className=" rounded-2xl"
          />
        </motion.div>

        <motion.span variants={item} className="text-md text-secondary mt-[40px] md:mt-0">
          I am Ayoub Jouda, a software engineer with a passion for building impactful experiences.
          Currently, I work as
          <span className="font-medium underline"> FreeLance Developer</span>, where I focus on
          creating safe and enjoyable experiences for users.
          <br />
          <br /> I strongly believe in the power of collaboration and working with teams who share
          my values of curiosity, humility, and joy. With my technical expertise and desire to
          create positive change, I am committed to delivering exceptional software solutions that
          exceed expectations and bring value to users.
          <br />
          <br /> I am constantly seeking out opportunities to work with like-minded individuals who
          are dedicated to making a meaningful impact on society and people's lives.
        </motion.span>
      </div>
      <div className="flex mt-[120px] w-full">
        {/* interest */}
        <div className="flex flex-col justify-between w-full md:flex-row">
          <motion.div variants={item} className=" md:max-w-[418px]">
            <div className="text-[26px] leading-6 font-semibold">Interests</div>
            <div className=" mt-[24px] text-secondary leading-6">
              <p>
                {" "}
                As a software engineer, I enjoy tackling new challenges and working in ambitious
                teams that prioritize ethical product development and inclusivity.
              </p>
              <br />
              <p>
                {" "}
                I bring valuable skills in programming languages, software development
                methodologies, database design, system architecture, testing and debugging, software
                version control, and problem-solving.
              </p>
              <br />
              <p>
                {" "}
                Additionally, I have a strong understanding of algorithms and data structures, which
                allows me to deliver high-quality software products.
              </p>
              <br />
              <p>
                {" "}
                In my free time, I enjoy gaming, working out, and honing my design skills. I believe
                that taking breaks from work is important to recharge and maintain a healthy
                work-life balance.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className="w-full md:w-[200px] mt-[48px] md:mt-0 text-secondary leading-6 mt"
          >
            <div className="text-[26px] font-semibold">Education</div>
            <div className="mt-[24px]">
              <span className="font-medium">Moroccan School of Engineering Sciences</span> · 2019 -
              2024 · Software Engineering Diploma
            </div>
            <div className="mt-[40px]">
              <span className="font-medium">Hassan II University of Casablanca</span> · 2016 - 2019
              · Bachelor's Degree in Economics
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className="md:w-[200px] w-full leading-6 text-secondary mt-[48px] md:mt-0"
          >
            <div className="text-[26px] font-semibold">Experience</div>
            <div className="mt-[24px]">
              <span className="font-medium">FreeLancer</span> · Sep 2022 - present · Full-stack
              Web/Mobile Developer
            </div>
            <div className="mt-[40px]">
              <span className="font-medium">WorkShore</span> · Aug 2022 - Sep 2022 · React Native
              Developer Intern
            </div>
          </motion.div>
        </div>
      </div>
      {/* //skills/certif */}
      <div className="md:mt-[40px] mt-[48px] flex flex-col md:flex-row gap-[94px]">
        <motion.div variants={item} className="max-w-[418px]">
          <div className="text-[26px] text-secondary font-semibold">Skills</div>
          <div className="md:mt-6 mt-[32px]">
            <div className="font-medium text-tech">Languages</div>
            <div className="text-secondary mt-[8px]">Javascript, Typescript, Java, SQL.</div>
          </div>
          <div className="md:mt-6 mt-[24px]">
            <div className="font-medium text-tech">Technologies</div>
            <div className="text-secondary mt-[8px]">
              ReactJs, NextJs, React Native, NodeJs, NestJs, Prisma, TailwindCss, MySql, Postgresql,
              MongoDb, Firebase, Git, Docker.
            </div>
          </div>
        </motion.div>
        {/* certif */}
        <motion.div variants={item} className="flex flex-col max-w-[418px] ">
          <div className="text-[26px] text-secondary font-semibold">Certifications</div>

          <div className="flex items-center md:mt-6 gap-4 mt-[32px]">
            <Image src={metaIcon} alt="metaFronticon" />
            <span className="font-medium text-tech">
              Meta Front-End Developer Professional Certificate
            </span>
          </div>
          <div className="flex items-center md:mt-6 gap-4 mt-[17px]">
            <Image src={metaIcon} alt="metaNativeicon" />
            <span className="font-medium text-tech">Meta React Native Specialization</span>
          </div>
          <div className="flex items-center md:mt-6 gap-4 mt-[17px]">
            <Image src={googlesvg} alt="Uxicon" />
            <span className="font-medium text-tech">Google Ux Design Certificate</span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
