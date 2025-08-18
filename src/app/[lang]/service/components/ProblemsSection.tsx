import { ProblemsSectionData } from "@/types/service.type";
import ServiceCard from "./ServiceCard";
import SectionTitle from "@/components/common/SectionTitle";

interface ProblemsSectionProps {
  data: ProblemsSectionData;
}

export default function ProblemsSection({ data }: ProblemsSectionProps) {
  return (
    <div className="bg-gray">
      <div className="section flex flex-col gap-[47px]">
        <SectionTitle title={data.title} />
        <div className="flex flex-wrap justify-center">
          {data.cards.map((card, index) => (
            <ServiceCard
              key={index}
              number={card.number}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
