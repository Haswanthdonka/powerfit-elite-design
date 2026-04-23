import { Dumbbell, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/30 pt-20 pb-10">
      <div className="container mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-neon/10 border border-neon/40 flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-neon" />
            </div>
            <span className="font-bold text-lg tracking-wide">
              POWER<span className="text-neon">FIT</span>
            </span>
          </a>
          <p className="mt-4 text-muted-foreground max-w-sm">
            Visakhapatnam's premium fitness destination. Built for transformation. Engineered for results.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-neon hover:text-neon transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-neon shrink-0 mt-0.5" /> MVP Colony, Visakhapatnam, AP 530017</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-neon shrink-0 mt-0.5" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-neon shrink-0 mt-0.5" /> info@powerfitvizag.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm">Hours</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Mon – Sat · 5:00 AM – 11:00 PM</li>
            <li>Sunday · 6:00 AM – 2:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} PowerFit Gym. All rights reserved.</p>
        <p>Built to break limits — Visakhapatnam.</p>
      </div>
    </footer>
  );
};