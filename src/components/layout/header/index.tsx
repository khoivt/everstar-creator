"use client";
// Type for menu items
import ROUTER from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuItem } from "./types";
import { useDictionary } from "@/hooks/useDictionaries";
import { Layout, Module } from "@/utils/getDictionaries";

export default function Header() {
  const dictionary = useDictionary(Module.LAYOUT) as Layout;
  const MENU_ITEMS: MenuItem[] = [
    { label: dictionary.navbar.home, href: ROUTER.HOME_HOMEPAGE },
    { label: dictionary.navbar.about, href: ROUTER.HOME_INTRODUCE },
    { label: dictionary.navbar.policy, href: ROUTER.POLICY },
    {
      label: dictionary.navbar.services,
      href: ROUTER.SERVICE,
      children: [
        { label: dictionary.navbar.idolTraining, href: ROUTER.SERVICE_TRAINING_IDOL },
        { label: dictionary.navbar.brandCollaboration, href: ROUTER.SERVICE_COLAB_BRAND },
      ],
    },
    { label: dictionary.navbar.contactUs, href: ROUTER.HOME_CONTACT },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openChildIdx, setOpenChildIdx] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 m-auto h-20 bg-white/90 backdrop-blur">
      <div className="max-w-section relative mx-auto my-auto flex h-full items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="shrink-0"
        >
          <Image
            src="/images/logo.png"
            width={190}
            height={66}
            className="h-auto w-[150px] md:w-[160px]"
            alt="Everstar media"
            priority
          />
        </Link>
        <DesktopMenu menuItems={MENU_ITEMS} />
        {/* Mobile burger */}
        <div className="flex items-center gap-12">
          <LanguageSwitcher />
          <button
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(s => !s)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-black/10 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-5 bg-black transition ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`}
              ></span>
              <span className={`block h-0.5 w-5 bg-black transition ${mobileOpen ? "opacity-0" : ""}`}></span>
              <span
                className={`block h-0.5 w-5 bg-black transition ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile panel overlay */}
      {mobileOpen && (
        <div
          className="fixed z-0 h-screen w-screen bg-transparent"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      <div
        className={`max-w-section fixed top-19 z-10 w-full overflow-hidden transition-[max-height] duration-300 md:hidden ${mobileOpen ? "max-h-[80vh]" : "max-h-0"}`}
      >
        <MobileMenu
          menuItems={MENU_ITEMS}
          openChildIdx={openChildIdx}
          setOpenChildIdx={setOpenChildIdx}
          setMobileOpen={setMobileOpen}
        />
      </div>
    </header>
  );
}
