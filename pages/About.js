import { html } from '../jsx.js';

export default function About() {
    const values = [
        { title: 'Excellence', desc: 'We strive for the highest quality in our practice materials.', icon: '⭐' },
        { title: 'Accessibility', desc: 'Making quality education prep available to everyone, everywhere.', icon: '🌍' },
        { title: 'Innovation', desc: 'Using technology to simulate real exam environments effectively.', icon: '💡' },
        { title: 'Success', desc: 'Our ultimate goal is your admission to your dream university.', icon: '🏆' }
    ];

    return html`
        <div class="container mx-auto px-4 py-16 max-w-5xl">
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold mb-6 font-chinese text-primary">Our Mission</h1>
                <p class="text-xl text-slate-500 max-w-2xl mx-auto">Bridging the gap between international students and Chinese academic excellence.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
                <div>
                    <h2 class="text-3xl font-bold mb-6 font-chinese">The Story of CoachCSCA</h2>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                        CoachCSCA was founded by a group of educators and former international students who realized the lack of quality preparation materials for the CSCA exam. We experienced the challenges firsthand and decided to build the solution we wished we had.
                    </p>
                    <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Our team works tirelessly to analyze past exams and curriculum standards to provide the most relevant practice questions for our users. We believe every student deserves a fair shot at success.
                    </p>
                </div>
                <div class="relative">
                    <div class="bg-primary/5 rounded-[3rem] p-10 border border-primary/10 relative z-10">
                        <h2 class="text-2xl font-bold mb-6">What Problem We Solve</h2>
                        <ul class="space-y-6">
                            <li class="flex items-start">
                                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">✓</div>
                                <span class="text-lg">Lack of structured and updated practice materials.</span>
                            </li>
                            <li class="flex items-start">
                                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">✓</div>
                                <span class="text-lg">Anxiety about the real exam format and timing.</span>
                            </li>
                            <li class="flex items-start">
                                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">✓</div>
                                <span class="text-lg">Difficulty tracking progress across multiple subjects.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20 animate-float"></div>
                    <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10 animate-float" style=${{ animationDelay: '1.5s' }}></div>
                </div>
            </div>

            <div class="mb-24">
                <h2 class="text-3xl font-bold text-center mb-12 font-chinese">Our Core Values</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${values.map(val => html`
                        <div class="p-8 glass-card rounded-3xl text-center transform hover:-translate-y-2 transition-all">
                            <div class="text-5xl mb-4">${val.icon}</div>
                            <h3 class="text-xl font-bold mb-2">${val.title}</h3>
                            <p class="text-sm text-slate-500">${val.desc}</p>
                        </div>
                    `)}
                </div>
            </div>

            <div class="text-center bg-primary text-white p-16 rounded-[3rem] shadow-2xl chinese-pattern">
                <h2 class="text-4xl font-bold mb-6 font-chinese">Ready to start your journey?</h2>
                <p class="text-xl mb-10 text-red-100">Join thousands of students preparing for their future in China.</p>
              <a href="#/practice" class="inline-block bg-white text-primary px-12 py-5 rounded-2xl font-bold hover:bg-red-50 transition-all shadow-xl transform hover:scale-105">
    Start Practicing Now
</a>
                </div>
        </div>
    `;
}