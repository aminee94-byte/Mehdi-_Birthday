import { motion } from 'framer-motion';
import { Archive } from 'lucide-react';
import { jokes } from '../data/museumContent';
import { SectionHeader } from './SectionHeader';

export function JokeArchive() {
  return (
    <section className="px-5 py-20 sm:px-8" id="jokes">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Inside joke archive"
          title="Artifacts that make no sense to outsiders"
          description="A respectful storage facility for the jokes, quotes, and moments that should probably stay between you two."
          icon={Archive}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {jokes.map((joke, index) => (
            <motion.article
              key={joke.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.48, delay: index * 0.06 }}
              className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-xl shadow-amber-100/50 backdrop-blur transition hover:-translate-y-1 hover:rotate-[0.4deg]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <joke.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-stone-950">{joke.title}</h3>
              <p className="mt-3 text-base leading-7 text-stone-600">{joke.caption}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
