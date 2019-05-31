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
    duration: 1000,
    opacity: {
      value: 1,
      duration: 1000,
      easing: 'linear'
    }
  }
  nameAnim.add(moveNameRight).add(rotateName).add(play, '+=100');
  //anime.set('.alpha', {backgroundColor: '#ff2801'})

  const navAnim = anime.timeline({
    autoplay: false
  });
  const rotatePlayButton = {
    targets: '#play-button',
    rotate: '2turn',
    duration: 3000,
    easing: 'easeInOutSine',
  }
  const bringNavDown = {
    targets: '.navlinks',
    easing: 'easeInOutSine',
    opacity: {
      value: 1,
      duration: 3000,
      easing: 'linear'
    },
    translateY: {
      value: '+=50px',
      duration: 3000
    },
    duration: 3000,
  }
  navAnim.add(rotatePlayButton).add(bringNavDown, '-=2950');
  const letters = $('.alpha');
  $('#play-button').on('click', function() {
   navAnim.play();
  });
});



