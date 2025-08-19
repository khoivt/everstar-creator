import Table1 from "../../table/Table1";
import RewardListSection from "./RewardListSection";
import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function NewIdolReward() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  return (
    <div className="mb-15 flex flex-col gap-14">
      <div className="flex flex-col items-center gap-10">
        <h3 className="text-primary1   text-5 md:text-6.5 font font text-center leading-[1] font-extrabold uppercase">
          {dict.bonusPolicy.newIdol.heading}
        </h3>
        <div className="w-full flex items-center justify-center">
          <Table1 />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <RewardListSection
          title={dict.bonusPolicy.newIdol.apply.heading}
          items={dict.bonusPolicy.newIdol.apply.list}
        />
        <RewardListSection
          title={dict.bonusPolicy.newIdol.conditions.heading}
          items={dict.bonusPolicy.newIdol.conditions.list}
        />
      </div>
    </div>
  );
}
