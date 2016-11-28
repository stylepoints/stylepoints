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










