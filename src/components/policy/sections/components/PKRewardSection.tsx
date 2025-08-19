import Table5 from "../../table/Table5";
import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function PKRewardSection() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3.75">
          <div className="bg-primary1 h-4 w-3"></div>
          <h2 className="  text-dark2 text-4.5 md:text-5.5 leading-[1] font-extrabold uppercase">{dict.bonusPolicy.other.pk.heading}</h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex justify-center gap-3 md:gap-0 flex-wrap md:flex-nowrap md:w-187.5">
            <Table5 />
            <div className="bg-primary1 border-dark flex w-full md:w-62.5 items-center justify-center border p-2">
              <p className="text-center text-lg md:text-2xl font-bold text-white uppercase">
                {dict.bonusPolicy.other.pk.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
