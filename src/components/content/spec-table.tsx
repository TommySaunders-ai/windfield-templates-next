interface SpecTableProps {
  headers: string[];
  rows: string[][];
}

export function SpecTable({ headers, rows }: SpecTableProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-[12.5px]">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-left text-[9.5px] font-bold tracking-[.15em] uppercase text-brand px-3 py-2 border-b-2 border-brand/20"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-brand/[0.04]">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3 py-2.5 border-b border-border align-top leading-relaxed ${
                    ci === 0
                      ? "font-semibold text-fg whitespace-nowrap"
                      : "text-fg-muted"
                  }`}
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
