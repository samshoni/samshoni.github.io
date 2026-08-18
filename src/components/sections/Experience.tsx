import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02" title="Experience" />

      <div className="relative flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.role + job.org}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <span
              className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full sm:-left-[calc(2.5rem+5px)] ${
                job.current ? "bg-signal shadow-[0_0_0_4px_var(--signal-soft)]" : "bg-border-strong"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-foreground">{job.role}</h3>
              <span className="font-mono text-xs text-faint-foreground">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-accent">
              {job.org} <span className="text-muted-foreground">· {job.location}</span>
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint-foreground" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
