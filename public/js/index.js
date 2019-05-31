
const nameAnim = anime.timeline({
  autoplay: true
});
const moveNameLeft = {
  targets: '.alpha',
  translateX: 250,
  duration: 1000,
  easing: 'easeInOutSine',
  delay: anime.stagger(30),
  endDelay: 400
};

const rotateName = {
  targets: '.alpha',
  rotate: '1turn',
  duration: 1000,
  easing: 'easeInOutSine',
  delay: anime.stagger(30),
  endDelay: 400,
  loop: true,
  offset: '+=100' 
};
nameAnim.add(moveNameLeft)
.add(rotateName);
//anime.set('.alpha', {backgroundColor: '#ff2801'})

const letters = $('.alpha');


