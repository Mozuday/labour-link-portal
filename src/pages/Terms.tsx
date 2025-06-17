
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 17, 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Easy HR India platform, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-600">
                Easy HR India provides a comprehensive platform for accessing Indian labour laws, 
                posting job opportunities, and managing HR-related resources. Our service includes 
                document repositories, job posting features, and administrative tools for verified users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete information when creating accounts</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service only for lawful purposes</li>
                <li>Respect intellectual property rights of others</li>
                <li>Not upload or share false, misleading, or harmful content</li>
                <li>Comply with all applicable Indian laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content and Documents</h2>
              <p className="text-gray-600 mb-4">
                All labour law documents and legal content provided on our platform are for informational 
                purposes only and should not be considered as legal advice. Users should consult with 
                qualified legal professionals for specific legal matters.
              </p>
              <p className="text-gray-600">
                We strive to maintain accurate and up-to-date information but make no warranties regarding 
                the completeness or accuracy of the content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Termination</h2>
              <p className="text-gray-600">
                We reserve the right to suspend or terminate accounts that violate these terms or 
                engage in prohibited activities. Users may also terminate their accounts at any time 
                by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Easy HR India shall not be liable for any indirect, incidental, special, or consequential 
                damages arising from your use of our service. Our total liability shall not exceed the 
                amount paid by you for the service in the preceding 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600">
                We may modify these terms from time to time. We will notify users of significant changes 
                via email or platform notifications. Continued use of the service after changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600">
                These terms are governed by the laws of India. Any disputes shall be subject to the 
                exclusive jurisdiction of the courts in New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, contact us at legal@easyhrindia.com or 
                write to Easy HR India Pvt. Ltd., A-42, Sector 16, Noida, Uttar Pradesh 201301, India.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
