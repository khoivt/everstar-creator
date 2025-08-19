import Table4 from "../../table/Table4";
import RewardListSection from "./RewardListSection";
import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function DailyRankingRewardSection() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3.75">
          <div className="bg-primary1 h-4 w-3"></div>
          <h2 className="  text-dark2 text-4.5 md:text-5.5 leading-[1] font-extrabold uppercase">{dict.bonusPolicy.other.dailyRanking.heading}</h2>
        </div>
        <div className="flex items-center justify-center">
          <Table4 />
        </div>
        <RewardListSection
          title={dict.bonusPolicy.other.dailyRanking.conditions.heading}
          items={dict.bonusPolicy.other.dailyRanking.conditions.list}
        />
      </div>
    </>
  );
}
