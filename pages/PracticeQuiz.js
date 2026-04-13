import { html } from '../jsx.js';
import { useState } from 'https://esm.sh/react@18.2.0';
import { getPracticeQuestions } from '../data/questions';

export default function PracticeQuiz({ subject, topic }) {
    const questions = getPracticeQuestions(subject, topic);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (qIndex, optionIndex) => {
        if (submitted) return;
        setAnswers({ ...answers, [qIndex]: optionIndex });
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((q, i) => {
            if (answers[i] === q.correct) score++;
        });
        return score;
    };

    const formatTopicName = (value) => {
        if (!value) return '';
        return value
            .replace(/([A-Z])/g, ' $1')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase())
            .trim();
    };

    const formatSubjectName = (value) => {
        if (!value) return '';
        return value
            .replace(/([A-Z])/g, ' $1')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase())
            .trim();
    };

    if (!questions.length) {
        return html`
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <div class="glass-card p-10 rounded-[2rem] text-center">
                    <h2 class="text-3xl font-bold mb-4">No questions found</h2>
                    <p class="text-slate-500 mb-6">
                        No questions were found for ${formatSubjectName(subject)} / ${formatTopicName(topic)}.
                    </p>
                    <button
                        onClick=${() => window.location.hash = '#/practice'}
                        class="bg-primary text-white px-8 py-3 rounded-xl font-bold"
                    >
                        Back to Topics
                    </button>
                </div>
            </div>
        `;
    }

    if (submitted) {
        const score = calculateScore();

        return html`
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <div class="text-center mb-12 glass-card p-10 rounded-[2rem] border-t-8 border-primary">
                    <h2 class="text-4xl font-bold mb-4 font-chinese">Practice Complete!</h2>
                    <p class="text-slate-500 mb-4">
                        ${formatSubjectName(subject)} • ${formatTopicName(topic)}
                    </p>
                    <div class="text-7xl font-bold text-primary mb-6">${score} / ${questions.length}</div>
                    <div class="flex justify-center gap-4">
                        <button
                            onClick=${() => window.location.hash = '#/practice'}
                            class="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
                        >
                            Back to Topics
                        </button>
                        <button
                            onClick=${() => window.scrollTo({ top: 500, behavior: 'smooth' })}
                            class="bg-slate-200 dark:bg-slate-700 px-8 py-3 rounded-xl font-bold"
                        >
                            Review Solutions
                        </button>
                    </div>
                </div>

                <div class="space-y-8">
                    <h3 class="text-2xl font-bold mb-6 border-b pb-2">Solutions & Explanations</h3>
                    ${questions.map((q, i) => html`
                        <div class="p-8 rounded-3xl border-2 ${answers[i] === q.correct ? 'border-green-500 bg-green-50/30 dark:bg-green-900/10' : 'border-red-500 bg-red-50/30 dark:bg-red-900/10'}">
                            <div class="flex justify-between items-start mb-4">
                                <p class="text-lg font-bold">${i + 1}. ${q.text}</p>
                                <span class="px-3 py-1 rounded-full text-xs font-bold ${answers[i] === q.correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}">
                                    ${answers[i] === q.correct ? 'CORRECT' : 'INCORRECT'}
                                </span>
                            </div>

                            <div class="space-y-3 mb-6">
                                ${q.options.map((opt, oi) => html`
                                    <div class="p-4 rounded-xl border-2 ${oi === q.correct ? 'bg-green-500 text-white border-green-500' : (oi === answers[i] ? 'bg-red-500 text-white border-red-500' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700')}">
                                        <span class="font-bold mr-2">${String.fromCharCode(65 + oi)}.</span> ${opt}
                                    </div>
                                `)}
                            </div>

                            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-500">
                                <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">Explanation</h4>
                                <p class="text-slate-700 dark:text-slate-300">${q.explanation}</p>
                            </div>
                        </div>
                    `)}
                </div>
            </div>
        `;
    }

    return html`
        <div class="container mx-auto px-4 py-12 max-w-3xl">
        <meta name="monetag" content="a1f42fbed44ee83bfad84d5af05d9f64">
            <div class="flex items-center justify-between mb-12">
                <div class="flex items-center">
                    <button onClick=${() => window.history.back()} class="mr-4 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                    </button>
                    <div>
                        <h1 class="text-2xl font-bold font-chinese">${formatTopicName(topic)}</h1>
                        <p class="text-sm text-slate-500">${formatSubjectName(subject)} • Practice Mode • No Timer</p>
                    </div>
                </div>

                <div class="text-primary font-bold bg-primary/10 px-4 py-2 rounded-xl">
                    Question ${Object.keys(answers).length} / ${questions.length}
                </div>
            </div>

            <div class="space-y-12">
                ${questions.map((q, i) => html`
                    <div class="glass-card p-8 rounded-3xl border-l-8 ${answers[i] !== undefined ? 'border-primary' : 'border-slate-200 dark:border-slate-700'}">
                        <p class="text-xl font-bold mb-8">${i + 1}. ${q.text}</p>
                        <div class="grid grid-cols-1 gap-4">
                            ${q.options.map((opt, oi) => html`
                                <button
                                    onClick=${() => handleSelect(i, oi)}
                                    class="p-5 text-left rounded-2xl border-2 transition-all flex items-center ${answers[i] === oi ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}"
                                >
                                    <span class="inline-block w-10 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 text-center leading-9 mr-4 font-bold ${answers[i] === oi ? 'bg-primary text-white border-primary' : ''}">
                                        ${String.fromCharCode(65 + oi)}
                                    </span>
                                    <span class="text-lg">${opt}</span>
                                </button>
                            `)}
                        </div>
                    </div>
                `)}
            </div>

            <div class="mt-16 flex justify-center">
    <button
        onClick=${() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        class="bg-primary text-white px-16 py-5 rounded-2xl font-bold text-xl hover:bg-primary-dark transition-all shadow-xl transform hover:scale-105"
    >
        Submit Practice
    </button>
</div>
        </div>
    `;
}