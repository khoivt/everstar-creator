import { useParams } from "next/navigation";
import { Locale } from "@/config/localeConfig";
import { getDictionary, Module } from "@/utils/getDictionaries";

export const useDictionary = (key: Module) => {
  const lang = useParams().lang as Locale;
  return getDictionary(lang, key);
};
