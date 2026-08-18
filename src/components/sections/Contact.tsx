import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { profile } from "@/data/portfolio";

const CHANNELS = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "github.com/samshoni", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-8 py-16 text-center sm:px-16"
      >
        <div
          className="pointer-events-none absolute -bottom-24 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        />
        <p className="relative font-mono text-sm text-accent">05 / Contact</p>
        <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Building something that needs to move, sense, or think for itself?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
          I'm open to robotics R&amp;D roles, research collaborations, and interesting hardware problems.
        </p>

        <div className="relative mt-8 flex justify-center">
          <Button size="default" onClick={() => (window.location.href = `mailto:${profile.email}`)}>
            Say hello
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="relative mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <channel.icon size={15} />
              {channel.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
