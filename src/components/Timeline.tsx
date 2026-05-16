import { motion } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';
import { memories } from '../data/museumContent';
import { SectionHeader } from './SectionHeader';

export function Timeline() {
  return (
    <section className="px-5 py-20 sm:px-8" id="timeline">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Memory timeline"
          title="Five exhibits from the friendship archives"
          description="Editable cards for the moments that deserve a little spotlight, a glass case, and maybe a security guard."
          icon={CalendarHeart}
        />
        <div className="relative">
          <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-rose-300 via-amber-200 to-pink-300 md:block" />
          <div className="grid gap-5">
            {memories.map((memory, index) => (
              <motion.article
                key={memory.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-xl shadow-rose-100/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl sm:p-6 md:ml-16"
              >
                <div className="absolute -left-[3.35rem] top-6 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-orange-50 bg-rose-500 text-white shadow-lg md:flex">
                  <memory.icon className="h-5 w-5" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 md:hidden">
                    <memory.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">{memory.date}</p>
                    <h3 className="mt-2 text-2xl font-black text-stone-950">{memory.title}</h3>
                    <p className="mt-3 text-base leading-7 text-stone-600">{memory.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
