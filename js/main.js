$( document ).ready(function() {
  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      // stoppropagation: true // If true, stops the event propagating from the dropdown origin click handler.
    }
  );
  console.log('init dropdown');
  $('.collapsible').collapsible();
  // Play video on scroll
  var options = [
    {
      selector: '.landing-video',
      offset: 50,
      callback: function() {
        $("#video")[0].src += '&autoplay=1';
      }
    },
  ];
  Materialize.scrollFire(options);

  // ScrollReveal
  window.sr = ScrollReveal({duration: 800});
  sr.reveal('.scrollreveal-block');
  // NOTE: Sequenced Animations for scrollreveal doesn't works well
  // we need to continue scrolling to reveal more, even if we arrived at
  // bottom.
  sr.reveal('.scrollreveal-features-1');
  sr.reveal('.scrollreveal-features-2', {delay: 200});
  sr.reveal('.scrollreveal-video');
  var stepReveal = {
    duration: 600,
    delay: 100,
    distance: '150px',
    easing: 'ease-in-out',
    origin: 'left',
    scale:0
  };
  sr.reveal('.scrollreveal-step-left', stepReveal);
  stepReveal.origin = 'right';
  stepReveal.delay = 500;
  sr.reveal('.scrollreveal-step-right', stepReveal);
  var buttonReveal = {
    duration: 600,
    delay: 100,
    distance: '90px',
    easing: 'cubic-bezier(.12,.33,.45,1.61)',
    scale: 0.2
  };
  // NOTE: Sequenced Animations for scrollreveal doesn't works well
  // we need to continue scrolling to reveal more, even if we arrived at
  // bottom.
  sr.reveal('.scrollreveal-buttons-small-1', buttonReveal);
  sr.reveal('.scrollreveal-buttons-big-1', buttonReveal);
  sr.reveal('.scrollreveal-buttons-social-1', buttonReveal);
  buttonReveal.delay += 50;
  sr.reveal('.scrollreveal-buttons-small-2', buttonReveal);
  sr.reveal('.scrollreveal-buttons-big-2', buttonReveal);
  sr.reveal('.scrollreveal-buttons-social-2', buttonReveal);
  buttonReveal.delay += 50;
  sr.reveal('.scrollreveal-buttons-small-3', buttonReveal);
  sr.reveal('.scrollreveal-buttons-big-3', buttonReveal);
  sr.reveal('.scrollreveal-buttons-social-3', buttonReveal);

});
