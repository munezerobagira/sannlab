import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center ">
      <div className="w-full text-center">
        <h1 className="my-2 text-6xl  md:my-4 md:text-9xl font-bold ">
          Softwares + People = <span className="text-primary">Empowerment</span>
        </h1>
        <p className="my-4 text-lg">
          We are on a mission to empower people with the softwares. We believe
          people have a lot to offer in terms of culture, knowledge, and
          experience. Our goal is to help showcase that to the world using
          software. We develop solutions for people, enterprenuers,companies and
          organizations
        </p>
        <Link href="/#contact-us">
          <Button>Hire us</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
