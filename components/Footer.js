import { html } from '../jsx.js';

export default function Footer() {
    return html`
        <footer class="bg-slate-100 dark:bg-slate-800 py-12 border-t border-slate-200 dark:border-slate-700">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4">CoachCSCA</h3>
                        <p class="text-slate-600 dark:text-slate-400 text-sm">
                            Empowering students to excel in the China Scholastic Competency Assessment with high-quality practice materials and realistic mock exams.
                        </p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-4">Quick Links</h4>
                        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li><a href="#/" class="hover:text-primary">Home</a></li>
                            <li><a href="#/practice" class="hover:text-primary">Practice</a></li>
                            <li><a href="#/mock" class="hover:text-primary">Mock Exams</a></li>
                            <li><a href="#/csca" class="hover:text-primary">About CSCA</a></li>
                        </ul>
                    </div>
                   <div>
    <h4 class="font-semibold mb-4">Contact</h4>
    
    <p class="text-sm text-slate-600 dark:text-slate-400 space-y-1">
        
        <div>
            Email: 
            <a 
                href="mailto:ahmednassor124@yahoo.com" 
                class="hover:underline text-primary"
            >
                support@coachcsca.com
            </a>
        </div>

        <div>
            WhatsApp: 
            <a 
                href="https://wa.me/255779987578" 
                target="_blank"
                class="hover:underline text-primary"
            >
                +255 779 987 578
            </a>
        </div>

    </p>
</div>
                </div>
                <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-500">
                    © ${new Date().getFullYear()} CoachCSCA. All rights reserved.
                </div>
            </div>
        </footer>
    `;
}