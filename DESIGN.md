---
name: VoxDSTAR
description: A D-STAR terminal for Android radios and phones; its site is the app's night display, carried to the web.
colors:
  screen: "#07090B"
  panel: "#101418"
  raised: "#182026"
  line: "#26303A"
  meter-off: "#1C242B"
  ink: "#EAF0F4"
  muted: "#8D9AA6"
  faint: "#56626D"
  linked-cyan: "#3CC8F2"
  module-orange: "#FF8C1A"
  on-module-orange: "#1A0E00"
  module-orange-hover: "#FFA347"
  module-orange-pressed: "#E67600"
  brand-amber: "#FFB547"
  rx-green: "#3EE08A"
  on-rx: "#021A0C"
  tx-red: "#FF5247"
  on-tx: "#1C0302"
  capture-well: "#030405"
typography:
  readout-hero:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "clamp(76px, 15.4vw, 236px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  readout:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "clamp(60px, 9.6vw, 150px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(42px, 4.4vw, 66px)"
    fontWeight: 600
    lineHeight: 1
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(38px, 3.7vw, 56px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.02em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.5vw, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.45
  key:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    letterSpacing: "0.02em"
  mono-line:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.08em"
  mono-value:
    fontFamily: "Share Tech Mono, ui-monospace, monospace"
    fontSize: "18px"
    fontWeight: 400
    letterSpacing: "0.04em"
rounded:
  tag: "4px"
  key: "6px"
spacing:
  hair: "1px"
  row: "16px"
  panel: "24px"
  strip-pad: "24px"
  block: "48px"
  gutter: "clamp(20px, 4.4vw, 64px)"
  status-bar: "56px"
  softkey-bar: "72px"
  strip: "300px"
components:
  button-primary:
    backgroundColor: "{colors.module-orange}"
    textColor: "{colors.on-module-orange}"
    typography: "{typography.key}"
    rounded: "{rounded.key}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.module-orange-hover}"
  button-primary-active:
    backgroundColor: "{colors.module-orange-pressed}"
  button-primary-softkey:
    backgroundColor: "{colors.module-orange}"
    textColor: "{colors.on-module-orange}"
    rounded: "{rounded.key}"
    padding: "12px 24px"
  chip-reflector:
    textColor: "{colors.linked-cyan}"
    typography: "{typography.mono-line}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  tag-language:
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  status-bar:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    height: "{spacing.status-bar}"
  softkey-bar:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    height: "{spacing.softkey-bar}"
  strip-row:
    textColor: "{colors.ink}"
    padding: "0 24px"
  strip-row-hover:
    backgroundColor: "{colors.raised}"
  strip-row-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.screen}"
  menu-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "16px 0"
  call-panel-rx:
    backgroundColor: "{colors.rx-green}"
    textColor: "{colors.on-rx}"
    padding: "16px 20px 20px"
  call-panel-tx:
    backgroundColor: "{colors.tx-red}"
    textColor: "{colors.on-tx}"
    padding: "16px 20px 20px"
  screen-capture:
    backgroundColor: "{colors.capture-well}"
    padding: "12px"
    width: "480px"
    height: "640px"
---

# Design System: VoxDSTAR

## Overview

**Creative North Star: "The Night Display"**

The site is the VoxDSTAR app's own night display, unchanged and enlarged to a browser: a near-black glass ground, a panel-coloured status line on top, a softkey bar along the bottom, hairline dividers between rows, and the reflector shown as a huge mono readout. The page is a memory bank of channels (M01 to M07), and the visitor steps them the way the radio's knob steps memories. Every colour, face and silhouette comes from the app's palette (`RadioViews.kt`, night values) and its screens on the HYT-P50, so an operator who uses the app recognises the page before reading it.

Density is a radio's: words are short, values sit right-aligned in mono, rows are numbered. The palette is dark neutrals with signal colours that each mean one thing: cyan is the link, orange the module and the one action, green receive, red transmit. Nothing is decorative. Depth is a flat set of bands and hairlines, never shadow. Motion has two jobs: a channel's readout re-renders in 120ms when it arrives, and the hero powers on and plays overs on the radio's display.

**Key Characteristics:**
- Dark, flat display surfaces in the app's exact night colours; no gradients, no shadows.
- Three type roles: Barlow for sentences, Barlow Condensed for headings, labels and keys, Share Tech Mono for anything the radio would display (reflector, module, callsign, value, counter).
- A sticky status bar and softkey bar frame the page like the app's top and bottom lines.
- Signal colours are semantic, each confined to one job.
- Radius only on controls and tags; every surface is square.
- Real screen captures, shown only at whole-pixel scale.

## Colors

A night-display palette: blue-black neutrals stepped by a few points of lightness, with four signal colours that each carry a single meaning.

### Primary
- **Module Orange** (`module-orange`): the module letter in every readout (the "C" in REF095 C) and the single action, Get the APK, in the softkey bar and in M07. It is the app's linked-highlight colour. Text on it is the near-black **On Orange** (`on-module-orange`); hover lightens to `module-orange-hover`, press darkens to `module-orange-pressed`.

### Secondary
- **Linked Cyan** (`linked-cyan`): at rest it appears only on the reflector chip in the status bar (text and 2px border). Otherwise it is interaction feedback: the 2px focus ring, hover on the status-bar links and the Menu softkey, and text selection.

### Tertiary
- **RX Green** (`rx-green`, text `on-rx`) and **TX Red** (`tx-red`, text `on-tx`): the call panels and nothing else. Green fills the panel while a station is heard; red only while you transmit.
- **Brand Amber** (`brand-amber`): the VoxDSTAR mark (the D outline) and the bold D in the wordmark. Nowhere else.

### Neutral
- **Glass Black** (`screen`): the page ground, and the text colour on the selection bar.
- **Band** (`panel`): status bar and softkey bar.
- **Raised Band** (`raised`): hover on a strip row; the shaded in-app stages of the signal path.
- **Hairline** (`line`): every divider and frame border; also the number colour on the selection bar.
- **Meter Off** (`meter-off`): the unlit segment of the signal bars.
- **Ink** (`ink`): primary text, the lit signal bars, and the fill of the selection bar.
- **Muted Ink** (`muted`): secondary text, ledes, row values and numbers, captions.
- **Faint Ink** (`faint`): declared from the app for disabled states; no disabled state ships on the site.
- **Capture Well** (`capture-well`): the frame behind a screen capture, a step darker than the ground so the captured display reads as glass.

### Named Rules
**The One Meaning Rule.** Each signal colour has one job. Cyan is the link (the reflector chip) and focus; orange is the module letter and the single action; green is receive; red is transmit; amber is the brand mark. A colour never borrows another's job, and none of them fills a resting surface outside its job.

**The App Palette Rule.** Neutrals and signal colours are the app's night values (`RadioViews.kt`). Add a colour only if the app has it; never retune one for the web.

## Typography

**Display Font:** Barlow Condensed 600 (with Arial Narrow, sans-serif)
**Body Font:** Barlow 400/600 (with system-ui, sans-serif)
**Label/Mono Font:** Share Tech Mono 400 (with ui-monospace, monospace)

**Character:** The app's own faces, self-hosted. Condensed Barlow gives headings and keys the clipped, upright voice of a radio's labels; Share Tech Mono is the display's character set, used for anything the radio would show as data. Body copy sets tabular figures (`tnum`).

### Hierarchy
- **Readout** (Mono 400, clamp(60px, 9.6vw, 150px), 0.92, -0.02em; the first channel at clamp(76px, 15.4vw, 236px)): each channel's reflector and module, the module letter in orange. Decorative to assistive technology (`aria-hidden`); the heading carries the meaning.
- **Display** (Condensed 600, clamp(42px, 4.4vw, 66px), 1): the page's one h1, max 20ch, balanced, no trailing period.
- **Headline** (Condensed 600, clamp(38px, 3.7vw, 56px), 1.02): each channel's h2, max 22ch, balanced, no trailing period (a period may separate two short sentences inside it).
- **Title** (Condensed 600, 24px, 1.15, 0.02em): menu-row names; 30px/600 for signal-path stages and radio names.
- **Body** (Barlow 400, 20px, 1.5): the base. Ledes run clamp(19px, 1.5vw, 22px) in muted ink, max 52 to 60ch; row descriptions 18px/1.45 muted, max 58ch.
- **Label** (Condensed 600, 17 to 19px, 0.02em, sentence case): status-bar links, the strip's Memories header.
- **Key** (Condensed 600, 22 to 26px, 0.02em, sentence case): softkeys and the action button.
- **Mono line and values** (Mono 400, 16 to 26px, 0.03 to 0.08em): the channel line (M01 · DPLUS), the reflector chip, the clock, row values, fact pairs, the channel counter.

### Named Rules
**The Display Data Rule.** Anything the radio would show as data (reflector, module, callsign, timing, key name, counter) is set in Share Tech Mono; sentences never are.

**The Uppercase Belongs To Readouts Rule.** Uppercase is only for mono data the app's screen shows in caps: the reflector chip, the channel line, row values, fact labels, the channel counter, the RX/TX tags and language codes. Links, headers, softkeys, buttons, headings and sentences stay in sentence case. No weight above 600.

## Layout

The page is a memory bank. A sticky status bar (56px) runs full width on top and a sticky softkey bar (72px) along the bottom. M01 is the hero: the pitch on the left (channel line, readout, headline, lede, the APK key with a ghost "How it works" link and a mono requirements line, then the fact pairs over a hairline) and the HYT-P50 main screen redrawn on the right. Under the hero the channel strip runs as a sticky row of tabs (64px, 58px under 900px) under the status bar, so channels use the full width. Each channel is a section at least one viewport tall (less the two bars and the strip), padded 48px on top and 96px below, with the side gutter clamp(20px, 4.4vw, 64px). Inside a channel the order is fixed: channel line, readout, headline, lede, then the body. Two-part bodies split into text and a 506px capture column, gap clamp(32px, 4vw, 72px), stacking under 1180px.

Under 1180px the strip's help line drops out and the hero display scales to 1.25x. Under 900px the hero stacks with the display below the pitch, the section links, signal bars and clock drop out, and channels lose the full-height minimum. Under 560px the softkey counter hides, captures drop to 1x, and the signal path and fact pairs stack. Vertical rhythm comes from fixed steps on a 4px grid: 16 to 20px between line and readout, 32px to the headline, 16px to the lede, 40 to 48px to the body. Every padding, gap and margin is a multiple of 4; only the pictorial signal bars and path arrows keep their drawn sizes.

**The Memory Bank Rule.** A page in this system is a sequence of channels stepped by scroll, arrow keys or the strip; new content becomes a channel with its own memory (reflector and module), not a free-standing band.

## Elevation & Depth

Flat. There is no `box-shadow` and no gradient anywhere. Depth comes from tonal bands (the panel-coloured status and softkey bars over the glass ground, the raised band for shaded stages and hover) and 1px hairlines. The bars sit above the content by stacking order only.

**The Hairline Rule.** Structure is drawn with 1px hairlines in `line`, never with shadow or tint washes.

## Shapes

Every surface, panel, frame and row is square-cornered. Radius exists only on controls and tags: 4px on the reflector chip, the language tag and the RX/TX tags; 6px on the orange action key; 2px on the focus ring. Borders are 1px hairlines for structure and 2px for tags (the chip in cyan, the call-panel tag in its panel's text colour). The signal path's step arrows are rotated hairline corners drawn over the dividers.

## Components

### Buttons
The single action is a lit orange key, like the radio's softkey.
- **Shape:** gently rounded (6px).
- **Primary (Get the APK):** module orange with near-black text, Condensed 600 26px, 0.02em, 16px by 32px; in the softkey bar 22px at 12px by 24px (19px at 12px by 16px under 560px). There is exactly one action, shown in the hero, the softkey bar and M07.
- **Hover / Focus:** background lightens to `module-orange-hover` and darkens to `module-orange-pressed` when pressed, 120ms; focus is the 2px cyan ring at 3px offset.
- **Softkey text (Menu):** ink Condensed 600 24px, no fill; cyan on hover.

### Chips
- **Reflector chip:** the current channel's reflector and module (REF095 C) in Share Tech Mono 20px cyan, 2px cyan border, 4px radius, in the status bar after the signal bars. It follows the channel in view. This is the app's own status line, not a "LINKED" label.
- **Language tag:** a hairline-bordered 4px tag (PT / EN) in the status-bar links.

### Status Bar
The app's top line: the mark and wordmark (amber D), four signal bars (three lit in ink, one in meter-off), the reflector chip, then section links in Condensed 600 19px sentence case, the language tag, and a mono HH:MM clock.

### Hero Display
The HYT-P50 main screen redrawn in HTML at the capture's 240x320 geometry (scaled 1.5x, 1.25x under 1180px, 1x under 560px): status line, channel line with the orange link icon, the reflector readout, a body, MENU and UNLINK softkeys. Without JavaScript it shows the idle line and an RX call panel. With `hero.js` and Motion (vendored at `assets/vendor/motion-14.9.0.js`, MIT), the hero powers on: the pitch lines rise in a 70ms stagger on a spring with no bounce, the readout re-renders, and the display rows light with a short flicker. Then overs cycle: the call panel springs up from below (bounce 0.18), its 12-segment level meter moves like speech, the timer counts, and it drops away when the over ends; RX green and TX red alternate with example callsigns. It runs only while the hero is in view and the tab is visible, and not at all under reduced motion. If the scripts never run, the hero fades in after 2.5s by CSS alone.

### Channel Strip
A sticky row of tabs under the hero, one per channel: the mono number (14px) over the name (Barlow 19px, 17px under 900px), hairline-separated, scrolling sideways when it doesn't fit. Hover is the raised band. The active tab is the raised band with ink text, a cyan number and a 3px cyan line along its top edge (cyan marks the tuned memory, as the link does in the app). On wide screens a help line with an inline arrow-key SVG closes the row. The tuned tab is kept centred in the row without moving the page.

### Menu Rows
The app's settings list: numbered rows, the name in Condensed 600 24px, the value right-aligned in muted mono 18px, and an optional muted description below, hairline above and below each row.

### Call Panels
Two solid panels, RX in green and TX in red, each with a 2px-bordered Condensed tag, a mono callsign at 34px and a short line of text. Example callsigns carry an "Example" caption beside them.

### Screen Captures
Real 240x320 captures from the HYT-P50, shown at whole-pixel scale only: 480x640 (2x) by default and 240x320 (1x) under 560px, with `image-rendering: pixelated`, inside a 1px hairline frame on the capture well, with a muted caption.

### The Knob (signature)
Whichever channel crosses a line a third of the way down the viewport is the tuned one: the strip's selection bar, the reflector chip and the softkey counter (M01 / M07) follow it. Left and right arrow keys step channels with an instant jump, no smooth scroll. The knob's motion is a 120ms mono re-render: the arriving channel's readout and the chip settle left to right through random glyphs. Under `prefers-reduced-motion` the text swaps without animation; without JavaScript the page is plain scroll and anchor links.

## Do's and Don'ts

### Do:
- **Do** take every colour from the app's night palette and keep each signal colour to its one job (cyan link and focus, orange module and action, green RX, red TX, amber mark).
- **Do** set reflectors, modules, callsigns, values and counters in Share Tech Mono, with the module letter in orange.
- **Do** mark the active tab with the raised band, a cyan number and the cyan top line.
- **Do** show screen captures only at whole-pixel scale (2x on desktop, 1x under 560px) with `image-rendering: pixelated`.
- **Do** keep motion to the readout re-render and the hero's power-on and overs, off under reduced motion, and keep the page working as plain anchors without JavaScript.
- **Do** draw structure with 1px hairlines and tonal bands.

### Don't:
- **Don't** wash the active channel or any resting surface in cyan; cyan at rest is the reflector chip only.
- **Don't** use orange for a second action or for decoration; there is one action.
- **Don't** use green or red outside the receive and transmit call panels.
- **Don't** use brand amber outside the mark and the wordmark's D.
- **Don't** add shadows, gradients, or radius on surfaces, panels or frames.
- **Don't** scale captures to fractional sizes or let them smooth.
- **Don't** add slides, smooth scrolling or easing to channel changes.
- **Don't** tag features as NEW or imply they're proven; a feature not yet confirmed on the air carries the value ON TEST (EM TESTE).
- **Don't** set Barlow Condensed above 600, track sentence-case labels wider than 0.02em, or use spacing off the 4px grid.
