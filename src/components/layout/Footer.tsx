"use client";
import { useDictionary } from "@/hooks/useDictionaries";
import { Layout, Module } from "@/utils/getDictionaries";
import Image from "next/image";

export default function Footer() {
  const { footer } = useDictionary(Module.LAYOUT) as Layout;
  return (
    <footer className="bg-dark text-white">
      <div className="section flex flex-col items-center justify-between px-4 md:flex-row md:items-start md:px-0">
        <div className="mb-8 flex h-full w-full items-center md:mb-0 md:w-2/5 md:justify-start">
          <Image
            src="/images/logo-footer.png"
            width={220}
            height={77}
            className="h-full w-[220px]"
            alt="Everstar media"
          />
        </div>
        <div className="flex w-full flex-col gap-2 text-left lg:w-3/5">
          <div className="text-[15px] font-bold md:text-[16px]">{footer.company}</div>
          <div className="text-[15px] md:text-[16px]">{footer.address}</div>
          <div className="text-[15px] md:text-[16px]">{footer.contact}</div>
          <div className="mt-2 text-[15px] md:text-[16px]">{footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
