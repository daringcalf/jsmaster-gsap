import gsap from 'gsap';

gsap.to('.toast', {
  y: -20,
  opacity: 1,
  duration: 0.3,
  stagger: {
    each: 1.8,
    onComplete: function () {
      gsap.to(this.targets()[0], {
        x: 300,
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });
    },
  },
});
