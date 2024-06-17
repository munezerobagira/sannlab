import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FAQ from "../components/Home/faq";
import { Works } from "@/components/project-card";
import ProductSection from "../components/Home/projects";
import ServiceSection from "@/components/Home/Services";
import TestimonialSection from "@/components/Home/testimonial";
import PartenerSection from "@/components/Home/partner";
import Hero from "@/components/Home/hero";
import ContactUsSection from "@/components/Home/contact-us";

export default function Home() {
  return (
    <main className=" flex flex-col items-stretch justify-stretch">
      <Hero />
      <PartenerSection />
      <ProductSection />
      <ServiceSection />
      <TestimonialSection />
      <FAQ />
      <ContactUsSection />
    </main>
  );
}
