import { Metadata } from "next";
import { SITE_NAME, SITE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: "Terms of Service for Leeview Property Maintenance.",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20" style={{ backgroundColor: "var(--light, #f8f9fa)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl mb-2" style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.04em", color: "#0c1f3d" }}>
          Terms of Service
        </h1>
        <p className="text-xs text-gray-400 mb-10">Last updated: September 2025</p>

        <div className="prose prose-sm max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. About Us</h2>
            <p>
              Leeview Property Maintenance (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a sole trader property maintenance business based in Ballincollig, Co. Cork, Ireland. By contacting us or using our website you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Quotes &amp; Estimates</h2>
            <p>
              All quotes provided are estimates based on the information supplied at the time of enquiry. Final pricing may vary if the scope of work changes on-site. Written quotes are valid for 30 days unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. Booking &amp; Cancellation</h2>
            <p>
              A booking is confirmed when both parties have agreed on the scope, price, and date of work. We ask for at least 48 hours&rsquo; notice for cancellations. We reserve the right to reschedule work due to adverse weather or circumstances outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. Payment</h2>
            <p>
              Payment terms will be agreed at the time of booking. For larger jobs, a deposit may be required. All payments are due within 7 days of work completion unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Liability</h2>
            <p>
              We carry appropriate public liability insurance. We are not liable for pre-existing defects or damage that becomes apparent during the course of work, nor for delays caused by factors outside our reasonable control (weather, supply issues, access restrictions).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Lead Form &amp; Contact Data</h2>
            <p>
              When you submit your details via our contact form or a Google Ads lead form, your information is used solely to respond to your enquiry. We do not sell your data or pass it to third parties for marketing. Please see our{" "}
              <a href="/privacy" className="underline" style={{ color: "#4a7c59" }}>Privacy Policy</a> for full details.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Google Ads Lead Form Compliance</h2>
            <p>We acknowledge and agree that:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Information collected via lead forms is used only to respond to the specific service enquiry described in the form.</li>
              <li>We will not sell, license, or disclose lead form data to any data broker or third party.</li>
              <li>We will not spam users with repeated calls or emails beyond what is reasonably necessary.</li>
              <li>We comply with all applicable Irish and EU laws regarding marketing, data protection, and spam (including GDPR and the ePrivacy Regulations).</li>
              <li>Our webhook endpoint is properly configured to handle POST requests from Google as per Google&rsquo;s instructions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of Ireland. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="underline" style={{ color: "#4a7c59" }}>{EMAIL}</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
