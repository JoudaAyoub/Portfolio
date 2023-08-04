import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: -40 }}
      transition={{ ease: easeInOut, duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-10 cursor-pointer md:mt-0"
      onClick={() => window.open(project.url, "_blank")}
    >
      <div className="flex flex-col">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className={` rounded-[10px] w-full max-h-[700px] min-h-[258px] object-fill drop-shadow-2xl select-none`}
          src={project.imageUrl}
          placeholder="blur"
          blurDataURL={project.imageUrl}
          alt="project-card"
        />
        <span className="mt-3 text-lg font-medium">{project.title}</span>
        <span className="text-sm font-regular text-primary">{project.description} </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
