"use client"
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About({ about }: { about: { title: string; description: string[] } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        // markers: true, // Uncomment for debugging
      }
    });

    // Float animation from bottom to top
    tl.addLabel("start")
    .fromTo(
      "#left-content",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "start"
    )
    .fromTo(
      "#right-content", 
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "start" // Same label = same timing
    );
  }, { scope: containerRef });
  return (
    <>
      <div ref={containerRef} className="section mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-28.25">
        {/* Left content */}
        <div id="left-content" className="flex flex-col gap-6.25 md:pt-32">
          {/* Title */}
          <SectionTitle title={about.title} />
          {/* Description paragraph */}
          <div className="font-montserrat text-4.5 flex flex-col gap-7.5 text-justify leading-[1.2] font-normal text-black">
            {about.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        </div>
        {/* Right content */}
        <div id="right-content" className="flex justify-center">
          <div className="bg-primary1 rounded-5 relative h-136.25 max-w-150 border border-none">
            <Image
              src="/images/bg-about.png"
              width={460}
              height={493}
              className="mx-16 py-6.5"
              alt="Everstar media"
            />
            <div className="absolute top-11 left-23.5">
              <Image
                src="/images/iphone1.png"
                width={206}
                height={406}
                className=""
                alt="Everstar media"
              />
            </div>
            <div className="absolute top-23.5 right-23.25">
              <Image
                src="/images/iphone2.png"
                width={206}
                height={406}
                className=""
                alt="Everstar media"
              />
            </div>
            <div className="absolute top-8.75 -right-20">
              <Image
                src="/images/about-top-icon.png"
                width={164}
                height={164}
                className=""
                alt="Everstar media"
              />
            </div>
            <div className="absolute bottom-4 -left-11">
              <Image
                src="/images/about-bottom-icon.png"
                width={126}
                height={126}
                className=""
                alt="Everstar media"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
