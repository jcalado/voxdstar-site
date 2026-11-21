---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["pt/index.html"]
---

# VoxDSTAR landing page (voxdstar-site)

Mode: Persuade. Static web page at `index.html` (English) and `pt/index.html` (Portuguese); the product lives in `/home/joel/code/voxStar`.

Audience: amateur radio operators with an Android PTT radio (HYT-P50 class) or a phone, deciding whether to put VoxDSTAR on it. Action: download the APK from GitHub Releases (`github.com/jcalado/voxdstar/releases`); no release exists yet and the repo is private, so the link 404s until the owner publishes (owner's choice).

Proof: real screen captures from the HYT-P50 and the Pixel 9; the owner's two-way QSOs on REF and XLX; the hardware scene (side PTT, knob, screen off). No testimonials, counts or endorsements.

Constraints, binding: claim on-air only for REF/XLX linking and two-way QSOs; DCS, D-PRS, callsign routing and watch are features, never "proven". No ICOM/JARL marks; not affiliated. Start at boot listens only until opened. Demonstration data in the page (callsigns, BER, heard rows) is labelled as an example where a visitor could take it for live data.

## Direction contract

THESIS: The page is the radio's memory bank: seven channels M01 to M07, each a section, stepped by scroll, arrow keys or the channel strip like the knob steps memories. It refuses the split hero with a device beside copy over a card row.

OWN-WORLD: The app's night display, unchanged: #07090B glass ground, #101418 band bars, #26303A hairlines, Barlow and Barlow Condensed for words, Share Tech Mono for readouts, cyan #3CC8F2 only for LINKED and the active channel, orange #FF8C1A for the module letter and the single action, green #3EE08A RX and red #FF5247 TX only where receive and transmit are shown. Flat: no shadows, no gradients, radius 3 to 6px on controls only.

STORY: A ham sees a radio display they read daily, set to a reflector they know; the channel strip tells them the page is a bank they can step; each channel proves one thing; M07 hands them the APK.

FIRST VIEWPORT: Status bar full width on top: wordmark, signal bars, LINKED chip, CT7BLE, section links, language. Left three quarters: channel line "M01 · DPLUS · HOME", the readout XLX268 E in mono at about 230px with E in orange, the headline, one-sentence offer, three mono fact pairs. Right quarter: channel strip M01..M07, active row washed cyan. Bottom softkey bar: MENU, channel counter, GET THE APK as the lit orange key.

FORM: Memory channels, seventh on my ordered list of seven grounded structures, dealt as the lead. seed:ff137882d159e045

SIGNATURE: the knob. Scrolling, arrow keys or a strip click steps the channel: the readout re-renders to that channel's memory (reflector and module), the strip and the softkey counter follow, sticky while the bank is in view. Motion is one 120ms mono re-render, no slides; off under reduced motion, plain scroll and anchors without JS.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
