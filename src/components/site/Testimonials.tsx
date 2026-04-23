import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Arjun K.",
    role: "Lost 18 kg in 5 months",
    quote: "I walked in unsure. I walked out unrecognizable. Best decision I've made for myself.",
  },
  {
    name: "Priya S.",
    role: "Gained strength + confidence",
    quote: "The coaches don't just train you — they believe in you until you believe in yourself.",
  },
  {
    name: "Rohit M.",
    role: "Built 8 kg of muscle",
    quote: "Real programming. Real food plans. Real results. PowerFit changed my entire lifestyle.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Real Transformations
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase">
            Stories Built In <span className="text-gradient-neon">Sweat</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-border bg-card hover:border-neon/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-neon/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-neon text-neon" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-neon">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};