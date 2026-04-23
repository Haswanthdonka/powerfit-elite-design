import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Athlete lifting heavy barbell at PowerFit Gym Visakhapatnam"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/40 bg-neon/5 mb-6"
          >
            <Zap className="w-4 h-4 text-neon" />
            <span className="text-xs font-medium tracking-widest uppercase text-neon">
              Visakhapatnam's #1 Fitness Destination
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[1.05] tracking-tight text-left border-2 border-dashed border-neon/40 rounded-xl px-4 py-3 sm:px-6 sm:py-4 inline-block bg-background/30 backdrop-blur-sm shadow-[0_0_40px_-10px_hsl(var(--neon)/0.4)]"
          >
            BEST <span className="text-gradient-neon text-glow">FITNESS</span> GYM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Elite coaching, premium equipment, real results. Train where champions are built —
            and walk out as the version of yourself the world won't ignore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#cta">
                Join Now <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="outlineNeon" size="xl" asChild>
              <a href="#cta">Book Free Trial</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { k: "5K+", v: "Members" },
              { k: "20+", v: "Expert Trainers" },
              { k: "98%", v: "Result Rate" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl md:text-4xl font-bold text-neon">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-border bg-background/60 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {["Discipline", "Strength", "Transformation", "Power", "Confidence", "Grit", "Results"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w} <span className="text-neon">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};