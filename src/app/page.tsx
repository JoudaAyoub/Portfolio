"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import { createClient } from "@sanity/client";
interface Project {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}
const client = createClient({
  projectId: "t7qnl2ko",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
});

async function getProjects() {
  try {
    const query = `*[_type == "projects"]{
      title,
      description,
      url,
      "imageUrl": image.asset->url
    }`;
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    throw new Error("Could not fetch projects");
  }
}
export default async function Home() {
  const projects = (await getProjects()) as Project[];
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full "
    >
      <HeroSection />
      <ProjectSection projects={projects} />
      <ServicesSection />
      <Footer />
    </motion.div>
  );
}
