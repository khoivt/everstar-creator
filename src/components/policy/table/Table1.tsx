import { getLocale } from "@/helpers/getLocale";
import { getDictionary, Module, Policy } from "@/utils/getDictionaries";

export default async function Table1() {
  const lang = await getLocale();
  const dict = getDictionary(lang, Module.POLICY) as Policy;
  
  const tdClass = "text-center border border-black font-semibold text-lg md:text-2xl";
  const tableHeaders = dict.bonusPolicy.newIdol.table.headers;
  const tableContent = dict.bonusPolicy.newIdol.table.rows;

  return (
    <div className="overflow-x-auto">
      <table className="w-fit min-w-[500px]">
        <thead>
          <tr className="bg-primary1 leading-[1] font-semibold text-white">
            {tableHeaders.map((header, idx) => (
              <th
                key={idx}
                className="  w-fit md:w-62.5 border border-black py-6 text-center text-lg md:text-2xl leading-[1.3] font-extrabold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableContent.map((row, idx) => (
            <tr
              key={idx}
              className="bg-white"
            >
              <td className="border border-black px-2 py-6 text-center text-lg md:text-2xl font-semibold whitespace-pre-line">{row.requirement}</td>
              <td className={tdClass}>{row.diamonds}</td>
              <td className="w-fit border border-black text-center text-lg md:text-2xl font-semibold">{row.support}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
