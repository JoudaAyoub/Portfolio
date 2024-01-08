import React from 'react';
// import serviceImg from "/public/services.png";
// import mobileserviceImg from "/public/mobileservice.svg";
import mobileserviceImg from '/public/service2.png';
import serviceImg from '/public/service1.png';

import Image from 'next/image';
const ServicesSection = () => {
  return (
    <div className='my-[60px] flex  flex-col md:my-[120px] '>
      <span className='relative mx-auto  mt-[65px] text-[32px] font-semibold before:absolute  before:-left-7 before:z-[-1] before:scale-50 before:content-servicesfirst after:absolute  after:-right-6 after:top-0 after:z-[2]  after:scale-50 after:content-serviceslast md:text-[64px]  md:before:top-0  md:before:scale-100   md:after:scale-100'>
        Services
      </span>
      <div className='service-card mx-5 mt-[60px] flex flex-col-reverse items-center gap-[69px] md:mt-[120px] lg:flex-row'>
        <div className='flex flex-col sm:max-w-[500px] lg:max-w-[342px]'>
          <div className='text-sm font-medium'>WEB DEVELOPMENT</div>
          <div className='mt-5 text-[28px] font-semibold leading-[30px]'>
            Building tailored Web solutions for your digital growth.
          </div>
          <div className='mt-5 text-sm leading-5 text-primary'>
            I offer custom web development services that help businesses and
            individuals succeed online. Whether you need a simple website or a
            complex web application, I can deliver a solution that meets your
            needs. Let's work together to bring your online vision to life !
          </div>
        </div>
        {/* // image */}
        <Image
          src={serviceImg}
          alt=''
          className='max-h-[278px] transition ease-in-out hover:rotate-2 md:max-w-fit'
          placeholder='blur'
        />
      </div>
      <div className='service-card mx-5 mt-[28px] flex flex-col-reverse items-center gap-[69px] md:mt-[120px] lg:flex-row'>
        <div className='flex flex-col  sm:max-w-[500px] lg:max-w-[342px]'>
          <div className='text-sm font-medium'>MOBILE DEVELOPMENT</div>
          <div className='mt-5 text-[28px] font-semibold leading-[30px]'>
            Innovative Mobile Solutions for Your Business Needs
          </div>
          <div className='mt-5 text-sm leading-5 text-primary'>
            I create custom mobile solutions for business needs, delivering
            innovative apps to streamline operations, improve productivity, and
            engage customers. Let's work together to take your business to the
            next level !
          </div>
        </div>
        {/* // image */}

        <Image
          src={mobileserviceImg}
          alt=''
          className='max-h-[278px] transition ease-in-out hover:-rotate-2 md:max-w-fit'
          placeholder='blur'
        />
      </div>
    </div>
  );
};

export default ServicesSection;
