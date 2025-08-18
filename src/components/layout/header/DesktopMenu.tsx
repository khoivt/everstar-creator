import { useRef, useEffect, useState } from "react";
import { MenuItem } from "./types";
import DesktopMenuItem from "./DesktopMenuItem";
import { useParams, usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SECTION_IDS } from "@/constants/route";

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

export default function DesktopMenu({ menuItems }: DesktopMenuProps) {
  // active menu section listing
  const activeSection = useActiveSection(SECTION_IDS);
  const { lang } = useParams();
  const pathname = usePathname();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (openIdx === null) return;
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenIdx(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openIdx, setOpenIdx]);

  return (
    <nav className="hidden flex-1 md:block">
      <ul
        ref={menuRef}
        className="relative z-10 flex list-none items-center justify-end gap-8 lg:gap-10"
      >
        {menuItems.map((item, idx) => {
          let active = false;
          if (item.href.includes("#") && activeSection && `/${lang}${item.href}`.includes(pathname)) {
            active = item.href.includes(activeSection);
          } else {
            active = pathname.includes(item.href);
          }

          return (
            <DesktopMenuItem
              key={idx}
              item={item}
              idx={idx}
              openIdx={openIdx}
              setOpenIdx={setOpenIdx}
              isActive={active}
            />
          );
        })}
      </ul>
    </nav>
  );
}
