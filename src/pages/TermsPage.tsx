// TermsPage.tsx (White mode)
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "about", label: "About Xplainfy" },
  { id: "eligibility", label: "Eligibility" },
  { id: "accounts", label: "User Accounts" },
  { id: "use", label: "Acceptable Use" },
  { id: "ai-content", label: "AI-Generated Content" },
  { id: "disclaimer", label: "Professional Advice Disclaimer" },
  { id: "payments", label: "Subscriptions and Payments" },
  { id: "intellectual", label: "Intellectual Property" },
  { id: "user-content", label: "User Content" },
  { id: "availability", label: "Service Availability" },
  { id: "suspension", label: "Account Suspension" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "governing", label: "Governing Law" },
  { id: "contact", label: "Contact Us" },
];

const TermsPage = () => {
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
                  <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-gray-900">Xplainfy Terms of Service</h1>
                  <p className="mt-4 text-gray-600 text-lg">
                    The rules and guidelines for using the Xplainfy platform.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">Last updated: May 30, 2026</p>
                </div>
              </motion.div>

              <div className="space-y-12">
                <motion.div
                  id="acceptance"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome to Xplainfy. By accessing or using Xplainfy's website, applications, or services, you agree to be bound by these Terms of Service. If you do not agree with these terms, you should not use Xplainfy.
                  </p>
                </motion.div>

                <motion.div
                  id="about"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">2. About Xplainfy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Xplainfy is an AI-powered platform that combines guided thinking, structured research, and step-by-step solutions to help users understand and solve problems across various fields. Xplainfy offers both free and paid services through web, mobile, and desktop platforms.
                  </p>
                </motion.div>

                <motion.div
                  id="eligibility"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">3. Eligibility</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You must be legally capable of entering into a binding agreement in your jurisdiction to use Xplainfy. If you are under the age required by applicable law to enter into contracts independently, you may only use Xplainfy with the involvement of a parent or legal guardian.
                  </p>
                </motion.div>

                <motion.div
                  id="accounts"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.13 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">4. User Accounts</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">To access certain features, you may be required to create an account. You agree to:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Provide accurate information.</li>
                    <li>Keep your login credentials secure.</li>
                    <li>Maintain the confidentiality of your account.</li>
                    <li>Notify us immediately of any unauthorized use.</li>
                  </ul>
                </motion.div>

                <motion.div
                  id="use"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.14 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">You agree not to use Xplainfy to:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Violate any law or regulation.</li>
                    <li>Harass, abuse, threaten, or harm others.</li>
                    <li>Distribute malware or malicious code.</li>
                    <li>Attempt unauthorized access to systems.</li>
                    <li>Interfere with platform operations.</li>
                    <li>Generate unlawful or harmful content.</li>
                  </ul>
                </motion.div>

                <motion.div
                  id="ai-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">6. AI-Generated Content</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Xplainfy uses artificial intelligence technologies, including services provided by OpenAI. You acknowledge that:
                  </p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>AI output is generated automatically and may contain inaccuracies or outdated information.</li>
                    <li>Results should be independently verified when accuracy is important.</li>
                    <li>Xplainfy does not guarantee the accuracy, completeness, or suitability of AI content.</li>
                    <li>Users remain responsible for decisions made based on platform information.</li>
                  </ul>
                </motion.div>

                <motion.div
                  id="disclaimer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">7. Professional Advice Disclaimer</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Xplainfy is an educational and productivity tool. Information provided through Xplainfy does not constitute legal, medical, financial, or engineering advice. You should consult qualified professionals before making important decisions.
                  </p>
                </motion.div>

                <motion.div
                  id="payments"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">8. Subscriptions and Payments</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Certain features may require payment via Stripe, MTN Mobile Money, or Airtel Money through authorized partners. By purchasing a paid plan, you agree to pay all applicable fees. Prices may change prospectively with appropriate notice.
                  </p>
                </motion.div>

                <motion.div
                  id="intellectual"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.26 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Xplainfy, including its software, design, branding, and content, is protected by intellectual property laws. You may not copy, modify, distribute, sell, or reverse engineer any part of Xplainfy except as permitted by law.
                  </p>
                </motion.div>

                <motion.div
                  id="user-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.27 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">10. User Content</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You retain ownership of content you submit. You grant Xplainfy a limited right to process, store, and transmit that content solely to provide the service.
                  </p>
                </motion.div>

                <motion.div
                  id="availability"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.28 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">11. Service Availability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We strive for reliability but do not guarantee uninterrupted access. We may modify features, perform maintenance, or suspend services temporarily without notice.
                  </p>
                </motion.div>

                <motion.div
                  id="suspension"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.29 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">12. Account Suspension</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may suspend or terminate your account if you violate these Terms, engage in fraud, or pose a risk to the platform.
                  </p>
                </motion.div>

                <motion.div
                  id="liability"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">13. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To the maximum extent permitted by law, Xplainfy and its operators shall not be liable for indirect, consequential damages, loss of profits, or decisions made based on AI-generated content. Your use of the platform is at your own risk.
                  </p>
                </motion.div>

                <motion.div
                  id="governing"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">17. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms shall be governed by and interpreted in accordance with the laws of Uganda, without regard to conflict of law principles.
                  </p>
                </motion.div>

                <motion.div
                  id="contact"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">18. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have questions regarding these Terms of Service, please contact:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-900 font-medium">Email: xplainfyai@gmail.com</p>
                  </div>
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

export default TermsPage;