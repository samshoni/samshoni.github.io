import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Radar, Camera, Mic, Eye, HardHat, Box, ChevronDown, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

const ICONS: LucideIcon[] = [Bot, Radar, Camera, Mic, Eye, HardHat, Box];

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" title="Featured Projects" />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => {
          const Icon = ICONS[i % ICONS.length];
          const open = openIndex === i;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className={`group relative flex flex-col rounded-2xl border bg-surface p-6 transition-colors duration-200 ${
                project.featured ? "border-accent/30" : "border-border hover:border-border-strong"
              } ${project.featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {project.featured && (
                <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-wider text-accent">
                  Featured
                </span>
              )}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon size={20} />
              </div>

              <h3 className="mt-5 text-base font-semibold leading-snug text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="mt-4 flex items-center gap-1.5 self-start font-mono text-xs text-signal transition-colors hover:text-signal/80"
              >
                {open ? "Hide details" : "Show details"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <ul className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-faint-foreground" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
