"use client";
import ProjectCard from "./ProjectCard";
import { createClient } from "@sanity/client";
import React, { use } from "react";

interface Project {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

interface ProjectSectionProps {}
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

const ProjectSection = (props: ProjectSectionProps) => {
  const projects = use(getProjects()) as Project[];
  console.log(projects)
  const temp = projects[2];
  projects[2] = projects[3];
  projects[3] = temp;
  return (
    <div className="mx-5">
      <div className="mt-[150px]  justify-center  md:flex-row items-center">
        <div className="grid grid-cols-4 gap-16 grid-rows-8">
          {projects
            ? projects?.map((project: Project, index: number) => (
                <div
                  key={index}
                  className={`${
                    index  === 2
                      ? "col-span-4 row-span-4"
                      : "col-span-4 md:col-span-2 row-span-4"
                  }`}
                >
                  <ProjectCard project={project} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
