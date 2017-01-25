(function(){

  var css = require("./styles/styles_multiple_choice.css");
  var fourImagesCopy = {
    "callToActionMessage": "FIND THE PERFECT DRIVING ACCESSORY FOR YOU",
    "callToActionButtonText": "LET'S GO!",
    "gameTitle": "What gadget best fits your driving style? Click below to find out!",
    "gameMessageTextOne": "1. WHICH TYPE OF DRIVER ARE YOU?",
    "gameMessageTextTwo": "2. WHICH PICTURE DESCRIBES WHY YOU DRIVE MOST OFTEN?",
<<<<<<< HEAD
    "gameMessageTextThree": "3 of 3: Tap all the gadgets you already own then, Get Results!",
    "resultMessageHeader": "OUR RECOMMENDATION:",
    "resultMessageText": "Enter your email below to receive a £5 voucher off any purchase at Halfords.com",
=======
    "gameMessageTextThree": "3. TAP ALL OF THE GADGETS YOU ALREADY OWN AND THEN GET RESULTS!",
    "resultMessageHeader": "You know what you like and aren't afraid to voice it!",
    "resultMessageText": "Enter your email below to receive a £5 voucher off any purchase at Halfords.com. Standard T&C's apply",
>>>>>>> add additional results copy
    "confirmationMessageText": "Thanks for playing! You will receive an email with your voucher within 24 hours.",
    "emailFormButtonText": "SUBMIT",
    "negativeButtonImage": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjUiPgogICAgICAgIDxnIGlkPSIwLjItRGVza3RvcC1pbmxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MDEuMDAwMDAwLCAtMzA4LjAwMDAwMCkiIGZpbGw9IiM1RTVFNUUiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQ2LjAwMDAwMCwgMjkzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE4MC40Njk2NzkgMTUgMTcwLjAxNzgzNiAyNS40NTE4NDMgMTU5LjU2NTk5MyAxNSAxNTUgMTkuNTMwMzIxIDE2NS40NTE4NDMgMjkuOTgyMTY0MSAxNTUgNDAuNDM0MDA3MSAxNTkuNTY1OTkzIDQ1IDE3MC4wMTc4MzYgMzQuNTQ4MTU3IDE4MC40Njk2NzkgNDUgMTg1IDQwLjQzNDAwNzEgMTc0LjU0ODE1NyAyOS45ODIxNjQxIDE4NSAxOS41MzAzMjEiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
    "positiveButtonImage": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIyOXB4IiB2aWV3Qm94PSIwIDAgMzAgMjkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaVBob25lLTctQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjAwMDAwMCwgLTU0MC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wMDAwMDAsIDExNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC01LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OS4wMDAwMDAsIDQxMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzAuOTU3MTI4OSwxOS4wMTk2Njk4IEM3MC41NTcyNjQ1LDE1LjA3NjUzNDkgNjcuMjM0NDYwOCwxMiA2My4xOTQ0MjEsMTIgQzU5Ljk1NjIwOTgsMTIgNTcuMTc5OTU3MywxMy45NzYzNzY5IDU1Ljk5ODY2MjYsMTYuNzkwNDk3IEM1NC44MTczNjgsMTMuOTc2Mzc2OSA1Mi4wNDExMTU1LDEyIDQ4LjgwMzIwNDIsMTIgQzQ0Ljc2Mjg2NDUsMTIgNDEuNDM5NzYwOCwxNS4wNzY1MzQ5IDQxLjA0MDE5NjQsMTkuMDE5NjY5OCBDNDEuMDEzNDk4OCwxOS4yODIzODUxIDQxLDE5LjU0OTMwODcgNDEsMTkuODE5MjM4MiBDNDEsMjkuMzE5Njc0MyA1Mi42MzUzNjI1LDMzLjgwMzU2OTkgNTUuOTk4NjYyNiw0MC4xMzk5OTk0IEM1OS4zNjE5NjI4LDMzLjgwMzg3MDQgNzAuOTk3MzI1MywyOS4zMTk5NzQ4IDcwLjk5NzMyNTMsMTkuODE5MjM4MiBDNzAuOTk3MzI1MywxOS41NDkzMDg3IDcwLjk4MzgyNjUsMTkuMjgyMzg1MSA3MC45NTcxMjg5LDE5LjAxOTY2OTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
    "gameImageGridImageSelectedIcon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8cGF0aCBkPSJNOSwwIEM0LjAyOTQzNzI1LC0zLjA0MzU5MTg4ZS0xNiA2LjA4NzE4Mzc2ZS0xNiw0LjAyOTQzNzI1IDAsOSBDLTYuMDg3MTgzNzZlLTE2LDEzLjk3MDU2MjcgNC4wMjk0MzcyNSwxOCA5LDE4IEMxMy45NzA1NjI3LDE4IDE4LDEzLjk3MDU2MjcgMTgsOSBDMTgsNi42MTMwNTE1OSAxNy4wNTE3ODg0LDQuMzIzODY2MzggMTUuMzYzOTYxLDIuNjM2MDM4OTcgQzEzLjY3NjEzMzYsMC45NDgyMTE1NjMgMTEuMzg2OTQ4NCwxLjQ2MTU4NDM2ZS0xNiA5LDAgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiM3RUQzMjEiIHBvaW50cz0iOCAxMi45MSA1IDEwIDYuNDYgOC41NCA4IDEwLjA5IDEyLjc5IDUuMjkgMTQuMjEgNi43MSI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
    "resultImage": require("./images/multiple_choice/3_1.png"),
    "itemDescription": "AUTOMATIC SMART METER £99",
    "finalRecommendationOne": "Driving is part of your daily routine. A dashcam can help keep your costs down!",
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
    "facebookShare": 'data:image/png;base64,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',
    "twitterShare": 'data:image/png;base64,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',
    "gplusShare": 'data:image/png;base64,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'

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

    var shareButtonsContainer = $.create('div', {
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
    interactionContainer.removeChild($('#gameTitle'), mainContainer);

    var imageContainer = $("#imageContainer", mainContainer);
    // Remove lowZIndex class from the interactionContainer.
    raiseInteractionContainer = $.set(interactionContainer, {
      className: ''
    });

    var gadgetRecommendation = $.create('h2', {
        className: 'gadgetRecommendation',
        contents: fourImagesCopy.finalRecommendationOne.toUpperCase()
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
      contents: fourImagesCopy.resultMessageHeader.toUpperCase(),
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
          // type: 'submit',
          type: 'div',
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
        contents: "GET RESULTS"
      });  
      animateExit(event);
      gameMessage.innerHTML = '';
      var setText = $.set(gameMessage, {
        className: 'gameMessage gameMessageFinalQuestion',     
        contents: fourImagesCopy.gameMessageTextThree.toUpperCase()
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

    var gameTitle = $.create('div', {
      id: 'gameTitle',
      contents: fourImagesCopy.gameTitle.toUpperCase(),
      className: 'gameTitle'
    });

    interactionContainer.append(gameTitle);

    var gameMessage = $.create('div', {
      id: 'gameMessage',
      contents: fourImagesCopy.gameMessageTextOne,
      className: gameMessageTextType(fourImagesCopy.gameMessageTextOne)
    });

    interactionContainer.append(gameMessage);

    interactionContainer.append(nextButton);


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
