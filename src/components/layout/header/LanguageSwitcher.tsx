import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRef, useEffect, useState } from "react";

const LANGUAGE = [
  { code: "ko", label: { ko: "한국어", vn: "Tiếng Hàn", en: "Korean" }, flag: "korean-flag.svg" },
  { code: "vn", label: { ko: "베트남어", vn: "Tiếng Việt", en: "Vietnamese" }, flag: "vietnam-flag.svg" },
  { code: "en", label: { ko: "영어", vn: "Tiếng Anh", en: "English" }, flag: "american-flag.svg" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract current language and path
  const [lang, ...rest] = pathname.slice(1).split("/");
  const currentPath = rest.join("/");
  const queryString = searchParams.toString();
  const searchString = queryString ? `?${queryString}` : "";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  const currentLangObj = LANGUAGE.find(l => l.code === lang) || LANGUAGE[2];

  return (
    <div
      ref={ref}
      className="relative ml-12"
    >
      <button
        aria-label="Switch language"
        className="flex cursor-pointer items-center justify-center rounded-md transition"
        style={{ minWidth: 32, minHeight: 32 }}
        onClick={() => setOpen(o => !o)}
      >
        <Image
          src={`/icons/${currentLangObj.flag}`}
          alt="Language Flag"
          width={24}
          height={24}
          className="h-6 w-9"
        />
      </button>
      {open && (
        <ul className="absolute top-full right-0 z-50 mt-2 w-36 overflow-hidden rounded-md border bg-white shadow-lg">
          {LANGUAGE.filter(l => l.code !== lang).map(l => (
            <li key={l.code}>
              <Link
                className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-gray-100"
                href={`/${l.code}/${currentPath}${searchString}`}
                onClick={() => setOpen(false)}
              >
                <Image
                  src={`/icons/${l.flag}`}
                  alt={typeof l.label === "object" ? l.label[l.code as keyof typeof l.label] : l.label}
                  width={20}
                  height={20}
                />
                <span>{typeof l.label === "object" ? l.label[lang as keyof typeof l.label] : l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
