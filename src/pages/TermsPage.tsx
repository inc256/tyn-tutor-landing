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
                <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Terms of Service</h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  The rules and guidelines for using Tyn Tutor.
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
                  <h2 className="font-display text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Tyn Tutor, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily use Tyn Tutor for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6">
                    <li>• Modify or copy the materials</li>
                    <li>• Use the materials for any commercial purpose or for any public display</li>
                    <li>• Attempt to decompile or reverse engineer any software contained on Tyn Tutor</li>
                    <li>• Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">3. Service Availability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tyn Tutor strives to provide uninterrupted service but cannot guarantee that the service will always be available, accessible, or error-free. We reserve the right to modify, suspend, or discontinue the service at any time without notice.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">4. Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on Tyn Tutor are provided on an 'as is' basis. Tyn Tutor makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">5. Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Tyn Tutor or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Tyn Tutor, even if Tyn Tutor or a Tyn Tutor authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="rounded-2xl bg-card border border-border/70 shadow-soft p-8"
                >
                  <h2 className="font-display text-2xl font-semibold mb-4">6. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
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

export default TermsPage;