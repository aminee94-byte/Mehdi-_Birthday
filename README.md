# The Friend Museum

A beautiful, warm, funny, mobile-friendly personal gift website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons.

The site is designed as a mini digital museum dedicated to a close friend. It includes a landing page, memory timeline, compliment generator, inside joke archive, friendship quiz, future letter, and a secret final message that unlocks after the quiz.

## Tech stack

- React with Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## How to install

Make sure you have Node.js installed, then install dependencies:

```bash
npm install
```

## How to run locally

Start the local development server:

```bash
npm run dev
```

Vite will print a local URL in your terminal, usually:

```text
http://localhost:5173/
```

Open that URL in your browser to view the website.

## How to build

Create a production-ready build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## How to edit the content

Most personal content is stored in one clearly labeled file:

```text
src/data/museumContent.ts
```

Open that file and look for comments that begin with `EDIT HERE`.

You can edit:

- Friend name or nickname: `friendName`
- Five memory cards: `memories`
- Compliment generator messages: `compliments`
- Inside joke cards: `jokes`
- Friendship quiz questions and answers: `quizQuestions`
- Future letter text: `futureLetter`
- Secret final message: `finalMessage`

### Editing quiz answers

Each quiz question has a `correctAnswer` number. This is the zero-based index of the correct option.

Example:

```ts
{
  question: 'What is the best snack?',
  options: ['Pizza', 'Ice cream', 'Fries', 'All of them'],
  correctAnswer: 3,
}
```

In this example, `correctAnswer: 3` means the fourth option, `All of them`, is correct.

## Project structure

```text
src/
  App.tsx
  main.tsx
  styles.css
  data/
    museumContent.ts
  components/
    ComplimentGenerator.tsx
    FriendshipQuiz.tsx
    FutureLetter.tsx
    JokeArchive.tsx
    Landing.tsx
    SecretMessage.tsx
    SectionHeader.tsx
    Timeline.tsx
```

## How to deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/).
3. Click **Add New Project**.
4. Import your GitHub repository.
5. Vercel should automatically detect that this is a Vite project.
6. Use these settings if needed:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Click **Deploy**.

No backend, login, or database is required.
