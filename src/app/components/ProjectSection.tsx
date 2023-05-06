import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

interface ProjectSectionProps {
  projects: Project[];
}
const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <div className="mx-5">
      <div className="mt-[150px]  justify-center  md:flex-row items-center">
        <div className="grid grid-cols-4 gap-16 grid-rows-8">
          {projects?.map((project: Project, index: number) => (
            <div
              key={index}
              className={`${
                (index + 1) % 3 === 0 ? "col-span-4 row-span-4" : "col-span-2 row-span-4"
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
