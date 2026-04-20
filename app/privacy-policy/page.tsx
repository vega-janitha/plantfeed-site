import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | PlantFeed',
  description: 'Privacy Policy for PlantFeed — how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Navbar />
      <main className="flex-grow container-custom pt-32 pb-24 text-[var(--foreground)]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--foreground)] text-center">Privacy Policy</h1>
          <div className="border-b border-[var(--border)] mb-8" />

          <p className="mb-8 leading-relaxed text-gray-700">
            This Privacy Policy describes how PlantFeed (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares your personal information when you use the PlantFeed mobile application (the &quot;App&quot;).
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">1. Information We Collect</h2>
            <p className="mb-4 text-gray-700">Based on your use of the App, we may collect the following types of information:</p>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">A. Personal Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong className="text-[var(--foreground)]">Account Data:</strong> When you sign in using Google Sign-In or create an account, we collect your name, email address, and profile information.</li>
              <li><strong className="text-[var(--foreground)]">Authentication Tokens:</strong> We store secure tokens to keep you logged into the App.</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">B. Device and Usage Data</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong className="text-[var(--foreground)]">Device Information:</strong> We collect information about your mobile device, including hardware model, operating system version, and unique device identifiers (via device_info_plus).</li>
              <li><strong className="text-[var(--foreground)]">Network Information:</strong> Information about your WiFi connection and network status to facilitate connection with PlantFeed IoT devices (via network_info_plus and wifi_iot).</li>
              <li><strong className="text-[var(--foreground)]">Crash Reports:</strong> We use Firebase Crashlytics to collect anonymized data regarding app crashes and performance issues to improve stability.</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">C. Plant and Cultivation Data</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong className="text-[var(--foreground)]">Plant History:</strong> We store data regarding your crops, including planting dates, harvest dates, and cultivation history.</li>
              <li><strong className="text-[var(--foreground)]">Device Data:</strong> Information about the IoT devices you connect to the App, such as serial numbers and device names.</li>
              <li><strong className="text-[var(--foreground)]">Photos:</strong> If you choose to take or upload photos of your plants, these images are stored within the App&apos;s local storage or your device&apos;s gallery.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">2. Permissions We Request</h2>
            <p className="mb-4 text-gray-700">To provide full functionality, the App may request access to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong className="text-[var(--foreground)]">Camera:</strong> For scanning device QR codes and taking photos of your plants.</li>
              <li><strong className="text-[var(--foreground)]">Location:</strong> Required by the Android/iOS operating systems to scan for and connect to WiFi/Bluetooth IoT devices.</li>
              <li><strong className="text-[var(--foreground)]">Storage/Photos:</strong> To save and retrieve plant images.</li>
              <li><strong className="text-[var(--foreground)]">Notifications:</strong> To send you updates about your plant&apos;s status and system alerts (via OneSignal).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">3. How We Use Your Information</h2>
            <p className="mb-4 text-gray-700">We use the collected data to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Provide and maintain the App&apos;s core functionality.</li>
              <li>Facilitate the setup and management of PlantFeed IoT devices.</li>
              <li>Personalize your experience and track your plant cultivation history.</li>
              <li>Send push notifications regarding irrigation schedules and system alerts.</li>
              <li>Monitor app performance and fix technical issues.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">4. Third-Party Services</h2>
            <p className="mb-4 text-gray-700">We integrate with several third-party services that may collect information according to their own privacy policies:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong className="text-[var(--foreground)]">Google Sign-In / Firebase Authentication:</strong> For secure user login.</li>
              <li><strong className="text-[var(--foreground)]">Firebase Crashlytics:</strong> For error reporting.</li>
              <li><strong className="text-[var(--foreground)]">OneSignal:</strong> For delivering push notifications.</li>
              <li><strong className="text-[var(--foreground)]">MQTT:</strong> For secure real-time communication with your IoT devices.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">5. Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong className="text-[var(--foreground)]">Local Storage:</strong> We use sqflite and flutter_secure_storage to store your data and tokens securely on your device.</li>
              <li><strong className="text-[var(--foreground)]">Encryption:</strong> Sensitive data like authentication tokens are encrypted at rest on your device.</li>
              <li><strong className="text-[var(--foreground)]">Cloud Storage:</strong> Account identity information is managed securely via Firebase.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">6. Your Rights</h2>
            <p className="mb-4 text-gray-700">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Access the personal data we hold about you.</li>
              <li>Request the deletion of your account and associated data.</li>
              <li>Opt-out of push notifications through your device settings.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--primary)]">7. Contact Us</h2>
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
