"use client";

import React, { useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const idols = [
  {
    name: "Thảo Tiny",
    description: "Influencer",
    image: "/images/idol-1.png",
    facebook: "/images/fb-icon.png",
    tiktok: "/images/tiktok-icon2.png",
  },
  {
    name: "Elly",
    description: "Influencer",
    image: "/images/idol-3.png",
    facebook: "/images/fb-icon.png",
    tiktok: "/images/tiktok-icon2.png",
  },
  {
    name: "Beibei",
    description: "Influencer",
    image: "/images/idol-2.png",
    facebook: "/images/fb-icon.png",
    tiktok: "/images/tiktok-icon2.png",
  },
  {
    name: "Thảo Tiny",
    description: "Influencer",
    image: "/images/idol-1.png",
    facebook: "/images/fb-icon.png",
    tiktok: "/images/tiktok-icon2.png",
  },
  {
    name: "Elly",
    description: "Influencer",
    image: "/images/idol-3.png",
    facebook: "/images/fb-icon.png",
    tiktok: "/images/tiktok-icon2.png",
  },
  {
    name: "Beibei",
    description: "Influencer",
    image: "/images/idol-2.png",
    facebook: "/images/fb-icon.png",
    tiktok: "/images/tiktok-icon2.png",
  },
];

export default function Idol({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

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
        "#idol-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
      );
    },
    { scope: containerRef },
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="bg-gray">
        <div ref={containerRef} className="section relative mx-auto">
          <div id="idol-content" className="flex flex-col gap-12.5">
            <SectionTitle title={title} />
            <div className="relative min-h-97.5">
              <div
                className="overflow-hidden"
                ref={emblaRef}
              >
                <div className="flex">
                  {idols.map((idol, index) => (
                    <div
                      key={index}
                      className="ml-10 min-w-[390px] lg:ml-[55px]"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <Image
                          src={idol.image}
                          width={390}
                          height={390}
                          className="rounded-5 relative border border-none"
                          alt={`Everstar media - ${idol.name}`}
                        />
                        <p className="font-montserrat text-dark2 text-8 mt-[31px] mb-[6px] leading-[1] font-black uppercase">
                          {idol.name}
                        </p>
                        <p className="font-montserrat text-dark3 mb-[17px] text-[22px] leading-[1] font-normal">
                          {idol.description}
                        </p>
                        <div className="items-centers flex gap-1">
                          <Link
                            href={idol.facebook}
                            target="_blank"
                          >
                            <Image
                              src={idol.facebook}
                              width={39}
                              height={39}
                              className=""
                              alt="Facebook"
                            />
                          </Link>
                          <Link
                            href={idol.tiktok}
                            target="_blank"
                          >
                            <Image
                              src={idol.tiktok}
                              width={39}
                              height={39}
                              className=""
                              alt="Tiktok"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev button */}
              <div className="absolute top-1/3 left-0 z-10 -translate-x-1/2 -translate-y-1/5">
                <div
                  onClick={scrollPrev}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-xl backdrop-blur-lg"
                >
                  <Image
                    src="/images/prev-btn.png"
                    width={14}
                    height={23}
                    alt="Previous"
                  />
                </div>
              </div>

              {/* Next button */}
              <div className="absolute top-1/3 right-0 z-10 translate-x-1/2 -translate-y-1/5">
                <div
                  onClick={scrollNext}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-xl backdrop-blur-lg"
                >
                  <Image
                    src="/images/next-btn.png"
                    width={14}
                    height={23}
                    alt="Next"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
