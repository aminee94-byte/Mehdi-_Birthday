# Friend Museum photos

The app displays the photo paths listed in `src/data/photos.ts`. Right now those paths are:

- `/photos/mehdi-photo-01.webp`
- `/photos/mehdi-photo-02.webp`
- `/photos/mehdi-photo-03.webp`
- `/photos/mehdi-photo-04.webp`
- `/photos/mehdi-photo-05.webp`
- `/photos/mehdi-photo-06.webp`
- `/photos/mehdi-photo-07.webp`
- `/photos/mehdi-photo-08.webp`
- `/photos/mehdi-photo-09.webp`
- `/photos/mehdi-photo-10.webp`
- `/photos/mehdi-photo-11.webp`
- `/photos/mehdi-photo-12.webp`
- `/photos/mehdi-photo-13.webp`
- `/photos/mehdi-photo-14.webp`
- `/photos/mehdi-photo-15.webp`

The Dresden background also references `/photos/dresden-elbe-bg.webp` from `src/dresdenStyles.css`.

Put the real image files in this folder with those exact names, or update the `src` values in `src/data/photos.ts` to match the files you upload.

Important:

- File names are case-sensitive after deployment (`Photo.JPG` is different from `photo.jpg`).
- The extension must match (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, etc.).
- Paths served from this `public/photos` folder must start with `/photos/`.
- If a picture does not load, the page now shows the missing path directly in the photo card so you can see which file name needs to be fixed.

Example:

```ts
{ title: 'Birthday moment', caption: 'A favorite memory.', src: '/photos/mehdi-photo-01.jpg' }
```
