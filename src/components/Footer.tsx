export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-faint-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Sam Shoni. Built with React, TypeScript &amp; Tailwind.</p>
        <p className="font-mono text-xs">Kerala, India</p>
      </div>
    </footer>
  );
}
