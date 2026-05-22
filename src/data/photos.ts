export type BirthdayPhoto = {
  src: string;        // large/original
  srcMedium: string;  // ~1000px
  srcSmall: string;   // ~600px
  year: number | null;
  alt: string;
};

type Entry = { index: number; year: number | null };

const entries: Entry[] = [
  { index: 1,  year: 2023 },
  { index: 2,  year: 2024 },
  { index: 3,  year: 2024 },
  { index: 4,  year: 2024 },
  { index: 5,  year: 2024 },
  { index: 6,  year: 2024 },
  { index: 7,  year: 2024 },
  { index: 8,  year: 2024 },
  { index: 9,  year: 2024 },
  { index: 10, year: 2024 },
  { index: 11, year: 2024 },
  { index: 12, year: 2024 },
  { index: 13, year: 2024 },
  { index: 14, year: 2024 },
  { index: 15, year: 2024 },
  { index: 16, year: 2024 },
  { index: 17, year: 2024 },
  { index: 18, year: 2025 },
  { index: 19, year: 2025 },
  { index: 20, year: 2025 },
  { index: 21, year: 2026 },
  { index: 22, year: 2026 },
  { index: 23, year: 2026 },
  { index: 24, year: 2026 },
  { index: 25, year: 2026 },
  { index: 26, year: 2026 },
  { index: 27, year: null },
  { index: 28, year: null },
];

const pad = (n: number) => String(n).padStart(2, '0');

export const birthdayPhotos: BirthdayPhoto[] = entries.map(({ index, year }) => {
  const n = pad(index);
  return {
    src: `/photos/mehdi-photo-${n}.webp`,
    srcMedium: `/photos/mehdi-photo-${n}@medium.webp`,
    srcSmall: `/photos/mehdi-photo-${n}@small.webp`,
    year,
    alt: `Memory ${index} with Mehdi`,
  };
});

// Year labels with story headings.
export type YearLabel = { year: number | null; title: string; subtitle: string };
export const yearLabels: YearLabel[] = [
  { year: 2023, title: '2023', subtitle: 'Where it started' },
  { year: 2024, title: '2024', subtitle: 'The year of everything' },
  { year: 2025, title: '2025', subtitle: 'Quieter, still us' },
  { year: 2026, title: '2026', subtitle: 'Right up to now' },
  { year: null, title: 'And these ones', subtitle: 'No date, still ours' },
];

export type GroupedPhotos = { label: YearLabel; photos: BirthdayPhoto[] };

export function groupPhotosByYear(): GroupedPhotos[] {
  return yearLabels
    .map(label => ({
      label,
      photos: birthdayPhotos.filter(p => p.year === label.year),
    }))
    .filter(group => group.photos.length > 0);
}
