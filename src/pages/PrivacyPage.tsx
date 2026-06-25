// PrivacyPage.tsx (White mode)
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "about", label: "About Xplainfy" },
  { id: "information", label: "Information We Collect" },
  { id: "use", label: "How We Use Your Information" },
  { id: "ai-processing", label: "AI Processing" },
  { id: "payments", label: "Payments" },
  { id: "cookies", label: "Analytics and Cookies" },
  { id: "storage", label: "Data Sharing and Storage" },
  { id: "rights", label: "Your Rights" },
  { id: "children", label: "Children's Privacy" },
  { id: "retention", label: "Data Retention & Changes" },
  { id: "contact", label: "Contact Us" },
];

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onDownloadClick={() => {}} />
      <main>
        <section className="py-24 md:py-32">
          <div className="container grid gap-12 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block sticky top-24 self-start rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">Privacy navigation</div>
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <div className="text-center mb-16">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">Legal</span>
                  <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-gray-900">Xplainfy Privacy Policy</h1>
                  <p className="mt-4 text-gray-600 text-lg">
                    How we respect your privacy and protect your personal information.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">Last updated: May 30, 2026</p>
                </div>
              </motion.div>

              <div className="space-y-12">
                <motion.div
                  id="introduction"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome to Xplainfy. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data when using Xplainfy.
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
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">About Xplainfy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Xplainfy is a platform that combines guided thinking, structured research, and step-by-step solutions into one seamless workflow. It is available through web, mobile, and desktop applications and offers both free and paid plans.
                  </p>
                </motion.div>

                <motion.div
                  id="information"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Information You Provide</h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                        <li>Name and email address</li>
                        <li>Profile picture</li>
                        <li>Account credentials</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Information Collected Automatically</h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                        <li>Usage analytics</li>
                        <li>Application performance data</li>
                        <li>Crash reports</li>
                      </ul>
                      <p className="mt-4 text-sm italic text-gray-500">Note: We do not intentionally collect precise location information or IP addresses for profiling purposes.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  id="use"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">We use your information to:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Create and manage your account</li>
                    <li>Provide and improve Xplainfy services</li>
                    <li>Process payments and subscriptions</li>
                    <li>Respond to support requests</li>
                    <li>Monitor application performance and reliability</li>
                    <li>Prevent abuse and maintain platform security</li>
                  </ul>
                </motion.div>

                <motion.div
                  id="ai-processing"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">AI Processing</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Xplainfy uses artificial intelligence services provided by OpenAI. When you submit prompts, the content may be securely transmitted to OpenAI for processing. We only send the information necessary to provide the requested AI functionality.
                  </p>
                </motion.div>

                <motion.div
                  id="payments"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Payments</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    For paid services, payments may be processed through Stripe, MTN Mobile Money, or Airtel Money, facilitated via MakyPay.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Xplainfy does not store full payment card information; payment providers process transaction details according to their own privacy policies.
                  </p>
                </motion.div>

                <motion.div
                  id="cookies"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Analytics and Cookies</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">We use:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Essential session cookies</li>
                    <li>Authentication cookies</li>
                    <li>Analytics cookies</li>
                  </ul>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    We also use Google Analytics to understand how users interact with Xplainfy and to improve our services.
                  </p>
                </motion.div>

                <motion.div
                  id="storage"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Storage</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">We do not sell, rent, or trade your personal information.</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    User data is stored using Supabase and related infrastructure providers. We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We may share limited information with trusted service providers when necessary to process payments, provide authentication, deliver analytics, or operate our infrastructure.
                  </p>
                </motion.div>

                <motion.div
                  id="rights"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">You may:</p>
                  <ul className="text-gray-600 leading-relaxed space-y-2 ml-6 list-disc">
                    <li>Request access to your personal data</li>
                    <li>Request correction of your information</li>
                    <li>Request deletion of your account and associated data</li>
                    <li>Request a copy of your personal information</li>
                  </ul>
                  <p className="mt-4 text-gray-600 leading-relaxed">To make a request, contact us using the email below.</p>
                </motion.div>

                <motion.div
                  id="children"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Xplainfy is intended for general audiences. Parents and guardians who believe a child has provided personal information may contact us for assistance.
                  </p>
                </motion.div>

                <motion.div
                  id="retention"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Data Retention & Changes</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      We keep personal information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  id="contact"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-900 font-medium">Email: lunainc256@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">Support: lunainc256@gmail.com</p>
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

export default PrivacyPage;