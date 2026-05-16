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

// EDIT HERE: Put your photo files in public/photos and update imageSrc values.
// Example imageSrc: '/photos/first-memory.jpg'
export const photoCards: PhotoCard[] = [
  {
    title: 'The first legendary photo',
    caption: 'Replace this placeholder with a real photo and a caption only your friend would understand.',
    imageSrc: '',
    alt: 'Placeholder for a friendship memory photo',
  },
  {
    title: 'The chaotic masterpiece',
    caption: 'A perfect place for the photo that looks normal to strangers but hilarious to both of you.',
    imageSrc: '',
    alt: 'Placeholder for a funny friendship photo',
  },
  {
    title: 'The soft memory',
    caption: 'Use this card for a calm, warm, emotional photo that deserves its own museum wall.',
    imageSrc: '',
    alt: 'Placeholder for an emotional friendship photo',
  },
  {
    title: 'The birthday evidence',
    caption: 'Add a birthday photo here later, or keep it as a cute empty frame.',
    imageSrc: '',
    alt: 'Placeholder for a birthday photo',
  },
];

export type BirthdayCelebration = {
  headline: string;
  dateLabel: string;
  age: number;
  intro: string;
  highlights: string[];
  wishes: string[];
};

// EDIT HERE: Customize this birthday section for your friend.
export const birthdayCelebration: BirthdayCelebration = {
  headline: 'Happy birthday',
  dateLabel: 'Birthday exhibit',
  age: 25,
  intro: 'Today is officially about celebrating you, your chaos, your kindness, your glow, and every little reason people are lucky to know you.',
  highlights: [
    'Another year of iconic memories',
    'More laughter than the museum can safely store',
    'A friend who keeps making life warmer',
    'A future that deserves loud celebration',
  ],
  wishes: [
    'May this year bring you peace, confidence, health, and the kind of happiness that feels easy.',
    'May your dreams get closer, your stress get lighter, and your favorite people stay close.',
    'May you always remember that you are appreciated more than you realize.',
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
  { label: 'Secret exhibits', value: '1', icon: Gift },
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