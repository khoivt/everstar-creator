"use client";
import { Home } from "@/utils/getDictionaries";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import clsx from "clsx";

interface InforItemProps {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
  className?: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

function InforItem(props: InforItemProps) {
  const { title, description, icon, highlight = false, className } = props;
  return (
    <div className={clsx("relative flex flex-col items-center", className)}>
      {/* Icon hình tròn nổi lên */}

      <div className="-top-0 z-10 md:absolute"></div>
      {/* Box nội dung */}
      <div
        className={`rounded-5 flex h-80 w-full flex-col items-center pt-10 pb-5 text-center shadow-md sm:h-60 lg:h-full lg:pt-20 ${
          highlight ? "bg-primary1" : "bg-dark"
        }`}
      >
        <div
          className={`absolute top-0 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full shadow-lg lg:h-[146px] lg:w-[146px] ${
            highlight ? "bg-dark" : "bg-primary1"
          }`}
        >
          <Image
            src={icon}
            width={40}
            height={40}
            className="lg:h-15 lg:w-15"
            alt={title}
          />
        </div>
        <div className="mt-4 flex flex-col gap-[11px] px-4 sm:px-8">
          <p className="font-montserrat md:text-6.5 text-lg leading-[1] font-black text-white uppercase">{title}</p>
          <p className="font-montserrat text-4 md:text-4.5 text-justify font-medium whitespace-pre-line text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CoreValues({
  vision,
  mission,
  coreValues,
}: {
  vision: Home["vision"];
  mission: Home["mission"];
  coreValues: Home["coreValues"];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      title: vision.title,
      icon: "/images/eye-icon.png",
      description: vision.description,
    },
    {
      title: mission.title,
      icon: "/images/goal-icon.png",
      description: mission.description,
      highlight: true,
    },
    {
      title: coreValues.title,
      icon: "/images/diamond-icon.png",
      description: `${coreValues.journeyOverLuck}
${coreValues.legacyOverTrends}
${coreValues.qualityOverSpeed}`,
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Bắt đầu sớm hơn khi top của element cách viewport 85%
          end: "center center", // Kết thúc khi center element đến center viewport
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment để debug
        },
      });

      tl.fromTo(
        ".infor-item",
        { y: 50, opacity: 0 }, // From state
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }, // Duration ngắn hơn và stagger nhanh hơn
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="section inset-0 bottom-0 mx-auto lg:absolute lg:translate-y-[-40%]"
    >
      <div className="grid grid-cols-1 justify-center gap-18 pt-10 md:pt-0 lg:grid-cols-3 lg:gap-[55px]">
        {items.map((item, index) => (
          <InforItem
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
            highlight={item.highlight}
            className="infor-item"
          />
        ))}
      </div>
    </div>
  );
}
