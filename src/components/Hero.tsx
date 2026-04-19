import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/retailconnect-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="container relative pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Built for modern retail teams
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            Connect your store.
            <br />
            <span className="text-gradient">Empower your team.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            RetailConnect is a wireless headset and call-point system that lets your staff communicate instantly — and lets customers reach help with a single tap.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-accent-foreground border-0 shadow-glow group">
              Book a demo
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline">
              Explore RetailConnect
            </Button>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-glow blur-3xl opacity-60 pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/50 bg-card">
            <img
              src={heroImg}
              alt="RetailConnect system: base units, call point, charging dock and wireless headsets"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
