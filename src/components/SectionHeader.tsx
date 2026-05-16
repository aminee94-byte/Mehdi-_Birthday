import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function SectionHeader({ eyebrow, title, description, icon: Icon }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-8 max-w-3xl text-center sm:mb-12"
    >
      <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur">
        <Icon className="h-4 w-4" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">{description}</p>
    </motion.div>
  );
}
