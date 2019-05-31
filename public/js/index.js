$(document).ready(function() {
  const nameAnim = anime.timeline({
    autoplay: true
  });
  const moveNameRight = {
    targets: '.alpha',
    translateX: '13vmin',
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
    delay: anime.stagger(50),
    endDelay: 400,
    loop: true,
    offset: '+=100' 
  };

  const play = {
    targets: '#play-button',
    rotate: '2turn',
    duration: 1000,
    opacity: {
      value: 1,
      duration: 300,
      easing: 'linear'
    },
    offset: '+=100' 
  }
  nameAnim.add(moveNameRight).add(rotateName).add(play);
  //anime.set('.alpha', {backgroundColor: '#ff2801'})

  const letters = $('.alpha');

});
