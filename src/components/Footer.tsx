import { Link } from "react-router-dom";
import logo from '@/images/logo.png';

const Footer = () => {

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Xplainfy" className="w-9 h-9 rounded-xl shadow-glow" />
            <span className="font-display font-bold text-lg">Xplainfy</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Anything Explained — your AI study companion.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/downloads" className="hover:text-foreground">Downloads</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Xplainfy. All rights reserved.</span>
          <span>Made for curious minds.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
