import { html } from './jsx.js';
import { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import { useStore } from './store.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Practice from './pages/Practice.js';
import PracticeQuiz from './pages/PracticeQuiz.js';
import Mock from './pages/Mock.js';
import MockExam from './pages/MockExam.js';
import CSCA from './pages/CSCA.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

export default function App() {
    const store = useStore();
    const [route, setRoute] = useState(window.location.hash || '#/');

    useEffect(() => {
        const handleHashChange = () => {
    setRoute(window.location.hash || '#/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        const path = route.split('?')[0];
        const params = new URLSearchParams(route.split('?')[1]);

        // Protected Routes Check
        const protectedRoutes = ['#/practice', '#/mock', '#/practice-quiz', '#/mock-exam'];
        if (protectedRoutes.includes(path) && !store.user) {
            return html`<${Login} store=${store} />`;
        }

        switch (path) {
            case '#/': return html`<${Home} store=${store} />`;
            case '#/practice': return html`<${Practice} store=${store} />`;
            case '#/mock': return html`<${Mock} store=${store} />`;
           case '#/practice-quiz':
    return html`<${PracticeQuiz}
        store=${store}
        subject=${params.get('subject')}
        topic=${params.get('topic')}
    />`;

case '#/mock-exam':
    return html`<${MockExam}
        store=${store}
        subject=${params.get('subject')}
        topic=${params.get('topic')}
    />`;
            case '#/csca': return html`<${CSCA} />`;
            case '#/about': return html`<${About} />`;
            case '#/contact': return html`<${Contact} />`;
            case '#/login': return html`<${Login} store=${store} />`;
            case '#/signup': return html`<${Signup} store=${store} />`;
            default: return html`<${Home} store=${store} />`;
        }
    };

    return html`
        <div class="min-h-screen flex flex-col">
            <${Header} store=${store} currentRoute=${route} />
            <main class="flex-grow">
                ${renderPage()}
            </main>
            <${Footer} />
        </div>
    `;
}