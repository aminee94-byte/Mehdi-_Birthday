import { motion } from 'framer-motion';
import { Lock, LockOpen, Sparkles } from 'lucide-react';
import { finalMessage, friendName } from '../data/museumContent';

type SecretMessageProps = {
  unlocked: boolean;
};

export function SecretMessage({ unlocked }: SecretMessageProps) {
  return (
    <section className="px-5 py-20 sm:px-8" id="secret">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className={`mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border p-6 text-center shadow-2xl backdrop-blur sm:p-10 ${
          unlocked
            ? 'border-rose-200 bg-gradient-to-br from-rose-600 to-stone-950 text-white shadow-rose-200/80'
            : 'border-white/80 bg-white/70 text-stone-900 shadow-stone-200/70'
        }`}
      >
        <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl ${unlocked ? 'bg-white/15' : 'bg-stone-100'}`}>
          {unlocked ? <LockOpen className="h-8 w-8" /> : <Lock className="h-8 w-8 text-stone-500" />}
        </div>
        {unlocked ? (
          <>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-100">Unlocked for {friendName}</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{finalMessage.title}</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/86">{finalMessage.body}</p>
            <div className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full bg-white/15 px-5 py-3 font-bold">
              <Sparkles className="h-5 w-5 text-amber-200" />
              End of tour · Keep the friendship
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-stone-500">Locked exhibit</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Secret final message</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              This room opens after the friendship quiz is submitted. No pressure, but the museum staff believes in you.
            </p>
            <a
              href="#quiz"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-stone-950 px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-700"
            >
              Go to quiz
            </a>
          </>
        )}
      </motion.div>
    </section>
  );
}
