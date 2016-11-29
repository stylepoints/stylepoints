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
  var informationContainer = $.create('div', {
    id: 'informationContainer'
  });
  var publisherLogo = $.create('img', {
    id: 'publisherLogo',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAXCAYAAABaiVzAAAAABGdBTUEAALGPC/xhBQAABYVJREFUWAmdmN+LVVUUx++9ZpozU6NTWaip40iC5qhRvQRiZSUVURAFg4HpS2UlFQX11D8QBRVFxRgUEkEl0UM9VPrSZMlQptgPbMqcNDXHJscfOXP7fI57D+eeOfdXC75nr71+7L3X3muvc+4tFgqF6WAS6ABFcBIcB3+DMdAIdWPkOJ1A/xNgBzgIGqHlGOk/H/wDRkAfOAwinQ9zIZgNpoB/wX7gOk+DSNNgukALMJ4fwFFQaAVLisXiEDhVKpVeCbKSyjo0E/tebB4BbpTkIu5irF20j4Na48zG/21sHgIzgDQV3IP/d7QbFQTyMFqR94My+JG+m3Ne0MdmMswd6N2A9cCAx2k+ipOgzMQvj0trM3Ow34P961XMesJ4r6F3kVnqRP8z/i9lFaG/Lvi/SN+TkRAVdyoHe+l7ynl0LcINeQonHXGABgOdiu0XwDS7PG9AZKiL20EZ/omMzTTkfWAI+SUZXexOCjb6PxiEJWTpQM2eLLmpBpq3uYVmA93IhG7Kluwsmf4G7cAx5PNSuieD/+aULI9N5sH2EMpkQ+HrBToXW1O6gmrdnwrDVKeNyTbZHxsb+ywlz2O3IbQ4tYN1waAd/0flG/D/HLMz4FLQA+qRxco76sZW0P8JdBUjLACmlAWnFv2G8lcNCO7OYLiadg6wou8OsmrNPhT7VeJ/N43p6Lx5ZCyzQDJf1qDpQEnXNWEQ7+dgdsBM/zT9X4JsEa1V1kCl46Cev9kwAKTFwA0atZND3nVfI752JlCzgZbK5fKKMIrl28XWJE4iORGMLBxX478kOOg7HPiqDf6/B6VpaSblBeorxKvxJ8ilZgN1MtNDOgFOJVyNB/fwSErth8VloW9GeOL1KO1f7UQfZkOeY6CF1QZrNtA2BhKSi8zb3USZehhQQqTtFTCtoWuKnQ181YaNckMjWdTSd9QxlhLkM7S+U3tALjUbqBXNgiClJzwnyX+6mEhuUvySMchGxkj7pz8Q9HU9y8BFwIJloBVfQsqlZgN18Li4YjJC/UfcGC09XautZMCNjJH2tzhF0ncu+AD0B2EX7S2Br2iaDTR9Ly9gJHe0HmmXEGk4ABPvpcWprj/p7rdvpMMwcc1+vI+AYQrcW9GAU10f+XQbndKyWryV0hIuedfGg0gkOQ8WmqRVUO2kjZXawpYOIsc7EUV/M2EAxBM2yFhl34OP67oBfjGooGYD9TR+CiO4gBkVo+V3ZgbxX7RfgYHQt7BMD3zVhtOK/ocwcu54x/WJqT/ISX6oAHLz1iZc6tFsoAUm/jL4e5rzUmPlsth7j6SvwdGUvxkRderzyEB8pUh9wFPLXTPX4k10yVuAoO+Dj5kAW8Up0eQ/XNy3wLSR4sfDud7Epye2QDEBvhPUH9HGSro8yKo1F6PoVJnyr2a7A4WbIbmBtyVceOTuTtogw1vV/mDHtiqnvSmjz3a7EZh6e8D7QelGfSLfgL8b0QH6wce6gGo0ymb0RiVjPwA/wb7Rn2mP4bwSLGQg/5Gw3C8CuUQhehWbMso1GYNlyIeBr5vkxDP6pIt/Lzam441BX+/3aAf2B4A/Da0nEzKmkUD9se1prAqT3kv/DIvZEvrZ5ir0pvhTWUXor0V/Fv/NVfQr0PuJuSmlR1TxezT9ARHNnsfGQN3gF6LQ1nfZlVHJxG8EmXJhFetC/m5wvp5+pFuRfU/nWTAlCmn9D8pUNX1q0e3Y7cbgaeBckbqRb6VzfxTQ+lppQb4LGMg++r6ilEfyKl6DbjTYHKE/C0w2h/3INpjrgIYHgH88RbK6ejd18Efwp8ABIrXA3AxWshnu4igVcDvtN2AQ1KM2DFYD/X1X6r+N1ip9EERyjRYnU901edp7wVDgaZI42mmXBt743Mhj/wFdiT/K3dup9wAAAABJRU5ErkJggg=='
  });
  var callToAction = $.create('div', {
    id: 'callToAction',
    contents: 'Find your perfect Little Black dress style'
  });
  var additionalText = $.create('p', {
    id: 'additionalText',
    contents: 'For you'
var answer1, answer2, answer3, image1, image2, image3;
var index = 1;
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
  var informationContainer = $('#informationContainer');

  informationContainer.removeChild( $('#ctaButton') );
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










