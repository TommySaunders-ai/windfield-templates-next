interface SectionDividerProps {
  label: string;
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-3 my-10">
      <hr className="flex-1 border-t border-border" />
      <span className="text-[10.5px] tracking-[.12em] text-fg-subtle uppercase">
        {label}
      </span>
      <hr className="flex-1 border-t border-border" />
    </div>
  );
}
