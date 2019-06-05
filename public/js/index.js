$(document).ready(function() {
  let count = 0;
  
  // Play-Button fading in
  const nameAnim = anime.timeline({
    loop: false,
    autoplay: true
  });
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

  // On-Click Animation
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
      value: [0,1],
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
    targets: ['#username-heading', '.alpha'],
    duration: 3000,
    opacity: {
      value: 1, 
      duration: 3000,
      easing: 'linear'
    },
    
  }
  const removeButton = {
    targets: '#play-button',
    duration: 500,
    opacity: 0,
    easing: 'linear'
  }

  const showUp = document.querySelector('.show-up');
  const getProfile = {
    targets: '.show-up',
    duration: 500,
    easing: 'linear',
    translateX: anime.get(showUp, 'width', 'px').toString()
  }


  navAnim.add(rotatePlayButton).add(bringNavDown, '-=3000').add(bringName, '-=3000').add(getProfile, '-=500').add(removeButton);
  

  $('#play-button').on('click', function() {
    count += 1;
    navAnim.play();
    
    navAnim.finished.then(function() {
     $('#play-button').off();
    });
    
  });
});



