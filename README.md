# voxdstar-site

Landing page for VoxDSTAR, a D-STAR terminal for Android push-to-talk radios
and phones (source: `github.com/jcalado/voxdstar`).

Static: `index.html` (English), `pt/index.html` (Portuguese), one stylesheet,
two small scripts and the assets under `assets/`. No build step, no
dependencies. Serve the directory, or publish it with GitHub Pages.

    python3 -m http.server -d . 8000

## How the page works

The page is the radio's memory bank: five channels, M01 to M05, one per
section. `bank.js` tunes whichever channel is in view: the strip, the status
bar chip and the softkey counter follow it, and the left/right arrow keys step
channels like the radio's knob. Without the script it is plain scroll and
anchor links.

The detail lives in `docs/index.html` (and `pt/docs/`): getting started,
radios, keys, screen off, reflectors, display, how it works inside, and the
on-air status. It uses the same bank, with sections D01 to D08.

Screenshots and the hero display sit inside `assets/devices/p50.svg`, an
original drawing of a HYT-P50, at their native 240x320.

## Assets

- `assets/shots/` — screens captured over adb from a Hytera HYT-P50
  (240x320), shown at whole-pixel scale. The app was in English.
- `assets/brand/` — the app's launcher mark, from
  `app/src/main/res/drawable/ic_launcher_foreground.xml` in the app repo.
- `assets/fonts/` — Barlow, Barlow Condensed and Share Tech Mono (SIL OFL
  1.1), self-hosted woff2 from @fontsource 5.1.0, loaded by `assets/fonts.css`.

## Claims

What the page says is bounded by `PRODUCT.md`: linking and two-way contacts
are confirmed on REF and XLX; DCS, D-PRS, callsign routing and watch are
described as built in, not as proven on the air. The download points at
GitHub Releases, which 404s until a release is published.

`DESIGN.md` records the visual system; the page's direction lives in
`.impeccable/surfaces/index-html.md`.
