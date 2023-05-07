"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full "
    >
      <HeroSection />
      <ProjectSection />
      <ServicesSection />
      <Footer />
    </motion.div>
  );
}
