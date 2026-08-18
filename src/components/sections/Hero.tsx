import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { profile, stats } from "@/data/portfolio";

const EASE = [0.23, 1, 0.32, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-inset px-3 py-1.5 font-mono text-xs text-signal"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Currently building at DRDO – R&amp;D(E), Pune
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl"
            >
              Robots that see,
              <br />
              reach, and <span className="text-gradient">act</span> on their own.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I'm {profile.name}, a robotics engineer building{" "}
              <span className="text-foreground">dual-arm manipulation</span>,{" "}
              <span className="text-foreground">autonomous navigation</span>, and{" "}
              <span className="text-foreground">real-time control</span> systems — from
              EtherCAT hardware bring-up to full ROS 2 autonomy stacks.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View projects
                <ArrowUpRight size={16} />
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in touch
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-foreground">
                <Mail size={14} /> {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground">
                <GithubIcon size={14} /> github.com/samshoni
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-signal/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface shadow-2xl">
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover grayscale-[15%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-5">
                <p className="font-mono text-xs text-signal">{profile.role}</p>
                <p className="text-sm text-foreground/80">{profile.focus}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-24 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
