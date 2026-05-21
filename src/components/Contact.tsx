import { motion } from "framer-motion";
import { Instagram, Music, Youtube, MessageSquare } from "lucide-react";
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

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ from: "user" | "bot"; text: string }>>([]);
  const chatInputRef = useRef<HTMLInputElement | null>(null);

  const WHATSAPP_PHONE = "256763511726"; // E.164-ish without +: converted from local 0763511726 -> 44 country code

  useEffect(() => {
    if (chatOpen) chatInputRef.current?.focus();
  }, [chatOpen]);

  const sendContact = async (ev?: React.FormEvent) => {
    ev?.preventDefault();
    setSending(true);
    setStatus(null);
    const payload = { name, email, message };

    try {
      // Try to POST to an API endpoint if available
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
      // Fallback to mailto if there is no backend
      const subject = encodeURIComponent("Contact from website: " + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
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
    // simple canned response / echo
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
          className="max-w-xl mx-auto text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Get in touch</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Questions, feedback, or partnerships — we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.instagram.com/xplainfy_ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.tiktok.com/@xplainfy_ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Music className="w-5 h-5" />
                TikTok
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.youtube.com/@xplainfy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => openWhatsApp()}>
              <span className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </span>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl mx-auto"
        >
          <form onSubmit={sendContact} className="grid gap-3">
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
            <Textarea
              aria-label="Message"
              placeholder="Message"
              className="w-full h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div className="flex items-center gap-3">
              <Button type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send message"}
              </Button>
              <Button variant="ghost" onClick={() => openWhatsApp(message)}>
                Send via WhatsApp
              </Button>
            </div>
            {status && <p className="text-sm text-success">{status}</p>}
          </form>
        </motion.div>

        {/* Chatbot floating widget */}
        <div className="fixed right-6 bottom-6 z-50">
          {chatOpen && (
            <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <div className="px-4 py-2 bg-primary text-white flex items-center justify-between">
                <strong>Chat</strong>
                <button onClick={() => setChatOpen(false)} aria-label="Close chat">✕</button>
              </div>
              <div className="p-3 flex-1 overflow-auto space-y-2 h-60">
                {chatMessages.length === 0 && <p className="text-sm text-muted-foreground">Say hi — we're here to help.</p>}
                {chatMessages.map((m, i) => (
                  <div key={i} className={m.from === "user" ? "text-right" : "text-left"}>
                    <div className={`inline-block px-3 py-2 rounded ${m.from === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-900"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-2 border-t">
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

          {/* {!chatOpen && (
            <button onClick={() => setChatOpen(true)} className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center">
              💬
            </button>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
