import { Sparkles } from "lucide-react";

const Footer = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <a href="#home" onClick={(e) => handleNav(e, "#home")} className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-lg">Tyn Tutor</span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Your AI study companion — learn smarter, think faster.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" onClick={(e) => handleNav(e, "#home")} className="hover:text-foreground">Home</a></li>
            <li><a href="#pricing" onClick={(e) => handleNav(e, "#pricing")} className="hover:text-foreground">Pricing</a></li>
            <li><a href="#downloads" onClick={(e) => handleNav(e, "#downloads")} className="hover:text-foreground">Downloads</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#contact" onClick={(e) => handleNav(e, "#contact")} className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Tyn Tutor. All rights reserved.</span>
          <span>Made for curious minds.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
