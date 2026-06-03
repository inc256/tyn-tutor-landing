import { motion } from "framer-motion";
import { Instagram, Music, Youtube, MessageSquare, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | string>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ from: "user" | "bot"; text: string }>>([]);
  const chatInputRef = useRef<HTMLInputElement | null>(null);
  const WHATSAPP_PHONE = "256763511726";

  useEffect(() => {
    if (chatOpen) chatInputRef.current?.focus();
  }, [chatOpen]);

  const sendContact = async (ev?: React.FormEvent) => {
    ev?.preventDefault();
    setSending(true);
    setStatus(null);
    const payload = { name, email, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("Message sent. We'll be in touch soon.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("server");
      }
    } catch (err) {
      const subject = encodeURIComponent("Contact from website: " + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:lunainc256@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setSending(false);
    }
  };

  const openWhatsApp = (prefill?: string) => {
    const text = prefill ?? message ?? "Hi, I would like to get in touch.";
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, "_blank");
  };

  const sendChat = (text: string) => {
    if (!text) return;
    setChatMessages((s) => [...s, { from: "user", text }]);
    setTimeout(() => {
      setChatMessages((s) => [...s, { from: "bot", text: "Thanks — we received your message. A human will reply soon." }]);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Support for workflows, reports, and enterprise adoption</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
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
          <aside className="space-y-6 rounded-[2rem] border border-border/70 bg-card p-8 shadow-soft">
            <div className="rounded-3xl bg-background/90 p-6 border border-border/50">
              <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Support</p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">Help for teams and professionals</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We handle product questions, onboarding support, and enterprise inquiries with fast turnaround and clear next steps.
              </p>
            </div>

            <div className="grid gap-4 rounded-3xl bg-background/90 p-6 border border-border/50">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Response time</p>
                  <p className="text-sm text-muted-foreground">Most inquiries answered within 1–2 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Secure communication</p>
                  <p className="text-sm text-muted-foreground">We protect your information and respect your privacy.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-card/90 p-6 border border-border/50">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Support categories</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>Product guidance and workflow onboarding</li>
                <li>Billing, upgrades, and plan strategy</li>
                <li>Partnership and integration inquiries</li>
                <li>Feature requests and product feedback</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button variant="outline" size="lg" asChild className="w-full">
                <a href="https://www.instagram.com/xplainfy_ai/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full">
                <a href="https://www.youtube.com/@xplainfy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full">
                <a href="https://www.tiktok.com/@xplainfy_ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                  <Music className="w-5 h-5" />
                  TikTok
                </a>
              </Button>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-soft">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Write to us</p>
              <h3 className="mt-3 text-3xl font-display font-semibold text-foreground">Send your request</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Use the form below for questions, feedback, or partnership inquiries. We’ll let you know the next steps right away.
              </p>
            </div>

            <form onSubmit={sendContact} className="grid gap-4">
              <Input
                aria-label="Name"
                placeholder="Your name"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                aria-label="Email"
                placeholder="Your email"
                type="email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                aria-label="Subject"
                placeholder="Subject"
                className="w-full"
              />
              <Textarea
                aria-label="Message"
                placeholder="Your message"
                className="w-full h-40"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send message"}
                </Button>
                <Button variant="ghost" onClick={() => openWhatsApp(message)}>
                  Send via WhatsApp
                </Button>
              </div>
              {status && <p className="text-sm text-success">{status}</p>}
            </form>
          </div>
        </motion.div>

        <div className="fixed right-6 bottom-6 z-50">
          {chatOpen && (
            <div className="w-80 bg-card/95 shadow-elevated rounded-3xl overflow-hidden flex flex-col border border-border/60 backdrop-blur-xl">
              <div className="px-4 py-3 bg-gradient-primary text-primary-foreground flex items-center justify-between gap-3">
                <strong>Chat</strong>
                <button onClick={() => setChatOpen(false)} aria-label="Close chat" className="rounded-full bg-white/10 px-2 py-1 text-sm transition hover:bg-white/15">✕</button>
              </div>
              <div className="p-3 flex-1 overflow-auto space-y-3 h-60">
                {chatMessages.length === 0 && <p className="text-sm text-muted-foreground">Say hi — we're here to help.</p>}
                {chatMessages.map((m, i) => (
                  <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
                    <div className={`inline-block px-3 py-2 rounded-2xl text-sm ${m.from === "user" ? "bg-primary text-primary-foreground shadow-glow" : "bg-muted text-muted-foreground"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-border/60 bg-background/80">
                <div className="flex gap-2">
                  <Input ref={chatInputRef} className="flex-1" placeholder="Type a message" onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const val = (e.target as HTMLInputElement).value.trim();
                      if (!val) return;
                      sendChat(val);
                      (e.target as HTMLInputElement).value = "";
                    }
                  }} />
                  <Button onClick={() => {
                    const input = chatInputRef.current;
                    if (!input) return;
                    const val = input.value.trim();
                    if (!val) return;
                    sendChat(val);
                    input.value = "";
                  }}>Send</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
