import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function Table5() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  // Extract rows for easier access
  const pkRows = dict.bonusPolicy.other.pk.table.rows;
  
  // Header data
  const tableHeaders = [
    { label: dict.bonusPolicy.other.pk.table.headers[0], className: "border border-dark text-center font-extrabold w-fit md:w-[561px] text-lg md:text-2xl text-white   px-2 md:px-8 py-12 uppercase" },
    {
      label: dict.bonusPolicy.other.pk.table.headers[1],
      className: "border border-dark text-center font-extrabold w-fit md:w-62.5 text-lg md:text-2xl text-white   px-2 py-4 uppercase",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <table className="h-[317px] w-full border-collapse">
          <thead>
            <tr className="bg-primary1 text-black">
              {tableHeaders.map((header, idx) => (
                <th
                  key={idx}
                  className={header.className}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pkRows.map((row, index) => (
              <tr
                key={index}
                className="bg-white"
              >
                <td className="border border-dark text-left font-bold leading-5 text-black w-fit md:w-[561px] text-lg md:text-2xl h-[69px]   px-2 md:px-8 py-4">{row.diamondRange}</td>
                <td className="border border-dark text-center font-bold leading-5 w-fit md:w-60 text-lg md:text-2xl h-[69px]   px-2 md:px-8 py-4">{row.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
