import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const info = [
  { icon: MapPin, label: "Location", value: "MVP Colony, Visakhapatnam, AP 530017" },
  { icon: Phone, label: "Call Us", value: "+91 84729 16385" },
  { icon: Phone, label: "WhatsApp", value: "+91 97246 53108" },
  { icon: Mail, label: "Email", value: "contact.powerfit.vizag@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat 5AM–11PM · Sun 6AM–2PM" },
];

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    if (!name || name.length > 100) {
      toast({ title: "Please enter a valid name" });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 255) {
      toast({ title: "Please enter a valid email" });
      return;
    }
    if (!/^[0-9+\s-]{7,15}$/.test(phone)) {
      toast({ title: "Please enter a valid phone number" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", phone: "", goal: "", message: "" });
      toast({ title: "Request received 💪", description: "Our team will reach out within 24 hours." });
    }, 700);
  };

  return (
    <section id="contact-form" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight">
            Start Your <span className="text-gradient-neon">Transformation</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drop your details — we'll set up your free trial and gym tour.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {info.map((it) => (
              <div
                key={it.label}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-neon/50 transition-colors"
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
                  <it.icon className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {it.label}
                  </div>
                  <div className="mt-1 text-sm font-medium">{it.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 p-8 rounded-2xl border border-border bg-card relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon/15 blur-3xl rounded-full" />
            <div className="relative grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Rohan Kumar"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  required
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="goal">Your Goal</Label>
                <Input
                  id="goal"
                  maxLength={100}
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  placeholder="Weight loss, muscle gain, fitness…"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us a bit about what you're looking for…"
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending…" : (<>Book My Free Trial <Send className="ml-1 w-4 h-4" /></>)}
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};