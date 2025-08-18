"use client";
import { RouteSection } from "@/constants/route";
import { Home } from "@/utils/getDictionaries";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Banner({ hero }: { hero: Home["hero"] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });

      tl.addLabel("start")
        .fromTo("#main-content", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "start")
        .fromTo(
          "#banner-image",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "start",
        );
    },
    { scope: containerRef },
  );

  return (
    <>
      <div
        ref={containerRef}
        className="section relative mx-auto overflow-hidden"
      >
        <div className="absolute top-25 mr-10 md:top-[165px]">
          <Image
            src="/images/text-banner.png"
            width={613}
            height={78}
            alt="Everstar media"
          />
        </div>
        {/* Keep image text position unchanged */}

        {/* Main layout */}
        <div id="main-content">
          <div className="z-10 pt-30 pb-20 md:py-50">
            <div className="mb-6 flex flex-col gap-5.5 md:w-200 lg:mb-[33px]">
              <p className="font-montserrat max-w-100 text-xl leading-[1.4] font-black whitespace-pre-line text-white uppercase sm:max-w-150 md:text-2xl lg:max-w-200 lg:text-5xl">
                {hero.title}
              </p>
            </div>

            <div className="mb-6 md:mb-[49px]">
              <ul className="flex flex-col gap-1">
                {hero.features.map((text, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rotate-45 bg-white"></div>
                    <p className="font-montserrat text-xl font-bold text-white md:text-2xl md:font-black">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-15 flex justify-center md:mt-0 md:block">
              <button className="rounded-12.5 max-w-65 cursor-pointer border border-none bg-white px-5 py-4 text-center md:px-8 md:py-5">
                <Link
                  className="text-primary1 md:text-5 text-lg leading-[1] font-black"
                  href={RouteSection.CONTACT}
                >
                  {hero.cta}
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Banner image separated from flex, aligned right precisely */}
        <div
          id="banner-image"
          className="absolute right-0 bottom-0 hidden md:block lg:-right-10"
        >
          <Image
            src="/images/banner.png"
            width={1025}
            height={953}
            className="md:w-150 lg:w-full"
            alt="Everstar media"
          />
        </div>
      </div>
    </>
  );
}
