import { html } from '../jsx.js';

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const feedback = form.querySelector('.form-feedback');
        const button = form.querySelector('button[type="submit"]');

        feedback.textContent = 'Sending message...';
        feedback.className = 'form-feedback text-sm text-slate-500 mt-2';
        button.disabled = true;
        button.textContent = 'Sending...';

        try {
            const response = await fetch('https://formspree.io/f/xkopdkap', {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                feedback.textContent = '✅ Message sent successfully. We will get back to you soon.';
                feedback.className = 'form-feedback text-sm text-green-600 mt-2';
            } else {
                feedback.textContent = '❌ Failed to send message. Please try again.';
                feedback.className = 'form-feedback text-sm text-red-600 mt-2';
            }
        } catch (error) {
            feedback.textContent = '❌ Something went wrong. Please check your internet and try again.';
            feedback.className = 'form-feedback text-sm text-red-600 mt-2';
        }

        button.disabled = false;
        button.textContent = 'Send Message';
    };

    return html`
        <div class="container mx-auto px-4 py-16">
            <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <!-- LEFT SIDE -->
                    <div>
                        <h1 class="text-4xl font-bold mb-6">Get in Touch</h1>
                        <p class="text-lg text-slate-500 mb-8">
                            Have questions about the platform or the CSCA exam? Our team is here to help you succeed.
                        </p>
                        
                        <div class="space-y-6">
                            <div class="flex items-center p-4 glass-card rounded-2xl">
                                
                                <div class="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                                    </svg>
                                </div>

                                <div>
                                    <div class="font-bold">WhatsApp Support</div>
                                    
                                    <a 
                                        href="https://wa.me/255779987578?text=Hello%20I%20need%20help%20with%20Coach%20CSCA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="text-primary hover:underline"
                                    >
                                        Chat with us now
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- RIGHT SIDE FORM -->
                    <div class="glass-card p-8 rounded-3xl">
                        <form class="space-y-4" onSubmit=${handleSubmit}>

                            <div>
                                <label class="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-32"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            <input type="hidden" name="_subject" value="New message from Coach CSCA" />

                            <button
                                type="submit"
                                class="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors disabled:opacity-70"
                            >
                                Send Message
                            </button>

                            <p class="form-feedback text-sm mt-2"></p>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    `;
}