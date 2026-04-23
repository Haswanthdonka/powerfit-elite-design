import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const shots = [
  { src: g1, alt: "Premium dumbbell zone at PowerFit Gym Visakhapatnam", className: "md:col-span-2 aspect-[16/10]" },
  { src: g2, alt: "Heavy squat rack at PowerFit Gym", className: "aspect-[4/5]" },
  { src: g3, alt: "Boxing and combat training area", className: "aspect-[4/5]" },
  { src: g4, alt: "Functional cable machines and free space", className: "md:col-span-2 aspect-[16/10]" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Step Inside
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight">
            Our <span className="text-gradient-neon">Floor</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Premium equipment. Bold lighting. Built for serious training.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {shots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-border hover:border-neon/60 transition-colors ${s.className}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};