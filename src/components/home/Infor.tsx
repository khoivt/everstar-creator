"use client";
import { Home } from "@/utils/getDictionaries";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Infor({ stats }: { stats: Home["stats"] }) {
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
        ".stat-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
      );
    },
    { scope: containerRef },
  );

  return (
    <>
      <div ref={containerRef} className="bg-dark relative py-15">
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/images/vector-1.png"
            width={748}
            height={245}
            className=""
            alt="Everstar media"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-0">
          <Image
            src="/images/vector-2.png"
            width={748}
            height={245}
            className=""
            alt="Everstar media"
          />
        </div>

        <div className="section relative z-10 mx-auto grid grid-cols-1 justify-center gap-8 md:grid-cols-2 md:gap-[55px] lg:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={index}
              className="stat-item rounded-5 flex h-36.5 flex-col items-center justify-center gap-2.5 bg-[url('/images/bg-infor-item.png')] bg-cover bg-no-repeat py-4 text-center text-white md:h-48 lg:h-69"
            >
              <p className="  text-10 md:text-16 leading-[1.4] font-black">{item.value}</p>
              <p className="  max-w-75 text-xl leading-[1.4] font-extrabold whitespace-pre-line uppercase md:text-[26px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
