import { html } from '../jsx.js';

export default function CSCA() {
    const cards = [
        { title: 'Standardized', desc: 'Uniform testing across all subjects to ensure fair evaluation.', icon: '⚖️' },
        { title: 'Comprehensive', desc: 'Covers Math, Science, and Language skills in depth.', icon: '📚' },
        { title: 'Recognized', desc: 'Accepted by top-tier universities across mainland China.', icon: '🏛️' },
        { title: 'Gateway', desc: 'Your first step towards a successful career in China.', icon: '⛩️' }
    ];

    return html`
        <div class="container mx-auto px-4 py-16 max-w-5xl">
        <meta name="monetag" content="a1f42fbed44ee83bfad84d5af05d9f64">
            <div class="text-center mb-16">
                <h1 class="text-5xl font-bold mb-6 font-chinese text-primary">About CSCA</h1>
                <p class="text-xl text-slate-500 max-w-2xl mx-auto">The China Scholastic Competency Assessment is your bridge to academic excellence in the Middle Kingdom.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
                <div class="prose dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
                    <section>
                        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-primary pl-4">What is CSCA?</h2>
                        <p class="text-lg leading-relaxed">The China Scholastic Competency Assessment (CSCA) is a high-stakes standardized examination designed to evaluate the academic readiness of international students. It serves as a benchmark for admission to undergraduate programs in prestigious Chinese universities.</p>
                    </section>
                    
                    <section>
                        <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-primary pl-4">Who takes it?</h2>
                        <p class="text-lg leading-relaxed">International high school graduates or students in their final year of secondary education who wish to study in China, particularly in fields like Engineering, Medicine, Science, and Business, are the primary candidates for this assessment.</p>
                    </section>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    ${cards.map(card => html`
                        <div class="p-6 glass-card rounded-3xl text-center hover:shadow-xl transition-all border-t-4 border-primary">
                            <div class="text-4xl mb-3">${card.icon}</div>
                            <h3 class="font-bold mb-2">${card.title}</h3>
                            <p class="text-xs text-slate-500">${card.desc}</p>
                        </div>
                    `)}
                </div>
            </div>

            <div class="bg-slate-900 text-white rounded-[3rem] p-12 mb-20 relative overflow-hidden">
                <div class="relative z-10">
                    <h2 class="text-3xl font-bold mb-8 text-center">Why is it important?</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center">
                            <div class="text-primary text-4xl font-bold mb-2">90%</div>
                            <p class="text-slate-400">Of top Chinese universities require or prefer CSCA scores.</p>
                        </div>
                        <div class="text-center">
                            <div class="text-primary text-4xl font-bold mb-2">Scholarship</div>
                            <p class="text-slate-400">High scores significantly increase your chances for full scholarships.</p>
                        </div>
                        <div class="text-center">
                            <div class="text-primary text-4xl font-bold mb-2">Global</div>
                            <p class="text-slate-400">The certificate is recognized as a mark of academic rigor globally.</p>
                        </div>
                    </div>
                </div>
                <div class="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32"></div>
            </div>

            <section class="mb-20">
                <h2 class="text-3xl font-bold text-center mb-12 font-chinese">Subjects Included</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-8 glass-card rounded-3xl flex items-start space-x-6">
                        <div class="text-4xl">🧮</div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Mathematics</h3>
                            <p class="text-slate-500">Focuses on algebra, geometry, calculus, and logical reasoning. Essential for STEM and Business majors.</p>
                        </div>
                    </div>
                    <div class="p-8 glass-card rounded-3xl flex items-start space-x-6">
                        <div class="text-4xl">⚛️</div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Physics</h3>
                            <p class="text-slate-500">Covers mechanics, thermodynamics, electromagnetism, and modern physics concepts.</p>
                        </div>
                    </div>
                    <div class="p-8 glass-card rounded-3xl flex items-start space-x-6">
                        <div class="text-4xl">🧪</div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Chemistry</h3>
                            <p class="text-slate-500">Includes inorganic, organic, and physical chemistry, with a focus on laboratory principles.</p>
                        </div>
                    </div>
                    <div class="p-8 glass-card rounded-3xl flex items-start space-x-6">
                        <div class="text-4xl">🏮</div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Professional Chinese</h3>
                            <p class="text-slate-500">Tests academic language skills and terminology needed for university-level study in China.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}