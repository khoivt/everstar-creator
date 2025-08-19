import clsx from "clsx";

const SectionTitle = ({ title, isHighlight }: { title: string; isHighlight?: boolean }) => {
  return (
    <div className="flex w-full items-baseline gap-3.75">
      <div className={clsx("bg-dark h-7 w-3 translate-y-1 md:!w-4", isHighlight && "bg-white")}></div>
      <p
        className={clsx(
          "  text-primary1 lg:text-10 flex-1 text-2xl leading-[1.2] font-black uppercase",
          isHighlight && "text-white",
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
