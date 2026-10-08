import type { PolicyBlock } from "../data/policies";

/* "12. Pricing, Fees, and Taxes" -> "12-pricing-fees-and-taxes", used for in-page links */
const anchorId = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function PolicyBlockView({ block }: { block: PolicyBlock }) {
  switch (block.t) {
    case "h2":
      return (
        <h3
          id={anchorId(block.text)}
          className="font-heading font-bold text-lg text-[#361B14] mb-3 scroll-mt-28"
        >
          {block.text}
        </h3>
      );
    case "h3":
      return (
        <h4 className="font-heading font-semibold text-base text-[#361B14] mt-5 mb-2">
          {block.text}
        </h4>
      );
    case "p":
      return (
        <p className="text-sm text-[#361B14]/70 leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="space-y-2 mb-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FBB13A] flex-shrink-0 mt-2" />
              <span className="text-sm text-[#361B14]/70 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2 mb-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-sm font-semibold text-[#FBB13A] flex-shrink-0 w-4">
                {i + 1}.
              </span>
              <span className="text-sm text-[#361B14]/70 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ol>
      );
    case "meta":
      return (
        <div className="mb-4">
          {block.items.map((item, i) => (
            <p key={i} className="text-sm text-[#361B14]/70 leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto mb-4 rounded-xl border border-[#FFE4D4]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#361B14] text-white">
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} className="px-4 py-3 font-semibold">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-[#FFE4D4]">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 leading-relaxed align-top ${j === 0 ? "text-[#361B14] font-medium" : "text-[#361B14]/70"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
