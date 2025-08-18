import Table2 from "../../table/Table2";
import RewardListSection from "./RewardListSection";
import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function RevenueReward() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  return (
    <div className="lg:w-section mx-auto mb-12.5 flex flex-col">
      <div className="flex flex-col gap-10">
        <h3 className="text-primary1 font-montserrat text-5 md:text-6.5 font font text-center leading-[1] font-extrabold uppercase">
          {dict.bonusPolicy.revenue.heading}
        </h3>
        <ul className="flex list-disc flex-col gap-1 pl-5">
          {dict.bonusPolicy.revenue.notes.map((text, index) => (
            <li key={index}>
              <p className="font-montserrat text-4.5 md:text-5.5 text-dark2 leading-[1] font-bold">{text}</p>
            </li>
          ))}
        </ul>
        <Table2 />
      </div>

      <div className="mt-12.5 flex flex-col gap-12.5">
        <div className="bg-primary1 rounded-5 flex items-center justify-center border border-none p-6 md:px-[79px] md:py-9.5">
          <p className="font-montserrat text-center text-lg md:text-2xl leading-[1.3] md:leading-[1] font-extrabold text-white uppercase">
            {dict.bonusPolicy.revenue.growthBonus.text}
          </p>
        </div>
        <RewardListSection
          title={dict.bonusPolicy.revenue.conditions.heading}
          items={dict.bonusPolicy.revenue.conditions.list}
        />
      </div>
    </div>
  );
}
