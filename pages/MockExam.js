import { html } from '../jsx.js';
import { useState, useEffect, useRef } from 'https://esm.sh/react@18.2.0';
import { getMockQuestions } from '../data/questions';
import API_BASE from '../api.js';

export default function MockExam({ store, subject, topic }) {
    const questions = getMockQuestions(subject, topic);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(3600);
    const [isFinished, setIsFinished] = useState(false);
    const questionRefs = useRef([]);
    const reviewSectionRef = useRef(null);

const calculateScore = () => {
    let score = 0;

    questions.forEach((q, i) => {
        if (answers[i] === q.correct) {
            score++;
        }
    });

    return score;
};
    useEffect(() => {
        if (isFinished) return;
        if (timeLeft <= 0) {
            finishExam();
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, isFinished]);

    const finishExam = async () => {
        if (isFinished) return;

        const score = calculateScore();
        const percentage = (score / questions.length) * 100;
        const token = localStorage.getItem('token');

        const payload = {
            subject,
            topic,
            mockTitle: getMockTitle(),
            score,
            totalQuestions: questions.length,
            percentage,
            answers: questions.map((q, i) => ({
                questionIndex: i,
                selectedAnswer: answers[i] ?? null,
                correctAnswer: q.correct,
                isCorrect: answers[i] === q.correct
            }))
        };

        try {
            if (token) {
                const res = await fetch(`${API_BASE}/api/mock/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(payload)
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.message || 'Failed to save mock result');
                }

                store.addMockResult(data.result);
            } else {
                store.addMockResult({
                    ...payload,
                    createdAt: new Date().toISOString()
                });
            }

            setIsFinished(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Error saving mock result:', error);

            store.addMockResult({
                ...payload,
                createdAt: new Date().toISOString()
            });

            setIsFinished(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const getRemark = (score, total) => {
        const percent = total ? (score / total) * 100 : 0;

        if (percent >= 80) {
            return { label: 'Excellent', color: 'text-green-600', icon: '🏆' };
        }
        if (percent >= 65) {
            return { label: 'Passed', color: 'text-green-500', icon: '✅' };
        }
        if (percent >= 50) {
            return { label: 'Satisfactory', color: 'text-yellow-500', icon: '🙂' };
        }
        if (percent >= 35) {
            return { label: 'Fair', color: 'text-orange-500', icon: '😐' };
        }
        return { label: 'Failed', color: 'text-red-500', icon: '❌' };
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const scrollToQuestion = (index) => {
        questionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const getMockTitle = () => {
        if (topic === 'algebraMock') return 'Mathematics 1';
        if (topic === 'generalMathMock') return 'Mathematics 2';
        if (topic === 'mathematics3') return 'mathematics3';
        if (topic === 'mathematics4') return 'mathematics4';
        if (topic === 'mathematics5') return 'mathematics5';
        if (topic === 'mechanicsMock') return 'Physics 1';
        if (topic === 'electricityMock') return 'Physics 2';
        if (topic === 'physics3') return 'physics3';
        if (topic === 'physics4') return 'physics4';
        if (topic === 'physics5') return 'physics5';
        if (topic === 'chemistryMock') return 'Chemistry 1';
        if (topic === 'chemistry2') return 'chemistry2';
        if (topic === 'chemistry3') return 'chemistry3';
        if (topic === 'chemistry4') return 'chemistry4';
        if (topic === 'chemistry5') return 'chemistry5';
        return `${subject} / ${topic}`;
    };

    if (!questions.length) {
        return html`
            <div class="container mx-auto px-4 py-12 max-w-3xl">
                <div class="glass-card p-10 rounded-[2rem] text-center">
                    <h2 class="text-3xl font-bold mb-4">No questions available</h2>
                    <p class="text-slate-500 mb-6">This mock is still being prepared.</p>
                    <button
                        onClick=${() => window.location.hash = '#/mock'}
                        class="bg-primary text-white px-8 py-3 rounded-xl font-bold"
                    >
                        Back to Mocks
                    </button>
                </div>
            </div>
        `;
    }

    if (isFinished) {
        const score = calculateScore();
        const remark = getRemark(score, questions.length);
        const percentage = Math.round((score / questions.length) * 100);

        return html`
            <div class="container mx-auto px-4 py-12 max-w-5xl">
                <div class="glass-card p-8 sm:p-12 rounded-[3rem] shadow-2xl mb-12 border-t-8 border-primary">
                    <div class="text-center mb-10">
                        <div class="text-7xl mb-6">${remark.icon}</div>
                        <h2 class="text-4xl sm:text-5xl font-bold mb-4 font-chinese">Exam Finished</h2>
                        <p class="text-lg text-slate-500 mb-8">Your result for ${getMockTitle()}</p>

                        <div class="inline-flex items-center justify-center w-44 h-44 sm:w-48 sm:h-48 rounded-full border-[12px] border-primary text-primary mb-8 bg-white dark:bg-slate-800 shadow-inner">
                            <div>
                                <span class="text-5xl sm:text-6xl font-black">${score}</span>
                                <span class="text-xl sm:text-2xl font-bold">/${questions.length}</span>
                            </div>
                        </div>

                        <div class="space-y-2 mb-10">
                            <div class="text-3xl font-black tracking-widest ${remark.color}">
                                ${remark.label}
                            </div>
                            <p class="text-slate-500 text-lg">${percentage}% Score</p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                            <div class="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl">
                                <div class="text-sm uppercase tracking-widest text-slate-500 font-bold">Correct</div>
                                <div class="text-3xl font-black text-green-600">${score}</div>
                            </div>
                            <div class="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl">
                                <div class="text-sm uppercase tracking-widest text-slate-500 font-bold">Wrong</div>
                                <div class="text-3xl font-black text-red-500">${questions.length - score}</div>
                            </div>
                            <div class="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl">
                                <div class="text-sm uppercase tracking-widest text-slate-500 font-bold">Remark</div>
                                <div class="text-2xl font-black ${remark.color}">${remark.label}</div>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                onClick=${() => window.location.hash = '#/mock'}
                                class="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-primary-dark transition-all"
                            >
                                Back to Mocks
                            </button>
                            <button
                                onClick=${() => reviewSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                class="bg-slate-200 dark:bg-slate-700 px-10 py-4 rounded-2xl font-bold text-lg shadow-md hover:bg-slate-300 transition-all"
                            >
                                Review Solutions
                            </button>
                        </div>
                    </div>
                </div>

                <div ref=${reviewSectionRef} class="space-y-8">
                    <h3 class="text-3xl font-bold">Review Solutions</h3>

                    ${questions.map((q, i) => {
                        const userAnswer = answers[i];
                        const isCorrect = userAnswer === q.correct;

                        return html`
                            <div class="glass-card p-8 rounded-[2rem] shadow-lg border-l-[10px] ${isCorrect ? 'border-green-500' : 'border-red-500'}">
                                <div class="flex items-start justify-between gap-4 mb-5">
                                    <h4 class="text-xl font-bold">Question ${i + 1}</h4>
                                    <span class="px-4 py-2 rounded-xl text-sm font-bold ${isCorrect ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'}">
                                        ${isCorrect ? 'Correct' : 'Incorrect'}
                                    </span>
                                </div>

                                <p class="text-lg font-semibold mb-6">${q.text}</p>

                                <div class="space-y-3 mb-6">
                                    ${q.options.map((opt, oi) => html`
                                        <div class="p-4 rounded-2xl border ${
                                            oi === q.correct
                                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                                : oi === userAnswer && userAnswer !== q.correct
                                                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                                    : 'border-slate-200 dark:border-slate-700'
                                        }">
                                            <span class="font-bold mr-2">${String.fromCharCode(65 + oi)}.</span>
                                            ${opt}
                                        </div>
                                    `)}
                                </div>

                                <div class="grid gap-4 md:grid-cols-2">
                                    <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl">
                                        <div class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Your Answer</div>
                                        <div class="font-semibold">
                                            ${userAnswer !== undefined ? `${String.fromCharCode(65 + userAnswer)}. ${q.options[userAnswer]}` : 'Not answered'}
                                        </div>
                                    </div>

                                    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl">
                                        <div class="text-sm font-bold uppercase tracking-widest text-green-600 mb-2">Correct Answer</div>
                                        <div class="font-semibold">
                                            ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-5 bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl">
                                    <div class="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Explanation</div>
                                    <p class="text-slate-700 dark:text-slate-200 leading-relaxed">
                                        ${q.explanation || 'No explanation available.'}
                                    </p>
                                </div>
                            </div>
                        `;
                    })}
                </div>
            </div>
        `;
    }

    return html`
        <div class="container mx-auto px-4 py-12">
            <div class="flex flex-col lg:flex-row gap-8">
                <aside class="lg:w-72 lg:sticky lg:top-24 h-fit max-h-[calc(100vh-7rem)] order-2 lg:order-1">
                    <div class="glass-card p-5 rounded-3xl shadow-lg border-t-4 border-primary max-h-[calc(100vh-7rem)] overflow-y-auto">
                        <h3 class="font-bold mb-4 text-center uppercase tracking-widest text-sm text-slate-500">
                            Question Navigator
                        </h3>
                        <div class="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-3">
                            ${questions.map((_, i) => html`
                                <button
                                    onClick=${() => scrollToQuestion(i)}
                                    class="w-11 h-11 rounded-xl font-bold transition-all border-2 ${answers[i] !== undefined ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-500'}"
                                >
                                    ${i + 1}
                                </button>
                            `)}
                        </div>
                    </div>
                </aside>

                <div class="flex-grow order-1 lg:order-2 min-w-0">
                    <div class="sticky top-20 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-xl mb-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border border-slate-200 dark:border-slate-700">
                        <div class="flex items-center min-w-0">
                            <button onClick=${() => window.history.back()} class="mr-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                </svg>
                            </button>
                            <div class="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl mr-4 shadow-lg shrink-0">
                                ${subject === 'mathematics' ? '🧮' : subject === 'physics' ? '⚛️' : '🧪'}
                            </div>
                            <div class="min-w-0">
                                <h1 class="font-black text-lg sm:text-xl tracking-tight truncate">${getMockTitle()}</h1>
                                <p class="text-xs text-slate-500 font-bold uppercase tracking-widest">Mock Examination</p>
                            </div>
                        </div>
                        <div class="flex items-center px-6 py-3 bg-red-50 dark:bg-red-900/20 rounded-2xl border-2 border-primary/20 self-start sm:self-auto">
                            <span class="text-2xl font-mono font-bold text-primary">${formatTime(timeLeft)}</span>
                        </div>
                    </div>

                    <div class="space-y-10">
                        ${questions.map((q, i) => html`
                            <div
                                ref=${el => questionRefs.current[i] = el}
                                class="glass-card p-6 sm:p-10 rounded-[2.5rem] shadow-lg border-l-[12px] ${answers[i] !== undefined ? 'border-primary' : 'border-slate-200 dark:border-slate-700'} transition-all"
                            >
                                <div class="flex items-start mb-8">
                                    <span class="text-3xl sm:text-4xl font-black text-slate-200 dark:text-slate-800 mr-4 sm:mr-6 select-none">
                                        ${(i + 1).toString().padStart(2, '0')}
                                    </span>
                                    <p class="text-xl sm:text-2xl font-bold leading-tight pt-1">${q.text}</p>
                                </div>
                                <div class="grid grid-cols-1 gap-4">
                                    ${q.options.map((opt, oi) => html`
                                        <button
                                            onClick=${() => setAnswers({ ...answers, [i]: oi })}
                                            class="p-4 sm:p-6 text-left rounded-[1.5rem] border-2 transition-all flex items-center group ${answers[i] === oi ? 'border-primary bg-primary/5 shadow-md' : 'border-slate-100 dark:border-slate-800 hover:border-primary/30 bg-white dark:bg-slate-800/50'}"
                                        >
                                            <span class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center mr-4 sm:mr-6 font-black text-lg sm:text-xl transition-all ${answers[i] === oi ? 'bg-primary text-white border-primary rotate-12' : 'group-hover:border-primary/50'}">
                                                ${String.fromCharCode(65 + oi)}
                                            </span>
                                            <span class="text-lg sm:text-xl font-medium">${opt}</span>
                                        </button>
                                    `)}
                                </div>
                            </div>
                        `)}
                    </div>

                    <div class="mt-16 bg-slate-900 p-8 sm:p-12 rounded-[3rem] text-center shadow-2xl chinese-pattern">
                        <h3 class="text-3xl font-bold text-white mb-4 font-chinese">Finished answering?</h3>
                        <p class="text-slate-400 mb-10 text-lg">Make sure to review your answers before final submission.</p>
                        <button
                            onClick=${finishExam}
                            class="bg-primary text-white px-10 sm:px-20 py-5 sm:py-6 rounded-[2rem] font-black text-xl sm:text-2xl hover:bg-primary-dark transition-all shadow-xl transform hover:scale-105"
                        >
                            SUBMIT EXAM
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}