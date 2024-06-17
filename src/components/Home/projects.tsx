"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import "devicon/devicon.min.css";
import { TECHONOLOGIES } from "@/constants/technologies";
const projects = [
  {
    title: "Sancommunity",
    description: "A social media platform for the San community in Botswana.",
    image: "projects/project2.png",
    link: "sancommunity.com",
    technologies: [
      TECHONOLOGIES.flutter,
      TECHONOLOGIES.azure,
      TECHONOLOGIES.typescript,
      TECHONOLOGIES.nodejs,
      TECHONOLOGIES.nextjs,
      TECHONOLOGIES.cloudfrare,
    ],
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "projects/project3.png",
    technologies: [TECHONOLOGIES.nodejs, TECHONOLOGIES.nextjs],
  },
];

const allTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

function ProductSection() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredProjects = selectedTech
    ? projects.filter((project) =>
        project.technologies.some((tech) => tech.name == selectedTech)
      )
    : projects;

  return (
    <div className="py-12 z-[9]">
      <motion.div
        className="max-w-7xl mx-auto p-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Our Work
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Projects We Have Worked On
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            Here are some of the projects we have successfully delivered to our
            clients.
          </p>
          <div className="mt-4 flex flex-wrap justify-center space-x-2">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech.name)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTech === tech.name
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <i className={`${tech.icon}  colored p-1`}></i>
                {tech.name}
              </button>
            ))}
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTech === null
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              All
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: { name: string; icon: string }[];
    link?: string;
  };
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
    >
      <img
        className="w-full h-56 object-cover rounded-lg"
        src={project.image}
        alt={project.title}
      />
      <h3 className="mt-6 text-xl font-medium">{project.title}</h3>
      <p className="mt-2 text-base">{project.description}</p>
      <div className="mt-2 flex space-x-2">
        {/* {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))} */}
      </div>
    </motion.div>
  );
};

export default ProductSection;
