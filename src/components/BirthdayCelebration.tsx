import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';
import { birthdayCelebration, friendName } from '../data/museumContent';
import { SectionHeader } from './SectionHeader';

export function BirthdayCelebration() {
  return (
    <section className="px-5 py-20 sm:px-8" id="birthday">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Birthday celebration"
          title={`${birthdayCelebration.headline}, ${friendName}`}
          description={`A special birthday exhibit for ${birthdayCelebration.dateLabel}, because turning ${birthdayCelebration.age} deserves its own wing.`}
          icon={Gift}
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-600 via-pink-600 to-stone-950 p-8 text-white shadow-2xl shadow-rose-200/70 sm:p-10"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-amber-200/30 blur-2xl" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-rose-100">Birthday level unlocked</p>
              <div className="my-8 flex items-end justify-center gap-2 lg:justify-start">
                <span className="text-8xl font-black leading-none tracking-tight sm:text-9xl">{birthdayCelebration.age}</span>
                <span className="pb-4 text-2xl font-black">years</span>
              </div>
              <p className="text-xl font-bold leading-8 text-white/90">{birthdayCelebration.intro}</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 font-black">
                <Sparkles className="h-5 w-5 text-amber-200" />
                {birthdayCelebration.dateLabel}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {birthdayCelebration.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-xl shadow-amber-100/60 backdrop-blur"
                >
                  <p className="text-3xl font-black text-rose-600">0{index + 1}</p>
                  <p className="mt-3 text-lg font-black text-stone-950">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-rose-100/60 backdrop-blur"
            >
              <h3 className="text-2xl font-black text-stone-950">Birthday wishes</h3>
              <div className="mt-5 space-y-4">
                {birthdayCelebration.wishes.map((wish) => (
                  <div key={wish} className="flex gap-3 rounded-2xl bg-rose-50 p-4 text-stone-700">
                    <Gift className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                    <p className="font-semibold leading-7">{wish}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
