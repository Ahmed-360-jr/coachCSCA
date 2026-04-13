import { html } from '../jsx.js';
import { useState } from 'https://esm.sh/react@18.2.0';

export default function Home({ store }) {
    const [openFaq, setOpenFaq] = useState(null);

    const subjects = [
        { name: 'Mathematics', icon: '🧮', desc: 'Algebra, Probability, Functions, and more.' },
        { name: 'Physics', icon: '⚛️', desc: 'Mechanics, Electricity, and Magnetism.' },
        { name: 'Chemistry', icon: '🧪', desc: 'Atomic Structure and Chemical Reactions.' },
        { name: 'Professional Chinese', icon: '🏮', desc: 'Language proficiency and academic terminology.' },
    ];

    const explanationCards = [
        { title: 'Expert Content', desc: 'Curated by top educators familiar with the CSCA curriculum.', icon: '🎓', color: 'bg-red-50' },
        { title: 'Real Simulation', desc: 'Experience the actual exam pressure with our timed mock tests.', icon: '⏲️', color: 'bg-orange-50' },
        { title: 'Detailed Analysis', desc: 'Get deep insights into your performance and areas of improvement.', icon: '📊', color: 'bg-yellow-50' },
        { title: 'Mobile Friendly', desc: 'Study on the go. Our platform works perfectly on all devices.', icon: '📱', color: 'bg-emerald-50' },
    ];

    const faqs = [
        { q: 'What is CSCA?', a: 'The China Scholastic Competency Assessment is a standardized test for international students applying to Chinese universities.' },
        { q: 'Who should use CoachCSCA?', a: 'Any student preparing for the CSCA exam who wants to practice with realistic questions.' },
        { q: 'Is an account required?', a: 'Yes, an account is required to access Practice and Mock sections to track your progress.' },
        { q: 'How does practice work?', a: 'Practice mode allows you to focus on specific topics without a timer or score tracking.' },
        { q: 'How does mock exam work?', a: 'Mock exams simulate the real test environment with a timer and score recording.' },
        { q: 'Are results saved?', a: 'Only Mock exam results are saved in your statistics. Practice sessions are for learning only.' },
        { q: 'What subjects are covered?', a: 'We cover Mathematics, Physics, Chemistry and we are working to add more.' },
        { q: 'Is there a fee?', a: 'CoachCSCA V1 is currently free for all students to help them succeed.' },
        { q: 'Can I review my answers?', a: 'Yes, both Practice and Mock modes allow you to review correct answers and explanations.' }
    ];

    return html`
        <div>
        <meta name="monetag" content="a1f42fbed44ee83bfad84d5af05d9f64">
           <!-- Hero Section -->
<section 
    class="relative py-32 text-white dark:text-slate-200 overflow-hidden chinese-pattern rounded-b-[60px]"
    style=${{
        background: "linear-gradient(-45deg, #52525B, #27272A, #3f3f46, #18181b)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite"
    }}
>
    <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="max-w-4xl mx-auto animate-fadeInUp">
            
            <div class="inline-block mb-4 px-4 py-1 border-2 border-secondary text-secondary rounded-full text-sm font-bold tracking-widest uppercase">
                Empowering Your Future in China
            </div>

            <h1 class="text-5xl md:text-7xl font-bold mb-6 font-chinese">
                Prepare Smart for the <span class="text-secondary">CSCA</span> Exam
            </h1>

            <p class="text-xl md:text-2xl mb-10 text-slate-200 dark:text-slate-300 max-w-2xl mx-auto">
                The ultimate platform for mastering the China Scholastic Competency Assessment through targeted practice and realistic simulations.
            </p>

            <div class="flex flex-wrap justify-center gap-6">
                
                <a href="#/practice" class="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-xl hover:scale-105">
                    PRACTISE
                </a>

                <a href="#/mock" class="bg-secondary text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-yellow-300 transition-all shadow-xl hover:scale-105">
                    MOCK TEST
                </a>

            </div>
        </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-10 left-10 w-32 h-32 border-4 border-secondary/20 rounded-full animate-float"></div>
    <div class="absolute bottom-10 right-10 w-48 h-48 border-8 border-secondary/10 rounded-full animate-float" style=${{ animationDelay: '1s' }}></div>
    <div class="absolute top-24 left-16 text-5xl opacity-10 animate-float select-none">🧮</div>
    <div class="absolute bottom-24 right-20 text-5xl opacity-10 animate-float select-none" style=${{ animationDelay: '1s' }}>⚛️</div>
    <div class="absolute top-1/2 left-1/4 text-5xl opacity-10 animate-float select-none" style=${{ animationDelay: '2s' }}>🧪</div>
    <div class="absolute top-20 right-1/4 text-5xl opacity-10 animate-float select-none" style=${{ animationDelay: '1.5s' }}>🏮</div>
</section>

            <!-- Steps Section -->
            <section class="py-20 container mx-auto px-4">
                <h2 class="text-4xl font-bold text-center mb-16 font-chinese">How It Works</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    ${['Choose a subject', 'Practice questions', 'Take mock exam', 'Check your results'].map((step, i) => html`
                        <div class="text-center group">
                            <div class="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 transform group-hover:rotate-12 transition-transform">
                                ${i + 1}
                            </div>
                            <h3 class="text-xl font-bold mb-3">${step}</h3>
                            <p class="text-slate-500">Follow our structured path to academic success in China.</p>
                        </div>
                    `)}
                </div>
            </section>

            <!-- Subjects Section -->
            <section class="py-24 bg-slate-100 dark:bg-slate-800/50 chinese-pattern">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 class="text-4xl font-bold font-chinese">Explore Subjects</h2>
                            <p class="text-slate-500 mt-2">Master the core competencies required for Chinese universities.</p>
                        </div>
                        <a href="#/practice" class="text-primary font-bold hover:underline mt-4 md:mt-0">View All Topics →</a>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        ${subjects.map(sub => html`
                            <a href="#/practice" class="glass-card p-8 rounded-3xl hover:shadow-2xl transition-all group border-b-4 border-transparent hover:border-primary">
                                <div class="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">${sub.icon}</div>
                                <h3 class="text-2xl font-bold mb-3">${sub.name}</h3>
                                <p class="text-slate-500 dark:text-slate-400">${sub.desc}</p>
                            </a>
                        `)}
                    </div>
                </div>
            </section>

            <!-- Explanation Cards Section -->
            <section class="py-24 container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${explanationCards.map(card => html`
                        <div class="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 bg-white dark:bg-slate-800">
                            <div class="text-4xl mb-4">${card.icon}</div>
                            <h3 class="text-xl font-bold mb-3">${card.title}</h3>
                            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${card.desc}</p>
                        </div>
                    `)}
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="py-24 bg-slate-50 dark:bg-slate-900">
                <div class="container mx-auto px-4 max-w-4xl">
                    <h2 class="text-4xl font-bold text-center mb-16 font-chinese">Frequently Asked Questions</h2>
                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                        ${faqs.map((faq, i) => html`
                            <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                <button 
                                    onClick=${() => setOpenFaq(openFaq === i ? null : i)}
                                    class="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <span class="text-lg">${faq.q}</span>
                                    <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <svg class="w-5 h-5 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                </button>
                                ${openFaq === i && html`
                                    <div class="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed animate-fadeIn">
                                        ${faq.a}
                                    </div>
                                `}
                            </div>
                        `)}
                    </div>
                </div>
            </section>
        </div>
    `;
}