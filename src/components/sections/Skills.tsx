import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="04" title="Skills" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-signal">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-foreground/85">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
