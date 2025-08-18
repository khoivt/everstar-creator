"use client";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Home } from "@/utils/getDictionaries";
import { serviceData, solutionData } from "@/data/solution.data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="service-card flex w-[275px] flex-col items-center justify-center gap-[17px]">
      <div>
        <Image
          src={icon}
          width={70}
          height={70}
          className=""
          alt="Everstar media"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="font-montserrat text-5 text-dark2 text-center leading-[1.1] font-bold uppercase">{title}</p>
        <p className="font-montserrat text-4.5 text-dark3 text-center leading-[1] font-medium whitespace-nowrap">
          {description}
        </p>
      </div>
    </div>
  );
}

function SolutionCard({ icon, title, vectorSrc }: { icon: string; title: string; vectorSrc: string }) {
  return (
    <div className="solution-card rounded-5 relative flex h-[195px] w-40 flex-col items-center justify-center border border-none bg-white sm:w-[200px]">
      <div className="absolute top-0">
        <Image
          src={vectorSrc}
          width={213}
          height={160}
          className=""
          alt="Everstar media"
        />
      </div>
      <div className="absolute top-[21px]">
        <Image
          src={icon}
          width={36}
          height={36}
          className=""
          alt="Everstar media"
        />
      </div>
      <div className="absolute top-20 max-w-[70%] sm:top-25 lg:top-[119px]">
        <p className="font-montserrat text-4.5 md:text-5 text-center leading-[1.2] font-extrabold uppercase">{title}</p>
      </div>
    </div>
  );
}

export default function Solution({ solutions }: { solutions: Home["businessSolution"] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".solution-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      ).fromTo(
        ".solution-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        "-=0.2"
      ).fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        "-=0.2"
      );
    },
    { scope: containerRef },
  );

  return (
    <>
      <div ref={containerRef} className="section mx-auto flex flex-col items-center gap-[66px]">
        <div className="flex flex-col gap-12.5">
          <div className="solution-title">
            <SectionTitle title={solutions.title} />
          </div>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-10 lg:flex-nowrap lg:gap-[54px]">
            {solutions.items.map((item, index) => (
              <SolutionCard
                key={index}
                title={item.title}
                icon={solutionData[index].iconSrc}
                vectorSrc={solutionData[index].vectorSrc}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-[81px]">
          {solutions.services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={serviceData[index].iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
