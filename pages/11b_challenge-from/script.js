import gsap from 'gsap';

const card = document.querySelector('#card');
const front = document.querySelector('.card-front');
const back = document.querySelector('.card-back');

const flipHalfDuration = 0.2;

const flipBack = gsap.to(back, {
  rotateY: 0,
  duration: flipHalfDuration,
  delay: flipHalfDuration,
});

flipBack.pause();

const flipFront = gsap.to(front, {
  rotateY: -180,
  boxShadow: '0',
  duration: flipHalfDuration,
});

flipFront.pause();

card.addEventListener('mouseenter', () => {
  flipFront.play();
  flipBack.play();
});

card.addEventListener('mouseleave', () => {
  flipFront.reverse();
  flipBack.reverse();
});
