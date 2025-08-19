import Image from "next/image";
import { clsx } from "clsx";
import { StrategySectionData } from "@/types/service.type";
import SectionTitle from "@/components/common/SectionTitle";

interface StrategySectionProps {
  data: StrategySectionData;
}

export default function StrategySection({ data }: StrategySectionProps) {
  return (
    <div className="section flex flex-col gap-10 lg:gap-20">
      {data.items.map((item, index) => (
        <div
          id={item.id}
          key={index}
          className={clsx(
            "flex flex-col gap-6",
            index % 2 !== 0 ? "lg:flex-row-reverse lg:gap-[55px]" : "lg:flex-row lg:gap-16",
          )}
        >
          <div className={clsx("flex flex-col justify-center gap-[25px] lg:w-1/2")}>
            <SectionTitle title={item.title} />
            <p className="  lg:text-4.5 text-4 text-dark2 leading-[1.2] font-medium">
              {item.description}
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={item.image}
              width={604}
              height={408}
              className="h-auto w-full"
              alt="Everstar media"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
