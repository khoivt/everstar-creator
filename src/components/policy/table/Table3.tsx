import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function Table3() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  // Extract rows to reduce nested path
  const diligenceRows = dict.bonusPolicy.other.diligence.table.rows;
  
  // Only keep className used in multiple places
  const tdClass = "w-fit lg:w-62.5 border-black border text-center font-bold text-lg md:text-2xl leading-5 bg-white py-2";

  // Header data
  const tableHeaders = [
    { label: dict.bonusPolicy.other.diligence.table.headers[0], props: { rowSpan: 2, className: "border border-black text-center font-bold w-fit lg:w-[200px] h-24 text-white px-2 md:px-4 py-4 font-montserrat text-lg md:text-2xl uppercase" } },
    { label: dict.bonusPolicy.other.diligence.table.headers[1], props: { colSpan: 2, className: "border border-black text-center font-bold text-white font-montserrat text-lg md:text-2xl py-4 uppercase w-fit lg:w-[500px]" } },
    { label: dict.bonusPolicy.other.diligence.table.headers[3], props: { rowSpan: 2, className: "border border-black text-center font-bold w-fit lg:w-[290px] px-6 py-4 text-white font-montserrat text-lg md:text-2xl uppercase" } },
    {
      label: dict.bonusPolicy.other.diligence.table.headers[4],
      props: { rowSpan: 2, className: "border border-black text-center font-bold w-fit lg:w-60 p-4 text-white font-montserrat text-lg md:text-2xl uppercase" },
    },
  ];
  const tableSubHeaders = [
    { label: dict.bonusPolicy.other.diligence.table.subHeaders[0], className: "border border-black text-center font-bold text-white w-fit lg:w-62.5 h-16 font-montserrat text-lg md:text-2xl uppercase p-6" },
    { label: dict.bonusPolicy.other.diligence.table.subHeaders[1], className: "border border-black text-center font-bold text-white w-fit lg:w-62.5 h-16 font-montserrat text-lg md:text-2xl uppercase p-6" },
  ];

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto w-full">
        <table className="h-[435px] w-fit lg:w-[1280px] border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-primary1 text-white h-24">
              {tableHeaders.map((header, idx) => (
                <th
                  key={idx}
                  {...header.props}
                >
                  {header.label}
                </th>
              ))}
            </tr>
            <tr className="bg-primary1 text-white h-24">
              {tableSubHeaders.map((sub, idx) => (
                <th
                  key={idx}
                  className={sub.className}
                >
                  {sub.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {diligenceRows.map((row, index) => (
              <tr
                key={index}
                className="h-16"
              >
                <td className="w-fit lg:w-[200px] border-black border text-center font-bold text-lg md:text-2xl text-black py-2">{row.tier}</td>
                <td className={tdClass}>{row.daysRequired}</td>
                <td className={tdClass}>{row.hoursRequired}</td>
                <td className="w-fit lg:w-[290px] border-black border text-center font-bold text-lg md:text-2xl leading-5 bg-white py-2">{row.diamondCondition}</td>
                <td className="w-fit lg:w-60 border border-black text-center font-bold text-lg md:text-2xl leading-5 bg-white py-2">{row.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
