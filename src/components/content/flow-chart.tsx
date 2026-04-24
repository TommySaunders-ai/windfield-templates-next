interface FlowChartProps {
  nodes: string[];
  branches?: string[][];
}

export function FlowChart({ nodes, branches }: FlowChartProps) {
  return (
    <div className="flex flex-col items-center gap-0 my-8">
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          {i > 0 && <div className="w-px h-[22px] bg-brand/20" />}
          <div className="border border-brand rounded-[10px] px-5 py-2 text-[12px] font-semibold text-center max-w-[280px] w-full text-brand bg-brand/[0.06]">
            {node}
          </div>
        </div>
      ))}

      {branches && branches.length > 0 && (
        <>
          <div className="w-px h-[22px] bg-brand/20" />
          <div className="flex gap-1.5 flex-wrap justify-center">
            {branches.flat().map((branch, i) => (
              <span
                key={i}
                className="border border-border rounded-lg px-2.5 py-1.5 text-[10.5px] font-semibold text-fg"
              >
                {branch}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
