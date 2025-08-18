import homeEn from "@/dictionaries/en/home";
import homeVn from "@/dictionaries/vn/home";
import homeKo from "@/dictionaries/ko/home";
import policyVn from "@/dictionaries/vn/policy";
import policyEn from "@/dictionaries/en/policy";
import policyKo from "@/dictionaries/ko/policy";
import serviceVn from "@/dictionaries/vn/service";
import serviceEn from "@/dictionaries/en/service";
import serviceKo from "@/dictionaries/ko/service";
import layoutEn from "@/dictionaries/en/layout";
import layoutVn from "@/dictionaries/vn/layout";
import layoutKo from "@/dictionaries/ko/layout";
import { Locale } from "@/config/localeConfig";

export enum Module {
  HOME = "HOME",
  LAYOUT = "LAYOUT",
  POLICY = "POLICY",
  SERVICE = "SERVICE",
}

// Map of supported locales to their dictionary loader functions
const dictionaries = {
  vn: {
    [Module.HOME]: homeVn,
    [Module.LAYOUT]: layoutVn,
    [Module.POLICY]: policyVn,
    [Module.SERVICE]: serviceVn,
  },
  en: {
    [Module.HOME]: homeEn,
    [Module.LAYOUT]: layoutEn,
    [Module.POLICY]: policyEn,
    [Module.SERVICE]: serviceEn,
  },
  ko: {
    [Module.HOME]: homeKo,
    [Module.LAYOUT]: layoutKo,
    [Module.POLICY]: policyKo,
    [Module.SERVICE]: serviceKo,
  },
};

export const getDictionary = (locale: Locale, key: Module) => {
  return dictionaries[locale][key] ?? dictionaries.en[key];
};

export type Home = typeof homeEn;
export type Layout = typeof layoutEn;
export type Policy = typeof policyEn;
export type Service = typeof serviceEn;
