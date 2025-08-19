import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function Table4() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  // Extract rows for easier access
  const dailyRankingRows = dict.bonusPolicy.other.dailyRanking.table.rows;
  
  // Header data
  const tableHeaders = [
    { label: dict.bonusPolicy.other.dailyRanking.table.headers[0], className: "border border-dark text-center font-bold w-fit md:w-[140px] text-lg md:text-2xl py-2 px-4   text-white bg-primary1" },
    {
      label: dict.bonusPolicy.other.dailyRanking.table.headers[1],
      className: "border border-dark text-center font-bold w-fit md:w-[231px] text-lg md:text-2xl py-5 px-2   text-white bg-primary1",
    },
  ];

  return (
    <div className="w-fit md:w-[451px]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[350px]">
          <thead>
            <tr className="bg-primary text-black">
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
            {dailyRankingRows.map((row, index) => (
              <tr
                key={index}
                className="bg-white"
              >
                <td className="border border-dark px-2 md:px-6 py-5 text-left font-bold text-4.5 md:text-5.5 leading-5  ">{row.ranking}</td>
                <td className="border border-dark px-2 md:px-4 py-6 text-center font-bold text-4.5 md:text-5.5 leading-5  ">{row.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
