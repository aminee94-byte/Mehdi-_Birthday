import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  Music,
  Pause,
  Play,
  Share2,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { birthdayPhotos, groupPhotosByYear } from './data/photos';

const birthdayBoy = 'Mehdi';
const senderName = 'Amine';
// Approximate birth date (Mehdi turning 25). Used for the day counter stat.
// If you know his exact birthday, edit this; otherwise this gives a reasonable feel.
const MEHDI_BIRTH_ISO = '2001-05-23';

const SONG_SRC = '/audio/twenty-five-shining-through.mp3';
const SONG_TITLE = 'Twenty-Five, Shining Through';

// =========================================================================
//   SONG PLACEMENT — change this one value to move the song card anywhere:
//     'after-hero'   → right under the cake (current default)
//     'after-stats'  → after the "days alive" stats strip
//     'before-photos' → just before the photo timeline
//     'after-photos' → between photos and the Arabic message
//     'after-message' → after the Arabic message, before the share row
//     'hidden'       → no big song card; only the floating mini-player
//   The floating mini-player always stays in the bottom-right regardless.
// =========================================================================
type SongPlacement =
  | 'after-hero'
  | 'after-stats'
  | 'before-photos'
  | 'after-photos'
  | 'after-message'
  | 'hidden';
const SONG_PLACEMENT: SongPlacement = 'after-hero';

const arabicMessageParagraphs = [
  'صديقي العزيز مهدي،',
  'أتمنى لك عيد ميلاد سعيد، وأن يدخل عليك هذا العام بكل الخير والفرحة والسعادة. إن شاء الله تحقق كل ما تتمناه، وتكون سنواتك القادمة أجمل وأفضل مما مضى.',
  'خمسة وعشرون عامًا ليست بالأمر السهل، بل هي خمسة وعشرون عامًا من العطاء والاجتهاد والصبر وتجاوز التحديات. وهذا بحد ذاته إنجاز جميل نحتفل به اليوم.',
  'أتمنى لك السعادة في حياتك، وأن يكون طريقك مليئًا بالفرح، والمفاجآت السعيدة، والمغامرات الجميلة. كما أتمنى لك أن تحقق كل ما تطمح إليه، سواء في هذا العام أو في السنوات المقبلة.',
  'أتمنى لك يومًا سعيدًا جدًا، وأتمنى أن تكون صداقتنا قد أدخلت على قلبك شيئًا من البهجة والسرور. وأريد فقط أن أقول لك كم أنت عزيز علي، وكم أن هذا اليوم مميز بالنسبة لنا جميعًا.',
  'عيد ميلاد سعيد يا مهدي، وكل عام وأنت بألف خير.',
];

// =========================================================================
//   ENVELOPE: a full-screen splash that taps to reveal the site.
//   This tap is also the moment we start the song (browsers require a
//   user gesture for autoplay, so this kills two birds).
// =========================================================================
function Envelope({ onOpen }: { onOpen: () => void }) {
  return (
    <button type="button" className="envelope" onClick={onOpen} aria-label="Open Mehdi's birthday">
      <div className="envelope-flap" aria-hidden="true" />
      <div className="envelope-body">
        <div className="envelope-stamp">🎂</div>
        <div className="envelope-script">Mehdi</div>
        <div className="envelope-sub">
          عيد ميلاد سعيد <span className="envelope-dot">·</span> Happy Birthday
        </div>
        <div className="envelope-cta">
          <span>Tap to open</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </button>
  );
}

// =========================================================================
//   CAKE: interactive — tap to blow candles, releases confetti.
// =========================================================================
type CakeState = { leftLit: boolean; rightLit: boolean; wishMade: boolean };

function CakeScene({
  cakeState,
  onCakeTap,
}: {
  cakeState: CakeState;
  onCakeTap: () => void;
}) {
  const allOut = !cakeState.leftLit && !cakeState.rightLit;
  return (
    <section className="hero-scene">
      {/* Slow drifting background orbs (#9 breathing background) */}
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-rose" />
        <span className="orb orb-amber" />
        <span className="orb orb-blue" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="pill"><Sparkles className="h-4 w-4" /> Made by {senderName} for {birthdayBoy}</div>
          <div className="hero-eyebrow">
            <span className="hero-year-badge">2026</span>
            <span className="hero-eyebrow-dot" aria-hidden="true">·</span>
            <span>Dresden edition</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-line line-1">Happy</span>
            <span className="hero-title-line line-2">Birthday</span>
            <span className="hero-title-line line-3">
              <span className="hero-name">Mehdi</span>
              <span className="hero-cake-emoji" aria-hidden="true">🎂</span>
            </span>
          </h1>
          <p className="hero-arabic" lang="ar" dir="rtl">عيد ميلاد سعيد يا مهدي</p>
          <p className="hero-hint">Tap the cake to blow out the candles ✨</p>
          <div className="hero-actions">
            <a href="#song">Play the song</a>
            <a href="#photos">See the photos</a>
            <a href="#message">Read the message</a>
          </div>
        </div>

        <button
          type="button"
          className={`cake-card cake-interactive${allOut ? ' all-out' : ''}`}
          onClick={onCakeTap}
          aria-label="Tap the cake to blow out the candles"
        >
          <div className="cake-halo" aria-hidden="true" />
          <div className="cake-sparkles" aria-hidden="true">
            <span className="spark spark-1">✨</span>
            <span className="spark spark-2">✦</span>
            <span className="spark spark-3">✨</span>
            <span className="spark spark-4">✦</span>
            <span className="spark spark-5">·</span>
          </div>
          <div className="cake-scene-new" aria-hidden="true">
            <div className="number-topper">25</div>
            <div className="years-ribbon">years</div>
            {cakeState.leftLit && <div className="flame flame-left" />}
            {cakeState.rightLit && <div className="flame flame-right" />}
            {cakeState.leftLit && <div className="flame-glow flame-glow-left" />}
            {cakeState.rightLit && <div className="flame-glow flame-glow-right" />}
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
          {cakeState.wishMade && <div className="wish-overlay">Make a wish 🤍</div>}
        </button>
      </div>
    </section>
  );
}

// =========================================================================
//   CONFETTI: 30 colored dots fired from cake center on each blowout.
// =========================================================================
function ConfettiBurst({ burstKey }: { burstKey: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        // pre-randomize per burst
        x: (Math.random() - 0.5) * 100,
        y: -(Math.random() * 80 + 20),
        rot: Math.random() * 720 - 360,
        delay: Math.random() * 120,
        color: ['#fb7185', '#facc15', '#38bdf8', '#fecdd3', '#a78bfa', '#fbbf24'][i % 6],
      })),
    [burstKey] // re-randomize every burst
  );

  return (
    <div className="confetti-burst" key={burstKey} aria-hidden="true">
      {pieces.map(p => (
        <span
          key={p.id}
          className="confetti-piece"
          style={
            {
              ['--dx' as string]: `${p.x}vw`,
              ['--dy' as string]: `${p.y}vh`,
              ['--rot' as string]: `${p.rot}deg`,
              ['--delay' as string]: `${p.delay}ms`,
              background: p.color,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

// =========================================================================
//   DAY COUNTER STAT STRIP (#7)
// =========================================================================
function StatStrip() {
  const daysAlive = useMemo(() => {
    const birth = new Date(MEHDI_BIRTH_ISO);
    const now = new Date();
    const ms = now.getTime() - birth.getTime();
    return Math.floor(ms / (1000 * 60 * 60 * 24));
  }, []);
  return (
    <section className="stat-strip" aria-label="Quick stats">
      <div className="stat">
        <div className="stat-value">{daysAlive.toLocaleString()}</div>
        <div className="stat-label">days alive</div>
      </div>
      <div className="stat-divider" aria-hidden="true" />
      <div className="stat">
        <div className="stat-value">25</div>
        <div className="stat-label">years</div>
      </div>
      <div className="stat-divider" aria-hidden="true" />
      <div className="stat">
        <div className="stat-value">1</div>
        <div className="stat-label">best friend writing this</div>
      </div>
    </section>
  );
}

// =========================================================================
//   SONG SECTION
// =========================================================================
function formatTime(s: number) {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
}

function SongSection({
  isPlaying,
  togglePlay,
  audioRef,
  currentTime,
  duration,
  onSeek,
}: {
  isPlaying: boolean;
  togglePlay: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}) {
  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    onSeek(newTime);
  };

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
          <div className="pill dark"><Music className="h-4 w-4" /> Birthday song <span className="meta-ar" lang="ar" dir="rtl">· أغنية عيد ميلادك</span></div>
          <h2>{SONG_TITLE}</h2>
          <p>
            A little song made for your 25th. Press play, lean back, and let the next few minutes
            be just for you.
          </p>

          <div className="song-progress">
            <div className="song-times">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="song-bar-wrap">
              <div className="song-bar-fill" style={{ width: `${progressPct}%` }} />
              <input
                type="range"
                className="song-bar-input"
                min={0}
                max={100}
                step={0.1}
                value={progressPct}
                onChange={handleSeek}
                aria-label="Seek song position"
              />
            </div>
          </div>

          <audio ref={audioRef} src={SONG_SRC} preload="metadata" />
        </div>
      </div>
    </section>
  );
}

// =========================================================================
//   PHOTO TIMELINE — grouped by year, with sticky year markers
// =========================================================================
function PhotoTimeline({ onOpenLightbox }: { onOpenLightbox: (i: number) => void }) {
  const groups = useMemo(() => groupPhotosByYear(), []);
  return (
    <section className="photos-section" id="photos">
      <div className="section-heading light">
        <div className="pill dark"><Camera className="h-4 w-4" /> Our pictures <span className="meta-ar" lang="ar" dir="rtl">· جدار صورنا</span></div>
        <h2>The trajectory, in pictures</h2>
        <p>From December 2023 to today. Tap any photo to view it full size.</p>
      </div>

      {groups.map(({ label, photos }, groupIdx) => (
        <div key={`${label.year ?? 'undated'}-${groupIdx}`} className="year-group">
          <div className="year-marker">
            <div className="year-line" aria-hidden="true" />
            <div className="year-pill">
              <span className="year-title">{label.title}</span>
              <span className="year-subtitle">{label.subtitle}</span>
            </div>
            <div className="year-line" aria-hidden="true" />
          </div>

          <div className="photo-grid">
            {photos.map(photo => {
              const globalIndex = birthdayPhotos.indexOf(photo);
              return (
                <button
                  type="button"
                  key={photo.src}
                  className="photo-card group"
                  onClick={() => onOpenLightbox(globalIndex)}
                  aria-label="Open photo full size"
                >
                  <div className="photo-window">
                    <img
                      src={photo.srcMedium}
                      srcSet={`${photo.srcSmall} 600w, ${photo.srcMedium} 1000w, ${photo.src} 1400w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

// =========================================================================
//   LIGHTBOX — keyboard nav, swipe, esc to close (#4)
// =========================================================================
function Lightbox({
  index,
  onClose,
  onNav,
}: {
  index: number;
  onClose: () => void;
  onNav: (direction: -1 | 1) => void;
}) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onNav(-1);
      else if (e.key === 'ArrowRight') onNav(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onNav]);

  const photo = birthdayPhotos[index];
  if (!photo) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onTouchStart={e => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={e => {
        if (touchStartX.current == null) return;
        const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
        const dx = endX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) > 50) onNav(dx > 0 ? -1 : 1);
      }}
    >
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        <X className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="lightbox-nav prev"
        onClick={e => {
          e.stopPropagation();
          onNav(-1);
        }}
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <div
        className="lightbox-frame"
        onClick={e => {
          // Click outside the image closes
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img key={photo.src} src={photo.src} alt={photo.alt} />
      </div>
      <button
        type="button"
        className="lightbox-nav next"
        onClick={e => {
          e.stopPropagation();
          onNav(1);
        }}
        aria-label="Next photo"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
      <div className="lightbox-count">
        {index + 1} / {birthdayPhotos.length}
      </div>
    </div>
  );
}

// =========================================================================
//   FLOATING MINI PLAYER (with volume control #10)
// =========================================================================
function FloatingPlayer({
  isPlaying,
  togglePlay,
  isMuted,
  toggleMute,
}: {
  isPlaying: boolean;
  togglePlay: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}) {
  return (
    <div className={`floating-player${isPlaying ? ' is-playing' : ''}`}>
      <button
        type="button"
        className="floating-player-main"
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
      <button
        type="button"
        className="floating-player-mute"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
}

// =========================================================================
//   ARABIC MESSAGE
// =========================================================================
function MessageSection() {
  return (
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
  );
}

// =========================================================================
//   SHARE BUTTON (#11)
// =========================================================================
function ShareRow() {
  const [shared, setShared] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const message = `🎂 Happy Birthday Mehdi — ${url}`;

  const onShare = async () => {
    // Try native share first
    const nav = window.navigator as Navigator & {
      share?: (data: { title: string; text: string; url: string }) => Promise<void>;
    };
    if (nav.share) {
      try {
        await nav.share({ title: 'Happy Birthday Mehdi', text: 'A small thing from Amine', url });
        return;
      } catch {
        // user cancelled — fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(message);
      setShared(true);
      setTimeout(() => setShared(false), 2200);
    } catch {
      // last resort: open WhatsApp
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <div className="share-row">
      <button type="button" className="share-button" onClick={onShare}>
        <Share2 className="h-4 w-4" />
        {shared ? 'Link copied!' : 'Share this page'}
      </button>
    </div>
  );
}

// =========================================================================
//   MAIN APP
// =========================================================================
export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRafRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [opened, setOpened] = useState(false);
  const [cake, setCake] = useState<CakeState>({ leftLit: true, rightLit: true, wishMade: false });
  const [burstKey, setBurstKey] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Smooth fade volume (#10)
  const fadeTo = useCallback((target: number, durationMs: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRafRef.current) cancelAnimationFrame(fadeRafRef.current);
    const start = audio.volume;
    const startTime = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - startTime) / durationMs);
      audio.volume = start + (target - start) * k;
      if (k < 1) fadeRafRef.current = requestAnimationFrame(step);
    };
    fadeRafRef.current = requestAnimationFrame(step);
  }, []);

  const startSong = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio.play().then(() => fadeTo(0.85, 1200)).catch(() => {});
  }, [fadeTo]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      startSong();
    } else {
      fadeTo(0, 350);
      setTimeout(() => audio.pause(), 360);
    }
  }, [fadeTo, startSong]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  }, []);

  const seekTo = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio || !isFinite(time)) return;
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  // Restore last play position (#10)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const saved = localStorage.getItem('mehdi.song.time');
    if (saved) {
      const t = parseFloat(saved);
      if (!Number.isNaN(t) && t > 0) audio.currentTime = t;
    }
    const interval = setInterval(() => {
      if (!audio.paused) localStorage.setItem('mehdi.song.time', String(audio.currentTime));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      localStorage.removeItem('mehdi.song.time');
    };
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMeta = () => setDuration(audio.duration || 0);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMeta);
    audio.addEventListener('durationchange', onLoadedMeta);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMeta);
      audio.removeEventListener('durationchange', onLoadedMeta);
    };
  }, []);

  // Envelope opens → just reveal the site. The user starts the song themselves
  // by tapping the play button — no auto-play.
  const openEnvelope = useCallback(() => {
    setOpened(true);
  }, []);

  // Tap the cake → blow out a candle, confetti, eventually "make a wish" (#3)
  const onCakeTap = useCallback(() => {
    setCake(prev => {
      let next = { ...prev };
      if (prev.leftLit && prev.rightLit) {
        // first tap → blow out left
        next.leftLit = false;
      } else if (!prev.leftLit && prev.rightLit) {
        // second tap → blow out right + wish
        next.rightLit = false;
        next.wishMade = true;
        setTimeout(() => setCake(c => ({ ...c, wishMade: false })), 2400);
      } else {
        // all out → re-light them
        next = { leftLit: true, rightLit: true, wishMade: false };
      }
      return next;
    });
    setBurstKey(k => k + 1);
  }, []);

  // Lightbox navigation
  const openLightbox = useCallback((i: number) => setLightboxIdx(i), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const navLightbox = useCallback((dir: -1 | 1) => {
    setLightboxIdx(prev => {
      if (prev === null) return prev;
      const next = prev + dir;
      if (next < 0) return birthdayPhotos.length - 1;
      if (next >= birthdayPhotos.length) return 0;
      return next;
    });
  }, []);

  // We need an audio element always mounted so play state survives even when the
  // big song card is hidden. So we render the <audio> here once and let the
  // SongSection share the same ref.
  const songCard = (
    <SongSection
      isPlaying={isPlaying}
      togglePlay={togglePlay}
      audioRef={audioRef}
      currentTime={currentTime}
      duration={duration}
      onSeek={seekTo}
    />
  );

  // Hidden mount for the audio element when SONG_PLACEMENT='hidden'.
  // Mounted-then-shown via the SongSection's <audio> tag normally; for 'hidden'
  // we need it somewhere so the ref attaches.
  const hiddenAudio = (
    <audio ref={audioRef} src={SONG_SRC} preload="metadata" style={{ display: 'none' }} />
  );

  return (
    <>
      {!opened && <Envelope onOpen={openEnvelope} />}

      <main className={`site-shell${opened ? ' is-opened' : ''}`}>
        <CakeScene cakeState={cake} onCakeTap={onCakeTap} />
        <ConfettiBurst burstKey={burstKey} />

        {SONG_PLACEMENT === 'after-hero' && songCard}

        <StatStrip />

        {SONG_PLACEMENT === 'after-stats' && songCard}

        {SONG_PLACEMENT === 'before-photos' && songCard}

        <PhotoTimeline onOpenLightbox={openLightbox} />

        {SONG_PLACEMENT === 'after-photos' && songCard}

        <MessageSection />

        {SONG_PLACEMENT === 'after-message' && songCard}

        <ShareRow />

        <footer>Made by {senderName} for {birthdayBoy}. Dresden birthday edition.</footer>

        {SONG_PLACEMENT === 'hidden' && hiddenAudio}
      </main>

      {lightboxIdx !== null && (
        <Lightbox index={lightboxIdx} onClose={closeLightbox} onNav={navLightbox} />
      )}

      <FloatingPlayer
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        isMuted={isMuted}
        toggleMute={toggleMute}
      />
    </>
  );
}
