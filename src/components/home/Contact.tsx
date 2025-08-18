import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="section flex w-full flex-wrap justify-center gap-10 sm:gap-30">
        <Link
          href="https://inflinker.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/logo-contact.png"
            width={313}
            height={61}
            className="h-14 w-full object-contain sm:h-20"
            alt="Everstar media"
          />
        </Link>
        <Link
          href="https://www.itoxi.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/logo-contact2.png"
            width={146}
            height={64}
            className="h-14 w-full object-contain sm:h-20"
            alt="Everstar media"
          />
        </Link>
      </div>
    </>
  );
}
