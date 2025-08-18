import Link from "next/link";
import { MenuItem } from "./types";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useParams, usePathname } from "next/navigation";
import { SECTION_IDS } from "@/constants/route";
import { clsx } from "clsx";

interface MobileMenuProps {
  menuItems: MenuItem[];
  openChildIdx: number | null;
  setOpenChildIdx: (idx: number | null) => void;
  setMobileOpen: (open: boolean) => void;
}

export default function MobileMenu({ menuItems, openChildIdx, setOpenChildIdx, setMobileOpen }: MobileMenuProps) {
  const activeSection = useActiveSection(SECTION_IDS);
  const { lang } = useParams();
  const pathname = usePathname();
  const handleClick = (e: React.MouseEvent, hasChildren: boolean, opened: boolean, idx: number) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenChildIdx(opened ? null : idx);
      return;
    }
    setMobileOpen(false);
  };
  return (
    <nav className="pb-4">
      <ul className="border-b bg-white/90 backdrop-blur">
        {menuItems.map((item, idx) => {
          let active = false;
          if (item.href.includes("#") && activeSection && `/${lang}${item.href}`.includes(pathname)) {
            active = item.href.includes(activeSection);
          } else {
            active = pathname.includes(item.href);
          }
          const hasChildren = !!item.children?.length;
          const opened = openChildIdx === idx;
          return (
            <li
              key={idx}
              className="relative"
            >
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className={clsx("block w-full px-4 py-3 text-[15px] font-semibold", {
                    "text-primary1": active,
                  })}
                  onClick={e => handleClick(e, hasChildren, opened, idx)}
                >
                  {item.label.toUpperCase()}
                </Link>
                {hasChildren && (
                  <button
                    aria-label="Toggle submenu"
                    aria-expanded={opened}
                    onClick={() => setOpenChildIdx(opened ? null : idx)}
                    className={clsx("mx-2 rounded-md p-2 text-gray-600", {
                      "text-primary1": active,
                    })}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {hasChildren && (
                <ul className={`grid gap-1 px-4 pb-2 ${opened ? "block" : "hidden"}`}>
                  {item.children!.map((child, cidx) => (
                    <li key={cidx}>
                      <Link
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
