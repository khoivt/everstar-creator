import Table3 from "../../table/Table3";
import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function ConsistentRewardSection() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3.75">
          <div className="bg-primary1 h-4 w-3"></div>
          <h2 className="font-montserrat text-dark2 text-4.5 md:text-5.5 leading-[1] font-extrabold uppercase">
            {dict.bonusPolicy.other.diligence.heading}
          </h2>
        </div>
        <Table3 />
      </div>
    </>
  );
}
