import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RefreshCcw, Sparkles } from 'lucide-react';
import { compliments, friendName } from '../data/museumContent';
import { SectionHeader } from './SectionHeader';

export function ComplimentGenerator() {
  const [complimentIndex, setComplimentIndex] = useState(0);
  const [clicks, setClicks] = useState(0);

  const compliment = useMemo(() => compliments[complimentIndex], [complimentIndex]);

  function generateCompliment() {
    if (compliments.length <= 1) {
      setClicks((count) => count + 1);
      return;
    }

    let nextIndex = Math.floor(Math.random() * compliments.length);
    while (nextIndex === complimentIndex) {
      nextIndex = Math.floor(Math.random() * compliments.length);
    }

    setComplimentIndex(nextIndex);
    setClicks((count) => count + 1);
  }

  return (
    <section className="px-5 py-20 sm:px-8" id="compliments">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Compliment generator"
          title="Press for instant emotional support"
          description="A tiny machine that produces sincere compliments with a suspicious amount of sparkle."
          icon={Sparkles}
        />
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-5 shadow-2xl shadow-rose-100/70 backdrop-blur sm:p-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-stone-950 to-rose-950 p-6 text-center text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-rose-200">For {friendName}</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={`${complimentIndex}-${clicks}`}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.32 }}
                className="mx-auto mt-6 max-w-3xl text-2xl font-black leading-tight sm:text-4xl"
              >
                “{compliment}”
              </motion.p>
            </AnimatePresence>
            <button
              type="button"
              onClick={generateCompliment}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-black text-stone-950 shadow-xl shadow-rose-950/30 transition hover:-translate-y-0.5 hover:bg-rose-100"
            >
              <RefreshCcw className="h-5 w-5" />
              Give me a compliment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
