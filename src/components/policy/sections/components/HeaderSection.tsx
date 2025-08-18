import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function HeaderSection() {
  const lang = await getLocale();
  
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  return (
    <div className="w-section mx-auto">
      <div className="flex items-center gap-3.75">
        <div className="bg-dark h-7 w-4.75"></div>
        <h2 className="font-montserrat text-primary1 text-5 md:text-6.5 lg:text-10 leading-[1.3] font-black uppercase">
          {dict.bonusPolicy.heading}
        </h2>
      </div>
    </div>
  );
}
