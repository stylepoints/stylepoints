function setManyAttributes(elem /*attributes here*/) {
  for (var i = 1; i < arguments.length; i+=2) {
        elem.setAttribute(arguments[i], arguments[i+1]);
    }
}

function buildDom() {
  var gameContainer = document.createElement('div');
  setManyAttributes(gameContainer,
    'id', 'gameContainer');

  document.getElementById('container').appendChild(gameContainer);

  var gameImage = document.createElement('img');

  setManyAttributes(gameImage,
    'id', 'gameImage',
    'src', 'http://placekitten.com/200/175');

  gameContainer.appendChild(gameImage);

  var publisherLogo = document.createElement('img');

  setManyAttributes(publisherLogo, 
    'id', 'publisherLogo',
    'src', 'http://u1.mgcdn.com/mimg/merimg/b_143952896098.png?v=141016');

  gameContainer.appendChild(publisherLogo);

  var additionalText = document.createElement('span');

  setManyAttributes(additionalText,
    'id', 'additionalText');

  additionalText.innerHTML = 'For you';

  gameContainer.appendChild(additionalText);

  var callToAction = document.createElement('div');

  setManyAttributes(callToAction,
    'id', 'callToAction');

  callToAction.innerHTML = 'Find your perfect <br> Little Black Dress style';

  gameContainer.appendChild(callToAction);

  var ctaButton = document.createElement('button');

  setManyAttributes(ctaButton,
    'id', 'ctaButton');

  ctaButton.innerHTML = 'Play the Game';

  gameContainer.appendChild(ctaButton);

  gameContainer.addEventListener('click', function() {
    while (gameContainer.hasChildNodes()) {
      gameContainer.removeChild(gameContainer.lastChild);
    }
  });


}

buildDom();

