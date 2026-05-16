import { Camera, Cake, Heart, MapPin, PenLine, Sparkles, Star } from 'lucide-react';

const birthdayBoy = 'Mehdi';
const senderName = 'Amine';
const specialName = 'Jihade';

// EDIT HERE: Put your real photos in public/photos and update these image paths.
// Example: imageSrc: '/photos/mehdi-1.jpg'
const photoMemories = [
  {
    title: 'Photo with Mehdi',
    caption: 'Replace this with a real memory caption from Amine.',
    imageSrc: '',
  },
  {
    title: 'Dresden memory',
    caption: 'A place for a photo from Dresden, a night out, a walk, or a funny moment.',
    imageSrc: '',
  },
  {
    title: 'Birthday energy',
    caption: 'Use this for a birthday picture, a cake photo, or a screenshot that means something.',
    imageSrc: '',
  },
  {
    title: 'The one only we understand',
    caption: 'The picture that makes no sense to others but makes perfect sense to us.',
    imageSrc: '',
  },
];

// EDIT HERE: This is the main message Mehdi will read from you.
const messageFromAmine = [
  'Mehdi, happy birthday my brother. I wanted this to feel personal, not like a normal birthday message copied from somewhere.',
  'This page is just a small way to say that you matter, that your presence is appreciated, and that I hope this new year brings you peace, success, confidence, health, and many reasons to smile.',
  'I hope you keep becoming the person you want to be, and I hope life gives you moments that feel calm, beautiful, and unforgettable.',
  'From Amine, with love and respect.',
];

// EDIT HERE: Personalize this section for Jihade.
const jihadeMessage = [
  'Jihade also deserves a special corner on this page, because some people are part of the story in a way that should not be hidden.',
  'This section can become a sweet note, a funny private message, or a small dedication connected to Mehdi and this birthday.',
];

function PhotoCard({ title, caption, imageSrc, index }: { title: string; caption: string; imageSrc: string; index: number }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-xl shadow-rose-200/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-rose-100 via-amber-100 to-sky-100">
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 rounded-full bg-white/80 p-5 shadow-lg">
              <Camera className="h-10 w-10 text-rose-600" />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-rose-700">Add Mehdi photo</p>
            <p className="mt-3 max-w-44 text-sm font-semibold text-stone-600">Upload to public/photos and edit App.tsx</p>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-600">Memory {index + 1}</p>
        <h3 className="mt-2 text-xl font-black text-stone-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-stone-600">{caption}</p>
      </div>
    </article>
  );
}

function DresdenCake() {
  return (
    <section className="px-5 py-20 sm:px-8" id="cake">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-black text-rose-700 shadow-sm backdrop-blur">
            <MapPin className="h-4 w-4" />
            Dresden, Germany
          </div>
          <h2 className="text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">A 3D cake for Mehdi in Dresden</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-650">
            This is the birthday centerpiece: a floating cake, a little Dresden skyline, and a warm city feeling made only for Mehdi.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Frauenkirche lights', 'Elbe birthday walk', 'Dresden night vibes'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/70 bg-white/70 p-4 text-center font-black text-stone-800 shadow-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="cake-stage rounded-[3rem] border border-white/80 bg-gradient-to-br from-sky-100 via-rose-100 to-amber-100 p-8 shadow-2xl shadow-rose-200/70">
          <div className="skyline" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="cake-scene" aria-label="3D birthday cake for Mehdi in Dresden">
            <div className="cake-shadow" />
            <div className="cake cake-bottom" />
            <div className="cake cake-middle" />
            <div className="cake cake-top" />
            <div className="cake-icing cake-icing-one" />
            <div className="cake-icing cake-icing-two" />
            <div className="candle candle-one"><span /></div>
            <div className="candle candle-two"><span /></div>
            <div className="cake-label">Mehdi</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7ed] text-stone-900">
      <section className="relative flex min-h-screen items-center px-5 py-16 sm:px-8" id="top">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(244,63,94,0.23),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.22),transparent_28%),linear-gradient(135deg,#fff7ed_0%,#fff1f2_45%,#f0f9ff_100%)]" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-black text-rose-700 shadow-sm backdrop-blur lg:mx-0">
              <Sparkles className="h-4 w-4" />
              Made by {senderName} for {birthdayBoy}
            </div>
            <h1 className="text-5xl font-black tracking-tight text-stone-950 sm:text-7xl md:text-8xl">
              Happy Birthday {birthdayBoy}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-stone-700 sm:text-2xl lg:mx-0">
              A personal birthday page from {senderName}, made with Dresden energy, memories, and a small digital cake just for you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#cake" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 font-black text-white shadow-xl shadow-rose-200/80 transition hover:-translate-y-0.5 hover:bg-rose-700 sm:w-auto">
                <Cake className="h-5 w-5" />
                See the cake
              </a>
              <a href="#message" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white/75 px-7 py-4 font-black text-stone-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-700 sm:w-auto">
                <PenLine className="h-5 w-5" />
                Read Amine’s message
              </a>
            </div>
          </div>

          <div className="relative rounded-[3rem] border border-white/70 bg-white/55 p-5 shadow-2xl shadow-rose-200/60 backdrop-blur">
            <div className="rounded-[2.5rem] bg-stone-950 p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-rose-200">Birthday card</p>
              <p className="mt-6 text-5xl font-black">{birthdayBoy}</p>
              <p className="mt-4 text-lg leading-8 text-white/75">This is not a generic website anymore. This is your page, your birthday, your Dresden cake, and your message from {senderName}.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Mehdi', 'Amine', 'Dresden', 'Jihade'].map((item) => (
                  <div key={item} className="rounded-3xl bg-white/10 p-4 text-center font-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DresdenCake />

      <section className="px-5 py-20 sm:px-8" id="photos">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-black text-rose-700 shadow-sm backdrop-blur">
              <Camera className="h-4 w-4" />
              Mehdi photo wall
            </div>
            <h2 className="text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">Add the pictures that actually matter</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-stone-600">
              The uploaded zip did not include images, so these are ready photo slots. Add real pictures later and the page becomes much more personal.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {photoMemories.map((photo, index) => (
              <PhotoCard key={photo.title} {...photo} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" id="message">
        <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/80 bg-white/80 p-6 shadow-2xl shadow-rose-200/60 backdrop-blur sm:p-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-black text-rose-700">
            <Heart className="h-4 w-4 fill-rose-300" />
            Message from {senderName}
          </div>
          <h2 className="text-4xl font-black tracking-tight text-stone-950 sm:text-5xl">For Mehdi</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-stone-700">
            {messageFromAmine.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-stone-950 p-6 text-white">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-rose-200">Signed</p>
            <p className="mt-2 text-3xl font-black">{senderName}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" id="jihade">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[3rem] bg-gradient-to-br from-rose-600 to-stone-950 p-8 text-white shadow-2xl shadow-rose-200/70">
            <Star className="h-12 w-12 fill-amber-200 text-amber-200" />
            <h2 className="mt-6 text-4xl font-black">A section for {specialName}</h2>
            <p className="mt-4 text-lg leading-8 text-white/80">A special place on Mehdi’s birthday page, separate from the rest, ready to become as personal as you want.</p>
          </div>
          <div className="rounded-[3rem] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-amber-100/60 backdrop-blur">
            <div className="space-y-5 text-lg leading-8 text-stone-700">
              {jihadeMessage.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 rounded-[2rem] bg-amber-50 p-5 font-bold text-stone-700">
              Edit this in App.tsx under jihadeMessage.
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-12 text-center text-sm font-bold text-stone-500 sm:px-8">
        Made by {senderName} for {birthdayBoy} in Dresden, Germany.
      </footer>
    </main>
  );
}