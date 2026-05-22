import { useEffect, useRef, useState } from 'react';
import { Camera, Heart, Music, Pause, Play, Sparkles } from 'lucide-react';
import { birthdayPhotos } from './data/photos';

const birthdayBoy = 'Mehdi';
const senderName = 'Amine';

const wishes = [
  'Happy 25th birthday Mehdi',
  'May this year bring you peace',
  'May Dresden always feel like a good memory',
  'May your heart stay light and your future stay bright',
  'May every hard day turn into a story you survived',
  'May you always know that you are appreciated',
  'From Amine with love and respect',
];

const fallbackPhotos = [
  { title: 'Mehdi birthday photo', caption: '', src: '' },
  { title: 'Amine and Mehdi', caption: '', src: '' },
  { title: 'Friends together', caption: '', src: '' },
];

const visiblePhotos = birthdayPhotos.length > 0 ? birthdayPhotos : fallbackPhotos;

// Arabic birthday message for Mehdi.
const arabicMessageParagraphs = [
  'صديقي العزيز مهدي،',
  'أتمنى لك عيد ميلاد سعيد، وأن يدخل عليك هذا العام بكل الخير والفرحة والسعادة. إن شاء الله تحقق كل ما تتمناه، وتكون سنواتك القادمة أجمل وأفضل مما مضى.',
  'خمسة وعشرون عامًا ليست بالأمر السهل، بل هي خمسة وعشرون عامًا من العطاء والاجتهاد والصبر وتجاوز التحديات. وهذا بحد ذاته إنجاز جميل نحتفل به اليوم.',
  'أتمنى لك السعادة في حياتك، وأن يكون طريقك مليئًا بالفرح، والمفاجآت السعيدة، والمغامرات الجميلة. كما أتمنى لك أن تحقق كل ما تطمح إليه، سواء في هذا العام أو في السنوات المقبلة.',
  'أتمنى لك يومًا سعيدًا جدًا، وأتمنى أن تكون صداقتنا قد أدخلت على قلبك شيئًا من البهجة والسرور. وأريد فقط أن أقول لك كم أنت عزيز علي، وكم أن هذا اليوم مميز بالنسبة لنا جميعًا.',
  'عيد ميلاد سعيد يا مهدي، وكل عام وأنت بألف خير.',
];

const SONG_SRC = '/audio/twenty-five-shining-through.mp3';
const SONG_TITLE = 'Twenty-Five, Shining Through';

function MissingPhotoNotice({ src, label }: { src?: string; label: string }) {
  return (
    <div className="photo-placeholder">
      <Camera className="h-10 w-10" />
      <span>{src ? 'Photo file not found' : 'Photo space'}</span>
      <small>{src ? `Missing ${src}` : label}</small>
    </div>
  );
}

function PhotoSlot({ title, src }: { title: string; src: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <article className="photo-card group">
      <div className="photo-window">
        {showImage ? (
          <img src={src} alt={title || 'Mehdi memory'} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <MissingPhotoNotice src={src} label="Ready for the real picture" />
        )}
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
          <h1>Happy Birthday Mehdi 🎂</h1>
          <div className="hero-actions">
            <a href="#song">Play the song</a>
            <a href="#photos">See the photos</a>
            <a href="#message">Read the message</a>
          </div>
        </div>

        <div className="cake-card">
          <div className="cake-scene-new" aria-label="Realistic birthday cake showing 25 years for Mehdi">
            <div className="number-topper">25</div>
            <div className="years-ribbon">years</div>
            <div className="flame flame-left" />
            <div className="flame flame-right" />
            <div className="candle-new candle-left" />
            <div className="candle-new candle-right" />
            <div className="cake-layer cake-layer-top">
              <span className="cream-drop drop-a" />
              <span className="cream-drop drop-b" />
              <span className="cream-drop drop-c" />
            </div>
            <div className="cake-layer cake-layer-middle">
              <span className="cream-drop drop-d" />
              <span className="cream-drop drop-e" />
              <span className="cream-drop drop-f" />
            </div>
            <div className="cake-layer cake-layer-bottom">
              <span className="cream-drop drop-g" />
              <span className="cream-drop drop-h" />
              <span className="cream-drop drop-i" />
            </div>
            <div className="cake-berries" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </div>
            <div className="cake-front-name">Mehdi</div>
            <div className="cake-plate" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Big "song card" section + floating mini-player that stays visible.
function SongSection({
  isPlaying,
  togglePlay,
  audioRef,
}: {
  isPlaying: boolean;
  togglePlay: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  return (
    <section className="song-section" id="song">
      <div className="song-card">
        <div className="song-orb" aria-hidden="true">
          <div className={`song-orb-ring${isPlaying ? ' is-playing' : ''}`} />
          <div className={`song-orb-ring delay${isPlaying ? ' is-playing' : ''}`} />
          <button
            type="button"
            className="song-orb-button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause birthday song' : 'Play birthday song'}
          >
            {isPlaying ? <Pause className="h-9 w-9" /> : <Play className="h-9 w-9" />}
          </button>
        </div>
        <div className="song-meta">
          <div className="pill dark"><Music className="h-4 w-4" /> Birthday song for Mehdi</div>
          <h2>{SONG_TITLE}</h2>
          <p>
            A little song made for your 25th. Press play, lean back, and let the next few minutes
            be just for you.
          </p>
          <audio ref={audioRef} src={SONG_SRC} preload="metadata" />
        </div>
      </div>
    </section>
  );
}

function FloatingPlayer({
  isPlaying,
  togglePlay,
}: {
  isPlaying: boolean;
  togglePlay: () => void;
}) {
  return (
    <button
      type="button"
      className={`floating-player${isPlaying ? ' is-playing' : ''}`}
      onClick={togglePlay}
      aria-label={isPlaying ? 'Pause birthday song' : 'Play birthday song'}
    >
      <span className="floating-player-icon">
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </span>
      <span className="floating-player-text">
        <span className="floating-player-label">{isPlaying ? 'Playing' : 'Play song'}</span>
        <span className="floating-player-title">{SONG_TITLE}</span>
      </span>
      {isPlaying && (
        <span className="floating-player-bars" aria-hidden="true">
          <span /><span /><span /><span />
        </span>
      )}
    </button>
  );
}

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <main className="site-shell">
      <CakeScene />

      <SongSection isPlaying={isPlaying} togglePlay={togglePlay} audioRef={audioRef} />

      <section className="photos-section" id="photos">
        <div className="section-heading light">
          <div className="pill dark"><Camera className="h-4 w-4" /> Our pictures</div>
          <h2>Our photo wall</h2>
        </div>
        <div className="photo-grid">
          {visiblePhotos.map((slot, i) => (
            <PhotoSlot key={slot.src || `slot-${i}`} title={slot.title} src={slot.src} />
          ))}
        </div>
      </section>

      <section className="message-section" id="message">
        <div className="message-card arabic-card">
          <div className="pill"><Heart className="h-4 w-4" /> رسالة عيد ميلاد من {senderName}</div>
          <h2 lang="ar" dir="rtl">إلى مهدي</h2>
          <div className="message-text arabic-text" lang="ar" dir="rtl">
            {arabicMessageParagraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
          <div className="signature">Amine</div>
        </div>
      </section>

      <footer>Made by {senderName} for {birthdayBoy}. Dresden birthday edition.</footer>

      <FloatingPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
    </main>
  );
}
