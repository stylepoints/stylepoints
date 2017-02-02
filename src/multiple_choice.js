  var css = require("./styles/styles_multiple_choice.css");
  var fourImagesCopy = {
    "callToActionMessage": "FIND THE PERFECT DRIVING ACCESSORY FOR YOU",
    "callToActionButtonText": "LET'S GO!",
    "gameTitle": "What gadget best fits your driving style? Click below to find out!",
    "gameTitleTruncated": "What gadget best fits your driving style?",
    "gameMessageTextOne": "1. WHICH TYPE OF DRIVER ARE YOU?",
    "gameMessageTextTwo": "2 of 3: Which picture describes why you drive most often?",
    "gameMessageTextThree": "3 of 3: Tap all the gadgets you already own then get results!",
    "resultMessageHeader": "Your know what you like and aren't afraid to voice it.",
    "resultMessageText": "Enter your email below for a chance to win a £100 voucher for Halfords.com. Standard T&C’s apply",
    "confirmationMessageText": "Thanks for entering! You will receive an email confirming your entry shortly.",
    "emailFormButtonText": "SUBMIT",
    "negativeButtonImage": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjUiPgogICAgICAgIDxnIGlkPSIwLjItRGVza3RvcC1pbmxpbmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MDEuMDAwMDAwLCAtMzA4LjAwMDAwMCkiIGZpbGw9IiM1RTVFNUUiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTQ2LjAwMDAwMCwgMjkzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE4MC40Njk2NzkgMTUgMTcwLjAxNzgzNiAyNS40NTE4NDMgMTU5LjU2NTk5MyAxNSAxNTUgMTkuNTMwMzIxIDE2NS40NTE4NDMgMjkuOTgyMTY0MSAxNTUgNDAuNDM0MDA3MSAxNTkuNTY1OTkzIDQ1IDE3MC4wMTc4MzYgMzQuNTQ4MTU3IDE4MC40Njk2NzkgNDUgMTg1IDQwLjQzNDAwNzEgMTc0LjU0ODE1NyAyOS45ODIxNjQxIDE4NSAxOS41MzAzMjEiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
    "positiveButtonImage": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIyOXB4IiB2aWV3Qm94PSIwIDAgMzAgMjkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaVBob25lLTctQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMyLjAwMDAwMCwgLTU0MC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wMDAwMDAsIDExNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC01LUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OS4wMDAwMDAsIDQxMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzAuOTU3MTI4OSwxOS4wMTk2Njk4IEM3MC41NTcyNjQ1LDE1LjA3NjUzNDkgNjcuMjM0NDYwOCwxMiA2My4xOTQ0MjEsMTIgQzU5Ljk1NjIwOTgsMTIgNTcuMTc5OTU3MywxMy45NzYzNzY5IDU1Ljk5ODY2MjYsMTYuNzkwNDk3IEM1NC44MTczNjgsMTMuOTc2Mzc2OSA1Mi4wNDExMTU1LDEyIDQ4LjgwMzIwNDIsMTIgQzQ0Ljc2Mjg2NDUsMTIgNDEuNDM5NzYwOCwxNS4wNzY1MzQ5IDQxLjA0MDE5NjQsMTkuMDE5NjY5OCBDNDEuMDEzNDk4OCwxOS4yODIzODUxIDQxLDE5LjU0OTMwODcgNDEsMTkuODE5MjM4MiBDNDEsMjkuMzE5Njc0MyA1Mi42MzUzNjI1LDMzLjgwMzU2OTkgNTUuOTk4NjYyNiw0MC4xMzk5OTk0IEM1OS4zNjE5NjI4LDMzLjgwMzg3MDQgNzAuOTk3MzI1MywyOS4zMTk5NzQ4IDcwLjk5NzMyNTMsMTkuODE5MjM4MiBDNzAuOTk3MzI1MywxOS41NDkzMDg3IDcwLjk4MzgyNjUsMTkuMjgyMzg1MSA3MC45NTcxMjg5LDE5LjAxOTY2OTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
    "gameImageGridImageSelectedIcon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxICgzNTMyNikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8cGF0aCBkPSJNOSwwIEM0LjAyOTQzNzI1LC0zLjA0MzU5MTg4ZS0xNiA2LjA4NzE4Mzc2ZS0xNiw0LjAyOTQzNzI1IDAsOSBDLTYuMDg3MTgzNzZlLTE2LDEzLjk3MDU2MjcgNC4wMjk0MzcyNSwxOCA5LDE4IEMxMy45NzA1NjI3LDE4IDE4LDEzLjk3MDU2MjcgMTgsOSBDMTgsNi42MTMwNTE1OSAxNy4wNTE3ODg0LDQuMzIzODY2MzggMTUuMzYzOTYxLDIuNjM2MDM4OTcgQzEzLjY3NjEzMzYsMC45NDgyMTE1NjMgMTEuMzg2OTQ4NCwxLjQ2MTU4NDM2ZS0xNiA5LDAgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiM3RUQzMjEiIHBvaW50cz0iOCAxMi45MSA1IDEwIDYuNDYgOC41NCA4IDEwLjA5IDEyLjc5IDUuMjkgMTQuMjEgNi43MSI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
    "itemDescription": "AUTOMATIC SMART METER £99",
    "finalRecommendationOne": "Driving is part of your daily routine. A dashcam can help keep your driving costs down.",
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

  fourImagesCopy.resultImage = fourImagesCopy.gameImageGridOne;

  console.log(fourImagesCopy.gameImageGridOne);
  // Create global variables for answers to questions.
  var answer1, answer2, answer3, image1, image2, image3;

  // Initialize global view index to zero.
  var index = 0;

  var json = require('./gamelogic.json');


  // Create image grid arrays. This will be removed once test object is converted to true JSON.
  var gridImagesInitial = [fourImagesCopy.gameImageGridOne, fourImagesCopy.gameImageGridTwo, fourImagesCopy.gameImageGridThree, fourImagesCopy.gameImageGridFour];

  var gridImagesTwo = [fourImagesCopy.gameImageGridFive, fourImagesCopy.gameImageGridSix, fourImagesCopy.gameImageGridSeven, fourImagesCopy.gameImageGridEight];

  var gridImagesThree = [fourImagesCopy.gameImageGridNine, fourImagesCopy.gameImageGridTen, fourImagesCopy.gameImageGridEleven, fourImagesCopy.gameImageGridTwelve];

  var gridImagesFour = [fourImagesCopy.gameImageGridThirteen, fourImagesCopy.gameImageGridFourteen, fourImagesCopy.gameImageGridFifteen, fourImagesCopy.gameImageGridSixteen];

  var mainContainer = $('#grid-container');

  var answerGroupOne = [];

  var answerGroupTwo = [];

  var answerGroupThree = [];

  var logicRecommendationOne = "";

  var logicRecommendationTwo = "";


  // The presentFinalScreen function shows the final screen with a confirmation.
  var presentFinalScreen = function()
  {
    var interactionContainer = $('#interactionContainer', mainContainer);

    interactionContainer.removeChild($('.gadgetRecommendation'));
    interactionContainer.removeChild($('#emailSubmitForm'));
    interactionContainer.removeChild($('#gameMessage'));

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
        src: fourImagesCopy.gameImageGridEleven
    });
    var oldResultMessage = $('#gameMessage', mainContainer);

    var confirmationTitle = $.create('div', {
      className: 'gameTitleFinalScreen',
      contents: [fourImagesCopy.confirmationMessageText]
    });



    interactionContainer.appendChild(shareButtonsContainer);
    interactionContainer.appendChild(confirmationTitle);

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

  var determineScreenThreeValue = function()
  {

    var boolList = [false, false, false, false];
    var screenThreeValue;
    for (var i = 0; i < 4; i++)
    {
      if( answerGroupThree[i] === "gridThreeSelected0" )
      {
        boolList[0] = true;
      }
      else if (answerGroupThree[i] === "gridThreeSelected1")
      {
        boolList[1] = true;
      }
      else if (answerGroupThree[i] === "gridThreeSelected2")
      {
        boolList[2] = true;
      }
      else if (answerGroupThree[i] === "gridThreeSelected3")
      {
        boolList[3] = true;
      }
    }
    if (JSON.stringify(boolList) === JSON.stringify([true, true, true, true]))
    {
      screenThreeValue = 11;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([true, true, false, true]))
    {
      screenThreeValue = 10;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([true, true, true, false]))
    {
      screenThreeValue = 11;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([true, false, true, true]))
    {
      screenThreeValue = 11;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([true, false, false, true]))
    {
      screenThreeValue = 20;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([true, true, false, false]))
    {
      screenThreeValue = 20;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([true, false, true, false]))
    {
      screenThreeValue = 21;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([true, false, false, false]))
    {
      screenThreeValue = 20;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, false, false, false]))
    {
      screenThreeValue = 0;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, false, true, false]))
    {
      screenThreeValue = 1;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, false, false, true]))
    {
      screenThreeValue = 0;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, true, false, false]))
    {
      screenThreeValue = 0;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, false, true, true]))
    {
      screenThreeValue = 11;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, true, true, false]))
    {
      screenThreeValue = 11;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, true, false, true]))
    {
      screenThreeValue = 10;
    }
    else if (JSON.stringify(boolList) === JSON.stringify([false, true, true, true]))
    {
      screenThreeValue = 11;
    }

    return screenThreeValue
  }
  var logicSelector = function()
  {


    var screenThreeValue = determineScreenThreeValue();

    // Change all the names for answer groups from overlay to just gridOneX
    answerGroupOne[0] = "gridOne" + answerGroupOne[0].slice(answerGroupOne[0].length - 1, answerGroupOne[0].length);
    answerGroupTwo[0] = "gridTwo" + answerGroupTwo[0].slice(answerGroupTwo[0].length - 1, answerGroupTwo[0].length);
    if(answerGroupOne[0] === "gridOne0")
    {
      if(answerGroupTwo[0] === "gridTwo0")
      {
            switch (screenThreeValue){
              case 0:
                logicRecommendationOne = json.conditionOne.recommendationTextOne;
                logicRecommendationTwo = json.conditionOne.recommendationTextTwo;
                break;
              case 1:
                logicRecommendationOne = json.conditionTwo.recommendationTextOne;
                logicRecommendationTwo = json.conditionTwo.recommendationTextTwo;
                break;
              case 11:
                logicRecommendationOne = json.conditionThree.recommendationTextOne;
                logicRecommendationTwo = json.conditionThree.recommendationTextTwo;
                break;
              case 10:
                logicRecommendationOne = json.conditionFour.recommendationTextOne;
                logicRecommendationTwo = json.conditionFour.recommendationTextTwo;
                break;
              case 21:
                logicRecommendationOne = json.conditionFive.recommendationTextOne;
                logicRecommendationTwo = json.conditionFive.recommendationTextTwo;
                break;
              case 20:
                logicRecommendationOne = json.conditionSix.recommendationTextOne;
                logicRecommendationTwo = json.conditionSix.recommendationTextTwo;
                break;
            }
      }
      else if (answerGroupTwo[0] === "gridTwo1")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionSeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeven.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionEight.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionNine.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionTen.recommendationTextOne;
              logicRecommendationTwo = json.conditionTen.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionEleven.recommendationTextOne;
              logicRecommendationTwo = json.conditionEleven.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionTwelve.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwelve.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] == "gridTwo3")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionThirteen.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirteen.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionFourteen.recommendationTextOne;
              logicRecommendationTwo = json.conditionFourteen.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionFifteen.recommendationTextOne;
              logicRecommendationTwo = json.conditionFifteen.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionSixteen.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixteen.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionSeventeen.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventeen.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionEighteen.recommendationTextOne;
              logicRecommendationTwo = json.conditionEighteen.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo2")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionNineteen.recommendationTextOne;
              logicRecommendationTwo = json.conditionNineteen.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionTwenty.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwenty.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionTwentyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentyOne.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionTwentyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentyTwo.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionTwentyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentyThree.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionTwentyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentyFour.recommendationTextTwo;
              break;
          }
      }
    }
    else if(answerGroupOne[0] === "gridOne1")
    {
      if(answerGroupTwo[0] === "gridTwo0")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionTwentyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentyFive.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionTwentySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentySix.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionTwentySeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentySeven.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionTwentyEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentyEight.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionTwentyNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionTwentyNine.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionThirty.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirty.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo1")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionThirtyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtyOne.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionThirtyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtyTwo.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionThirtyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtyThree.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionThirtyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtyFour.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionThirtyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtyFive.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionThirtySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtySix.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo3")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionThirtySeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtySeven.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionThirtyEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtyEight.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionThirtyNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionThirtyNine.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionForty.recommendationTextOne;
              logicRecommendationTwo = json.conditionForty.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionFortyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortyOne.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionFortyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortyTwo.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo2")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionFortyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortyThree.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionFortyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortyFour.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionFortyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortyFive.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionFortySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortySix.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionFortySeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortySeven.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionFortyEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortyEight.recommendationTextTwo;
              break;
          }
      }
    }
    else if (answerGroupOne[0] === "gridOne2")
    {
      if(answerGroupTwo[0] === "gridTwo0")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionFortyNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionFortyNine.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionFifty.recommendationTextOne;
              logicRecommendationTwo = json.conditionFifty.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionFiftyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftyOne.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionFiftyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftyTwo.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionFiftyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftyThree.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionFiftyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftyFour.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo1")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionFiftyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftyFive.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionFiftySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftySix.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionFiftySeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftySeven.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionFiftyEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftyEight.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionFiftyNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionFiftyNine.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionSixty.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixty.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo3")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionSixtyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtyOne.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionSixtyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtyTwo.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionSixtyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtyThree.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionSixtyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtyFour.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionSixtyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtyFive.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionSixtySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtySix.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo2")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionSixtySeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtySeven.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionSixtyEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtyEight.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionSixtyNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionSixtyNine.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionSeventy.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventy.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionSeventyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventyOne.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionSeventyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventyTwo.recommendationTextTwo;
              break;
          }
      }
    }
    else if (answerGroupOne[0] === "gridOne3")
    {
      if(answerGroupTwo[0] === "gridTwo0")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionSeventyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventyThree.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionSeventyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventyFour.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionSeventyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventyFive.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionSeventySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventySix.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionSeventySeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventySeven.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionSeventyEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventyEight.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo1")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionSeventyNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionSeventyNine.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionEighty.recommendationTextOne;
              logicRecommendationTwo = json.conditionEighty.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionEightyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightyOne.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionEightyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightyTwo.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionEightyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightyThree.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionEightyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightyFour.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo3")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionEightyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightyFive.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionEightySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightySix.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionEightySeven.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightySeven.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionEightyEight.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightyEight.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionEightyNine.recommendationTextOne;
              logicRecommendationTwo = json.conditionEightyNine.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionNinety.recommendationTextOne;
              logicRecommendationTwo = json.conditionNinety.recommendationTextTwo;
              break;
          }
      }
      else if (answerGroupTwo[0] === "gridTwo2")
      {
          switch (screenThreeValue){
            case 0:
              logicRecommendationOne = json.conditionNinetyOne.recommendationTextOne;
              logicRecommendationTwo = json.conditionNinetyOne.recommendationTextTwo;
              break;
            case 1:
              logicRecommendationOne = json.conditionNinetyTwo.recommendationTextOne;
              logicRecommendationTwo = json.conditionNinetyTwo.recommendationTextTwo;
              break;
            case 11:
              logicRecommendationOne = json.conditionNinetyThree.recommendationTextOne;
              logicRecommendationTwo = json.conditionNinetyThree.recommendationTextTwo;
              break;
            case 10:
              logicRecommendationOne = json.conditionNinetyFour.recommendationTextOne;
              logicRecommendationTwo = json.conditionNinetyFour.recommendationTextTwo;
              break;
            case 21:
              logicRecommendationOne = json.conditionNinetyFive.recommendationTextOne;
              logicRecommendationTwo = json.conditionNinetyFive.recommendationTextTwo;
              break;
            case 20:
              logicRecommendationOne = json.conditionNinetySix.recommendationTextOne;
              logicRecommendationTwo = json.conditionNinetySix.recommendationTextTwo;
              break;
          }
      }
    }


  }
  // The presentEmailScreen function shows the email screen and POSTs email data to the server.
  var presentEmailScreen = function() {

    logicSelector();
    // Select containers we're going to modify.
    var interactionContainer = $("#interactionContainer", mainContainer);

    interactionContainer.removeChild($('#nextButton'), mainContainer);
    // interactionContainer.removeChild($('#gameTitle'), mainContainer);
    var imageContainer = $("#imageContainer", mainContainer);
    // Remove lowZIndex class from the interactionContainer.
    raiseInteractionContainer = $.set(interactionContainer, {
      className: ''
    });

    var gadgetRecommendation = $.create('div', {
        className: 'gadgetRecommendation',
        contents: logicRecommendationTwo.toUpperCase()
    });

    interactionContainer.appendChild(gadgetRecommendation);
    // Select current game message and remove content so we can
    // re set it.
    var oldGameMessage = $('#gameMessage', mainContainer);
    oldGameMessage.innerHTML = '';
    $.set(oldGameMessage, {
      contents: [logicRecommendationOne.toUpperCase()],
      className: 'gameMessage gameMessageEmailScreen'
    });
    // Clear out imageContainer and then append new image
    if (answerGroupOne[0] === 'gridOne0')
    {
      imageContainer.innerHTML = '';
      imageContainer.appendChild($.create('div',
      {
        className: 'resultImageDiv',
        contents: [{
          tag: 'img',
          src: fourImagesCopy.gameImageGridOne,
          className: 'resultImage'
        }, {
          tag: 'div',
          className: 'overlay'
        }]
      }));
    }
    else if (answerGroupOne[0] === 'gridOne1')
    {
      imageContainer.innerHTML = '';
      imageContainer.appendChild($.create('div',
      {
        className: 'resultImageDiv',
        contents: [{
          tag: 'img',
          src: fourImagesCopy.gameImageGridTwo,
          className: 'resultImage'
        }, {
          tag: 'div',
          className: 'overlay'
        }]
      }));
    }
    else if (answerGroupOne[0] === 'gridOne2')
    {
      imageContainer.innerHTML = '';
      imageContainer.appendChild($.create('div',
      {
        className: 'resultImageDiv',
        contents: [{
          tag: 'img',
          src: fourImagesCopy.gameImageGridThree,
          className: 'resultImage'
        }, {
          tag: 'div',
          className: 'overlay'
        }]
      }));
    }
    else if (answerGroupOne[0] === 'gridOne3')
    {
      imageContainer.innerHTML = '';
      imageContainer.appendChild($.create('div',
      {
        className: 'resultImageDiv',
        contents: [{
          tag: 'img',
          src: fourImagesCopy.gameImageGridFour,
          className: 'resultImage'
        }, {
          tag: 'div',
          className: 'overlay'
        }]
      }));
    }

    // Create email submit form and append it to the interactionContainer.
    //  Add this when ready to activate mailchimp: //stylepoints.us14.list-manage.com/subscribe/post?u=56a2ff2655e74c7b8d44b955e&amp;id=87d115b894
    var emailSubmitForm = $.create('form', {
      id: 'emailSubmitForm',
      action: '',
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

    $('#interactionContainer', mainContainer).appendChild(emailSubmitForm);
    // block the default behavior of the submit button. For testing only
    $('#emailFormButton', mainContainer).addEventListener('click', function(e) {
      e.preventDefault();
      ga('send', 'event', {
        eventCategory: 'game',
        eventAction: 'email submitted',
      });
      var inputValue = $('#emailFormInput', mainContainer).value;
      $.fetch('https://7p5e0wkd41.execute-api.us-east-1.amazonaws.com/prod/proxy',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data:JSON.stringify({
          email_address: inputValue,
          status: 'subscribed'
        })
      }).then(function(response) {
        if(response.status == 200) {
          var resp = JSON.parse(response.response)
          //mailchimp response
          if(resp.status == "subscribed") {
            console.log('email sent successfully!');
            presentFinalScreen();
          } else {
            console.log('error 400 or other');
            console.log(resp);
            // TODO handle this error. As a short term fix we are proceeding to the final screen anyway
            presentFinalScreen();
          }

        } else {
          console.log('error submitting email')
          // TODO handle this error. As a short term fix we are proceeding to the final screen anyway
          presentFinalScreen();
        }
      })
    })

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
      $('#gameTitle').innerHTML = '';
      $.set($('#gameTitle'), {
        contents: fourImagesCopy.gameTitleTruncated.toUpperCase()
      });
      gameMessage.innerHTML = '';
      var setText = $.set(gameMessage, {
        className: gameMessageTextType(fourImagesCopy.gameMessageTextOne),
        contents: fourImagesCopy.gameMessageTextTwo.toUpperCase()
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
      // var nextButton = $('#nextButton');

      // gameMessage.innerHTML = '';
      // var setText = $.set(gameMessage, {
      //   className: gameMessageTextType(fourImagesCopy.gameMessageTextThree),
      //   contents: fourImagesCopy.gameMessageTextThree
      // });
    }


    // Increment the index and log each answer.

  }


  // This function builds the game DOM.
  var buildGameDom = function() {

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

      // Reset next button activity state after transitioning.
      ga('send', 'event', 'NextButton', 'clicked');
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


      gameImageGridOne.appendChild(gameImageGridImageContainer);
      gameImageGridImageContainer.addEventListener('click', function(event)
      {
        console.log(event.target.id.indexOf('gridOneOverlay'));
        // Have to get the ID from the element ID to make sure
        // we show the right selected icon.



        var selectedImage = event.target.id.substring(event.target.id.length - 1, event.target.id.length);
        ga('send', 'event', {
          eventCategory: 'Question 1',
          eventAction: 'selected '+selectedImage,
          eventValue: selectedImage
        });

        // If there are no answers in array.
        if (answerGroupOne.length === 0)
        {
          // Push id
          answerGroupOne.push(event.target.id);
          for( var i = 0; i < 4; i++ )
          {

              if( i !== Number(selectedImage) )
              {
                $.set($('#gridOneOverlay' + i),
                {
                  className: 'gameImageGridImageOverlay'
                });
              }
              else
              {
                $.set($('#gridOneOverlay' + i),
                {
                  className: 'gameImageGridImageOverlay hidden'
                });

                $.set($('#gridOneSelected' + i),
                {
                  className: 'gameImageGridImageSelectedIcon show'
                });
              }
          }
          $.set($('#nextButton'), {
            className: 'nextButton nextButtonActive'
          });
        }
        else
        {
          $.set($('#nextButton'), {
            className: 'nextButton'
          });
          answerGroupOne.splice(0, 1);
          for (var i = 0; i < 4; i++)
          {
            // Remove any selected icons
            if( $("#gridOneSelected" + i).className === "gameImageGridImageSelectedIcon show")
            {
              $.set($("#gridOneSelected" + i), {
                className: 'gameImageGridImageSelectedIcon'
              });
            }

            if ( $("#gridOneOverlay" + i).className === "gameImageGridImageOverlay")
            {
              $.set($("#gridOneOverlay" + i), {
                className: 'gameImageGridImageOverlay hidden'
              });
            }
          }
          // Check to see if we selected an overlay
          // if so, switch the selected icon
          if( event.target.id.indexOf("gridOneOverlay") === 0)
          {
            for (var j = 0; j < 4; j++)
            {
              if (j !== Number(selectedImage) )
              {
                $.set($('#gridOneOverlay' + j), {
                  className: 'gameImageGridImageOverlay'
                });
              }
              else
              {
                $.set($('#gridOneOverlay' + j),
                {
                  className: 'gameImageGridImageOverlay hidden'
                });

                $.set($('#gridOneSelected' + j),
                {
                  className: 'gameImageGridImageSelectedIcon show'
                });
              }
            }
            $.set($('#nextButton'), {
              className: 'nextButton nextButtonActive'
            });
            answerGroupOne.push(event.target.id);
            // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
          }

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


      gameImageGridTwo.appendChild(gameImageGridImageContainer);
      gameImageGridImageContainer.addEventListener('click', function(event)
      {
        // Have to get the ID from the element ID to make sure
        // we show the right selected icon.

        var selectedImage = event.target.id.substring(event.target.id.length - 1, event.target.id.length);
        // If there are no answers in array.
        if (answerGroupTwo.length === 0)
        {
          // Push id
          answerGroupTwo.push(event.target.id);

          ga('send', 'event', {
            eventCategory: 'Question 2',
            eventAction: 'selected '+selectedImage,
            eventValue: selectedImage
          });

          for( var i = 0; i < 4; i++ )
          {

              if( i !== Number(selectedImage) )
              {
                console.log('Should dim all but ', selectedImage);
                $.set($('#gridTwoOverlay' + i),
                {
                  className: 'gameImageGridImageOverlay'
                });
              }
              else
              {
                console.log('should only show once');
                $.set($('#gridTwoOverlay' + i),
                {
                  className: 'gameImageGridImageOverlay hidden'
                });

                $.set($('#gridTwoSelected' + i),
                {
                  className: 'gameImageGridImageSelectedIcon show'
                });
              }
          }
          $.set($('#nextButton'), {
            className: 'nextButton nextButtonActive'
          });
        }
        else
        {
          $.set($('#nextButton'), {
            className: 'nextButton'
          });
          answerGroupTwo.splice(0, 1);
          console.log(answerGroupTwo);
          for (var i = 0; i < 4; i++)
          {
            // Remove any selected icons
            if( $("#gridTwoSelected" + i).className === "gameImageGridImageSelectedIcon show")
            {
              $.set($("#gridTwoSelected" + i), {
                className: 'gameImageGridImageSelectedIcon'
              });
            }

            if ( $("#gridTwoOverlay" + i).className === "gameImageGridImageOverlay")
            {
              $.set($("#gridTwoOverlay" + i), {
                className: 'gameImageGridImageOverlay hidden'
              });
            }
          }
          // Check to see if we selected an overlay
          // if so, switch the selected icon
          if( event.target.id.indexOf("gridTwoOverlay") === 0)
          {

            for (var j = 0; j < 4; j++)
            {
              if (j !== Number(selectedImage) )
              {
                $.set($('#gridTwoOverlay' + j), {
                  className: 'gameImageGridImageOverlay'
                });
              }
              else
              {
                $.set($('#gridTwoOverlay' + j),
                {
                  className: 'gameImageGridImageOverlay hidden'
                });

                $.set($('#gridTwoSelected' + j),
                {
                  className: 'gameImageGridImageSelectedIcon show'
                });
              }
            }
            $.set($('#nextButton'), {
              className: 'nextButton nextButtonActive'
            });
            answerGroupTwo.push(event.target.id);
          }

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


      gameImageGridThree.appendChild(gameImageGridImageContainer);
      gameImageGridImageContainer.addEventListener('click', function(event)
      {

        // Have to get the ID from the element ID to make sure
        // we show the right selected icon.

        var selectedImage = event.target.id.substring(event.target.id.length - 1, event.target.id.length);

        ga('send', 'event', {
          eventCategory: 'Question 3',
          eventAction: 'selected '+selectedImage,
          eventValue: selectedImage
        });

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
                $.set(nextButton, {
                        className: 'nextButtonActive'
                });
            }
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

    // Create an array of these new image grids so that we can appendChild them to the dom.
    var gameImageGrids = [gameImageGridOne, gameImageGridTwo, gameImageGridThree];


    gameContainer.appendChild(imageContainer);
    gameContainer.appendChild(interactionContainer);
    mainContainer.appendChild(gameContainer);

    for (image in gameImageGrids)
    {
      imageContainer.appendChild(gameImageGrids[image]);
    }

    var gameTitle = $.create('div', {
      id: 'gameTitle',
      contents: fourImagesCopy.gameTitle.toUpperCase(),
      className: 'gameTitle'
    });

    interactionContainer.appendChild(gameTitle);

    interactionContainer.appendChild(nextButton);
    var gameMessage = $.create('div', {
      id: 'gameMessage',
      contents: fourImagesCopy.gameMessageTextOne,
      className: gameMessageTextType(fourImagesCopy.gameMessageTextOne)
    });

    interactionContainer.appendChild(gameMessage);

    interactionContainer.appendChild(nextButton);


    // Set the new gameMessage text, substituting a call to gameMessageTextType,
    // for the normal className, which will dynamically set text size based on length.

}


  // $ won't execute any JS until the page is ready, so we are fine calling this as a global function call.
  buildGameDom();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-88292469-1', 'auto');
  ga('send', 'pageview');
