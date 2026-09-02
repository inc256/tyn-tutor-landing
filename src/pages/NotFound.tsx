import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-20">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:p-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-600">
          <Search className="h-3.5 w-3.5" />
          404 error
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">Oops! This page isn’t available.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The route <span className="font-medium text-slate-800">{location.pathname}</span> doesn’t exist or may have moved.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            <Home className="h-4 w-4" />
            Go home
          </Link>
          <Link
            to="/product"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Explore product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
