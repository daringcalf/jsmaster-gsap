import gsap from 'gsap';

// Facebook-style floating reaction bubbles
// Contract:
//  - Click any .reactions button -> spawn an emoji bubble at button center.
//  - Bubble scales up, drifts upward (slight x variance), rotates, then fades out.
//  - Element removed from DOM after animation to avoid leaks.

const reactions = document.querySelector('.reactions');
const buttons = document.querySelectorAll('.reactions button');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const emoji = btn.dataset.emoji || btn.textContent.trim();

    const rect = btn.getBoundingClientRect();

    spawnBubble(emoji, rect.x, rect.y);
  });
});

function spawnBubble(emoji, startX, startY) {
  const el = document.createElement('span');
  el.classList.add('bubble');
  el.textContent = emoji;
  document.body.appendChild(el);

  // Randomized motion parameters for organic feel
  const driftX = gsap.utils.random(-50, 50, 1);
  const floatY = gsap.utils.random(140, 220, 1);
  const spin = gsap.utils.random(-270, 270, 1);
  const scalePeak = gsap.utils.random(1.5, 3);
  const duration = gsap.utils.random(1.2, 1.7);

  gsap.fromTo(
    el,
    {
      left: startX,
      top: startY,
      scale: 0.3,
    },
    {
      left: startX + driftX,
      top: startY - floatY,
      scale: scalePeak,
      rotate: spin,
      opacity: 0,
      duration: duration,
      ease: 'power2.out',
      onComplete: () => el.remove(),
    },
  );
}
