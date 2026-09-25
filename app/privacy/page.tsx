import { Metadata } from "next";
import { SITE_NAME, SITE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: "Privacy Policy for Leeview Property Maintenance. Learn how we collect, use, and protect your personal data.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-28 pb-20" style={{ backgroundColor: "var(--light, #f8f9fa)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl mb-2" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em", color: "#0c1f3d" }}>
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-400 mb-10">Last updated: September 2025</p>

        <div className="prose prose-sm max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              Leeview Property Maintenance (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a property maintenance and home renovation company based in Ballincollig, Co. Cork, Ireland. We can be reached at{" "}
              <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "#4a7c59" }}>{EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. What Data We Collect</h2>
            <p>When you contact us or submit a quote request (including via Google Ads lead forms), we may collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Details about the service you are enquiring about</li>
            </ul>
            <p className="mt-3">We collect only what is necessary to respond to your enquiry and provide a quote.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
            <p>We use your information solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your service enquiry or quote request</li>
              <li>Schedule and carry out work you have agreed to</li>
              <li>Follow up on quotes if you have not responded (once only)</li>
            </ul>
            <p className="mt-3">
              We will not use your information for unsolicited marketing, spam calls, or repeated emails beyond what is reasonably necessary to fulfil your request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Legal Basis (GDPR)</h2>
            <p>
              We process your personal data on the basis of your consent (Article 6(1)(a) GDPR) and, where applicable, our legitimate interest in responding to business enquiries (Article 6(1)(f) GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Sharing Your Data</h2>
            <p>
              We do not sell, rent, license, or otherwise disclose your personal information to any third party, including data brokers. We do not share your data with any marketing partners.
            </p>
            <p className="mt-3">
              Your data may be stored in email systems and CRM tools used solely for managing customer communications. These tools are selected for their compliance with GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p>
              We retain your contact details for as long as is necessary to manage your enquiry or ongoing work, and for up to 12 months thereafter unless you request deletion. Financial records may be retained for up to 7 years as required by Irish law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Restrict or object to processing</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the Data Protection Commission (dataprotection.ie)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "#4a7c59" }}>{EMAIL}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              Our website may use basic analytics cookies to understand visitor traffic. We do not use advertising tracking cookies without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Google Ads Lead Forms</h2>
            <p>
              When you submit your information via a Google Ads lead form, your data is transferred to us by Google in accordance with{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#4a7c59" }}>
                Google&rsquo;s Privacy Policy
              </a>. We use that information only for the purpose described in the lead form (responding to your service enquiry). We do not sell or license that information to any data broker or third party.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">10. Contact</h2>
            <p>
              For any privacy-related questions, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "#4a7c59" }}>{EMAIL}</a> or call{" "}
              <a href="tel:+353851818163" className="underline" style={{ color: "#4a7c59" }}>085 181 8163</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
