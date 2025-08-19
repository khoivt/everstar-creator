import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function Table2() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  // Extract rows to reduce nested path
  const revenueRows = dict.bonusPolicy.revenue.table.rows;
  
  // Header data
  const tableHeaders = [
    { label: dict.bonusPolicy.revenue.table.headers[0], props: { rowSpan: 2, className: "border border-black text-center font-bold w-fit lg:w-[200px] h-28 text-white py-6   text-lg md:text-2xl uppercase" } },
    { label: dict.bonusPolicy.revenue.table.headers[1], props: { colSpan: 2, className: "border border-black text-center font-bold text-white   text-lg md:text-2xl py-6 uppercase w-fit lg:w-[600px]" } },
    { label: dict.bonusPolicy.revenue.table.headers[3], props: { rowSpan: 2, className: "border border-black text-center font-bold w-fit lg:w-60 p-2 text-white   text-lg md:text-2xl uppercase" } },
    {
      label: dict.bonusPolicy.revenue.table.headers[4],
      props: { rowSpan: 2, className: "border border-black text-center font-bold w-fit lg:w-60 p-2 text-white   text-lg md:text-2xl uppercase" },
    },
  ];
  const tableSubHeaders = [
    { label: dict.bonusPolicy.revenue.table.subHeaders[0], className: "border border-black text-center font-bold text-white w-fit lg:w-[300px] h-20   text-lg md:text-2xl uppercase p-2" },
    { label: dict.bonusPolicy.revenue.table.subHeaders[1], className: "border border-black text-center font-bold text-white w-fit lg:w-[300px] h-20   text-lg md:text-2xl uppercase p-2" },
  ];

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto w-full">
        <table className="h-[1047px] w-fit lg:w-[1280px] border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-primary1 text-black">
              {tableHeaders.map((header, idx) => (
                <th
                  key={idx}
                  {...header.props}
                >
                  {header.label}
                </th>
              ))}
            </tr>
            <tr className="bg-primary1 text-black">
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
            {revenueRows.map((row, index) => (
              <tr
                key={index}
                className="h-16"
              >
                <td className="w-fit lg:w-[200px] border-black border text-center font-bold text-lg md:text-2xl bg-yellow1 text-white">{row.tier}</td>
                <td className="w-fit lg:w-[300px] border-black border text-center font-bold text-lg md:text-2xl leading-5 bg-white">{row.daysRequired}</td>
                <td className="w-fit lg:w-[300px] border-black border text-center font-bold text-lg md:text-2xl leading-5 bg-white">{row.hoursRequired}</td>
                <td className="w-fit lg:w-60 border-black border text-center font-bold text-lg md:text-2xl leading-5 bg-white">{row.diamondTarget}</td>
                <td className="w-fit lg:w-60 border border-black text-center font-bold text-lg md:text-2xl leading-5 bg-white">{row.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
