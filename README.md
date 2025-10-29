# Sarah Pyeon — Portfolio

A simple, fast, and modern static website for college applications. No build tools required — open index.html directly or host on GitHub Pages/Netlify.

## Customize Content

- Name and labels: edit index.html hero, about, and stats.
- Activities: edit the cards in the #activities section.
- Resume: replace assets/Sarah_Pyeon_Resume.pdf (optional) and adjust resume highlights.
- Publications: update titles, platforms, and links in #publications.
- YouTube: replace VIDEO_ID in the iframe src under #video with the video ID from your URL.
- GoFundMe: replace the Donate link URL in #donate with your campaign URL.
- Contact: change the form action to your Formspree endpoint or another form backend.
- Images: replace assets/avatar.jpg, assets/favicon.png, assets/og-image.jpg.

## Files

- index.html — main page with all sections
- assets/styles.css — styling and layout
- assets/site.js — small enhancements (mobile menu, smooth scroll, dynamic year)

## Local Preview

- Double-click index.html to open in your browser, or run a local server with: python3 -m http.server 8080 (then visit http://localhost:8080)

## Deploy

GitHub Pages:
1. Create a new repo and push these files.
2. In GitHub settings → Pages, choose branch main, folder /root.
3. Wait for the site to publish at https://<username>.github.io/<repo>/.

Netlify:
1. Drag-and-drop the folder onto Netlify, or connect your repo.
2. Publish directory is the project root.

## Accessibility & SEO

- Semantic sections and accessible navigation; skip link included.
- Meta description, Open Graph tags; update image paths and text.

## License

You own your content. Use and modify freely.
