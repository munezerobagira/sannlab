import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeIn, textVariant } from "@/lib/framer";
import Image from "next/image";
// Projects
export const PROJECTS = [
  {
    name: "San Community",
    description:
      "We are on a mission to empower immigrant and refugee youth with the resources they need for higher education. We believe immigrants and refugees have a lot to offer in terms of culture, knowledge, and experience. Our goal is to help showcase that to the world using software.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "/project2.png",
    live_site_link: "https://sancommunity-website.vercel.app/",
  },
  {
    name: "San Map resources",
    description:
      "A Flutter  Web Application that enables users to find the resources available to them using a map",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "/project4.png",
    live_site_link: "https://map.sancommunity.com/",
  },
  {
    name: "TUTORINGA",
    description:
      "We help dedicated parents to hire Trustworthy and Highly Effective Tutors so their's children marks can imporve significantly within 28 days without giving up their hobbies and play time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/project5.png",
    live_site_link: "https://tutoringa.vercel.app/about",
  },
] as const;

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};
const projects = [];
// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {/* Work image */}
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Live Site */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            {/* <Image
              src={preview}
              alt="Live Site"
              title="Live Site"
              className="w-2/3 h-2/3 object-contain"
            /> */}
          </div>

          {/* Github */}
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <>
      {/* About */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Project Card */}
      <div className="mt-20 flex flex-wrap gap-7">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={`project-${i}`} index={i} {...project} />
        ))}
      </div>
    </>
  );
};
