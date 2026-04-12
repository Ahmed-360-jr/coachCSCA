# CoachCSCA Exam Platform

A comprehensive practice and mock test platform for the China Scholastic Competency Assessment (CSCA), featuring timed exams, statistics, and subject-specific practice.

## Generated with GenMB

This project was generated using [GenMB](https://genmb.com) - AI-powered application builder.

### Original Prompt

> Project Title

CoachCSCA – CSCA Exam Practice & Mock Test Website (V1)

🎯 Project Purpose

Build a modern, simple, and student-friendly educational website called CoachCSCA for students preparing for the China Scholastic Competency Assessment (CSCA) exam.

The website should allow students to:

Learn by practicing exam-style multiple-choice questions

Take mock exams that simulate the real CSCA test

See statistics only from mock exams

Use the platform easily on both mobile and desktop

The system should be simple, fast, and focused on practice + mock testing.

🌐 General Website Behavior

The Home page is public (anyone can see it).

Pages like Practice and Mock require login.

If a user clicks Practice or Mock without being logged in → redirect to Login / Sign Up.

There is NO separate dashboard page.

Statistics are shown only inside the Mock section.

Practice mode does NOT record statistics and has NO timer.

Mock mode DOES record results and HAS a timer.

The website must include a Back arrow button (←) to go to the previous page on practice, mock, and question pages.

🧭 Navigation Bar (Top Menu)

HOME

PRACTISE

MOCK

CSCA

ABOUT

CONTACT US

Login / Sign Up (or Profile when logged in)

🌙☀️ Dark / Light mode toggle switch

🏠 Home Page (Public)

The Home page should include:

1. Hero Section

Large banner related to studying / exams / CSCA / China education

Big title like: “Prepare Smart for the CSCA Exam”

Two main buttons:

PRACTISE

MOCK

If user is not logged in → clicking these sends to Login

If logged in → go to respective pages

2. Steps / How It Works Section (Non-clickable)

Stylish cards or blocks showing steps like:

Choose a subject

Practice questions

Take mock exam

Check your results

Just informational, good design, not clickable

3. Subjects Section (Horizontal Cards with Big Icons)

Show main CSCA subjects:

Mathematics

Physics

Chemistry

Professional Chinese

Each card has:

Big icon

Subject name

Short description

Clicking a subject:

If not logged in → go to Login

If logged in → go to Practice section

4. FAQ Section

Accordion-style questions (9–15 questions), such as:

What is CSCA?

Who should use CoachCSCA?

Is an account required?

How does practice work?

How does mock exam work?

Are results saved?

etc.

5. Footer

Website name and short description

Quick links

Copyright text

📘 CSCA Page (Public)

This page explains:

What CSCA is

Who takes it

Why it is important for studying in China

What subjects are included

How CoachCSCA helps students prepare

ℹ️ About Page (Public)

This page should include:

Story of the platform

Mission and vision

Who the platform is for

What problem it solves

How it helps students succeed

Trust-building, professional layout with sections and headings

📞 Contact Us Page (Public)

Top banner section

Contact form with:

Name

Email

Message

A clear button that opens WhatsApp chat (link will be added later by owner)

Simple, clean, friendly design

🔐 Authentication

Sign Up: Name, Email, Password

Login / Logout

Simple profile access (no dashboard page)

Login is required only for:

Practice

Mock

📝 PRACTISE Section (No Timer, No Statistics)

This is for learning and training only.

Practice Main Page: Clickable Cards

For V1, show 8 clickable cards:

🧮 Mathematics (4 cards):

Algebra

Probability

Functions

Set & Inequality

⚛️ Physics (2 cards) – example topics:

Mechanics

Electricity & Magnetism

🧪 Chemistry (2 cards) – example topics:

Atomic Structure

Chemical Reactions

Each card:

Has an icon

Has topic name

On click → opens question page for that topic

Questions Page (Practice Mode):

Each card contains 10 multiple-choice questions

Questions are shown similar to real CSCA style

User selects answers and submits

Show:

Score

Correct answers

Wrong answers

❌ No timer

❌ No saving results

❌ No statistics

✅ Back arrow button (←) to return to previous page

🧪 MOCK Section (With Timer + Statistics)

This is for real exam simulation.

Mock Main Page: Two Cards

Physics Mock (10 questions)

Mathematics Mock (10 questions)

Each card:

Starts a timed exam

Shows questions in exam style

Has a countdown timer

On submit:

Show score

Show pass/fail

Show answer review

Statistics (Only Here)

On the same Mock page, show:

List of previous mock attempts

Scores

Best score

Average score

Only mock exams are:

Saved

Used for statistics

Practice results are NOT saved.

Also include:

Back arrow button (←) to go back

🎨 Design Requirements

Modern, clean, educational UI

Fully responsive (mobile + desktop)

Simple color scheme

Dark / Light mode toggle

Clear buttons and cards

Smooth navigation

Student-friendly layout

⚙️ Technical Notes

Frontend: HTML, CSS, JavaScript (or modern framework)

Backend: Any suitable backend

Database:

Users

Questions

Mock results

Secure login system

Scalable structure for future updates

🚀 V1 Focus Summary

Home + CSCA + About + Contact pages

Login system

Practice:

8 cards

10 questions each

No timer, no stats

Mock:

2 cards (Math, Physics)

10 questions each

Timer

Results saved

Statistics shown

No dashboard page

Back arrow navigation

Dark/Light mode

## Getting Started

### Prerequisites

- Node.js 18+ (optional, for local development server)

### Running Locally

1. Open `index.html` in your browser, or
2. Use a local server:
   ```bash
   npx serve .
   ```

## Framework

This project uses **React**.

## License

MIT
