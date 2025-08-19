"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import SectionTitle from "../common/SectionTitle";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="embla__slide rounded-5 ml-10 flex h-134 min-w-97.5 flex-none flex-col gap-[25px] border border-none bg-[#FBFBFB] shadow-sm lg:ml-[55px]">
      <div className="h-95 w-full rounded-t-[20px] border-t border-none bg-gradient-to-br from-yellow-500 to-orange-500">
        <Image
          src={post.image}
          width={390}
          height={380}
          className=""
          alt="Everstar blogs"
        />
      </div>
      <div className="flex flex-col gap-[23px]">
        <div className="flex flex-col justify-center gap-[7px] pl-[30px]">
          <p className="  text-dark2 text-[26px] leading-[1.3] font-bold">{post.title}</p>
          <p className="  text-4.5 leading-[1] font-normal text-[#505050]">{post.description}</p>
        </div>
        <div>
          <Link
            href={post.link}
            className="  text-primary1 text-4.5 block w-full pl-[30px] font-normal"
          >
            See more &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Everstar media new",
    description: "Sample text sample text",
    image: "/images/bg-blog.png",
    link: "#",
  },
  {
    id: 2,
    title: "Everstar media new",
    description: "Sample text sample text",
    image: "/images/bg-blog.png",
    link: "#",
  },
  {
    id: 3,
    title: "Everstar media new",
    description: "Sample text sample text",
    image: "/images/bg-blog.png",
    link: "#",
  },
  {
    id: 4,
    title: "Everstar media new",
    description: "Sample text sample text",
    image: "/images/bg-blog.png",
    link: "#",
  },
  {
    id: 5,
    title: "Everstar media new",
    description: "Sample text sample text",
    image: "/images/bg-blog.png",
    link: "#",
  },
];

export default function Blog() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="bg-gray">
        <div className="section relative mx-auto">
          <div className="flex flex-col gap-12.5">
            <SectionTitle title="KOL / Idol nổi bật tại Everstar" />
            <div className="relative min-h-97.5">
              <div
                className="overflow-hidden"
                ref={emblaRef}
              >
                <div className="flex">
                  {blogPosts.map((blogPost, index) => (
                    <BlogCard
                      key={index}
                      post={blogPost}
                    />
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
