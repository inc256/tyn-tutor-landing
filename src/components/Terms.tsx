import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
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
                <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Xplainfy Terms of Service</h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  The rules and guidelines for using the Xplainfy platform.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Last updated: May 30, 2026
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
                  <h2 className="font-display text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Xplainfy. By accessing or using Xplainfy's website, applications, or services, you agree to be bound by these Terms of Service. If you do not agree with these terms, you should not use Xplainfy.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">2. About Xplainfy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Xplainfy is an AI-powered platform that combines guided thinking, structured research, and step-by-step solutions to help users understand and solve problems across various fields. Xplainfy offers both free and paid services through web, mobile, and desktop platforms.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">3. Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You must be legally capable of entering into a binding agreement in your jurisdiction to use Xplainfy. If you are under the age required by applicable law to enter into contracts independently, you may only use Xplainfy with the involvement of a parent or legal guardian.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.13 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">4. User Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">To access certain features, you may be required to create an account. You agree to:</p>
                  <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Provide accurate information.</li>
                    <li>Keep your login credentials secure.</li>
                    <li>Maintain the confidentiality of your account.</li>
                    <li>Notify us immediately of any unauthorized use.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.14 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">5. Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">You agree not to use Xplainfy to:</p>
                  <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Violate any law or regulation.</li>
                    <li>Harass, abuse, threaten, or harm others.</li>
                    <li>Distribute malware or malicious code.</li>
                    <li>Attempt unauthorized access to systems.</li>
                    <li>Interfere with platform operations.</li>
                    <li>Generate unlawful or harmful content.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">6. AI-Generated Content</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Xplainfy uses artificial intelligence technologies, including services provided by OpenAI. You acknowledge that:
                  </p>
                  <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                    <li>AI output is generated automatically and may contain inaccuracies or outdated information.</li>
                    <li>Results should be independently verified when accuracy is important.</li>
                    <li>Xplainfy does not guarantee the accuracy, completeness, or suitability of AI content.</li>
                    <li>Users remain responsible for decisions made based on platform information.</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">7. Professional Advice Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Xplainfy is an educational and productivity tool. Information provided through Xplainfy does not constitute legal, medical, financial, or engineering advice. You should consult qualified professionals before making important decisions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">8. Subscriptions and Payments</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Certain features may require payment via Stripe, MTN Mobile Money, or Airtel Money through authorized partners. By purchasing a paid plan, you agree to pay all applicable fees. Prices may change prospectively with appropriate notice.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.26 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">9. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Xplainfy, including its software, design, branding, and content, is protected by intellectual property laws. You may not copy, modify, distribute, sell, or reverse engineer any part of Xplainfy except as permitted by law.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.27 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">10. User Content</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You retain ownership of content you submit. You grant Xplainfy a limited right to process, store, and transmit that content solely to provide the service.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.28 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">11. Service Availability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive for reliability but do not guarantee uninterrupted access. We may modify features, perform maintenance, or suspend services temporarily without notice.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.29 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">12. Account Suspension</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may suspend or terminate your account if you violate these Terms, engage in fraud, or pose a risk to the platform.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.31 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">14. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Xplainfy is provided "as is" and "as available". We make no warranties regarding accuracy, reliability, or fitness for a particular purpose, except where prohibited by law.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.32 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">15. Privacy & 16. Changes</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Your use of Xplainfy is also governed by our Privacy Policy. 
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update these Terms from time to time. Continued use after changes constitutes acceptance of the revised Terms.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">13. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Xplainfy and its operators shall not be liable for indirect, consequential damages, loss of profits, or decisions made based on AI-generated content. Your use of the platform is at your own risk.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">17. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and interpreted in accordance with the laws of Uganda, without regard to conflict of law principles.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">18. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have questions regarding these Terms of Service, please contact:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-foreground font-medium">Email: lunainc256@gmail.com</p>
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

export default Terms;