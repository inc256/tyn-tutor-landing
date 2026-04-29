import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => {}} />
      <main>
        <section className="py-24 md:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</span>
                <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  How we protect and handle your personal information.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Last updated: April 29, 2026
                </p>
              </div>

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, and any content you upload or create within our application.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6">
                    <li>• Provide, maintain, and improve our AI tutoring services</li>
                    <li>• Process transactions and send related information</li>
                    <li>• Communicate with you about our services and updates</li>
                    <li>• Analyze usage patterns to enhance user experience</li>
                    <li>• Ensure the security and integrity of our platform</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">3. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information only in the following circumstances: with your explicit consent, to comply with legal obligations, or to protect our rights and safety.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, regular security assessments, and access controls.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">5. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-foreground font-medium">Email: hello@tyntutor.app</p>
                    <p className="text-muted-foreground text-sm mt-1">We typically respond within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;