import { motion } from "framer-motion";
import aboutImg from "@/assets/about-gym.jpg";
import { Target, Flame, Trophy } from "lucide-react";

const pillars = [
  { icon: Flame, title: "Transformation", desc: "Real bodies. Real change. No shortcuts." },
  { icon: Target, title: "Discipline", desc: "Build the mindset that wins outside the gym too." },
  { icon: Trophy, title: "Lifestyle", desc: "Fitness isn't a phase — it's your new identity." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-neon opacity-20 blur-3xl rounded-3xl" />
          <img
            src={aboutImg}
            loading="lazy"
            width={1280}
            height={1280}
            alt="Inside PowerFit Gym Visakhapatnam"
            className="relative rounded-2xl border border-border w-full aspect-square object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-card border border-neon/40 rounded-xl p-4 shadow-[var(--shadow-neon)]">
            <div className="text-3xl font-bold text-neon">7+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Years Strong
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            About PowerFit
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight">
            More Than A Gym.
            <br />
            <span className="text-gradient-neon">It's Your Arena.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Born in the heart of Visakhapatnam, PowerFit was built for one purpose — to forge stronger
            humans. We blend world-class equipment, certified coaches and a no-excuses culture so every
            rep takes you closer to the body and the confidence you deserve.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-xl border border-border bg-card hover:border-neon/50 transition-colors"
              >
                <p.icon className="w-6 h-6 text-neon mb-3" />
                <div className="font-bold uppercase text-sm tracking-wider">{p.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};