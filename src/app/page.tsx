"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import Hotjar from '@hotjar/browser';
const siteId = 3587970;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

export default async function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full max-w-[1000px]  mx-auto"
    >
      <HeroSection />
      <ProjectSection />
      <ServicesSection />
      <Footer />
    </motion.div>
  );
}
