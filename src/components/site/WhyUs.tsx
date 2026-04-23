import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  { title: "Certified Elite Trainers", desc: "Coaches with international certifications and real transformation track records." },
  { title: "Premium Imported Equipment", desc: "Top-tier machines, free weights and recovery zones — built for serious athletes." },
  { title: "Proven Results", desc: "Thousands of members have hit their dream physique with our structured programs." },
  { title: "Energy-Charged Environment", desc: "Music, lighting and a community that pushes you on every set." },
  { title: "Hygiene & AC Comfort", desc: "Spotless floors, sanitized equipment and full air-conditioned training zones." },
  { title: "Flexible Plans", desc: "Memberships that fit students, professionals and busy lifestyles." },
];

export const WhyUs = () => {
  return (
    <section id="why" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">Why PowerFit</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight">
            We Don't Sell Memberships.
            <br />
            We Build <span className="text-gradient-neon">Champions.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Every detail — from the trainers to the floors — is engineered to push you past your limits.
          </p>
        </div>
        <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-4 p-5 rounded-xl border border-border bg-card/50 hover:border-neon/50 transition-colors"
            >
              <div className="shrink-0 w-9 h-9 rounded-lg bg-neon/15 border border-neon/40 flex items-center justify-center">
                <Check className="w-5 h-5 text-neon" />
              </div>
              <div>
                <div className="font-bold uppercase text-sm tracking-wide">{r.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};