import { html } from '../jsx.js';

export default function Mock({ store }) {
    const mocks = [
        { subject: 'mathematics', topic: 'algebraMock', name: 'Mathematics 1', icon: '📐', time: '60 mins' },
        { subject: 'mathematics', topic: 'generalMathMock', name: 'Mathematics 2', icon: '🧮', time: '60 mins' },
        { subject: 'mathematics', topic: 'mathematics3', name: 'mathematics 3', icon: '📊', time: '60 mins' },
        { subject: 'mathematics', topic: 'mathematics4', name: 'mathematics 4', icon: '📏', time: '60 mins' },
        { subject: 'mathematics', topic: 'mathematics5', name: 'mathematics 5', icon: '🔢', time: '60 mins' },
        { subject: 'physics', topic: 'mechanicsMock', name: 'Physics 1', icon: '⚙️', time: '60 mins' },
        { subject: 'physics', topic: 'electricityMock', name: 'Physics 2', icon: '⚡', time: '60 mins' },
        { subject: 'physics', topic: 'physics3', name: 'physics 3', icon: '🧲', time: '60 mins' },
        { subject: 'physics', topic: 'physics4', name: 'physics 4', icon: '⚛️', time: '60 mins' },
        { subject: 'physics', topic: 'physics5', name: 'physics 5', icon: '🔋', time: '60 mins' },
        { subject: 'chemistry', topic: 'chemistryMock', name: 'Chemistry 1', icon: '🧪', time: '60 mins' },
        { subject: 'chemistry', topic: 'chemistry2', name: 'chemistry 2', icon: '🌡️', time: '60 mins' },
        { subject: 'chemistry', topic: 'chemistry3', name: 'chemistry 3', icon: '⚗️', time: '60 mins' },
        { subject: 'chemistry', topic: 'chemistry4', name: 'chemistry 4', icon: '🧫', time: '60 mins' },
        { subject: 'chemistry', topic: 'chemistry5', name: 'chemistry 5', icon: '🧬', time: '60 mins' },
    ];

    const allResults = store.mockHistory || [];
    const totalAttempts = allResults.length;

    const uniqueCompletedCards = new Set(
        allResults.map(item => `${item.subject}-${item.topic}`)
    ).size;

    const totalCards = mocks.length;

    const getRemarkFromPercentage = (percentage) => {
        if (percentage >= 80) return 'Excellent';
        if (percentage >= 65) return 'Passed';
        if (percentage >= 50) return 'Satisfactory';
        if (percentage >= 35) return 'Fair';
        return 'Failed';
    };

    const getMockStats = (subject, topic) => {
        const results = (store.mockHistory || [])
            .filter(item => item.subject === subject && item.topic === topic)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        if (!results.length) {
            return {
                attempts: 0,
                latestScore: '-',
                bestScore: '-',
                averageScore: '-',
                latestRemark: '-'
            };
        }

        const latest = results[0];
        const best = Math.max(...results.map(r => r.score));
        const average = (
            results.reduce((sum, r) => sum + r.score, 0) / results.length
        ).toFixed(1);

        return {
            attempts: results.length,
            latestScore: `${latest.score}/${latest.totalQuestions}`,
            bestScore: `${best}/${latest.totalQuestions}`,
            averageScore: average,
            latestRemark: getRemarkFromPercentage(latest.percentage)
        };
    };

    return html`
        <div class="container mx-auto px-4 py-12">
            <div class="flex items-center mb-12">
                <button
                    onClick=${() => window.history.back()}
                    class="mr-4 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </button>
                <h1 class="text-4xl font-bold font-chinese">Mock Exams</h1>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-8">
                    <h2 class="text-2xl font-bold border-b-2 border-primary inline-block pb-1">
                        Available Mocks
                    </h2>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        ${mocks.map(mock => {
                            const stats = getMockStats(mock.subject, mock.topic);

                            return html`
                                <div class="glass-card p-8 rounded-[2rem] border-t-8 border-primary shadow-lg hover:shadow-2xl transition-all group">
                                    <div class="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                                        ${mock.icon}
                                    </div>

                                    <h3 class="text-2xl font-bold mb-3">${mock.name}</h3>

                                    <div class="flex items-center text-slate-500 mb-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                                        <span class="font-medium">${mock.time} • 48 Questions</span>
                                    </div>

                                    <div class="space-y-2 mb-6 text-sm bg-white/60 dark:bg-slate-900/30 p-4 rounded-2xl">
                                        <div class="flex justify-between">
                                            <span class="text-slate-500">Attempts</span>
                                            <span class="font-bold">${stats.attempts}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-slate-500">Latest</span>
                                            <span class="font-bold">${stats.latestScore}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-slate-500">Best</span>
                                            <span class="font-bold">${stats.bestScore}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-slate-500">Average</span>
                                            <span class="font-bold">${stats.averageScore}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-slate-500">Remark</span>
                                            <span class="font-bold">${stats.latestRemark}</span>
                                        </div>
                                    </div>

                                    <a
                                        href="#/mock-exam?subject=${mock.subject}&topic=${mock.topic}"
                                        class="block text-center bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-md transform hover:scale-[1.02]"
                                    >
                                        Start Exam
                                    </a>
                                </div>
                            `;
                        })}
                    </div>
                </div>

                <div class="space-y-8">
                    <h2 class="text-2xl font-bold border-b-2 border-secondary inline-block pb-1">
                        Statistics
                    </h2>

                    <div class="glass-card p-8 rounded-[2rem] shadow-lg">
                        <div class="grid grid-cols-1 gap-4">
                            <div class="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-100 dark:border-red-800">
                                <div class="text-4xl font-bold text-primary">${totalAttempts}</div>
                                <div class="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                                    Total Attempts
                                </div>
                            </div>

                            <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                                <div class="text-4xl font-bold text-secondary">${uniqueCompletedCards}</div>
                                <div class="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                                    Completed Cards
                                </div>
                            </div>

                            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800">
                                <div class="text-4xl font-bold text-green-600">${totalCards}</div>
                                <div class="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">
                                    Available Cards
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}