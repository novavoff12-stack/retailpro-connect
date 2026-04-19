import logo from "@/assets/retailpro-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="RetailPro logo" className="h-8 w-8 rounded-md object-contain" />
              <span className="font-bold text-lg tracking-tight">retailpro</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              The communication platform built for modern retail. Made for Roblox.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-smooth">Features</a></li>
              <li><a href="#how" className="hover:text-foreground transition-smooth">How it works</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-smooth">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 RetailPro Roblox. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
