// The hero powers on like the radio, then the display carries overs: idle, a station heard (RX, green),
// our own over (TX, red), each with a moving audio level. Example callsigns. Needs Motion (assets/vendor);
// without it, or under reduced motion, the hero is the still frame in the HTML.
(() => {
  const root = document.documentElement;
  const hero = document.querySelector('.hero');
  const M = window.Motion;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!hero || !M || still) { root.classList.remove('m'); return; }
  const { animate, stagger, inView } = M;
  const retune = (window.VoxBank && window.VoxBank.retune) || ((n, t) => { n.textContent = t; });

  // ---- power on: the readout tunes in, the pitch rises line by line, the display lights row by row
  const lines = hero.querySelectorAll('.pitch [data-in]');
  animate(lines, { opacity: [0, 1], y: [18, 0] }, { delay: stagger(0.07, { startDelay: 0.1 }), type: 'spring', bounce: 0, visualDuration: 0.5 });
  const readout = hero.querySelector('.readout');
  readout.childNodes.forEach(n => { if (n.nodeType === 1 || n.nodeValue.trim()) setTimeout(() => retune(n, n.textContent), 180); });
  const disp = hero.querySelector('.disp');
  animate(disp, { opacity: [0, 1] }, { delay: 0.35, duration: 0.2 });
  animate(disp.querySelectorAll('.d-status, .d-ch, .d-ref, .d-body, .d-keys'), { opacity: [0, 1, 0.35, 1] }, { delay: stagger(0.06, { startDelay: 0.45 }), duration: 0.32, times: [0, 0.4, 0.6, 1] });
  root.classList.remove('m');

  // ---- the overs
  const call = hero.querySelector('[data-call]');
  const idle = hero.querySelector('[data-idle]');
  const q = sel => call.querySelector(sel);
  const segs = [...call.querySelectorAll('[data-lvl] i')];
  const overs = [
    ['RX', 'EA1XYZ', 'BER 0.4%', 7],
    ['TX', 'CT7BLE', 'TOT 180 S', 5],
    ['RX', 'PU2ABC', 'BER 1.1%', 6],
    ['RX', 'G4XYZ', 'BER 0.0%', 5],
  ];
  call.style.transform = 'translateY(160%)';
  let i = -1, running = false, timer = 0, meter = 0, wait = 0;

  // speech, roughly: syllables of 120 to 300 ms with short gaps, a little noise on top
  let syl = 0, gain = 0;
  function level() {
    if (--syl <= 0) { syl = 2 + ((Math.random() * 3) | 0); gain = Math.random() < 0.18 ? 0.08 : 0.45 + Math.random() * 0.55; }
    const lit = Math.round(segs.length * Math.min(1, gain * (0.8 + Math.random() * 0.3)));
    segs.forEach((s, k) => s.classList.toggle('on', k < lit));
  }

  function next() {
    if (!running) return;
    i = (i + 1) % overs.length;
    const [t, cs, line, secs] = overs[i];
    call.className = `d-call ${t.toLowerCase()}`;
    q('[data-call-t]').textContent = t;
    q('[data-call-q]').textContent = line;
    q('[data-call-s]').textContent = '00:00';
    q('[data-call-cs]').textContent = cs;
    animate(idle, { opacity: 0 }, { duration: 0.15 });
    animate(call, { y: ['160%', '0%'] }, { type: 'spring', bounce: 0.18, visualDuration: 0.38 });
    retune(q('[data-call-cs]'), cs);
    let s = 0;
    timer = setInterval(() => { s++; q('[data-call-s]').textContent = `00:${String(s).padStart(2, '0')}`; }, 1000);
    meter = setInterval(level, 100);
    wait = setTimeout(() => end(), secs * 1000);
  }

  function end(quick) {
    clearInterval(timer); clearInterval(meter); clearTimeout(wait);
    segs.forEach(s => s.classList.remove('on'));
    if (quick) return;
    animate(call, { y: '160%' }, { duration: 0.22, ease: 'easeIn' });
    wait = setTimeout(next, 1600);
  }

  // run only while the hero is on screen and the tab is visible
  const start = () => { if (running) return; running = true; wait = setTimeout(next, i < 0 ? 2200 : 600); };
  const stop = () => { if (!running) return; running = false; end(true); call.style.transform = 'translateY(160%)'; };
  inView(hero, () => { start(); return stop; }, { amount: 0.3 });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else if (hero.getBoundingClientRect().bottom > 0) start(); });
})();
