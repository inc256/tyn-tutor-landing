// Contact.tsx (Fixed - White mode with working email)
import { motion } from "framer-motion";
import { Instagram, Music, Youtube, Clock, ShieldCheck } from "lucide-react";
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
      // Send email using mailto fallback
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
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Contact</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-gray-900">Support for workflows, reports, and enterprise adoption</h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Contact Xplainfy for product guidance, billing questions, partnership inquiries, or feature feedback.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <aside className="space-y-6 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="rounded-3xl bg-gray-50 p-6 border border-gray-200">
              <p className="text-sm uppercase tracking-[0.28em] text-gray-500">Support</p>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">Help for teams and professionals</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We handle product questions, onboarding support, and enterprise inquiries with fast turnaround and clear next steps.
              </p>
            </div>

            <div className="grid gap-4 rounded-3xl bg-gray-50 p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Response time</p>
                  <p className="text-sm text-gray-600">Most inquiries answered within 1–2 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Secure communication</p>
                  <p className="text-sm text-gray-600">We protect your information and respect your privacy.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 border border-gray-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Support categories</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>Product guidance and workflow onboarding</li>
                <li>Billing, upgrades, and plan strategy</li>
                <li>Partnership and integration inquiries</li>
                <li>Feature requests and product feedback</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="w-full bg-gray-800 hover:bg-gray-900 text-white hover:text-white border-0 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <a href="https://www.instagram.com/xplainfy_ai/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="w-full bg-gray-800 hover:bg-gray-900 text-white hover:text-white border-0 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <a href="https://www.youtube.com/@xplainfy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="w-full bg-gray-800 hover:bg-gray-900 text-white hover:text-white border-0 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <a href="https://www.tiktok.com/@xplainfy_ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                  <Music className="w-5 h-5" />
                  TikTok
                </a>
              </Button>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Write to us</p>
              <h3 className="mt-3 text-3xl font-display font-semibold text-gray-900">Send your request</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Use the form below for questions, feedback, or partnership inquiries. We'll let you know the next steps right away.
              </p>
            </div>

            <form onSubmit={sendContact} className="grid gap-4">
              <Input
                aria-label="Name"
                placeholder="Your name"
                className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                aria-label="Email"
                placeholder="Your email"
                type="email"
                className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                aria-label="Subject"
                placeholder="Subject"
                className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
              <Textarea
                aria-label="Message"
                placeholder="Your message"
                className="w-full h-40 bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button 
                  type="submit" 
                  disabled={sending}
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                >
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
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  Send via WhatsApp
                </Button>
              </div>
              {status && (
                <p className={`text-sm ${status.includes("error") ? "text-red-600" : "text-green-600"}`}>
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