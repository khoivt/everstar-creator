"use client";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { Home } from "@/utils/getDictionaries";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const benefitItems = [
    {
      id: "01",
      title: "Thu nhập hấp dẫn",
      description:
        "Tăng thu nhập ổn định qua các hoạt động livestream sáng tạo, nội dung giải trí và tương tác đa nền tảng.",
      icon: "/images/thunhap-icon.png",
      iconWidth: 61,
      iconHeight: 61,
      numberIcon: "/images/01-icon.png",
      bgColor: "bg-primary1",
      bgHeight: 61,
      numberIconClass: "h-[87px] w-[119px]",
      marginTop: "mt-2",
    },
    {
      id: "02",
      title: "Chính sách hỗ trợ vượt trội",
      description:
        "Đội ngũ hỗ trợ tận tâm 24/7 cùng các chính sách thưởng minh bạch, giúp bạn yên tâm phát triển sự nghiệp sáng tạo dài hạn.",
      icon: "/images/chinhsach-icon.png",
      iconWidth: 56,
      iconHeight: 62,
      iconClass: "h-[62px] w-14",
      numberIcon: "/images/02-icon.png",
      numberIconClass: "h-21.5 !w-[147px]",
      bgColor: "bg-dark2",
      bgHeight: 596,
      titleWidth: "w-[206px]",
      marginTop: "mt-3",
      unoptimized: true,
    },
    {
      id: "03",
      title: "Đào tạo & Định hướng",
      description:
        "Tham gia các chương trình đào tạo chuyên sâu để nâng cao kỹ năng, xây dựng thương hiệu cá nhân vững chắc.",
      icon: "/images/daotao-icon.png",
      iconWidth: 72,
      iconHeight: 63,
      iconClass: "h-[63px]",
      numberIcon: "/images/03-icon.png",
      numberIconClass: "h-21.5 w-[147px]",
      bgColor: "bg-primary1",
      bgHeight: 61,
      marginTop: "mt-3",
    },
    {
      id: "04",
      title: "Giao lưu & Kết nối",
      description:
        "Mở rộng mối quan hệ trong ngành qua các sự kiện, workshop cùng cộng đồng sáng tạo trẻ năng động và chuyên nghiệp.",
      icon: "/images/giaoluu-icon.png",
      iconWidth: 63,
      iconHeight: 63,
      numberIcon: "/images/04-icon.png",
      numberIconClass: "h-21.5 w-40.5",
      bgColor: "bg-dark2",
      bgHeight: 61,
      marginTop: "mt-3",
    },
  ];

export default function Benefit({ benefit }: { benefit: Home["benefits"] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".benefit-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      ).fromTo(
        ".benefit-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  

  return (
    <>
      <div ref={containerRef} className="section mx-auto">
        <div className="flex flex-col gap-10.5">
          <div className="benefit-title">
            <SectionTitle title={benefit.title} />
          </div>
          {/* LIST ITEMS - Refactored with map */}
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-18.5">
            {benefit.items.map((item, id) => (
              <div
                key={id}
                className="benefit-item relative flex w-full md:block md:h-149 lg:w-64"
              >
                <div className="absolute left-0 hidden md:block">
                  <Image
                    src="/images/bg-benefit.png"
                    alt="bg-benefit"
                    width={172}
                    height={benefitItems[id].bgHeight}
                    className=""
                  />
                </div>
                <div className="top-10 -left-1.5 hidden translate-x-full md:absolute md:block">
                  <div className="relative h-27 md:w-33.5">
                    <div
                      className={`${
                        benefitItems[id].bgColor
                      } inset-0 -skew-x-14 transform md:absolute`}
                    />
                    <div className="relative top-[23px] z-10 flex items-center justify-center">
                      <Image
                        src={benefitItems[id].icon}
                        alt={`Icon ${benefitItems[id].title.toLowerCase()}`}
                        width={benefitItems[id].iconWidth}
                        height={benefitItems[id].iconHeight}
                        className={benefitItems[id].iconClass || ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mr-10 hidden md:absolute md:top-42 md:left-28 md:block lg:mr-0">
                  <Image
                    src={benefitItems[id].numberIcon}
                    alt={`Icon ${benefitItems[id].id}`}
                    width={60}
                    height={60}
                    className="w-full md:h-20"
                  />
                </div>
                <div className="top-71 left-28 md:absolute">
                  <p
                    className={`font-montserrat text-5 flex items-center leading-[1.2] font-extrabold uppercase md:w-50 md:text-[22px]`}
                  >
                    <span className="text-primary1 mr-2 block whitespace-nowrap uppercase md:hidden">
                      {id + 1} -{" "}
                    </span>
                    {item.title}
                  </p>
                  <p
                    className={`font-montserrat ${benefitItems[id].marginTop} text-4.5 leading-[1.2] font-normal italic md:w-[173px]`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
