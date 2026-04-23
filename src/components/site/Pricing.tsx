import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "999",
    period: "/month",
    tagline: "Perfect for beginners",
    features: [
      "Full gym floor access",
      "Locker & shower facilities",
      "Group cardio sessions",
      "Basic fitness assessment",
    ],
    cta: "Start Now",
    featured: false,
  },
  {
    name: "Pro",
    price: "1,799",
    period: "/month",
    tagline: "Most popular plan",
    features: [
      "Everything in Starter",
      "Personal trainer (4 sessions)",
      "Custom workout plan",
      "Diet & nutrition guidance",
      "Body composition tracking",
    ],
    cta: "Join Pro",
    featured: true,
  },
  {
    name: "Elite",
    price: "2,999",
    period: "/month",
    tagline: "Total transformation",
    features: [
      "Everything in Pro",
      "Unlimited 1-on-1 training",
      "Personalized meal plans",
      "Recovery & physio sessions",
      "Priority booking 24/7",
    ],
    cta: "Go Elite",
    featured: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Membership Plans
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight">
            Pick Your <span className="text-gradient-neon">Power Plan</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Affordable plans for every goal. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border bg-card flex flex-col ${
                p.featured
                  ? "border-neon shadow-[var(--shadow-neon)] md:-translate-y-4"
                  : "border-border hover:border-neon/50 transition-colors"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon text-primary-foreground text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold uppercase tracking-wide">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-muted-foreground">₹</span>
                <span className="text-5xl font-bold text-gradient-neon">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="w-5 h-5 text-neon shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={p.featured ? "hero" : "outlineNeon"}
                size="lg"
                className="mt-8 w-full"
                asChild
              >
                <a href="#contact-form">{p.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground uppercase tracking-widest">
          ✦ Quarterly & yearly discounts available · Student plans from ₹699/mo
        </p>
      </div>
    </section>
  );
};