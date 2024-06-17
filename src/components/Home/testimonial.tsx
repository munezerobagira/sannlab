"use client";
// Import necessary modules and components
import React from "react";
import { motion } from "framer-motion";

// Define TypeScript interfaces for type safety
interface Testimonial {
  name: string;
  position: string;
  quote: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    position: "CEO, Company X",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Smith",
    position: "COO, Company Y",
    quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Michael Johnson",
    position: "CTO, Company Z",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

// TestimonialItem component to display each testimonial
const TestimonialItem: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <motion.div
      className="p-6 bg-background  rounded-lg shadow-md"
      variants={itemVariants}
    >
      <p className="text-lg">{testimonial.quote}</p>
      <div className="mt-4 flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src={`https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 100
            )}.jpg`}
            alt={testimonial.name}
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium ">{testimonial.name}</div>
          <div className="text-base">{testimonial.position}</div>
        </div>
      </div>
    </motion.div>
  );
};

// TestimonialSection component to display all testimonials
const TestimonialSection: React.FC = () => {
  return (
    <div className="py-12i z-[9]">
      <motion.div
        className="max-w-7xl mx-auto p-12 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {/* Map through testimonials and render each TestimonialItem */}
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
