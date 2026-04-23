import { motion } from "framer-motion";
import personalImg from "@/assets/service-personal.jpg";
import weightlossImg from "@/assets/service-weightloss.jpg";
import strengthImg from "@/assets/service-strength.jpg";
import cardioImg from "@/assets/service-cardio.jpg";
import nutritionImg from "@/assets/service-nutrition.jpg";

const services = [
  {
    image: personalImg,
    title: "Personal Training",
    desc: "1-on-1 coaching tailored to your body, goals and pace.",
    benefit: "Faster results, zero guesswork.",
  },
  {
    image: weightlossImg,
    title: "Weight Loss Programs",
    desc: "Science-backed fat loss systems that actually stick.",
    benefit: "Lose inches, not your energy.",
  },
  {
    image: strengthImg,
    title: "Strength & Muscle",
    desc: "Hypertrophy programs to build serious size and power.",
    benefit: "Build the body people notice.",
  },
  {
    image: cardioImg,
    title: "Cardio & Conditioning",
    desc: "HIIT, functional and endurance training that lights you up.",
    benefit: "Stamina that won't quit.",
  },
  {
    image: nutritionImg,
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
            What We Offer
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold uppercase leading-tight">
            Our <span className="text-gradient-neon">Services</span>
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
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-neon/60 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.title} at PowerFit Gym Visakhapatnam`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="relative p-7">
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