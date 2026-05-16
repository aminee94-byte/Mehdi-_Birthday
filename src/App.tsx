import { Camera, Heart, MapPin, Sparkles } from 'lucide-react';
import { birthdayPhotos, elbePhoto } from './data/photos';

const birthdayBoy = 'Mehdi';
const senderName = 'Amine';
const specialName = 'Jihade';

const wishes = [
  'Happy 25th birthday Mehdi',
  'May this year bring you peace',
  'May Dresden always feel like a good memory',
  'May your heart stay light and your future stay bright',
  'May every hard day turn into a story you survived',
  'May you always know that you are appreciated',
  'From Amine with love and respect',
  'A special birthday corner for Jihade',
];

const fallbackPhotos = [
  { title: 'Our photo over the Elbe', caption: 'Photo from the birthday zip will appear here.', src: '' },
  { title: 'Mehdi birthday photo', caption: 'Photo from the birthday zip will appear here.', src: '' },
  { title: 'Amine and Mehdi', caption: 'Photo from the birthday zip will appear here.', src: '' },
  { title: 'Jihade memory', caption: 'Photo from the birthday zip will appear here.', src: '' },
];

const visiblePhotos = birthdayPhotos.length > 0 ? birthdayPhotos : fallbackPhotos;

const amineMessage = [
  'Mehdi, happy 25th birthday my brother.',
  'I wanted this page to feel like something made for you, not a generic birthday card. A cake, Dresden, the Elbe, our memories, and a small corner for the people who matter in the story.',
  'I hope this new year gives you peace, confidence, health, success, and moments that make you feel proud of who you are becoming.',
  'You are appreciated more than you probably notice. I hope this page reminds you of that every time you open it.',
  'From Amine, with love and respect.',
];

const jihadeMessage = [
  'Jihade, this part is here because Mehdi’s birthday story should have a special place for you too.',
  'This can become your personal note, your birthday wish, or a small dedication that stays on the page behind the memories.',
];

function PhotoSlot({ title, caption, src }: { title: string; caption: string; src: string }) {
  return (
    <article className="photo-card group">
      <div className="photo-window">
        {src ? (
          <img src={src} alt={title} />
        ) : (
          <div className="photo-placeholder">
            <Camera className="h-10 w-10" />
            <span>Add photo</span>
            <small>src/data/photos.ts</small>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/70">{caption}</p>
      </div>
    </article>
  );
}

function CakeScene() {
  return (
    <section className="hero-scene">
      <div className="wish-wall" aria-hidden="true">
        {[...wishes, ...wishes].map((wish, index) => (
          <span key={`${wish}-${index}`}>{wish}</span>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="pill"><Sparkles className="h-4 w-4" /> Made by {senderName} for {birthdayBoy}</div>
          <h1>Mehdi turns 25</h1>
          <p>
            A birthday page with a 3D cake, Dresden, the Elbe, your real photos, wishes in the background, and a personal message from Amine.
          </p>
          <div className="hero-actions">
            <a href="#elbe">Elbe photo</a>
            <a href="#message">Read the message</a>
          </div>
        </div>

        <div className="cake-card">
          <div className="cake-scene-new" aria-label="3D cake showing 25 years for Mehdi">
            <div className="number-topper">25</div>
            <div className="years-ribbon">years</div>
            <div className="flame flame-left" />
            <div className="flame flame-right" />
            <div className="candle-new candle-left" />
            <div className="candle-new candle-right" />
            <div className="cake-layer cake-layer-top" />
            <div className="cake-layer cake-layer-middle" />
            <div className="cake-layer cake-layer-bottom" />
            <div className="cake-front-name">Mehdi</div>
            <div className="cake-plate" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ElbeSection() {
  return (
    <section className="elbe-section" id="elbe">
      <div className="section-heading">
        <div className="pill"><MapPin className="h-4 w-4" /> Dresden over the Elbe</div>
        <h2>A picture over the Elbe</h2>
        <p>
          This section is built like a Dresden postcard. Your selected photo from the zip appears in the frame.
        </p>
      </div>

      <div className="elbe-postcard">
        <div className="elbe-skyline" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="river" aria-hidden="true" />
        <div className="bridge" aria-hidden="true" />
        <div className="elbe-photo-frame">
          {elbePhoto?.src ? (
            <img src={elbePhoto.src} alt={elbePhoto.title} className="h-full w-full object-cover" />
          ) : (
            <div className="photo-placeholder big">
              <Camera className="h-12 w-12" />
              <span>Add your Elbe photo here</span>
              <small>src/data/photos.ts</small>
            </div>
          )}
        </div>
        <div className="postcard-label">Dresden, Germany</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="site-shell">
      <CakeScene />
      <ElbeSection />

      <section className="photos-section" id="photos">
        <div className="section-heading light">
          <div className="pill dark"><Camera className="h-4 w-4" /> Our pictures</div>
          <h2>Our photo wall</h2>
          <p>The page is now wired to show the real photos from your zip through src/data/photos.ts.</p>
        </div>
        <div className="photo-grid">
          {visiblePhotos.map((slot) => <PhotoSlot key={slot.title} {...slot} />)}
        </div>
      </section>

      <section className="message-section" id="message">
        <div className="message-card">
          <div className="pill"><Heart className="h-4 w-4" /> Birthday message from {senderName}</div>
          <h2>For Mehdi</h2>
          <div className="message-text">
            {amineMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="signature">Amine</div>
        </div>
      </section>

      <section className="jihade-section" id="jihade">
        <div className="jihade-card">
          <div>
            <div className="pill dark"><Sparkles className="h-4 w-4" /> Special section</div>
            <h2>For {specialName}</h2>
          </div>
          <div className="message-text light-text">
            {jihadeMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <footer>Made by {senderName} for {birthdayBoy}. Dresden birthday edition.</footer>
    </main>
  );
}