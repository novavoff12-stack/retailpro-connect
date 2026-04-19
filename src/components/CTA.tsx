import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dark p-12 md:p-20 text-center text-primary-foreground">
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to upgrade your store?</h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              See RetailConnect live. Book a 20-minute demo with our team and discover how it fits your retail workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-accent-foreground border-0 shadow-glow group">
                Book a demo
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
