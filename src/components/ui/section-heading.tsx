import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={cn("mb-12 flex items-baseline gap-3", className)}
    >
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </motion.div>
  );
}
