import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent", description: "We'll get back to you within 24 hours." });
    }, 700);
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

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 max-w-xl mx-auto rounded-2xl bg-card border border-border/70 shadow-soft p-6 md:p-8 space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : (<>Send message <Send className="w-4 h-4" /></>)}
          </Button>
        </motion.form>

        <p className="mt-6 text-center text-sm text-muted-foreground inline-flex items-center gap-2 justify-center w-full">
          <Mail className="w-4 h-4" />
          Or email us at <a href="mailto:hello@tyntutor.app" className="text-primary font-medium hover:underline">hello@tyntutor.app</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
