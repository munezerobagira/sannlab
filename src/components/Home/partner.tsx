import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PartenerSection() {
  const partners = [
    {
      name: "Railways",
      logo: {
        url: "/rileys-ways.png",
        width: 510,
        height: 120,
      },

      link: "https://www.rileysway.org/",
    },
    {
      name: "Jewish Family Services",
      logoUrl: "/jewish-family-services.png",
      logo: {
        url: "/jewish-family-services.png",
        width: 510,
        height: 120,
      },

      link: "https://www.jewishfamilyservice.org/",
    },
    {
      name: "Optimize",
      logo: {
        url: "/optimize.png",
        width: 510,
        height: 120,
      },
      link: "https://www.optimizemi.org/",
    },
    {
      name: "University of Michigan",
      logo: {
        url: "/University_of_Michigan_logo.png",
        width: 510,
        height: 120,
      },
      link: "https://umich.edu/",
    },
  ];
  return (
    <div className="text-center z-[9] bg-background pb-40 px-4">
      <h2 className="my-2 text-2xl  md:my-4 md:text-6xl font-bold text-primary text-center">
        Our parteners
      </h2>
      <p className="my-4">
        We are proudly supported by the following organizations
      </p>
      <div className="grid grid-cols-4 items-center justify-center  gap-5">
        {partners.map((partner) => (
          <div
            key={partner.link}
            className="bg-black bg-opacity-40 max-w-52 max-h-52 p-4 rounded-sm"
          >
            <Link href={partner.link} target="_blank">
              <Image
                src={partner.logo.url}
                height={partner.logo.height}
                width={partner.logo.width}
                alt={`${partner.name} logo`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
