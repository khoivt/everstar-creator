import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function NoticeSection() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  return (
    <div className="relative my-12.5 py-9 before:absolute before:inset-y-0 before:bg-gray before:left-1/2 before:-translate-x-1/2 before:w-screen">
        <p className="relative z-10 font-montserrat text-4.5 md:text-5.5 text-dark2 leading-[1] font-semibold italic">
          <span className="text-primary1 font-montserrat text-4.5 md:text-5.5 leading-[1] font-bold">{dict.bonusPolicy.note.boldText}</span> {dict.bonusPolicy.note.normalText}
        </p>
    </div>
  );
}
