# Paul Chen - personal website

A static, four-page academic website for GitHub Pages. No installation or build step is needed.

## Publish on GitHub

1. Create a public repository named **pacchen.github.io** under the `pacchen` account, or use another repository name for a project site.
2. Upload `index.html`, `about.html`, `publications.html`, `posts.html`, the `posts` folder, the `assets`, `images`, and `files` folders, and `.nojekyll` to the repository root. Keep the folder structure intact.
3. In **Settings > Pages**, select **Deploy from a branch**, then `main` and `/ (root)`, and save.
4. GitHub displays the live website address when deployment finishes.

All internal links are relative and work under a repository subpath.

## Pages and assets

- **index.html:** concise Home introduction, the two latest publication previews, a Posts preview, and professional links.
- **about.html:** detailed introduction, personal photo, resume button, education, teaching, and experience.
- **publications.html:** publication titles, authors, venues, and paper links.
- **posts.html:** Posts index, currently listing “My first tapeout.”
- **posts/my-first-tapeout.html:** the full tapeout post, dated November 2026, with the supplied chip die photograph, displayed at a maximum of 100 px, plus the bench photo. The post records sending the chip to Intel in February 2025 and receiving it back in late 2025.
- **files/Paul-Chen-Resume.pdf:** your uploaded files/Paul-Chen-Resume-website.pdf, copied byte-for-byte without changes, as requested.
- **images/paul-chen.jpg:** browser-compatible JPEG copy of your supplied personal photo, used on About Me.
- **images/tapeout-bench.jpg:** supplied bench photograph with its orientation normalized for browsers.
- **images/chip-die.jpg:** supplied 240 x 240 chip die photograph, displayed at 100 px in the post and up to 240 px in listing previews.
- **images/post-image-placeholder.svg:** retained for the reusable post template.
- **assets/style.css:** Georgia for titles and Arial for body text. Main heading sizes: 56, 36, 24 px; smaller h4 item titles use 16 px. Body sizes: 16, 14 px. Header name uses Georgia.
- **assets/main.js:** reversible slide-in/slide-out transitions for the Home introduction, publications preview, and Posts preview. Respects reduced-motion preferences and keeps content available without JavaScript.

The website uses a plain-text Georgia name in the header and no logo or branded favicon. Links use underlines rather than diagonal arrows. The footer displays chenpaul [at] usc [dot] edu without a location. The website ZIP contains only publishing files and this guide; earlier logo explorations remain separate.

## Folder organization

- `assets/`: styles and scripts.
- `images/`: website images and reusable image placeholders.
- `images/originals/`: untouched original photo uploads, kept locally and excluded from the upload ZIP.
- `files/`: the linked resume and the original website resume upload. The upload ZIP includes only the linked copy.

## Content notes

- Google Scholar, ACORN, and the FPGA/Parallel Computing Lab are linked throughout the relevant pages.
- Regional I-Corps lists West Hub ZAP and BOOM completion in 2025, as supplied by you.
- Chipstitch is marked forthcoming for November 2026 and links to https://arxiv.org/abs/2512.10089. Update the conference status when appropriate.
- Home previews are static HTML. When adding a publication or post, update its full page and the corresponding preview in index.html. The Posts preview currently links to “My first tapeout.”
- The Research page has been removed; its previous navigation and calls to action now point to Publications. If updating an existing GitHub repository, delete research.html there too.
- Replace the public resume PDF when you update it, retaining the same filename to keep the button working.

## Add a post

Copy `templates/post-template.html` into a new `posts` folder and rename it, such as `posts/my-first-tapeout.html`. The template includes an image placeholder and an editable Intel 16 nm BERT tapeout draft. Follow `templates/README.md` for the exact image, Posts listing, and Home preview steps. The first post is now listed on Posts and Home; copy the template for future articles. Keep the templates folder locally; it is optional when uploading the website.

## Local preview

Open index.html in a browser, or serve the folder with any static web server. External links require an internet connection.
