# Islamic Pocket Book

A clean, professional search tool for **Ahmadiyya preachers** and students of religion.

Search across:
- **Quran** (via free public API)
- **Hadith**
- **Ahmadiyya Literature** (Pocket Book by Malik Abdur Rahman)

## Features
- English / Urdu language switch (with RTL support)
- Dark / Light mode
- Responsive design (mobile + desktop)
- Expandable result sections
- Popular Tabligh topics
- PDF download of the Pocket Book
- Simple click animations on desktop

## Deploy on Cloudflare Pages (Free)

1. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/)
2. Create a new project → Connect to GitHub
3. Select this repository (`Islamic-pocket-book`)
4. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/` (or leave default)
5. Deploy

That's it. No further configuration needed.

## Important: PDF File

Please upload the file `Pocket-Book.pdf` (the large scanned book) to the root of this repository so the download button and page links work.

## Local Testing

Just open `index.html` in a browser, or use any static server.
