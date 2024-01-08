'use client';
import React from 'react';
import profilePicture from '/public/profilepicture.jpg';
import metaIcon from '/public/meta.svg';
import googlesvg from '/public/google.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import {
  BiLogoJava,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPostgresql,
} from 'react-icons/bi';
import {
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

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
      initial='hidden'
      animate='show'
      className='mx-3 mt-[60px]  max-w-[1000px] md:mx-auto  md:mt-[120px]'
    >
      <div className='flex flex-col md:flex-row md:gap-[40px]  lg:gap-[80px]'>
        <motion.div
          variants={item}
          className='max-w-[400px]'
        >
          <Image
            src={profilePicture}
            alt=''
            className=' rounded-2xl'
            placeholder='blur'
            priority
          />
        </motion.div>

        <motion.span
          variants={item}
          className='text-md mt-[40px] text-second md:mt-0'
        >
          I am Ayoub Jouda, a software engineer with a passion for building
          impactful experiences. Currently, I work as
          <span className='font-medium underline'> FreeLance Developer</span>,
          where I focus on creating safe and enjoyable experiences for users.
          <br />
          <br /> I strongly believe in the power of collaboration and working
          with teams who share my values of curiosity, humility, and joy. With
          my technical expertise and desire to create positive change, I am
          committed to delivering exceptional software solutions that exceed
          expectations and bring value to users.
          <br />
          <br /> I am constantly seeking out opportunities to work with
          like-minded individuals who are dedicated to making a meaningful
          impact on society and people's lives.
        </motion.span>
      </div>
      <div className='mt-[120px] flex w-full'>
        {/* interest */}
        <div className='flex w-full flex-col justify-between md:flex-row'>
          <motion.div
            variants={item}
            className=' md:max-w-[418px]'
          >
            <div className='text-[26px] font-semibold leading-6'>Interests</div>
            <div className=' mt-[24px] leading-6 text-second'>
              <p>
                {' '}
                As a software engineer, I enjoy tackling new challenges and
                working in ambitious teams that prioritize ethical product
                development and inclusivity.
              </p>
              <br />
              <p>
                {' '}
                I bring valuable skills in programming languages, software
                development methodologies, database design, system architecture,
                testing and debugging, software version control, and
                problem-solving.
              </p>
              <br />
              <p>
                {' '}
                Additionally, I have a strong understanding of algorithms and
                data structures, which allows me to deliver high-quality
                software products.
              </p>
              <br />
              <p>
                {' '}
                In my free time, I enjoy gaming, working out, and honing my
                design skills. I believe that taking breaks from work is
                important to recharge and maintain a healthy work-life balance.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className='mt mt-[48px] w-full leading-6 text-second md:mt-0 md:w-[200px]'
          >
            <div className='text-[26px] font-semibold'>Education</div>
            <div className='mt-[24px]'>
              <span className='font-medium'>
                Moroccan School of Engineering Sciences
              </span>{' '}
              · 2019 - 2024 · Software Engineering Diploma
            </div>
            <div className='mt-[40px]'>
              <span className='font-medium'>
                Hassan II University of Casablanca
              </span>{' '}
              · 2016 - 2019 · Bachelor's Degree in Economics
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className='mt-[48px] w-full leading-6 text-second md:mt-0 md:w-[200px]'
          >
            <div className='text-[26px] font-semibold'>Experience</div>
            <div className='mt-[24px]'>
              <span className='font-medium'>NOTAMⓇ Agency</span> · Sep 2022 -
              present · Full-stack Web/Mobile Developer
            </div>
            <div className='mt-[40px]'>
              <span className='font-medium'>WorkShore</span> · Aug 2022 - Sep
              2022 · React Native Developer Intern
            </div>
          </motion.div>
        </div>
      </div>
      {/* //skills/certif */}
      <div className='mt-[48px] flex flex-col gap-[94px] md:mt-[40px] md:flex-row'>
        <motion.div
          variants={item}
          className='max-w-[418px]'
        >
          <div className='text-[26px] font-semibold text-second'>Skills</div>
          <div className='mt-[32px] md:mt-6'>
            <div className='font-medium text-tech'>Languages</div>
            <div className='mt-[8px] flex gap-2 text-second'>
              <SiJavascript size={40} /> <SiTypescript size={40} />{' '}
              <BiLogoJava size={40} />
            </div>
          </div>
          <div className='mt-[24px] md:mt-6'>
            <div className='font-medium text-tech'>Technologies</div>
            <div className='mt-[8px] flex flex-wrap gap-2 text-second'>
              <BiLogoReact size={40} />
              <SiNextdotjs size={40} />
              <TbBrandReactNative size={40} />
              <BiLogoNodejs size={40} />
              <SiNestjs size={40} />
              <SiSpring size={40} />
              <SiPrisma size={40} />
              <SiTailwindcss size={40} />
              <SiMysql size={40} />
              <BiLogoPostgresql size={40} />
              <SiMongodb size={40} />
              <SiGit size={40} />
              <SiDocker size={40} />
              <SiAmazonaws size={40} />
            </div>
          </div>
        </motion.div>
        {/* certif */}
        <motion.div
          variants={item}
          className='flex max-w-[418px] flex-col '
        >
          <div className='text-[26px] font-semibold text-second'>
            Certifications
          </div>

          <div className='mt-[32px] flex items-center gap-4 md:mt-6'>
            <Image
              src={metaIcon}
              alt='metaFronticon'
            />
            <span className='font-medium text-tech'>
              Meta Front-End Developer Professional Certificate
            </span>
          </div>
          <div className='mt-[17px] flex items-center gap-4 md:mt-6'>
            <Image
              src={metaIcon}
              alt='metaNativeicon'
            />
            <span className='font-medium text-tech'>
              Meta React Native Specialization
            </span>
          </div>
          <div className='mt-[17px] flex items-center gap-4 md:mt-6'>
            <Image
              src={googlesvg}
              alt='Uxicon'
            />
            <span className='font-medium text-tech'>
              Google Ux Design Certificate
            </span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
