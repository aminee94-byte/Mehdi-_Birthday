import { motion } from 'framer-motion';
import { MailHeart } from 'lucide-react';
import { futureLetter } from '../data/museumContent';
import { SectionHeader } from './SectionHeader';

export function FutureLetter() {
  return (
    <section className="px-5 py-20 sm:px-8" id="letter">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Future letter"
          title={futureLetter.title}
          description="A warm note for goals, dreams, confidence, career, gym, studies, and the life still unfolding."
          icon={MailHeart}
        />
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[#fffaf3]/90 p-6 shadow-2xl shadow-amber-100/70 backdrop-blur sm:p-10"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-rose-200/50 blur-2xl" />
          <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-amber-200/60 blur-2xl" />
          <div className="relative">
            <p className="font-serif text-4xl font-black italic text-rose-700 sm:text-5xl">Dear future icon,</p>
            <div className="mt-8 space-y-5 text-lg leading-8 text-stone-700">
              {futureLetter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-amber-200 pt-6">
              <p className="font-serif text-3xl font-black italic text-stone-950">Signed,</p>
              <p className="mt-1 text-lg font-bold text-stone-600">Your future self, who is very proud already</p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
