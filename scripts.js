var answer1, answer2, answer3;

var buildInitialDom = function() {
  var mainContainer = $('#container');
  var gameContainer = $.create('div', {
    id: 'gameContainer'
  });
  var gameImage = $.create('img', {
    id: 'gameImage',
    src: 'http://placekitten.com/200/175'
  });
  var publisherLogo = $.create('img', {
    id: 'publisherLogo',
    src: 'http://u1.mgcdn.com/mimg/merimg/b_143952896098.png?v=141016'
  });
  var callToAction = $.create('div', {
    id: 'callToAction',
    contents: 'Find your perfect Little Black dress style'
  });
  var additionalText = $.create('p', {
    id: 'additionalText',
    contents: 'For you'
  });
  var ctaButton = $.create('button', {
    id: 'ctaButton', 
    contents: 'Play the game'
  });

  mainContainer.append(gameContainer);
  gameContainer.append(gameImage);
  gameContainer.append(publisherLogo);
  gameContainer.append(additionalText);
  gameContainer.append(callToAction);
  gameContainer.append(ctaButton);

  ctaButton.addEventListener('click', function(event) {
    // buildSecondaryDom();
  });
}

var buildGameDom = function() {
  var gameImage = $.create('img', {
    id: 'gameImage',
    src: 'http://placekitten.com/200/175'
  });

  
}

buildInitialDom();










