import { RewardListSectionProps } from "@/types/policy.type";

export default function RewardListSection({ title, items }: RewardListSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-montserrat text-4.5 md:text-5.5 leading-[1] font-bold">{title}</p>
      <ul className="flex list-disc flex-col gap-2 md:gap-1 pl-5">
        {items.map((item, index) => (
          <li key={index}>
            <p className="font-montserrat text-4 md:text-5.5 leading-[1] font-medium">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
