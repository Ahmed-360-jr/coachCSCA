import { html } from '../jsx.js';
import { getPracticeQuestions } from '../data/questions';

export default function Practice() {
    const topics = [
        { subject: 'mathematics', topic: 'algebra', name: 'Geometry & Algebra', label: 'MATHEMATICS', icon: '🧮' },
        { subject: 'mathematics', topic: 'probability', name: 'Probability & statistics', label: 'MATHEMATICS', icon: '📊' },
        { subject: 'mathematics', topic: 'functions', name: 'Functions', label: 'MATHEMATICS', icon: '📈' },
        { subject: 'mathematics', topic: 'setAndInequality', name: 'Set & Inequality', label: 'MATHEMATICS', icon: '📏' },
        { subject: 'physics', topic: 'mechanics', name: 'Mechanics', label: 'PHYSICS', icon: '⚙️' },
        { subject: 'physics', topic: 'optics', name: 'Optics', label: 'PHYSICS', icon: '🔍' },
        { subject: 'physics', topic: 'modernPhysics', name: 'Modern Physics', label: 'PHYSICS', icon: '⚛️' },
        { subject: 'physics', topic: 'electromagnetism', name: 'Electromagnetism', label: 'PHYSICS', icon: '🧲' },
        { subject: 'physics', topic: 'thermodynamics', name: 'Thermodynamics', label: 'PHYSICS', icon: '🌡️' },
        { subject: 'chemistry', topic: 'basicConcepts', name: 'Basic Concepts & Calculations', label: 'CHEMISTRY', icon: '🧮' },
        { subject: 'chemistry', topic: 'propertiesReactions', name: 'Properties & Reactions', label: 'CHEMISTRY', icon: '🧪' },
        { subject: 'chemistry', topic: 'theoriesLaws', name: 'Chemical Theories & Laws', label: 'CHEMISTRY', icon: '⚛️' },
        { subject: 'chemistry', topic: 'experimentsApplications', name: 'Experiments & Applications', label: 'CHEMISTRY', icon: '🧫' },
    ];

    return html`
        <div class="container mx-auto px-4 py-12">
            <div class="flex items-center mb-12">
                <button onClick=${() => window.history.back()} class="mr-4 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </button>
                <h1 class="text-4xl font-bold font-chinese">Practice Mode</h1>
            </div>

            <div class="bg-primary/5 p-6 rounded-2xl mb-12 border-l-4 border-primary">
                <p class="text-slate-600 dark:text-slate-400 font-medium">
                    Choose a topic to start practicing. There are no timers and no pressure—just pure learning.
                    Solutions and explanations are provided after you finish.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                ${topics.map(item => {
                    const count = getPracticeQuestions(item.subject, item.topic).length;
                    const label = count === 1 ? 'Question' : 'Questions';

                    return html`
                        <a
                            href="#/practice-quiz?subject=${item.subject}&topic=${item.topic}"
                            class="glass-card p-8 rounded-[2rem] hover:shadow-2xl transition-all border-b-4 border-transparent hover:border-primary group"
                        >
                            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">${item.icon}</div>
                            <div class="text-xs font-black text-primary uppercase tracking-widest mb-2">${item.label}</div>
                            <h3 class="text-2xl font-bold mb-4">${item.name}</h3>
                            <div class="flex items-center text-sm text-slate-400 font-bold">
                                <span class="mr-2">${count} ${label}</span>
                                <span class="text-primary group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </a>
                    `;
                })}
            </div>
        </div>
    `;
}