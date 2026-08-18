import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="cta" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-neon/40 bg-gradient-to-br from-card to-background p-10 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon/30 blur-[120px] rounded-full" />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
              Stop Waiting
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1]">
              Your Stronger Self
              <br />
              <span className="text-gradient-neon text-glow">Starts Today.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              No more "tomorrow." Walk in, train hard, walk out unstoppable.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact-form">
                  Join Now <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="outlineNeon" size="xl" asChild>
                <a href="#contact-form">Book Free Trial</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};