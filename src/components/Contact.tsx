import { motion } from "framer-motion";
import { Clock, Instagram, Music, ShieldCheck, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  const sendContact = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const subject = encodeURIComponent(`Contact from website: ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:lunainc256@gmail.com?subject=${subject}&body=${body}`;

      setStatus("Opening your email client...");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("There was an error. Please try again or contact us directly at lunainc256@gmail.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-5xl">
            Support for research, planning, and product questions.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            Get help with onboarding, pricing, partnerships, or product feedback.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <aside className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Support</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-900">Built for real work.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We help individuals and teams with onboarding, workflow questions, and product adoption.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Response time</p>
                  <p className="mt-1 text-sm text-slate-600">Usually within 1–2 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Private by default</p>
                  <p className="mt-1 text-sm text-slate-600">Your information is handled with care and respect.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">Topics</p>
              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                <li>• Product guidance and workflow onboarding</li>
                <li>• Billing, upgrades, and plan strategy</li>
                <li>• Partnership and integration inquiries</li>
                <li>• Feature requests and feedback</li>
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Button variant="outline" asChild className="w-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                <a href="https://www.instagram.com/xplainfy_ai/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                <a href="https://www.youtube.com/@xplainfy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                <a href="https://www.tiktok.com/@xplainfy_ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Music className="h-4 w-4" />
                  TikTok
                </a>
              </Button>
            </div>
          </aside>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Write to us</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900">Send a message</h3>
            </div>

            <form onSubmit={sendContact} className="grid gap-4">
              <Input
                aria-label="Name"
                placeholder="Your name"
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                aria-label="Email"
                placeholder="Your email"
                type="email"
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                aria-label="Subject"
                placeholder="Subject"
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
              />
              <Textarea
                aria-label="Message"
                placeholder="Your message"
                className="h-36 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={sending} className="bg-blue-600 text-white hover:bg-blue-700">
                  {sending ? "Sending..." : "Send message"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    const text = message || "Hi, I would like to get in touch.";
                    const encoded = encodeURIComponent(text);
                    window.open(`https://wa.me/256763511726?text=${encoded}`, "_blank");
                  }}
                  className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  WhatsApp
                </Button>
              </div>
              {status && (
                <p className={`text-sm ${status.includes("error") ? "text-red-600" : "text-emerald-600"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;