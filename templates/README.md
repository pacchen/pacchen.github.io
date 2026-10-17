# Add another post by copying the template

“My first tapeout” is now a real page at `posts/my-first-tapeout.html`, with links on Posts and Home. The separate `templates/post-template.html` remains a reusable draft. It uses a simple sequence of paragraphs and one image.

## 1. Make a copy

Copy `templates/post-template.html` into the existing `posts` folder and give it a new filename, such as `posts/my-next-post.html`. Keep the original template for later. Do not overwrite `posts/my-first-tapeout.html` unless you intend to edit that post.

Both the template and real articles are one folder below the site root, so the `../` links work without changes.

## 2. Edit the article

The HTML comments mark the fields to edit:

- Browser title and description near the top.
- Article title and publication date. Follow the first post's `<time datetime="2026-10-16">October 16, 2026</time>` pattern, replacing both values with your date.
- Image source, image description (`alt`), and caption.
- Article paragraphs and any team acknowledgments.
- Remove the visible template notice before publishing.

To add text, copy a `<p>...</p>` block. To add another image, copy the `<figure class="post-figure">...</figure>` block. No section headings or cards are required within an article.

## 3. Add your image

Place the image in `assets`, for example `assets/next-post.jpg`. In the copied article, use:

```html
<img src="../assets/next-post.jpg" width="1200" height="675"
     alt="Describe the image shown here.">
```

Set width and height to the actual image dimensions. The layout scales it to fit. Edit the caption beneath it. The first tapeout post still uses a clearly labeled image placeholder, which you can replace the same way.

## 4. Update the Posts listing

In `posts.html`, find `<section class="post-list" aria-label="All posts">`. Copy its existing `<article class="post-list-item">...</article>` block and put the new copy first. Change its image, date, heading, summary, and both article links to the new post.

For example:

```html
<article class="post-list-item">
  <a href="posts/my-next-post.html" aria-label="Read My next post">
    <img src="assets/next-post.jpg" width="1200" height="675"
         alt="Describe the image.">
  </a>
  <div>
    <p class="post-meta">Your publication date · Your topic</p>
    <h2><a href="posts/my-next-post.html">My next post</a></h2>
    <p>A short summary of your article.</p>
    <a class="text-link" href="posts/my-next-post.html">Read the post</a>
  </div>
</article>
```

## 5. Update the Home preview

In `index.html`, find `id="latest-posts"`. Inside its `<div class="post-list">`, update the existing article to show your newest post, or duplicate it to show your two newest. Use the same listing block above but replace `<h2>` with `<h3>` to match the Home heading hierarchy. Keep the outer section heading and animation wrapper intact.

## 6. Preview and upload

Open the new article in your browser and check its image, paragraphs, and links. Upload the new article, its image, and the updated `posts.html` and `index.html` to your existing repository, preserving the folder structure. Upload `assets/style.css` too if you have changed the styling. The `templates` folder is only for your editing workflow and does not need to be uploaded.
