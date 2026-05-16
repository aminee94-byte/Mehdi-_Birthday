import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { friendName, museumStats, navItems } from '../data/museumContent';

export function Landing() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-10 sm:px-8" id="top">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,113,133,0.28),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(251,191,36,0.26),transparent_30%),linear-gradient(135deg,#fff7ed_0%,#fff1f2_45%,#fdf2f8_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-8 top-24 hidden rounded-[2rem] border border-white/60 bg-white/50 p-5 shadow-2xl backdrop-blur md:block"
      >
        <Heart className="h-12 w-12 fill-rose-200 text-rose-500" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 14, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-28 left-6 hidden rounded-[2rem] border border-white/60 bg-white/50 p-5 shadow-2xl backdrop-blur md:block"
      >
        <Sparkles className="h-12 w-12 text-amber-500" />
      </motion.div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-5 w-fit rounded-full border border-white/70 bg-white/65 px-4 py-2 text-sm font-bold text-rose-700 shadow-sm backdrop-blur lg:mx-0"
          >
            Private collection · Curated for {friendName}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="text-5xl font-black tracking-tight text-stone-950 sm:text-6xl md:text-7xl"
          >
            The Friend Museum
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-stone-700 sm:text-2xl lg:mx-0"
          >
            A small website built only for you
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="mx-auto mt-4 max-w-xl text-base leading-7 text-stone-600 lg:mx-0"
          >
            Step inside a tiny digital museum full of memories, compliments, questionable jokes, and one very secret final exhibit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#timeline"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-base font-bold text-white shadow-xl shadow-rose-200/70 transition hover:-translate-y-0.5 hover:bg-rose-700 sm:w-auto"
            >
              Enter the museum
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#quiz"
              className="inline-flex w-full items-center justify-center rounded-full border border-stone-200 bg-white/75 px-7 py-4 text-base font-bold text-stone-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-700 sm:w-auto"
            >
              Unlock the secret
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.75 }}
          className="rounded-[2.5rem] border border-white/70 bg-white/55 p-4 shadow-2xl shadow-rose-200/60 backdrop-blur"
        >
          <div className="rounded-[2rem] bg-stone-950 p-5 text-white sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-rose-200">Museum map</p>
                <p className="mt-1 text-2xl font-black">Open today</p>
              </div>
              <div className="rounded-full bg-white/10 p-3">
                <Sparkles className="h-6 w-6 text-amber-300" />
              </div>
            </div>
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <item.icon className="h-5 w-5 text-rose-200" />
                    {item.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/55" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {museumStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/70 bg-white/65 p-4 shadow-sm backdrop-blur">
                <stat.icon className="mb-3 h-5 w-5 text-rose-600" />
                <p className="text-lg font-black text-stone-950">{stat.value}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
