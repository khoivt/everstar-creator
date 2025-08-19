import { getLocale } from "@/helpers/getLocale";
import { RecruitmentCardProps } from "@/types/policy.type";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";
import Image from "next/image";

const RecruitmentCard = ({ item }: RecruitmentCardProps) => {
  return (
    <div className="relative h-130 w-full overflow-hidden rounded-[20px] border border-none bg-[#FBFBFB] shadow-md md:h-134">
      {/* Image Section */}
      <div className="relative">
        <div className="relative">
          <Image
            src={item.bgImage}
            width={390}
            height={380}
            className="h-95 w-full rounded-t-[20px] object-cover"
            alt="Everstar media background"
          />
          <div className="absolute inset-0">
            <Image
              src={item.personImage}
              width={390}
              height={380}
              className="h-95 w-full object-cover"
              alt={item.title}
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="px-2 py-[25px] md:px-7.5">
        <h2 className="  text-dark2 text-xl leading-[1.3] font-bold md:text-[26px]">{item.title}</h2>
        <p className="  text-4 md:text-4.5 line-clamp-3 overflow-hidden leading-[1.2] font-normal text-[#505050] lg:w-[305px]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default async function RecruimentContent() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  return (
    <>
      <div className="section flex flex-col gap-12.5">
        <div className="flex items-center gap-3.75">
          <div className="bg-dark h-7 w-4.75"></div>
          <h2 className="  text-primary1 text-5 md:text-6.5 lg:text-10 leading-[1.3] font-black uppercase">
            {dict.recruitment.heading}
          </h2>
        </div>
        {/* Grid container: 2 rows, 3 columns, gap 55px */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-[55px] lg:grid-cols-3">
          {dict.recruitment.roles.map(item => (
            <RecruitmentCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
}
