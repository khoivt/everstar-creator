import Image from "next/image";
import { CultureSectionData } from "@/types/service.type";
import SectionTitle from "@/components/common/SectionTitle";

interface CultureSectionProps {
  data: CultureSectionData;
}

export default function CultureSection({ data }: CultureSectionProps) {
  return (
    <div className="section flex flex-col gap-20">
      <Image
        src={data.image}
        width={1280}
        height={550}
        className=""
        alt="Everstar media"
      />
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14.5">
        {/* BOX bên phải */}
        <div className="flex w-full flex-col gap-2.5 lg:w-1/2">
          <div className="flex flex-col gap-[15px] lg:text-left">
            <SectionTitle title={data.title} />
            <p className="text-dark2 font-montserrat text-5 lg:text-5.5 leading-[1] font-extrabold">{data.subtitle}</p>
          </div>

          <p className="font-montserrat lg:text-4.5 text-4 text-dark2 text-justify leading-[1.2] font-medium">
            {data.description}
          </p>
        </div>

        {/* BOX bên trái - YouTube Video */}
        <div className="w-full">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full rounded-lg"
              src={data.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
