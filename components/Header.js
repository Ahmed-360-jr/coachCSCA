import { html } from '../jsx.js';
import { useState } from 'https://esm.sh/react@18.2.0';

export default function Header({ store, currentRoute }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'HOME', path: '#/' },
        { name: 'PRACTISE', path: '#/practice' },
        { name: 'MOCK', path: '#/mock' },
        { name: 'CSCA', path: '#/csca' },
        { name: 'ABOUT', path: '#/about' },
        { name: 'CONTACT US', path: '#/contact' },
    ];

    return html`
        <header class="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
            <div class="container mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#/" class="flex items-center space-x-1 group">
                    <span class="text-3xl font-bold text-primary font-chinese italic transform group-hover:scale-110 transition-transform">Coach</span>
                    <span class="text-3xl font-bold text-slate-800 dark:text-slate-100 font-chinese tracking-tighter">CSCA</span>
                </a>

                <nav class="hidden md:flex items-center space-x-6">
                    ${navItems.map(item => html`
                        <a
                            key=${item.path}
                            href=${item.path}
                            class="text-sm font-bold transition-colors ${currentRoute === item.path ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-primary'}"
                        >
                            ${item.name}
                        </a>
                    `)}
                </nav>

                <div class="flex items-center space-x-4">
                    <button
                        onClick=${() => setMenuOpen(!menuOpen)}
                        class="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        ${menuOpen
                            ? html`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`
                            : html`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`
                        }
                    </button>

                    <button
                        onClick=${store.toggleTheme}
                        class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        ${store.theme === 'light'
                            ? html`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
                            : html`<svg class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>`
                        }
                    </button>

                    ${store.user
                        ? html`
                            <div class="hidden sm:flex items-center space-x-3">
                                <span class="text-sm font-bold border-b-2 border-primary">${store.user.name}</span>
                                <button onClick=${store.logout} class="text-sm text-red-500 hover:underline">Logout</button>
                            </div>
                        `
                        : html`
                            <a href="#/login" class="hidden sm:inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary-dark transition-colors shadow-md">
                                Login / Sign Up
                            </a>
                        `}
                </div>
            </div>

            ${menuOpen && html`
                <div class="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                    <nav class="px-4 py-4 flex flex-col space-y-3">
                        ${navItems.map(item => html`
                            <a
                                key=${item.path}
                                href=${item.path}
                                onClick=${() => setMenuOpen(false)}
                                class="text-sm font-bold py-2 transition-colors ${currentRoute === item.path ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-primary'}"
                            >
                                ${item.name}
                            </a>
                        `)}

                        ${store.user
                            ? html`
                                <div class="pt-3 border-t border-slate-200 dark:border-slate-700">
                                    <div class="text-sm font-bold mb-2 text-primary">${store.user.name}</div>
                                    <button
                                        onClick=${() => {
                                            setMenuOpen(false);
                                            store.logout();
                                        }}
                                        class="text-sm text-red-500 hover:underline"
                                    >
                                        Logout
                                    </button>
                                </div>
                            `
                            : html`
                                <a
                                    href="#/login"
                                    onClick=${() => setMenuOpen(false)}
                                    class="mt-2 bg-primary text-white px-4 py-3 rounded-lg text-sm font-bold text-center hover:bg-primary-dark transition-colors shadow-md"
                                >
                                    Login / Sign Up
                                </a>
                            `
                        }
                    </nav>
                </div>
            `}
        </header>
    `;
}