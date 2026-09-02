// RefundPage.tsx (White mode)
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "general", label: "General Policy" },
  { id: "credits", label: "Credit Purchases" },
  { id: "subscriptions", label: "Subscription Plans" },
  { id: "free", label: "Free Plan" },
  { id: "abuse", label: "Abuse Prevention" },
  { id: "availability", label: "Service Availability" },
  { id: "chargebacks", label: "Chargebacks" },
  { id: "contact", label: "Contact Us" },
  { id: "updates", label: "Policy Updates" },
];

const RefundPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onDownloadClick={() => {}} />
      <main>
        <section className="py-24 md:py-32">
          <div className="container grid gap-12 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block sticky top-24 self-start rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">On this page</div>
              <nav className="space-y-3 text-sm text-gray-600">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-2xl px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <div className="text-center mb-16">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Legal</span>
                  <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-gray-900">Xplainfy Refund Policy</h1>
                  <p className="mt-4 text-gray-600 text-lg">
                    When and how refunds may be granted for purchases made through our platform.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">Last updated: June 2026</p>
                </div>
              </motion.div>

              <div className="space-y-12">
                <motion.div
                  id="general"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">1. General Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Due to the nature of digital services and AI-powered computing resources, all purchases made through
                    Xplainfy are generally non-refundable once the purchased credits, subscriptions, or services have been
                    used.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    By purchasing a subscription or credits, you acknowledge that access to digital services begins
                    immediately after payment is processed.
                  </p>
                </motion.div>

                <motion.div
                  id="credits"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">2. Credit Purchases (Basic Plan)</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Credits purchased through Xplainfy are non-refundable once they have been added to your account.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">Refunds may only be considered if:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc mb-4">
                    <li>The payment was processed successfully but credits were never delivered.</li>
                    <li>A duplicate payment was charged due to a system error.</li>
                    <li>A technical issue on our side prevented access to purchased credits.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Refund requests must be submitted within 30 days of the purchase date.
                  </p>
                </motion.div>

                <motion.div
                  id="subscriptions"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">3. Subscription Plans (Pro and Ultra)</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Subscription fees are billed in advance on a recurring basis.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You may cancel your subscription at any time. Cancellation prevents future billing but does not
                    automatically generate a refund for the current billing period.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">Refunds for subscription payments may be granted only if:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc mb-4">
                    <li>You were charged multiple times for the same subscription period.</li>
                    <li>Billing occurred due to a verified system error.</li>
                    <li>You were charged after successfully cancelling your subscription.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mb-4">No refunds will be issued for:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Partial subscription periods.</li>
                    <li>Unused subscription time.</li>
                    <li>Failure to use the service after purchase.</li>
                    <li>Changes in personal circumstances.</li>
                  </ul>
                </motion.div>

                <motion.div
                  id="free"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">4. Free Plan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The Open plan is provided free of charge and does not qualify for refunds.
                  </p>
                </motion.div>

                <motion.div
                  id="abuse"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">5. Abuse Prevention</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Xplainfy reserves the right to deny refund requests where there is evidence of:
                  </p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Fraudulent activity.</li>
                    <li>Abuse of the platform.</li>
                    <li>Excessive usage before requesting a refund.</li>
                    <li>Attempts to circumvent platform limitations.</li>
                  </ul>
                </motion.div>

                <motion.div
                  id="availability"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Temporary outages, maintenance periods, model changes, feature updates, or performance variations
                    do not automatically qualify for refunds.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We continuously improve our services and may update available models, features, limits, or capabilities
                    at any time.
                  </p>
                </motion.div>

                <motion.div
                  id="chargebacks"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">7. Chargebacks</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you believe a payment was made in error, please contact us before initiating a chargeback with your
                    payment provider.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Unauthorized or fraudulent chargebacks may result in temporary suspension or permanent
                    termination of access to Xplainfy services.
                  </p>
                </motion.div>

                <motion.div
                  id="contact"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To request a refund or report a billing issue, please contact:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-900 font-medium">Email: xplainfyai@gmail.com</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-4">Please include:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc mt-2">
                    <li>Your account email address</li>
                    <li>Payment date</li>
                    <li>Transaction reference</li>
                    <li>Description of the issue</li>
                  </ul>
                </motion.div>

                <motion.div
                  id="updates"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">9. Policy Updates</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Refund Policy from time to time. Any changes will be posted on this page with an
                    updated revision date.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    By continuing to use Xplainfy after changes become effective, you agree to the updated Refund Policy.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPage;