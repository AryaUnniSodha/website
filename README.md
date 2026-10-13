# InAmigos Foundation — NGO Website Prototype

## Run it
Open `index.html` in any modern browser. No install, no backend, no API keys.
Click **Show design notes** (bottom right) to see the five numbered feature callouts on the page.

## Files
- `index.html`, `assets/styles.css`, `assets/app.js` — the website
- `features.html` — five-feature presentation layout (1920px wide)
- `exports/website-full-page.png` — full-page website screenshot
- `exports/feature-highlights.png` (2x) and `.pdf` — presentation layout exports
- `tools/*.py` — Playwright scripts that regenerate the exports (`pip install playwright && playwright install chromium`)

## Functional
Navigation scrolling, mobile menu, donation amount buttons, custom amount, one-time/monthly choice, campaign buttons (prefill the cause in the donation card), "How we measure impact" and "Explore more stories" toggles, volunteer form validation and demo confirmation.

## Illustrative only
- No payment is processed; no payment partner exists in this prototype.
- Volunteer form data is neither sent nor stored.
- Impact figures are placeholders (`[Verified total]`); campaign progress bars are illustrative.
- The story and quote are fictional samples.
- Address, phone, email, social handles and registration details are marked "to be confirmed".
- Images are the supplied AI-generated project images, not real beneficiary photographs.

## Note
This is HTML/CSS/JS, not a native Figma file. To use it in Figma: paste `exports/website-full-page.png` and `exports/feature-highlights.png` as reference images.

## Update
Merged ideas from the InAmigos Feature Proposal: Purpose/Benefit notes per feature, an "Openness by design" document list, richer volunteer interest areas, and a "Before launch" checklist (see `board.html` and `exports/feature-board.*`).
