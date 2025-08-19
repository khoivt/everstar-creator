import ConsistentRewardSection from "./ConsistentRewardSection";
import DailyRankingRewardSection from "./DailyRankingRewardSection";
import PKRewardSection from "./PKRewardSection";
import RewardListSection from "./RewardListSection";
import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function OtherRewards() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  return (
    <div className="lg:w-section mx-auto flex flex-col gap-12.5">
      {/* C. OTHER REWARD POLICIES */}
      <div>
        <div className="flex flex-col gap-12.5">
          <h3 className="text-primary1   text-5 md:text-6.5 font font text-center leading-[1] font-extrabold uppercase">
            {dict.bonusPolicy.other.heading}
          </h3>

          {/* DILIGENCE REWARD */}
          <ConsistentRewardSection />
        </div>
        <div className="mt-11">
          <RewardListSection
            title={dict.bonusPolicy.other.diligence.conditions.heading}
            items={dict.bonusPolicy.other.diligence.conditions.list}
          />
        </div>
      </div>

      {/* DAILY RANKING REWARD */}
      <DailyRankingRewardSection />

      {/* PK REWARD */}
      <PKRewardSection />
    </div>
  );
}
