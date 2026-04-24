interface Column {
  header: string;
  items: string[];
}

interface ChannelColsProps {
  columns: Column[];
}

export function ChannelCols({ columns }: ChannelColsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2.5 my-7">
      {columns.map((col) => (
        <div key={col.header} className="rounded-xl border border-border p-3 bg-surface">
          <div className="text-[10px] font-bold tracking-[.1em] uppercase text-center rounded-md bg-brand/10 text-brand px-2 py-1 mb-2">
            {col.header}
          </div>
          <div className="flex flex-col gap-1">
            {col.items.map((item) => (
              <div
                key={item}
                className="text-[11.5px] px-2 py-1 border border-border rounded-md leading-snug"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
