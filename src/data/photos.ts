export type BirthdayPhoto = { title: string; caption: string; src: string };

// 28 photos showcasing the trajectory of our friendship over the years,
// ordered chronologically from December 2023 to May 2026.
export const birthdayPhotos: BirthdayPhoto[] = Array.from({ length: 28 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    title: '',
    caption: '',
    src: `/photos/mehdi-photo-${n}.webp`,
  };
});

export const elbePhoto: BirthdayPhoto | undefined = undefined;
