import Breadcrumb from "@/components/Breadcrumb";
import CultureSection from "./components/CultureSection";
import ProblemsSection from "./components/ProblemsSection";
import StrategySection from "./components/StrategySection";
import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Service } from "@/utils/getDictionaries";

export default async function ServicePage() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.SERVICE) as Service;

  return (
    <div className="mx-auto">
      <Breadcrumb />
      <div className="flex flex-col">
        <CultureSection data={dict.culture} />
        <ProblemsSection data={dict.problems} />
        <StrategySection data={dict.strategy} />
      </div>
    </div>
  );
}
