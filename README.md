# ResumeRise website backup

Backup date: 9 October 2026
Source commit: 64f90ad6c7d1962e971232d62dfe346a9a980fd3
Website: https://resumerise-cv-studio.akilawicks4567.chatgpt.site/

## Contents

- dist/index.html: Home page
- dist/about/index.html: About Us page
- dist/services/index.html: Services page
- dist/designs/index.html: CV portfolio page
- dist/contact/index.html: Contact page
- dist/style.css: Website styles
- dist/app.js: Navigation and CV viewer interactions
- dist/assets/: Original logo, artwork, and all eight CV pages
- dist/robots.txt and dist/sitemap.xml: Search-engine discovery settings
- dist/cv-data.json: CV page list
- build.py: Optional Python source that generates the HTML pages

## Preview on your computer

Extract the ZIP. Open a terminal in the extracted ResumeRise folder and run:

    python -m http.server 8000 --directory dist

On Windows, you can use `py` instead of `python`.
Open http://localhost:8000 in your browser. Use a local server instead of
opening HTML files directly: the website uses paths beginning with `/`.

## Restore or host elsewhere

Upload the CONTENTS of dist/ to the root folder of a static website host.
No Node.js, npm install, database, or backend server is needed.
Keep all assets and page folders together.

To edit the generated HTML, change the HTML files directly. Alternatively,
edit build.py and run `python build.py` from this folder. Running build.py
replaces the generated HTML files, robots.txt, sitemap.xml, and cv-data.json.
Edit dist/style.css and dist/app.js directly for styles and interactions.

If you move the website to a different address, update SITE_URL in build.py
and run it again to regenerate canonical links and the sitemap.

This backup contains the website files. Hosting permissions and any future
Google Search Console account settings are managed separately.
