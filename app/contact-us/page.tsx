import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Contact Us | PlantFeed',
    description: 'Get in touch with PlantFeed for support, inquiries, or feedback.',
};

export default function ContactUsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--background)]">
            <Navbar />
            <main className="flex-grow">
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}