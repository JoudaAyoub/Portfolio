import React from "react";
import serviceImg from "public/services.png";
import mobileserviceImg from "public/mobileservice.svg";
import Image from "next/image";
const ServicesSection = () => {
  return (
    <div className="my-[60px] md:my-[120px]  flex flex-col">
      <span className="mx-auto mt-[65px]  font-semibold text-[32px] md:text-[64px] before:content-servicesfirst  before:scale-50 md:before:scale-100 before:absolute relative before:-left-7  md:before:top-0 before:z-[-1] after:content-serviceslast  after:absolute after:scale-50 md:after:scale-100  after:-right-6  after:top-0   after:z-[2]">
        Services
      </span>
      <div className="service-card flex flex-col-reverse md:flex-row gap-[69px] mt-[60px] md:mt-[120px] mx-5">
        <div className="flex flex-col max-w-[342px]">
          <div className="text-sm font-medium">WEB DEVELOPMENT</div>
          <div className="text-[28px] font-semibold leading-[30px] mt-5">
            Building tailored Web solutions for your digital growth.
          </div>
          <div className="mt-5 text-sm leading-5 text-primary">
            I offer custom web development services that help businesses and individuals succeed
            online. Whether you need a simple website or a complex web application, I can deliver a
            solution that meets your needs. Let's work together to bring your online vision to life
            !
          </div>
        </div>
        {/* // image */}
        <Image
          src={serviceImg}
          alt=""
          className="transition ease-in-out md:max-w-fit hover:rotate-2"
        />
      </div>
      <div className="service-card flex flex-col-reverse md:flex-row gap-[69px] mt-[28px] md:mt-[120px] mx-5">
        <div className="flex flex-col max-w-[342px]">
          <div className="text-sm font-medium">MOBILE DEVELOPMENT</div>
          <div className="text-[28px] font-semibold leading-[30px] mt-5">
            Innovative Mobile Solutions for Your Business Needs
          </div>
          <div className="mt-5 text-sm leading-5 text-primary">
            I create custom mobile solutions for business needs, delivering innovative apps to
            streamline operations, improve productivity, and engage customers. Let's work together
            to take your business to the next level !
          </div>
        </div>
        {/* // image */}
        <Image
          src={mobileserviceImg}
          alt=""
          className="transition ease-in-out hover:-rotate-2 md:max-w-fit"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
