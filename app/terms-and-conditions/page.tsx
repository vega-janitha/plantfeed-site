import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms and Conditions | PlantFeed',
  description: 'Terms and Conditions for PlantFeed — governing access to and use of the PlantFeed website.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />
      <main className="flex-grow container-custom pt-32 pb-24 text-[var(--foreground)]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--foreground)] text-center">Terms and Conditions</h1>
          <div className="border-b border-[var(--border)] mb-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">1. Introduction</h2>
            <p className="mb-4 text-gray-700">
              These Terms and Conditions govern access to and use of the PlantFEED website and apply to all inquiries, orders, and purchases, including bulk and distributor transactions. By using this website or engaging with PlantFEED, you agree to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">2. Nature of Website</h2>
            <p className="mb-4 text-gray-700">
              This website is for information and inquiry purposes only. It does not facilitate direct online sales. All purchases, including bulk and distributor orders, are completed offline and are subject to separate commercial agreements, invoices, or quotations issued by PlantFEED.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">3. Orders and Acceptance</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>All orders (including bulk and distributor orders) are subject to written confirmation by PlantFEED.</li>
              <li>A quotation does not constitute a binding contract until accepted in writing.</li>
              <li>PlantFEED reserves the right to accept, reject, or limit quantities at its sole discretion.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">4. Pricing and Payment Terms</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Prices are subject to change without prior notice unless formally agreed in writing.</li>
              <li>Payment terms will be specified in the invoice or agreement.</li>
              <li>Late payments may result in suspension of supply and may incur additional charges where applicable.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">5. Delivery and Risk Transfer</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Delivery timelines are estimates only unless expressly agreed in writing.</li>
              <li>Risk in the products passes to the buyer upon delivery or collection, whichever occurs first.</li>
              <li>PlantFEED is not responsible for delays caused by third-party logistics or external factors.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">6. Inspection and Acceptance</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Buyers must inspect goods upon receipt.</li>
              <li>Any claims for shortages, defects, or damages must be reported within 3–7 days of delivery.</li>
              <li>Failure to report within this period will be treated as acceptance of goods.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">7. Returns and Refunds</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Returns are only accepted with prior written approval from PlantFEED.</li>
              <li>Approved returns must meet condition and handling requirements.</li>
              <li>Refunds or replacements are issued at PlantFEED&apos;s discretion.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">8. Product Use and Disclaimer</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Products must be used according to provided instructions and guidelines.</li>
              <li>Buyers assume full responsibility for usage and application outcomes.</li>
              <li>Results may vary depending on environmental and agricultural conditions.</li>
              <li>No guarantee is given for specific yields or results.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">9. Distributor and Resale Terms</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Products must not be misrepresented or altered without authorization.</li>
              <li>Distributors must comply with all applicable laws and regulations.</li>
              <li>PlantFEED reserves the right to terminate supply relationships at any time for breach or misuse.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">10. Intellectual Property</h2>
            <p className="mb-4 text-gray-700">
              All content, branding, and materials are the property of PlantFEED. No part may be copied, distributed, or used without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">11. Limitation of Liability</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>PlantFEED&apos;s liability is limited to the value of goods supplied.</li>
              <li>PlantFEED is not liable for indirect, incidental, or consequential losses including loss of profit, business, or crop failure.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">12. Indemnity</h2>
            <p className="mb-4 text-gray-700">
              The buyer agrees to indemnify PlantFEED against claims or losses arising from misuse, improper handling, or resale of products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">13. Force Majeure</h2>
            <p className="mb-4 text-gray-700">
              PlantFEED is not liable for delays or failure caused by events beyond its control including natural disasters, supply disruptions, or government actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">14. Termination</h2>
            <p className="mb-4 text-gray-700">
              PlantFEED reserves the right to suspend or terminate supply or engagement at its discretion for breach of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">15. Governing Law</h2>
            <p className="mb-4 text-gray-700">
              These Terms are governed by the laws of Sri Lanka. Any disputes shall be subject to the jurisdiction of Sri Lankan courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">16. Amendments</h2>
            <p className="mb-4 text-gray-700">
              PlantFEED may update these Terms at any time. Continued use or engagement constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">17. Contact Information</h2>
            <p className="mb-4 text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at: <a href="tel:+94762225555" className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors"><strong>+94 76 222 5555</strong></a>
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
