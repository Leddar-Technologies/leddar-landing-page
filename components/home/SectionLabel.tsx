type SectionLabelProps = {
  text: string;
  centered?: boolean;
};

export function SectionLabel({ text, centered = false }: SectionLabelProps) {
  return (
    <div
      className={[
        "mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.5px] text-muted",
        centered ? "justify-center" : "",
      ].join(" ")}
    >
      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-amber">
        <div className="h-1.5 w-1.5 rounded-full bg-amber" />
      </div>
      {text}
    </div>
  );
}
