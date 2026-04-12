import { html } from '../jsx.js';
import { useState } from 'https://esm.sh/react@18.2.0';
import API_BASE from '../api.js';

export default function Signup({ store }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(`${API_BASE}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'Signup failed');
            return;
        }

        localStorage.setItem('token', data.token);
        store.login(data.user);
        store.setMockHistory([]);

        window.location.hash = '#/';
    } catch (err) {
        console.error('Signup error:', err);
        alert('Signup failed. Make sure backend is running.');
    }
};
    return html`
        <div class="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
            <div class="absolute inset-0 pointer-events-none">
                <div class="absolute top-16 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
                <div class="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 blur-3xl rounded-full"></div>
                <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
            </div>

            <div class="relative z-10 w-full max-w-md">
                <div class="glass-card p-8 md:p-10 rounded-[2rem] shadow-2xl border border-white/20 dark:border-slate-700/50 backdrop-blur-xl">
                    <div class="text-center mb-8">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary text-3xl mb-4 shadow-lg">
                            🚀
                        </div>
                        <h1 class="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
                            Create Account
                        </h1>
                        <p class="text-slate-500 dark:text-slate-300 text-sm md:text-base max-w-sm mx-auto">
                            Start your journey with CoachCSCA and unlock focused practice, mock tests, and smarter preparation.
                        </p>
                    </div>

                    <form onSubmit=${handleSubmit} class="space-y-5">
                        <div>
                            <label class="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
                                Full Name
                            </label>
                            <input 
                                type="text"
                                required
                                value=${name}
                                onChange=${(e) => setName(e.target.value)}
                                class="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-sm"
                                placeholder="John Doe" 
                            />
                        </div>

                        <div>
                            <label class="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
                                Email
                            </label>
                            <input 
                                type="email" 
                                required
                                value=${email}
                                onChange=${(e) => setEmail(e.target.value)}
                                class="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-sm"
                                placeholder="your@email.com" 
                            />
                        </div>

                        <div>
                            <label class="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
                                Password
                            </label>
                            <input 
                                type=${showPassword ? 'text' : 'password'}
                                required
                                value=${password}
                                onChange=${(e) => setPassword(e.target.value)}
                                class="w-full p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-sm"
                                placeholder="••••••••" 
                            />
                            <button
                                type="button"
                                onClick=${() => setShowPassword(!showPassword)}
                                class="mt-2 text-sm font-medium text-primary hover:underline"
                            >
                                ${showPassword ? 'Hide Password' : 'Show Password'}
                            </button>
                        </div>

                        <button class="w-full bg-primary text-white py-3.5 rounded-2xl font-bold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-xl">
                            Sign Up
                        </button>
                    </form>

                    <div class="flex items-center my-6">
                        <div class="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>
                        <span class="px-3 text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500">
                            OR
                        </span>
                        <div class="flex-1 h-px bg-slate-300 dark:bg-slate-700"></div>
                    </div>

                    <p class="mt-6 text-center text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        By signing up, you agree to continue your learning journey with CoachCSCA.
                    </p>

                    <p class="mt-5 text-center text-sm text-slate-500 dark:text-slate-400">
                        Already have an account?
                        <a href="#/login" class="text-primary font-bold hover:underline ml-1">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    `;
}