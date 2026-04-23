import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse, Apple, UserCheck } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Personal Training",
    desc: "1-on-1 coaching tailored to your body, goals and pace.",
    benefit: "Faster results, zero guesswork.",
  },
  {
    icon: Flame,
    title: "Weight Loss Programs",
    desc: "Science-backed fat loss systems that actually stick.",
    benefit: "Lose inches, not your energy.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Muscle",
    desc: "Hypertrophy programs to build serious size and power.",
    benefit: "Build the body people notice.",
  },
  {
    icon: HeartPulse,
    title: "Cardio & Conditioning",
    desc: "HIIT, functional and endurance training that lights you up.",
    benefit: "Stamina that won't quit.",
  },
  {
    icon: Apple,
    title: "Diet & Nutrition",
    desc: "Custom meal plans designed around your routine.",
    benefit: "Eat smart, train harder.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight">
            Programs Built To <span className="text-gradient-neon">Break Limits</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick your weapon. Every program is structured, coached and proven.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-2xl border border-border bg-card overflow-hidden hover:border-neon/60 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-5 group-hover:bg-neon/20 transition-colors">
                  <s.icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Benefit</span>
                  <p className="mt-1 text-sm font-medium text-foreground">{s.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};