var answer1, answer2, answer3;

var answer1, answer2, answer3, image1, image2, image3;

var index = 1;


negativeIndicator = $.create('img', {
  src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABGdBTUEAALGPC/xhBQAABIlJREFUWAnVmT9P20AYxh0DCUwBIaESoS5VF8bSqkgwdAaFEKb2M3TqVtQZla0Tn6EbaRTBF2iQErV0Yqu6VCitkPiTCRL+pM9j7oJ9ie/OiRXoK1k+n++e+/nN67vzm4TTp+3s7DxqNBpZyMwlEokMzplWq8XzJI5j1NVwrqGO5/1UKlVaXl7+i3LPluilZ6lUenx9ff0GIDn0n8fZWgcP0UKfCs7FoaGhz9ls9ndUBuvBKLy9vU3vfcDxFkcSR7/WhMAWjo21tbVjWzEr6N3d3dTFxcU7iL7HkbYVj9Cujrabo6Ojn5aWlhqmfkZoEbMFCM2bxGK4X0HM500xr4VG7D67vLwsAmYmBiBbicORkZEcYv1HWAc37EaxWFwBcBn3BwlMnBmOy/HD2Lp6ulAozGFG+IpOY2EdB1B/Do8vdvN4h6cZwwD+cs/A9MkYQ5M8qoMC0JwlsFDwpRt0SKhc8nqGPOSSFTwHoMW0ZpwlhoeHnYWFBWdiYsKvFamcTqc9DYSAqd+84Gq3a8e0WDh+4Y52HuYgEhg/n7O3t+ecnp62BW0KBF5cXHSSyaRzdnbmlMtlh1oa4zz+RC5Afk9zpbMG5gD+B+C1jfmB2X58fNx7AIPHyUU+zzxPcy+BJ/2JGu3STA9PTU2JrncnW4+rwHcKjnN0dOT9av46pdzEgz3lXsXzNDc/aKAFpsDBwYHTbHK7EDQbj+uAqUltgyUF5+2LeHNzs2ro4N2u1+te/EUFNwEzpqltMsmZ4DwICO532y+lqbMOQg0VXVs+vC0wmbitxcubcdFxJQowO9t6PE5gjktOfnAwpudYEdVswOW0pmpH9bC/P7z9nNDT/sooZRM452HV+gEWWtOE5vdcz6YDV0VjAKZkxkWc9AVNFRvwmIAZ1xl6mt99fZvruny7Q3V4j21isEmqWH9Qhg3IjRNXS91SbLMAhekr9ccuPFBTKiNd2gBLwTjAyUtP9wytA+YiwzhWLQbwGl/EnqBNwNyycrWLG5y89PS+6g3TtQ0w99i6WaUPj++7zK0hTpiqsjJbYCkWJzg5yesyMQKXV+UgunNUYKkVI3iFvN7EifmTX99Gm52d7TqtqTu7bkImcGqbDJ5m4uh2P83sJcqdr7qiUq1WnZOTk0CtDbDsEAbO+Ke2wZqC8xZapFuZvdTa1dWV90kkwaMAS2EVnMCcaahtsC3BGUghbKCT8fNBgstvuqhf4gST4FKDD28wcpHPs8BmAWkEpnI/insP6bSO9MGmBPJeRHnB/DDKFXn9QM4VwdXGCXiatSIf/Q3Fh5AaO8S8/ELNVwc8TWg2wGqVQ/Gc1/dozJrmVGDydECzkulVTC+vUbwv8HOOTw7yqNYRHv4GIk/NhWeQoXKIRWQ1n8+H7om00HwAEeMFFI3ZVLbv06z+c+kaHv6BGVN4e1+hbh2HcR73941Qpu46x+kWw6qO0dP+Dv/V/4h+cJblP7bMrSH+XmKXaP3w3F5yV8lNGvcScmlWx9BdWw8WJiJygfwnipkqJn66/jeO+j+A/c79sE0IoH2o/QOb+aFXL4WJVwAAAABJRU5ErkJggg==',
  id: 'positiveIndicator',
  class: 'hidden'
});

positiveIndicator = $.create('img', {
  src: 'data:image/png;base64,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',
  id: 'negativeIndicator',
  class: 'hidden'
});


  var interactionContainer = $("#interactionContainer");
  });
  var ctaButton = $.create('button', {
    id: 'ctaButton', 
    contents: 'Let\'s go!'
  });

  mainContainer.append(gameContainer);
  gameContainer.append(gameImage);
  informationContainer.append(publisherLogo);
  informationContainer.append(additionalText);
  informationContainer.append(callToAction);
  informationContainer.append(ctaButton);
  gameContainer.append(informationContainer);

  ctaButton.addEventListener('click', function(event) {
    buildGameDom();
  });
  interactionContainer.removeChild($("#negativeButton"));
  interactionContainer.removeChild($("#positiveButton"));
}

var nextAnswer = function(answer) {

  console.log('answer1', answer1, 'answer2', answer2, 'answer3', answer3);
  index++;


  var gameImage = $('#gameImage');
  var gameMessage = $('#gameMessage');

  if (index === 2) {
    var newGameImage = $.set(gameImage, {
      src: binaryCopy.gameImage2
    });
    gameMessage.innerHTML = '';
    var newGameMessage = $.set(gameMessage, {
      contents: binaryCopy.gameMessageTextTwo
    });
  }

  if (index === 3) {
    newGameImage = $.set(gameImage, {
      src: binaryCopy.gameImage3
    });
    gameMessage.innerHTML = '';
    var newGameMessage = $.set(gameMessage, {
      contents: binaryCopy.gameMessageTextThree
    });
  }
  
  if (index === 4) {
    presentFinalScreen();
  } 



}

var negativeAnswer = function(index, answer) {
  console.log('negative answer');


  if (index === 1) {
    answer1 = answer;
    nextAnswer(answer);
  }

  if (index === 2) {
    answer2 = answer;
    nextAnswer(answer);
  }

  if (index === 3) {
    answer3 = answer;
    nextAnswer(answer);
  }

}

var positiveAnswer = function(index, answer) {
  console.log('positive answer');

  if (index === 1) {
    answer1 = answer;
    nextAnswer(answer);
  }

  if (index === 2) {
    answer2 = answer;
    nextAnswer(answer);
  }

  if (index === 3) {
    answer3 = answer;
    nextAnswer(answer);
  }

}
var buildGameDom = function() {
  var gameImage = $('#gameImage');

  var interactionContainer = $('#interactionContainer');

  interactionContainer.removeChild( $('#ctaButton') );

  oldMessage = $('#callToAction');
  oldMessage.innerHTML = '';
  var gameMessage = $.set($('#callToAction'), {
    id: 'gameMessage',
    contents: 'Is your style classy & classic?'
  });
  
  var negativeButton = $.create('div', {
    id: 'negativeButton',
    contents: 'Not for me'
  });

  var positiveButton = $.create('div', {
    id: 'positiveButton',
    contents: 'Love it!'
  });

  negativeImage = $.create('img',
  {
    'src': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjUiPgogICAgICAgIDxnIGlkPSIwLjItRGVza3RvcC1pbmxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MDEuMDAwMDAwLCAtMzA4LjAwMDAwMCkiIGZpbGw9IiM1RTVFNUUiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQ2LjAwMDAwMCwgMjkzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE4MC40Njk2NzkgMTUgMTcwLjAxNzgzNiAyNS40NTE4NDMgMTU5LjU2NTk5MyAxNSAxNTUgMTkuNTMwMzIxIDE2NS40NTE4NDMgMjkuOTgyMTY0MSAxNTUgNDAuNDM0MDA3MSAxNTkuNTY1OTkzIDQ1IDE3MC4wMTc4MzYgMzQuNTQ4MTU3IDE4MC40Njk2NzkgNDUgMTg1IDQwLjQzNDAwNzEgMTc0LjU0ODE1NyAyOS45ODIxNjQxIDE4NSAxOS41MzAzMjEiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
    'id': 'negativeImage'
  });

  positiveImage = $.create('img',
  {
    'src': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgMzUgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMC4yLURlc2t0b3AtaW5saW5lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjk4LjAwMDAwMCwgLTM2OS4wMDAwMDApIiBmaWxsPSIjOUZERTlGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0Ni4wMDAwMDAsIDI5My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC03IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MS4wMDAwMDAsIDczLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MS4wMDAwMDAsIDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNC45NTMxLDguMTkwMzQ0OTcgQzM0LjQ4NjU1LDMuNTg5NjEwNzkgMzAuNjA5NiwwIDI1Ljg5NTgsMCBDMjIuMTE3NTUsMCAxOC44NzgzLDIuMzA1OTc4NiAxNy41LDUuNTg5NDExNTQgQzE2LjEyMTcsMi4zMDU5Nzg2IDEyLjg4MjQ1LDAgOS4xMDQ1NSwwIEM0LjM5MDQsMCAwLjUxMzEsMy41ODk2MTA3OSAwLjA0NjksOC4xOTAzNDQ5NyBDMC4wMTU3NSw4LjQ5Njg3MzUzIDAsOC44MDgzMTIxNiAwLDkuMTIzMjU3OTggQzAsMjAuMjA4MDg4MyAxMy41NzU4LDI1LjQzOTc2NjMgMTcuNSwzMi44MzI5MjY2IEwxNy41LDMyLjgzMjkyNjYgQzIxLjQyNDIsMjUuNDQwMTE3IDM1LDIwLjIwODQzOSAzNSw5LjEyMzI1Nzk4IEMzNSw4LjgwODMxMjE2IDM0Ljk4NDI1LDguNDk2ODczNTMgMzQuOTUzMSw4LjE5MDM0NDk3IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
    'id': 'positiveImage'
  });

  negativeButton.append(negativeImage);
  positiveButton.append(positiveImage);
  
  informationContainer.append(negativeButton);
  informationContainer.append(positiveButton);
  interactionContainer.append(negativeButton);
  interactionContainer.append(positiveButton);

  negativeButton.addEventListener('click', function(event) {
    negativeAnswer(index, false);
  });

  positiveButton.addEventListener('click', function(event) {
    positiveAnswer(index, true);
  });
  
}

var buildInitialDom = function() {
  var mainContainer = $('#container');
  var gameContainer = $.create('div', {
    id: 'gameContainer'
  });
  var gameImage = $.create('img', {
    id: 'gameImage',
    src: binaryCopy.initialImage
  });
  var interactionContainer = $.create('div', {
    id: 'interactionContainer'
  });
  var publisherLogo = $.create('img', {
    id: 'publisherLogo',
    src: binaryCopy.publisherLogo
  });
  var callToAction = $.create('div', {
    id: 'callToAction',
    contents: binaryCopy.callToActionMessage
  });
  var additionalText = $.create('p', {
    id: 'additionalText',
    contents: binaryCopy.additionalText
  });
  var ctaButton = $.create('button', {
    id: 'ctaButton', 
    contents: binaryCopy.callToActionButtonText
  });

  mainContainer.append(gameContainer);
  gameContainer.append(gameImage);
  interactionContainer.append(publisherLogo);
  interactionContainer.append(additionalText);
  interactionContainer.append(callToAction);
  interactionContainer.append(ctaButton);
  gameContainer.append(interactionContainer);

  ctaButton.addEventListener('click', function(event) {
    buildGameDom();
  });
}

buildInitialDom();










