import { Headphones, Radio, BatteryCharging, Hand, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Wireless headsets",
    desc: "Lightweight, all-day comfort. Crystal-clear audio for your entire team across the shop floor.",
  },
  {
    icon: Hand,
    title: "Customer call points",
    desc: "One tap on the 'Press for assistance' button instantly alerts the nearest available staff member.",
  },
  {
    icon: Radio,
    title: "Always-on base units",
    desc: "Plug-and-play base stations create a secure, low-latency network across your store.",
  },
  {
    icon: BatteryCharging,
    title: "Smart charging dock",
    desc: "Multi-bay dock keeps every headset ready to go. Battery status visible at a glance.",
  },
  {
    icon: Zap,
    title: "Instant response",
    desc: "Cut customer wait times. Staff respond in seconds, not minutes — and conversion goes up.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-ready",
    desc: "Encrypted comms, multi-store management, and analytics built for retail at scale.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything your floor team needs.</h2>
          <p className="text-lg text-muted-foreground">
            One unified system for staff communication and customer service — designed to make retail feel effortless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-accent text-accent-foreground mb-5 shadow-glow group-hover:scale-110 transition-smooth">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
