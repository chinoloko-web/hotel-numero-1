export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-4 select-none" aria-hidden>
      <span className="block w-8 h-px bg-accent/20" />
      <span className="block w-1 h-1 rounded-full bg-accent/30" />
      <span className="block w-12 h-px bg-accent/20" />
      <span className="block w-1 h-1 rounded-full bg-accent/30" />
      <span className="block w-8 h-px bg-accent/20" />
    </div>
  );
}
