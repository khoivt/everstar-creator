import { clsx } from "clsx";

interface ServiceCardProps {
  number: string;
  title: React.ReactNode;
  titlePositionClass?: string;
}

export default function ServiceCard({ number, title }: ServiceCardProps) {
  return (
    <div className="relative h-[225px] w-[407px] bg-[url('/images/bg-services2.svg')] bg-contain bg-no-repeat">
      <p className="  text-8 lg:text-10 absolute top-23 left-22 h-[49px] w-[45px] leading-[1] font-black text-white uppercase">
        {number}
      </p>
      <div className="absolute top-18 right-5 w-[177px] h-[80px] flex items-center justify-center">
        <p className="  text-4 lg:text-4.5 text-dark2 leading-[1.1] font-bold uppercase">
          {title}
        </p>
      </div>
    </div>
  );
}
