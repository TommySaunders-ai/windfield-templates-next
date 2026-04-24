interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-1.5 my-5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] font-medium px-3 py-1 rounded-full border border-brand/20 bg-brand/10 text-brand"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
