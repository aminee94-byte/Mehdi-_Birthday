import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { photoCards } from '../data/museumContent';
import type { PhotoCard } from '../data/museumContent';
import { SectionHeader } from './SectionHeader';

export function PhotoGallery() {
  return (
    <section className="px-5 py-20 sm:px-8" id="photos">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Photo gallery"
          title="A place for the pictures that tell the story"
          description="Drop photos into the project later and this gallery becomes a tiny wall of favorite birthday and friendship moments."
          icon={Camera}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photoCards.map((photo: PhotoCard, index: number) => (
            <motion.article
              key={photo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-xl shadow-rose-100/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-rose-100 via-amber-100 to-pink-100">
                {photo.imageSrc ? (
                  <img
                    src={photo.imageSrc}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center text-rose-700">
                    <div className="mb-4 rounded-full bg-white/70 p-5 shadow-lg">
                      <Camera className="h-10 w-10" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.24em]">Add photo</p>
                    <p className="mt-2 text-sm font-semibold text-stone-600">public/photos/your-photo.jpg</p>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/55 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">Photo {index + 1}</p>
                <h3 className="mt-2 text-xl font-black text-stone-950">{photo.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{photo.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
