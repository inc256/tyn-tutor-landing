import { motion } from "framer-motion";
import { Mail, Instagram, Music, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {

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
              <a href="mailto:hello@tyntutor.app" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://instagram.com/tyntutor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://tiktok.com/@tyntutor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Music className="w-5 h-5" />
                TikTok
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Developed by Luna Inc
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
