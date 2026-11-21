# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS, like `~/code/voxTetra-site`: no build step, self-hosted fonts, assets under `assets/`, publishable
with GitHub Pages. English at the root, Portuguese under `pt/`, linked to each other.

## Users

Amateur radio operators who use D-STAR, or want to, without a D-STAR radio or a hotspot. They run VoxDSTAR on an
Android push-to-talk radio (the Hytera HYT-P50 class, also the Smartship m3_h) or on an ordinary phone, to link to
D-STAR reflectors and talk. The author (CT7BLE, Portugal) uses it on a HYT-P50 and a Pixel 9; the audience reading
the site is deciding whether to put it on their own device.

## Product Purpose

VoxDSTAR is a D-STAR terminal for Android: link to a REF, XLX/XRF or DCS reflector module, hear each over with the
caller's callsign, and transmit with push-to-talk. Success is that it feels and behaves like a dedicated D-STAR
radio: state at a glance, hardware keys do the work, and it stays on the air with the screen off.

## Positioning

The AMBE vocoder runs in software on the device (xombe, an independent open implementation), so no DV dongle, no
DVSI chip, no hotspot and no radio hardware sit between the phone and the reflector. The app speaks DPlus, DExtra and
DCS itself, and logs in to the D-STAR trust server like a hotspot for REF reflectors.

## Operating Context

- Held in the hand or worn, often outdoors, glanced at during overs; the screen may be off for long periods while
  listening.
- Driven by hardware where there is any: PTT (side key, F2 on the HYT-P50), the channel knob steps memories or
  modules, a learnable key map, headset and Bluetooth media buttons as PTT. Touch on phones.
- Smallest target screen 240x320 px at 120 dpi (HYT-P50); phones are larger and get a destination deck.

## Capabilities and Constraints

Confirmed on the air (owner, 2026-11): linking to REF (REF095, DPlus) and XLX (XLX268, DPlus) reflectors, and two-way
QSOs: others hear our TX and we hear them.

Implemented (in the app, may be mentioned as features):
- Reflector memories with names, a Home memory and Return home; the knob steps them. Reflector directory from the
  Pi-Star host lists and the XLX list; Who's there reads an XLX dashboard's modules, nodes and last heard.
- UR field: CQCQCQ, Echo (offline codec test on the device), Unlink, Info, callsign calls; RX→CS call-back.
- Screen-off operation in a foreground service; Wake on RX, Wake on TX, Keep on TX; reconnect with backoff.
- Tones, busy-channel lockout, TX time-out, PTT hold or latch, roger beep, mic leveler, RX loudness, audio routing
  (speaker, earpiece, wired, Bluetooth).
- Slow-data message, late entry, MY suffix, reception quality (BER, lost frames), Heard list with replay of the last
  overs (memory only).
- Voice or Morse announcements, over tones; English and Portuguese UI.
- Settings and memories shared as a QR code or `voxdstar://` link.
- Start at boot (listens only until the app is opened, an Android rule), auto-link to the last reflector or Home.
- HYT-P50 home-screen card showing reflector, module and caller.

Not verified on the air yet; the site may list them as features but must not claim they have been proven against
the network: DCS links both ways, D-PRS positions, callsign routing over ircDDB (QuadNet), watching extra modules.
Callsign routing only receives where UDP 40000 reaches the device.

Constraints:
- Android 8.0+ (minSdk 26). REF reflectors need a callsign registered in the D-STAR gateway trust system; XLX
  generally does not, though some use allow lists. A licence and callsign are the operator's responsibility.
- A start at boot cannot transmit until the app is opened once (Android withholds the microphone).

## Brand Commitments

Name: VoxDSTAR (capital V, "DSTAR" all caps, no hyphen). Package `com.jcalado.voxdstar`; source repo
`github.com/jcalado/voxdstar` (private today). Sibling of voxTetra, VoxDMR and VoxLink by the same author. It is
not affiliated with or endorsed by ICOM, JARL or DVSI; "D-STAR" is used descriptively and no ICOM or JARL marks or
logos may appear. The app icon is in `~/code/voxStar/app/src/main/res/drawable/ic_launcher_foreground.xml`.

## Evidence on Hand

- The working app on a HYT-P50 and a Pixel 9 (screenshots can be captured from both over adb).
- The author's own two-way QSOs on REF and XLX reflectors.
- No users, testimonials, download counts, press, or reflector-operator endorsements; do not imply any.
- No release published yet: the download points to GitHub Releases and 404s until the owner publishes one (owner's
  choice, 2026-11-18).

## Product Principles

- A radio first: state at a glance, keys before touch.
- Never transmit by accident; PTT is deliberate and obvious when live.
- No hardware in the way: the codec and the protocols live in the app.
- Works on the smallest screen first, then scales up.
- Claim only what has been heard on the air.
