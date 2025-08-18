import Link from "next/link";
import { MenuItem } from "./types";
import { useParams } from "next/navigation";
import clsx from "clsx";

interface DesktopMenuItemProps {
  item: MenuItem;
  idx: number;
  openIdx: number | null;
  setOpenIdx: (idx: number | null) => void;
  isActive: boolean;
}

export default function DesktopMenuItem({ isActive, item, idx, openIdx, setOpenIdx }: DesktopMenuItemProps) {
  const { lang } = useParams();
  const hasChildren = !!item.children?.length;
  const opened = openIdx === idx;
  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenIdx(opened ? null : idx);
    }
  };
  return (
    <li className="group relative">
      <Link
        href={`/${lang}${item.href}`}
        className="block cursor-pointer py-3"
        onClick={handleClick}
      >
        <span
          className={clsx(
            "font-inter text-[14px] leading-none font-bold transition-colors duration-200 lg:text-[16px]",
            {
              "text-primary1": isActive,
            },
          )}
        >
          {item.label.toUpperCase()}
        </span>
        {hasChildren && (
          <span
            className={clsx("ml-1 inline-block align-middle", {
              "text-primary1": isActive,
            })}
          >
            <svg
              width="14"
              height="14"
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
          </span>
        )}
      </Link>
      {hasChildren && (
        <ul
          className={`absolute top-full left-0 z-50 w-50 rounded-sm border-2 bg-white/90 py-2 text-left shadow-xl backdrop-blur transition-all duration-200 ${opened ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          {item.children!.map((child, childIdx) => (
            <li key={childIdx}>
              <Link
                href={`/${lang}${child.href}`}
                className="block px-4 py-2 text-[14px] font-medium text-black hover:bg-gray-100"
                onClick={() => setOpenIdx(null)}
              >
                {child.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
