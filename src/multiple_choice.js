(function(){

  var css = require("./styles/styles_multiple_choice.css");
  var fourImagesCopy = {
    "callToActionMessage": "FIND THE PERFECT DRIVING ACCESSORY FOR YOU",
    "callToActionButtonText": "LET'S GO!",
    "gameMessageTextOne": "1. WHICH TYPE OF DRIVER ARE YOU?",
    "gameMessageTextTwo": "2. WHICH PICTURE DESCRIBES WHY YOU DRIVE MOST OFTEN?",
    "gameMessageTextThree": "3. DO YOU HAVE ANY OF THE GADGETS BELOW? TAP ALL THAT YOU OWN THEN GET YOUR RESULTS!",
    "resultMessageHeader": "OUR RECOMMENDATION:",
    "resultMessageText": "Enter your email below to receive a £10 voucher off any purchase at Halfords.com",
    "confirmationMessageText": "Thanks for playing! You will receieve an email with your voucher within 24 hours.",
    "emailFormButtonText": "SUBMIT",
    "negativeButtonImage": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjUiPgogICAgICAgIDxnIGlkPSIwLjItRGVza3RvcC1pbmxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MDEuMDAwMDAwLCAtMzA4LjAwMDAwMCkiIGZpbGw9IiM1RTVFNUUiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQ2LjAwMDAwMCwgMjkzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE4MC40Njk2NzkgMTUgMTcwLjAxNzgzNiAyNS40NTE4NDMgMTU5LjU2NTk5MyAxNSAxNTUgMTkuNTMwMzIxIDE2NS40NTE4NDMgMjkuOTgyMTY0MSAxNTUgNDAuNDM0MDA3MSAxNTkuNTY1OTkzIDQ1IDE3MC4wMTc4MzYgMzQuNTQ4MTU3IDE4MC40Njk2NzkgNDUgMTg1IDQwLjQzNDAwNzEgMTc0LjU0ODE1NyAyOS45ODIxNjQxIDE4NSAxOS41MzAzMjEiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
    "positiveButtonImage": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIyOXB4IiB2aWV3Qm94PSIwIDAgMzAgMjkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaVBob25lLTctQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjAwMDAwMCwgLTU0MC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wMDAwMDAsIDExNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC01LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OS4wMDAwMDAsIDQxMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzAuOTU3MTI4OSwxOS4wMTk2Njk4IEM3MC41NTcyNjQ1LDE1LjA3NjUzNDkgNjcuMjM0NDYwOCwxMiA2My4xOTQ0MjEsMTIgQzU5Ljk1NjIwOTgsMTIgNTcuMTc5OTU3MywxMy45NzYzNzY5IDU1Ljk5ODY2MjYsMTYuNzkwNDk3IEM1NC44MTczNjgsMTMuOTc2Mzc2OSA1Mi4wNDExMTU1LDEyIDQ4LjgwMzIwNDIsMTIgQzQ0Ljc2Mjg2NDUsMTIgNDEuNDM5NzYwOCwxNS4wNzY1MzQ5IDQxLjA0MDE5NjQsMTkuMDE5NjY5OCBDNDEuMDEzNDk4OCwxOS4yODIzODUxIDQxLDE5LjU0OTMwODcgNDEsMTkuODE5MjM4MiBDNDEsMjkuMzE5Njc0MyA1Mi42MzUzNjI1LDMzLjgwMzU2OTkgNTUuOTk4NjYyNiw0MC4xMzk5OTk0IEM1OS4zNjE5NjI4LDMzLjgwMzg3MDQgNzAuOTk3MzI1MywyOS4zMTk5NzQ4IDcwLjk5NzMyNTMsMTkuODE5MjM4MiBDNzAuOTk3MzI1MywxOS41NDkzMDg3IDcwLjk4MzgyNjUsMTkuMjgyMzg1MSA3MC45NTcxMjg5LDE5LjAxOTY2OTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
    "gameImageGridImageSelectedIcon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8cGF0aCBkPSJNOSwwIEM0LjAyOTQzNzI1LC0zLjA0MzU5MTg4ZS0xNiA2LjA4NzE4Mzc2ZS0xNiw0LjAyOTQzNzI1IDAsOSBDLTYuMDg3MTgzNzZlLTE2LDEzLjk3MDU2MjcgNC4wMjk0MzcyNSwxOCA5LDE4IEMxMy45NzA1NjI3LDE4IDE4LDEzLjk3MDU2MjcgMTgsOSBDMTgsNi42MTMwNTE1OSAxNy4wNTE3ODg0LDQuMzIzODY2MzggMTUuMzYzOTYxLDIuNjM2MDM4OTcgQzEzLjY3NjEzMzYsMC45NDgyMTE1NjMgMTEuMzg2OTQ4NCwxLjQ2MTU4NDM2ZS0xNiA5LDAgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiM3RUQzMjEiIHBvaW50cz0iOCAxMi45MSA1IDEwIDYuNDYgOC41NCA4IDEwLjA5IDEyLjc5IDUuMjkgMTQuMjEgNi43MSI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
    "resultImage": require("./images/multiple_choice/3_1.png"),
    "itemDescription": "AUTOMATIC SMART METER £99",
    "finalRecommendationOne": "THE BEST GADGETS FOR YOU KEEP EVERYONE HAPPY DURING THE JOURNEY!", 
    "gameImageGridOne": require("./images/multiple_choice/1_1.png"),
    "gameImageGridTwo": require("./images/multiple_choice/1_2.png"),
    "gameImageGridThree": require("./images/multiple_choice/1_3.png"),
    "gameImageGridFour": require("./images/multiple_choice/1_4.png"),
    "gameImageGridFive": require("./images/multiple_choice/1_1.png"),
    "gameImageGridSix": require("./images/multiple_choice/1_2.png"),
    "gameImageGridSeven": require("./images/multiple_choice/1_3.png"),
    "gameImageGridEight": require("./images/multiple_choice/1_4.png"),
    "gameImageGridNine": require("./images/multiple_choice/2_1.png"),
    "gameImageGridTen": require("./images/multiple_choice/2_2.png"),
    "gameImageGridEleven": require("./images/multiple_choice/2_3.png"),
    "gameImageGridTwelve": require("./images/multiple_choice/2_4.png"),
    "gameImageGridThirteen": require("./images/multiple_choice/3_1.png"),
    "gameImageGridFourteen": require("./images/multiple_choice/3_2.png"),
    "gameImageGridFifteen": require("./images/multiple_choice/3_3.png"),
    "gameImageGridSixteen": require("./images/multiple_choice/3_4.png"),
    "facebookShare": require('./images/multiple_choice/facebook_share.png'),
    "twitterShare": require('./images/multiple_choice/twitter_share.png'),
    "gplusShare": require('./images/multiple_choice/gplus_share.png')
  
  }

  console.log(fourImagesCopy.gameImageGridOne);
  // Create global variables for answers to questions.
  var answer1, answer2, answer3, image1, image2, image3;

  // Initialize global view index to zero.
  var index = 0;

  // Create image grid arrays. This will be removed once test object is converted to true JSON.
  var gridImagesInitial = [fourImagesCopy.gameImageGridOne, fourImagesCopy.gameImageGridTwo, fourImagesCopy.gameImageGridThree, fourImagesCopy.gameImageGridFour];

  var gridImagesTwo = [fourImagesCopy.gameImageGridFive, fourImagesCopy.gameImageGridSix, fourImagesCopy.gameImageGridSeven, fourImagesCopy.gameImageGridEight];

  var gridImagesThree = [fourImagesCopy.gameImageGridNine, fourImagesCopy.gameImageGridTen, fourImagesCopy.gameImageGridEleven, fourImagesCopy.gameImageGridTwelve];

  var gridImagesFour = [fourImagesCopy.gameImageGridThirteen, fourImagesCopy.gameImageGridFourteen, fourImagesCopy.gameImageGridFifteen, fourImagesCopy.gameImageGridSixteen];

  var mainContainer = $('#grid-container');

  var answerGroupOne = [];

  var answerGroupTwo = [];

  var answerGroupThree = [];


  // The presentFinalScreen function shows the final screen with a confirmation.
  var presentFinalScreen = function()
  {
    var interactionContainer = $('#interactionContainer', mainContainer);

    interactionContainer.removeChild($('#gameMessage'));
    interactionContainer.removeChild($('.gadgetRecommendation'));
    interactionContainer.removeChild($('form'));

    var shareButtonsContainer = $.create('button', {
        className: 'shareButtonsContainer',
        contents: [{
          'tag': 'img',
          'src': fourImagesCopy.facebookShare,
          'id': 'facebookShareButton',
          className: 'shareButton' 
        }, {
          'tag': 'img',
          'src': fourImagesCopy.twitterShare,
          'id': 'twitterShareButton',
          className: 'shareButton' 
        }, {
          'tag': 'img',
          'src': fourImagesCopy.gplusShare,
          'id': 'gPlusShareButton',
          className: 'shareButton' 
        }]
    });

    

    var resultImage = $('.resultImage');
    $.set(resultImage, {
        src: fourImagesCopy.gameImageGridThree
    });
    var oldResultMessage = $('#gameMessage', mainContainer);

    var confirmationMessage = $.create('p', {
        contents: fourImagesCopy.confirmationMessageText,
        className: "confirmationMessage"
    });

    interactionContainer.append(shareButtonsContainer);
    interactionContainer.append(confirmationMessage);

    $('#facebookShareButton').addEventListener('click', function()
    {
      window.open('https://www.facebook.com/sharer.php?u=http://www.driving.co.uk/news/products/buying-guide-leading-dashboard-cameras-dash-cams-reviewed/');
    });

    $('#twitterShareButton').addEventListener('click', function()
    {
      window.open('https://twitter.com/intent/tweet?url=http://www.driving.co.uk/news/products/buying-guide-leading-dashboard-cameras-dash-cams-reviewed/&text=Driving%20Accessories%20Buying%20Guide');

    });

    $('#gPlusShareButton').addEventListener('click', function()
    {
      window.open('https://plus.google.com/share?url=http://www.driving.co.uk/news/products/buying-guide-leading-dashboard-cameras-dash-cams-reviewed/');
    });
  }

  // The presentEmailScreen function shows the email screen and POSTs email data to the server.
  var presentEmailScreen = function() {

    // Select containers we're going to modify.
    var interactionContainer = $("#interactionContainer", mainContainer);

    interactionContainer.removeChild($('#nextButton'), mainContainer);


    var imageContainer = $("#imageContainer", mainContainer);
    // Remove lowZIndex class from the interactionContainer.
    raiseInteractionContainer = $.set(interactionContainer, {
      className: ''
    });

    var gadgetRecommendation = $.create('h2', {
        className: 'gadgetRecommendation',
        contents: fourImagesCopy.finalRecommendationOne
    });
    interactionContainer.append(gadgetRecommendation);
    // Select current game message and remove content so we can 
    // re set it.
    var oldGameMessage = $('#gameMessage', mainContainer);
    oldGameMessage.innerHTML = ''
   
    // Clear out imageContainer and then append new image
    imageContainer.innerHTML = '';
    imageContainer.append($.create('div',
    {
      className: 'resultImageDiv',
      contents: [{
        tag: 'img',
        src: fourImagesCopy.resultImage,
        className: 'resultImage'
      }, {
        tag: 'div',
        className: 'overlay'
      }]
    }));


    // Set new result message
    var resultMessageHeader = $.set(oldGameMessage, {
      contents: fourImagesCopy.resultMessageHeader,
      className: 'gameMessage gameMessageEmailScreen'
    });

    // Create email submit form and append it to the interactionContainer.
    var emailSubmitForm = $.create('form', {
      id: 'emailSubmitForm',
      action: '//stylepoints.us14.list-manage.com/subscribe/post?u=56a2ff2655e74c7b8d44b955e&amp;id=87d115b894',
      'method': 'post',
      'target': '_blank',
      contents: [
        {
          tag: 'label',
          id: 'resultMessageText',
          contents: fourImagesCopy.resultMessageText
        },
        {
          tag: 'input',
          id: 'emailFormInput',
          type: 'email',
          name: 'EMAIL',
          'placeholder': 'EMAIL ADDRESS'
        },
        {
          tag: 'input',
          type: 'submit',
          id: 'emailFormButton',
          value: fourImagesCopy.emailFormButtonText
        }
      ]
    });


    interactionContainer.append(emailSubmitForm);

    // Create submit button event listener so that we can POST emails.
    var submitButton = $('#emailFormButton', mainContainer).addEventListener('click', function()
    {
      var input = $('#emailFormInput', mainContainer);

      var email = input.value;

      $.fetch('http://private-bc5f06-stylepoints.apiary-mock.com/emails',
      {
        method: "POST"
      }).then(function()
      {
        input.value = "";
        presentFinalScreen();
      });
    });
  }

  // This function handles animation transitions for 
  // the grid view.
  var animateExit = function(event) {

    // Increment the index.
    var gameImageGrids = $$('.gameImageGrid', mainContainer);

    // When the user clicks on an image, we fade out all OTHER images quickly, then show the next grid.

    var currentGameImageGrid = gameImageGrids[index];

    var currentGameImageGridImages = currentGameImageGrid.children
    
    console.log(currentGameImageGridImages);
    for (var i = 0; i < 4; i++)
    {
      if (currentGameImageGrid.children[i].id !== event.target.id)
      {
        console.log('Should fade');
        fadeOutImages = $.set(currentGameImageGrid.children[i], {
          className: "gameImageGridImage lowOpacity"
        });
      }
    }

    setTimeout(function()
    {
      for (gameImageGrid in gameImageGrids)
      {
        if (Number(gameImageGrid) === index)
        {      
          hideGrid = $.set(gameImageGrids[index - 1], {
            "className": "gameImageGrid hidden"
          });
          showNextGrid = $.set(gameImageGrids[index],
          {
              "className": "gameImageGrid"
          });
        }
      }

      if (index === 3 )
      {
        console.log(answerGroupOne, answerGroupTwo, answerGroupThree);
        presentEmailScreen();
      }

    }, 500);

    index++;



   
  }

  // Small helper function to dynamically set gameMessage text size
  // based on message length.

  var gameMessageTextType = function(message) {
    if (message.length < 30) {
      return "gameMessage"
    } else if (message.length > 30 && message.length < 50 ) {
      return "gameMessage gameMessageMediumText"
    } else {
      return "gameMessage"
    }
  }

  // This function handles recording of answers and calls transition functions
  // after each answer is recorded.
  var nextQuestion = function(event) {

    // Select the gameMessage div.

    console.log('next', index);

    if (index === 0 && answerGroupOne.length > 0) {
      animateExit(event);
      gameMessage.innerHTML = '';
      var setText = $.set(gameMessage, {
        className: gameMessageTextType(fourImagesCopy.gameMessageTextOne),     
        contents: fourImagesCopy.gameMessageTextTwo
      }); 
    } else if (index === 1 && answerGroupTwo.length > 0) {
      var nextButton = $('#nextButton');
      nextButton.innerHTML = ''
      $.set(nextButton, {
        contents: "GET RESULT"
      });  
      animateExit(event);
      gameMessage.innerHTML = '';
      var setText = $.set(gameMessage, {
        className: 'gameMessage gameMessageFinalQuestion',     
        contents: fourImagesCopy.gameMessageTextThree
      });

    
    } else if (index === 2) {
      animateExit(event);
      var nextButton = $('#nextButton');
      
      gameMessage.innerHTML = '';
      var setText = $.set(gameMessage, {
        className: gameMessageTextType(fourImagesCopy.gameMessageTextThree),     
        contents: fourImagesCopy.gameMessageTextThree
      });
    }


    // Increment the index and log each answer.
    
  }


  // This function builds the game DOM.
  var buildGameDom = function() {
    console.log(index);

    // Increment our global view index.
    // index++;

    console.log(index);

    var gameContainer = $.create('div', {
      id: 'gameContainer'
    });
    var imageContainer = $.create('div', {
      id: 'imageContainer'
    });
    var interactionContainer = $.create('div', {
      id: 'interactionContainer'
    });

    var nextButton = $.create('button', {
        id: 'nextButton',
        contents: "NEXT QUESTION"
    });

    nextButton.addEventListener('click', function(event) {
      console.log(index);
      // Reset next button activity state after transitioning.
      if (index !== 1)
      {
          $.set(nextButton, {
            className: ''
          });
          nextQuestion(event);
      }
      else 
      {
          $.set(nextButton, {
            className: 'nextButtonActive'
          });
          nextQuestion(event);
      }
    });
    // Select interaction container and set new text.
    var showInstructions = $.set($('#additionalText', mainContainer),
    {
      contents: [fourImagesCopy.instruction],
      className: 'additionalText pushDown'
    });    

    var gameImageGridOne = $.create('div', {
      className: 'gameImageGrid'
    });
    for (var i = 0; i < 4; i++)
    {

      var gameImageGridImageContainer = $.create('div', 
      {
        className: 'gameImageGridImageContainer',
        id: 'gridOne' + i,
        contents: [{
            tag: 'img',
            className: 'gameImageGridImage',
            src: gridImagesTwo[i],
            id: 'gridOne' + i
        }, {
            tag: 'img',
            className: 'gameImageGridImageSelectedIcon',
            id: 'gridOneSelected' + i,
            src: fourImagesCopy.gameImageGridImageSelectedIcon
        }, {
            tag: 'div',
            className: 'gameImageGridImageOverlay hidden',
            id: 'gridOneOverlay' + i
        }]
      });
      gameImageGridOne.append(gameImageGridImageContainer);
      gameImageGridImageContainer.addEventListener('click', function(event)
      { 
        

        // Have to get the ID from the element ID to make sure
        // we show the right selected icon.

        var selectedImage = event.target.id.substring(event.target.id.length - 1, event.target.id.length); 
        if (answerGroupOne.indexOf(event.target.id) === -1)
        {
            // If the id doesn't exist in the array, add it and 
            // show the selected icon.  
            // Set the correct selection indicator to be visible
            if (answerGroupOne.length < 1)
            {
                $.set($('#gridOneSelected' + selectedImage), 
                {
                    className: 'gameImageGridImageSelectedIcon show'
                });

                $.set(nextButton, {
                    className: 'nextButtonActive'
                });
                answerGroupOne.push(event.target.id);
                console.log(answerGroupOne);
                for( var i = 0; i < 4; i++)
                {
                  if ("gridOne" + i !== event.target.id)
                  {
                    $.set($("#gridOneOverlay" + i), {
                      className: 'gameImageGridImageOverlay'
                    });
                  } else {
                    $.set($("#gridOneOverlay" + i), {
                      className: 'gameImageGridImageOverlay hidden'
                    });
                  }
                }
            }
        } else {
            $.set($('#gridOneSelected' + selectedImage),
            {
                className: 'gameImageGridImageSelectedIcon'
            });
            $.set(nextButton, {
                    className: ''
            });
            for( var i = 0; i < 4; i++)
                {
                  $.set($("#gridOneOverlay" + i), {
                    className: 'gameImageGridImageOverlay hidden'
                  });
                   
                }
            answerGroupOne.splice(answerGroupOne.indexOf(event.target.id), 1);
            console.log(answerGroupOne);
        }
      });
    } 

    var gameImageGridTwo = $.create('div', {
      className: 'gameImageGrid hidden'
    });
    for (var j = 0; j < 4; j++)
    {

      var gameImageGridImageContainer = $.create('div', 
      {
        className: 'gameImageGridImageContainer',
        contents: [{
            tag: 'img',
            className: 'gameImageGridImage',
            src: gridImagesThree[j],
            id: 'gridTwo' + j
        }, {
            tag: 'img',
            className: 'gameImageGridImageSelectedIcon',
            id: 'gridTwoSelected' + j,
            src: fourImagesCopy.gameImageGridImageSelectedIcon
        }, {
            tag: 'div',
            className: 'gameImageGridImageOverlay hidden',
            id: 'gridTwoOverlay' + j
        }]
      });
      gameImageGridTwo.append(gameImageGridImageContainer);
      gameImageGridImageContainer.addEventListener('click', function(event)
      {

        // Have to get the ID from the element ID to make sure
        // we show the right selected icon.

        var selectedImage = event.target.id.substring(event.target.id.length - 1, event.target.id.length); 
        if (answerGroupTwo.indexOf(event.target.id) === -1)
        {
            // If the id doesn't exist in the array, add it and 
            // show the selected icon.  
            // Set the correct selection indicator to be visible
            if (answerGroupTwo.length < 1)
            {
                $.set($('#gridTwoSelected' + selectedImage), 
                {
                    className: 'gameImageGridImageSelectedIcon show'
                });
                $.set(nextButton, {
                    className: 'nextButtonActive'
                });
                for( var i = 0; i < 4; i++)
                {
                  if ("gridTwo" + i !== event.target.id)
                  {
                    $.set($("#gridTwoOverlay" + i), {
                      className: 'gameImageGridImageOverlay'
                    });
                  } else {
                    $.set($("#gridTwoOverlay" + i), {
                      className: 'gameImageGridImageOverlay hidden'
                    });
                  }
                }
                answerGroupTwo.push(event.target.id);
                console.log(answerGroupTwo);
            }
        } else {
            $.set($('#gridTwoSelected' + selectedImage),
            {
                className: 'gameImageGridImageSelectedIcon'
            });
            $.set(nextButton, {
                    className: ''
                });
            for( var i = 0; i < 4; i++)
                {
                  $.set($("#gridTwoOverlay" + i), {
                    className: 'gameImageGridImageOverlay hidden'
                  });
                   
                }
            answerGroupTwo.splice(answerGroupTwo.indexOf(event.target.id), 1);
            console.log(answerGroupTwo);
        }
      });
    }
    var gameImageGridThree = $.create('div', {
      className: 'gameImageGrid hidden'
    });
    var imageLabels = ["DVD PLAYER", "SATNAV", "DASH CAM", "DIAGNOSTIC TOOL"];
    for (var k = 0; k < 4; k++)
    {
      var gameImageGridImageContainer = $.create('div', 
      {
        className: 'gameImageGridImageContainer',
        contents: [{
            tag: 'img',
            className: 'gameImageGridImage',
            src: gridImagesFour[k],
            id: 'gridThree' + k
        }, {
            tag: 'img',
            className: 'gameImageGridImageSelectedIcon',
            id: 'gridThreeSelected' + k,
            src: fourImagesCopy.gameImageGridImageSelectedIcon
        }, {
            tag: 'div',
            className: 'gameImageGridImageOverlay',
            id: 'gridThreeSelected' + k
        }, {
            tag: 'span',
            className: 'gameImageGridImageLabel',
            contents: imageLabels[k],
            id: 'gridThreeSelected' + k
        }]
      });
      
      gameImageGridThree.append(gameImageGridImageContainer);
      gameImageGridImageContainer.addEventListener('click', function(event)
      {

        // Have to get the ID from the element ID to make sure
        // we show the right selected icon.

        var selectedImage = event.target.id.substring(event.target.id.length - 1, event.target.id.length); 
        if (answerGroupThree.indexOf(event.target.id) === -1)
        {
            // If the id doesn't exist in the array, add it and 
            // show the selected icon.  
            // Set the correct selection indicator to be visible  
            $.set($('#gridThreeSelected' + selectedImage), 
            {
                className: 'gameImageGridImageSelectedIcon show'
            });
            answerGroupThree.push(event.target.id);
            if (answerGroupThree.length > 0){
                console.log('Test');
                $.set(nextButton, {
                        className: 'nextButtonActive'
                });
            }
            
            console.log(answerGroupThree);
        } else {
            $.set($('#gridThreeSelected' + selectedImage),
            {
                className: 'gameImageGridImageSelectedIcon'
            });
            answerGroupThree.splice(answerGroupThree.indexOf(event.target.id), 1);
            
            
            
            console.log(answerGroupThree);
        }
      });
    }

    // Create an array of these new image grids so that we can append them to the dom.
    var gameImageGrids = [gameImageGridOne, gameImageGridTwo, gameImageGridThree];
    
    gameContainer.append(imageContainer);
    gameContainer.append(interactionContainer);
    mainContainer.append(gameContainer);
    
    for (image in gameImageGrids) 
    {
      imageContainer.append(gameImageGrids[image]);
    }
    
    

    interactionContainer.append(nextButton);
    var gameMessage = $.create('div', {
      id: 'gameMessage',
      contents: fourImagesCopy.gameMessageTextOne,
      className: gameMessageTextType(fourImagesCopy.gameMessageTextOne)
    });  

    interactionContainer.append(gameMessage);
    
    // Set the new gameMessage text, substituting a call to gameMessageTextType,
    // for the normal className, which will dynamically set text size based on length.
    
  }

  // var buildInitialDom = function() {
  //   // Select the container we will be appending. Create game, image and interaction containers.
  //   // The game container is the top level container, and the image and interaction containers
  //   // Show images and contain interactive/text elements.
    
  //   var gameContainer = $.create('div', {
  //     id: 'gameContainer'
  //   });
  //   var imageContainer = $.create('div', {
  //     id: 'imageContainer'
  //   });
  //   var interactionContainer = $.create('div', {
  //     id: 'interactionContainer'
  //   });


  //   // Create our inital image grid for display before game DOM is loaded.
  //   var initialGameImageGrid = $.create('div', {
  //     className: 'gameImageGrid'
  //   });
   
  //   // Create four image tags and append them to the image grid.
  //   for (var i = 0; i < 4; i++)
  //   {
  //     var gameImageGridImage = $.create('img',
  //     {
  //       className: 'gameImageGridImage',
  //       src: gridImagesInitial[i]
  //     });
  //     initialGameImageGrid.append(gameImageGridImage);
  //   }
    

    

  //   // Create the remaining text elements, the call to action and call to action button.
  //   var callToAction = $.create('div', {
  //     id: 'callToAction',
  //     contents: fourImagesCopy.callToActionMessage
  //   });
    
  //   var ctaButton = $.create('button', {
  //     id: 'ctaButton', 
  //     contents: fourImagesCopy.callToActionButtonText
  //   });

  //   // Create event listener to trigger the buildGameDom function when button is clicked.
  //   ctaButton.addEventListener('click', function(event) {
  //     // We want to hide the initialGameImage grid.
  //     hide = $.set(initialGameImageGrid, 
  //     {
  //         className: "gameImageGrid hidden"
  //     });

  //     buildGameDom();
  //   });

  //   initialGameImageGrid.addEventListener('click', function(event)
  //   {
  //     hide = $.set(initialGameImageGrid, 
  //     {
  //         className: "gameImageGrid hidden"
  //     });

  //     buildGameDom();
  //   })

  //   // Append all containers to the DOM
  //   gameContainer.append(imageContainer);
  //   gameContainer.append(interactionContainer);
  //   mainContainer.append(gameContainer);

  // }



  // Bliss won't execute any JS until the page is ready, so we are fine calling this as a global function call.
  buildGameDom();

})();
