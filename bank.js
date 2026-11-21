// The knob: whichever channel is in view becomes the one shown in the strip, the status chip and the softkey counter.
// Left/right arrow keys step channels the way the radio's knob does. Without this file the page is plain scroll and links.
(() => {
  const channels = [...document.querySelectorAll('.ch[data-mem]')];
  const links = new Map([...document.querySelectorAll('.strip a')].map(a => [a.hash.slice(1), a]));
  const chip = document.querySelector('[data-chip]');
  const count = document.querySelector('[data-count]');
  const clocks = document.querySelectorAll('[data-clock]');
  const still = matchMedia('(prefers-reduced-motion: reduce)');
  const GLYPHS = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';
  let current = null;

  // the one motion: a 120 ms mono re-render, characters settling left to right. Works on an element or a text node.
  function retune(node, text = node && node.textContent) {
    if (!node) return;
    if (still.matches) { node.textContent = text; return; }
    const start = performance.now();
    const frame = now => {
      const t = Math.min(1, (now - start) / 120);
      const settled = Math.floor(t * text.length);
      node.textContent = [...text].map((c, i) => i < settled || c === ' ' ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join('');
      if (t < 1) requestAnimationFrame(frame); else node.textContent = text;
    };
    requestAnimationFrame(frame);
  }

  // the arriving channel's own readout retunes: the reflector, then the orange module letter
  function retuneReadout(ch) {
    const r = ch.querySelector('.readout');
    if (!r) return;
    r.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE ? n.nodeValue.trim() : n.nodeType === Node.ELEMENT_NODE) retune(n); });
  }

  function select(ch) {
    if (!ch || ch === current) return;
    const first = current === null;
    current = ch;
    if (!first) retuneReadout(ch);
    links.forEach((a, id) => a.setAttribute('aria-current', id === ch.id ? 'true' : 'false'));
    if (chip && chip.textContent !== ch.dataset.mem) retune(chip, ch.dataset.mem);
    if (count) count.innerHTML = `<b>${ch.id.toUpperCase()}</b> / M${String(channels.length).padStart(2, '0')}`;
    // keep the tuned memory centred in the strip's own row, without moving the page
    const a = links.get(ch.id), row = a && a.closest('ol');
    if (row && row.scrollWidth > row.clientWidth) {
      const left = row.scrollLeft + a.getBoundingClientRect().left - row.getBoundingClientRect().left - (row.clientWidth - a.offsetWidth) / 2;
      row.scrollTo({ left, behavior: still.matches ? 'auto' : 'smooth' });
    }
  }

  // the channel whose body crosses a line a third of the way down the viewport is the one tuned
  const io = new IntersectionObserver(entries => {
    const hit = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (hit) select(hit.target);
  }, { rootMargin: '-33% 0px -66% 0px' });
  channels.forEach(ch => io.observe(ch));
  select(channels[0]);

  addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    if (e.target.closest('input, textarea, select, [contenteditable]')) return;
    const i = channels.indexOf(current) + (e.key === 'ArrowRight' ? 1 : -1);
    const next = channels[Math.max(0, Math.min(channels.length - 1, i))];
    if (next === current) return;
    e.preventDefault();
    next.scrollIntoView({ behavior: 'auto' }); // a detent, not a slide: the readout's re-render is the motion
    history.replaceState(null, '', '#' + next.id);
  });

  if (clocks.length) {
    const tick = () => { const d = new Date(); const t = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; clocks.forEach(c => { c.textContent = t; }); };
    tick(); setInterval(tick, 15000);
  }


  window.VoxBank = { retune }; // hero.js tunes the display's callsign with the same re-render
})();
