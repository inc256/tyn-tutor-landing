// Footer.tsx (All white background, visible text)
import { Link } from "react-router-dom";
import logo from '@/images/logo.png';

const Footer = () => {

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Xplainfy" className="w-9 h-9 rounded-xl" />
            <span className="font-display font-bold text-lg text-gray-900">Xplainfy</span>
          </Link>
           <p className="mt-3 text-sm text-gray-600 max-w-xs">
             Structured understanding for engineers, researchers, educators, medical professionals, and business leaders.
           </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-900 mb-3">Product</div>
          <ul className="space-y-2 text-sm text-gray-600">
             <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
             <li><Link to="/pricing" className="hover:text-gray-900">Pricing</Link></li>
             <li><Link to="/downloads" className="hover:text-gray-900">Downloads</Link></li>
             <li><Link to="/privacy" className="hover:text-gray-900">Privacy</Link></li>
             <li><Link to="/terms" className="hover:text-gray-900">Terms</Link></li>
             <li><Link to="/refund" className="hover:text-gray-900">Refund Policy</Link></li>
           </ul>
        </div>
      </div>
         <div className="border-t border-gray-200">
         <div className="container py-6 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
           <span>© {new Date().getFullYear()} Xplainfy. All rights reserved.</span>
           <span>Clarity for every professional.</span>
         </div>
       </div>
    </footer>
  );
};

export default Footer;