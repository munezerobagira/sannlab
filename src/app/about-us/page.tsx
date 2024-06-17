import Image from "next/image";

function AboutUs() {
  return (
    <>
      <div>
        <h2 className="my-8 text-2xl  md:my-4 md:text-6xl font-bold text-primary text-center">
          Our founder story
        </h2>
        <div className="flex flex-col md:flex-row items-center py-8 ">
          <div className="w-full md:w-1/2  flex  justify-center md:justify-end">
            <Image
              src="/felicien.jpeg"
              alt="Felicien Sangwa"
              className="z-[1] rounded-full"
              width={800}
              height={800}
            />
          </div>
          <p className="w-full md:w-1/2 p-8">
            I was in foster care and a non-profit that helped me would
            collaborate with a local church, local businesses, and the community
            to give us a full life that includes going to a good college and
            having a job. It was interesting to me, how involved the whole
            community was to make sure we got the care we deserved. When I
            started studying computer science. I wanted to replicate that using
            the software. We pitched the app to the University of Michigan and
            Optimize gave us initial funds to get our social innovation project
            off the ground. We hope by leveraging the power of communities and
            innovation we can make a positive difference to the world.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
