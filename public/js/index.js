$(document).ready(function () {
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
  const mobileAnim = anime.timeline({
    autoplay: false
  });
  const desktopAnim = anime.timeline({
    autoplay: false
  });
  const rotatePlayButton = {
    targets: '#play-button',
    rotate: '2turn',
    duration: 3000,
    easing: 'easeInOutSine',
  }
  const navLink = document.querySelector('nav');
  const bringNavDown = {
    targets: '.navlinks',
    easing: 'linear',
    opacity: {
      value: [0, 1],
      duration: 3000,
      easing: 'linear'
    },
    translateY: {
      value: anime.get(navLink, 'height', 'px'),
      duration: 3000
    },
    duration: 3000,
  }
  const bringName = {
    targets: ['#username-heading', '.alpha', '#junior-dev'],
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

  const getGithub = {
    targets: '#githubLink',
    translateX: '2vw',
    duration: 6000,
    opacity: 1
  }
  const getEmail = {
    targets: '#email',
    translateY: '-=2vh',
    duration: 6000,
    opacity: 1
  }
  const getLinkedIn = {
    targets: '#LinkedInLink',
    translateX: '-=2vw',
    duration: 6000,
    opacity: 1
  }

  mobileAnim.add(rotatePlayButton).add(bringNavDown, '-=3000').add(bringName, '-=3000').add(getProfile, '-=500').add(removeButton);
  desktopAnim.add(rotatePlayButton).add(bringNavDown, '-=3000').add(bringName).add(getGithub, '-=3000').add(getEmail, '-=6000').add(getLinkedIn, '-=6000').add(removeButton, '-=6000')

  $('#play-button').on('click', function () {
    if (window.outerWidth <= 1024) {
      mobileAnim.play();

      mobileAnim.finished.then(function () {
        $('#play-button').off();
      });
    } else {
      desktopAnim.play();

      desktopAnim.finished.then(function () {
        $('#play-button').off();
      });
    }
  });

  /*
   * Change opacity on hovering over links 
   */
  $('.show-up').hover(function () {
    $(this).css("opacity", 0.7);
  }, function () {
    $(this).css("opacity", 1);
  });

});
