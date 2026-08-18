import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, education, certifications } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {profile.summary}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            I maintain 50+ repositories covering autonomous navigation, computer vision,
            and embedded systems — and I'm currently working as a Robotics R&amp;D Engineer
            (Contract) at DRDO-R&amp;D(E), Pune, on perception-driven manipulation and
            humanoid dual-arm control.
          </p>

          <div className="mt-10 flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
            <GraduationCap className="mt-0.5 shrink-0 text-accent" size={22} />
            <div>
              <p className="font-medium text-foreground">{education.degree}</p>
              <p className="text-sm text-muted-foreground">
                {education.school}, {education.location}
              </p>
              <p className="mt-1 font-mono text-xs text-faint-foreground">
                {education.period} · CGPA {education.cgpa}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <h3 className="mb-4 flex items-center gap-2 font-mono text-sm text-signal">
            <Award size={16} /> Certifications &amp; Activities
          </h3>
          <ul className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <li key={cert.title} className="border-l-2 border-border-strong pl-4">
                <p className="text-sm font-medium text-foreground">{cert.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{cert.detail}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
