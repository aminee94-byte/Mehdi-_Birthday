import {
  Award,
  BookHeart,
  Camera,
  Coffee,
  Dumbbell,
  Flame,
  Gift,
  HeartHandshake,
  Laugh,
  MapPin,
  Music,
  Rocket,
  Sparkles,
  Star,
  Trophy,
  Utensils,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// EDIT HERE: Replace this with your friend's name or nickname.
export const friendName = 'Bestie';

export type Memory = {
  title: string;
  date: string;
  text: string;
  icon: LucideIcon;
};

// EDIT HERE: Replace these five memory cards with your real moments.
export const memories: Memory[] = [
  {
    title: 'The Day the Museum Began',
    date: 'Gallery 01 · First iconic memory',
    text: 'A normal day somehow became a story we still bring up for absolutely no reason, which is exactly how legends are born.',
    icon: Camera,
  },
  {
    title: 'The Emergency Laugh Session',
    date: 'Gallery 02 · Peak chaos',
    text: 'We were supposed to be serious for five minutes. We lasted approximately seven seconds, and honestly, that was generous.',
    icon: Laugh,
  },
  {
    title: 'The Main Character Walk',
    date: 'Gallery 03 · Confidence exhibit',
    text: 'That moment proved you can turn a random sidewalk into a red carpet if the attitude is powerful enough.',
    icon: Star,
  },
  {
    title: 'The Tiny Win That Felt Huge',
    date: 'Gallery 04 · Proud friend corner',
    text: 'You did the thing, survived the thing, and then acted casual like it was not completely impressive.',
    icon: Trophy,
  },
  {
    title: 'The Comfort Zone Table',
    date: 'Gallery 05 · Soft place to land',
    text: 'A reminder that friendship is sometimes just sitting together, talking nonsense, and somehow feeling lighter afterward.',
    icon: Coffee,
  },
];

export type PhotoCard = {
  title: string;
  caption: string;
  imageSrc: string;
  alt: string;
};

// EDIT HERE: Add your own photos here. Put image files in public/photos and set imageSrc like '/photos/your-photo.jpg'.
// Leave imageSrc as an empty string to show a beautiful placeholder card until you add the real picture.
export const photoCards: PhotoCard[] = [
  {
    title: 'The birthday icon shot',
    caption: 'Replace this with a photo where he looks like the main character he obviously is.',
    imageSrc: '',
    alt: 'Placeholder for a favorite birthday photo',
  },
  {
    title: 'The friendship proof',
    caption: 'A photo that says: yes, this friendship has survived many eras and questionable decisions.',
    imageSrc: '',
    alt: 'Placeholder for a photo of friends together',
  },
  {
    title: 'The chaotic memory',
    caption: 'Use this for the picture that needs zero explanation and somehow too much explanation.',
    imageSrc: '',
    alt: 'Placeholder for a funny chaotic memory photo',
  },
  {
    title: 'The proud moment',
    caption: 'A picture for one of his wins, glow-ups, achievements, or tiny legendary moments.',
    imageSrc: '',
    alt: 'Placeholder for a proud friend moment photo',
  },
];

// EDIT HERE: Birthday celebration details. The date below uses May 24, 2026 for 24/05/2026.
export const birthdayCelebration = {
  age: 25,
  dateLabel: 'May 24, 2026',
  headline: 'Happy 25th Birthday',
  intro:
    'This birthday wing is dedicated to celebrating him properly: the growth, the jokes, the wins, the glow-up, and the fact that 25 looks suspiciously good on him.',
  wishes: [
    'May 25 bring stronger confidence, calmer days, bigger wins, and better screenshots.',
    'May every goal feel closer, every gym session count, and every dream get a little louder.',
    'May life keep giving him reasons to laugh, level up, and remember how loved he is.',
  ],
  highlights: [
    '25 years of lore',
    '25 years of becoming',
    '25 reasons to celebrate',
    '1 friend museum made with love',
  ],
};

// EDIT HERE: Add, remove, or rewrite compliments. The generator chooses randomly from this array.
export const compliments: string[] = [
  'You have elite-level best friend energy. Scientists are confused. I am simply grateful.',
  'Your personality is basically sunshine with better jokes and slightly more chaos.',
  'You make ordinary days feel like bonus scenes in a very wholesome movie.',
  'You are proof that kindness can be stylish, funny, and dangerously contagious.',
  'If loyalty had a face, it would probably be yours, but with a better outfit.',
  'You are the human version of finding extra fries at the bottom of the bag.',
  'Your laugh deserves its own national holiday and maybe a small parade.',
  'You are doing better than you think, glowing more than you notice, and inspiring people more than you realize.',
];

export type Joke = {
  title: string;
  caption: string;
  icon: LucideIcon;
};

// EDIT HERE: Swap these inside jokes for the ones only you two understand.
export const jokes: Joke[] = [
  {
    title: 'The legendary food order',
    caption: 'No historian can explain it. No receipt can justify it. Yet somehow, it was perfect.',
    icon: Utensils,
  },
  {
    title: 'The chaotic day',
    caption: 'A day so messy it deserves a documentary, a warning label, and a dramatic soundtrack.',
    icon: Flame,
  },
  {
    title: 'The quote we will never forget',
    caption: 'It made no sense to anyone else. That is exactly why it belongs in this archive.',
    icon: Music,
  },
  {
    title: 'The moment nobody should know about',
    caption: 'Classified. Redacted. Protected by the ancient laws of friendship.',
    icon: BookHeart,
  },
];

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
};

// EDIT HERE: Customize all quiz questions, answers, and correctAnswer indexes.
export const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the official museum-approved best friend superpower?',
    options: ['Replying instantly', 'Making any situation funny', 'Finding snacks', 'All of the above'],
    correctAnswer: 3,
  },
  {
    question: 'If our friendship had a theme song, it would probably sound like:',
    options: ['A calm piano ballad', 'A chaotic victory anthem', 'Elevator music', 'A suspiciously loud ringtone'],
    correctAnswer: 1,
  },
  {
    question: 'Which exhibit deserves the most security?',
    options: ['The screenshots', 'The snacks', 'The emotional speeches', 'The shared secrets'],
    correctAnswer: 3,
  },
  {
    question: 'What should you remember on a hard day?',
    options: ['You are behind', 'You are too much', 'You are loved and capable', 'You need to become a robot'],
    correctAnswer: 2,
  },
  {
    question: 'What is the correct response to a small win?',
    options: ['Ignore it', 'Celebrate dramatically', 'Pretend it was luck', 'Schedule a meeting'],
    correctAnswer: 1,
  },
];

// EDIT HERE: Rewrite this future letter for your friend's real goals, dreams, career, gym, studies, and life.
export const futureLetter = {
  title: 'A letter from your future self',
  paragraphs: [
    'Hey you. Yes, you — the one who sometimes forgets how far you have already come. I am writing from a version of life where your courage finally caught up with your dreams.',
    'You kept showing up for your goals, even when motivation was late, confidence was buffering, and the gym felt personally offended by your existence. You studied, learned, failed, tried again, and slowly became someone your younger self would be proud to meet.',
    'Your career did not need to be perfect to be meaningful. Your dreams did not need to be loud to be real. Your life became bigger because you stopped waiting to feel ready and started moving with the tiny brave steps you had.',
    'So breathe. Keep going. Drink water. Fix your posture. Believe the compliments. You are not late. You are becoming.',
  ],
};

// EDIT HERE: This is the secret message that unlocks after the quiz is completed.
export const finalMessage = {
  title: 'The Secret Final Exhibit',
  body: 'If you made it here, it means the museum doors are fully open. The truth is simple: you are deeply appreciated, ridiculously loved, and permanently important. Thank you for being the kind of friend who makes life softer, funnier, and much more worth remembering. This little website is not big enough to hold every reason you matter — but it can hold this one: I am really, really glad you exist.',
};

export const museumStats = [
  { label: 'Rare friend rating', value: '10/10', icon: Award },
  { label: 'Chaos survived', value: '∞', icon: Rocket },
  { label: 'Good memories', value: 'Too many', icon: HeartHandshake },
  { label: 'Birthday age', value: '25', icon: Gift },
];

export const navItems = [
  { label: 'Timeline', href: '#timeline', icon: MapPin },
  { label: 'Photos', href: '#photos', icon: Camera },
  { label: 'Birthday', href: '#birthday', icon: Gift },
  { label: 'Compliments', href: '#compliments', icon: Sparkles },
  { label: 'Jokes', href: '#jokes', icon: Laugh },
  { label: 'Quiz', href: '#quiz', icon: Trophy },
  { label: 'Letter', href: '#letter', icon: Dumbbell },
];
