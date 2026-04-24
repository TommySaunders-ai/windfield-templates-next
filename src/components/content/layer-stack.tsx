interface Layer {
  header: string;
  items: string[];
}

interface LayerStackProps {
  layers: Layer[];
}

export function LayerStack({ layers }: LayerStackProps) {
  return (
    <div className="border border-border rounded-xl overflow-hidden my-7">
      {layers.map((layer, i) => (
        <div
          key={layer.header}
          className={i < layers.length - 1 ? "border-b border-border" : ""}
        >
          <div className="px-3 py-2 text-[10px] font-bold tracking-[.1em] uppercase text-brand">
            {layer.header}
          </div>
          <div className="px-3 py-2.5 flex flex-wrap gap-1.5 items-center">
            {layer.items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-0.5 rounded-full border border-brand/20 text-[11.5px] font-medium bg-brand/10 text-brand"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
