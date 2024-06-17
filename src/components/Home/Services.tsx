"use client";
// Import necessary modules and components
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { PackageIcon, SmartphoneIcon, PaintBucketIcon } from "lucide-react";

// Define TypeScript interfaces for type safety
interface Service {
  title: string;
  description: string;
  image: ReactNode;
  technologies: string[];
}

// Sample services data
const services: Service[] = [
  {
    title: "Web Development",
    description:
      "We specialize in creating responsive and scalable web applications.",
    image: <PackageIcon size="32" />,
    technologies: ["React", "Angular", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Mobile App Development",
    description:
      "Build native or cross-platform mobile apps tailored to your needs.",
    image: <SmartphoneIcon size="32" />,
    technologies: ["React Native", "Flutter"],
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and user-friendly interfaces for your digital products.",
    image: <PaintBucketIcon size="32" />,
    technologies: ["Figma", "Sketch", "Adobe XD"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

// ServiceItem component to display each service
const ServiceItem: React.FC<{ service: Service }> = ({ service }) => {
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
      <div className="bg-primary p-4 rounded-full">{service.image}</div>
      <h3 className="mt-6 text-xl font-medium">{service.title}</h3>
      <p className="mt-2 text-base">{service.description}</p>
      <div className="mt-2 flex space-x-2">
        {service.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </motion.div>
  );
};

// ServiceSection component to display all services
const ServiceSection: React.FC = () => {
  return (
    <div className="py-12 z-[9] bg-background">
      <motion.div
        className="max-w-7xl mx-auto p-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Our services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Services We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
            Explore our range of services designed to meet your digital needs.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {/* Map through services and render each ServiceItem */}
            {services.map((service) => (
              <ServiceItem key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceSection;
