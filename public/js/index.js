$(document).ready(function() {
  const nameAnim = anime.timeline({
    autoplay: true
  });
  /*const moveNameRight = {
    targets: '.alpha',
    translateX: '11vmin',
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
  };*/

  const play = {
    targets: '#play-button',
    duration: 1000,
    opacity: {
      value: 1,
      duration: 500,
      easing: 'linear'
    }
  }
  nameAnim.add(play, '+=100');

  const navAnim = anime.timeline({
    autoplay: false
  });
  const rotatePlayButton = {
    targets: '#play-button',
    rotate: '2turn',
    duration: 3000,
    easing: 'easeInOutSine',
    top: '5vh',
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
      value: '+=12vh',
      duration: 3000
    },
    duration: 3000,
  }
  const bringName = {
    targets: '#username-heading',
    duration: 3000,
    opacity: {
      value: 1, 
      duration: 3000,
      easing: 'linear'
    },
    
  }
  const removeButton = {
    targets: '#play-button',
    duration: 3000,
    opacity: 0,
    easing: 'linear'
  }
  const getProfile = {
    targets: '.show-up',
    duration: 500,
    easing: 'linear',
    translateX: '+=100%'
  }
  navAnim.add(rotatePlayButton).add(bringNavDown, '-=3000').add(bringName, '-=3000').add(getProfile, '-=500');
  
  $('#play-button').on('click', function() {
   navAnim.play();
  });
});



