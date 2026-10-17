// Reversible section transitions: scroll down to slide out, scroll up to return.
// Geometry belongs to the stationary section; only its inner content moves.
(() => {
  const sections = [...document.querySelectorAll('.home-main > .scroll-section')];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!sections.length || !('IntersectionObserver' in window)) return;
  let observer;
  const exitInset = Math.min(220, Math.round(window.innerHeight * .24));
  const enterInset = 64;

  function reset() {
    observer?.disconnect();
    sections.forEach(section => section.classList.remove('scroll-animated', 'is-ahead', 'is-past', 'is-active'));
  }

  function setState(section, active, above) {
    section.classList.toggle('is-active', active);
    section.classList.toggle('is-past', !active && above);
    section.classList.toggle('is-ahead', !active && !above);
  }

  function start() {
    reset();
    if (motion.matches) return;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      setState(section, rect.bottom > exitInset && rect.top < window.innerHeight - enterInset, rect.bottom <= exitInset);
      section.classList.add('scroll-animated');
    });
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setState(entry.target, entry.isIntersecting, entry.boundingClientRect.bottom <= exitInset);
      });
    }, { rootMargin: `-${exitInset}px 0px -${enterInset}px 0px`, threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  start();
  motion.addEventListener('change', start);
})();
