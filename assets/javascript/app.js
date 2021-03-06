var game = {
    play: function () {
        $(document).ready(function () {
            game.functions.logic.init();
            game.functions.logic.startMenu();
        });
    },
    state: {
        questionIDArray: [],
        questions: [],
        numberOfPotentialAnswers: 4,
        currentQuestion: 0,
        currentAnswer: null,
        numberOfQuestions: 5,
        questionsRemaining: 5,
        questionsRight: 0,
        questionsWrong: 0,
        questionsUnanswered: 0,
    },
    questions: [
        {
            id: 1,
            question: "What does array method .concat() do?",
            answer: "Joins two or more arrays, and returns a copy of the joined arrays",
            w3Link: "https://www.w3schools.com/jsref/jsref_concat_array.asp",
            potentialAnswers: [],
        },
        {
            id: 2,
            question: "What does array method .copyWithin() do?",
            answer: "Copies array elements within the array, to and from specified positions",
            w3Link: "https://www.w3schools.com/jsref/jsref_copywithin.asp",
            potentialAnswers: [],
        },
        {
            id: 3,
            question: "What does array method .entries() do?",
            answer: "Returns a key/value pair Array Iteration Object",
            w3Link: "https://www.w3schools.com/jsref/jsref_entries.asp",
            potentialAnswers: [],
        },
        {
            id: 4,
            question: "What does array method .every() do?",
            answer: "Checks if every element in an array pass a test",
            w3Link: "https://www.w3schools.com/jsref/jsref_every.asp",
            potentialAnswers: [],
        },
        {
            id: 5,
            question: "What does array method .fill() do?",
            answer: "Fill the elements in an array with a static value",
            w3Link: "https://www.w3schools.com/jsref/jsref_fill.asp",
            potentialAnswers: [],
        },
        {
            id: 6,
            question: "What does array method .filter() do?",
            answer: "Creates a new array with every element in an array that pass a test",
            w3Link: "https://www.w3schools.com/jsref/jsref_filter.asp",
            potentialAnswers: [],
        },
        {
            id: 7,
            question: "What does array method .find() do?",
            answer: "Returns the value of the first element in an array that pass a test",
            w3Link: "https://www.w3schools.com/jsref/jsref_find.asp",
            potentialAnswers: [],
        },
        {
            id: 8,
            question: "What does array method .findIndex() do?",
            answer: "Returns the index of the first element in an array that pass a test",
            w3Link: "https://www.w3schools.com/jsref/jsref_findindex.asp",
            potentialAnswers: [],
        },
        {
            id: 9,
            question: "What does array method .forEach() do?",
            answer: "Calls a function for each array element",
            w3Link: "https://www.w3schools.com/jsref/jsref_forEach.asp",
            potentialAnswers: [],
        },
        {
            id: 10,
            question: "What does array method .from() do?",
            answer: "Creates an array from an object",
            w3Link: "https://www.w3schools.com/jsref/jsref_from.asp",
            potentialAnswers: [],
        },
        {
            id: 11,
            question: "What does array method .includes() do?",
            answer: "Check if an array contains the specified element",
            w3Link: "https://www.w3schools.com/jsref/jsref_includes_array.asp",
            potentialAnswers: [],
        },
        {
            id: 12,
            question: "What does array method .indexOf() do?",
            answer: "Search the array for an element and returns its position",
            w3Link: "https://www.w3schools.com/jsref/jsref_indexof_array.asp",
            potentialAnswers: [],
        },
        {
            id: 13,
            question: "What does array method .isArray() do?",
            answer: "Checks whether an object is an array",
            w3Link: "https://www.w3schools.com/jsref/jsref_isarray.asp",
            potentialAnswers: [],
        },
        {
            id: 14,
            question: "What does array method .join() do?",
            answer: "Joins all elements of an array into a string",
            w3Link: "https://www.w3schools.com/jsref/jsref_join.asp",
            potentialAnswers: [],
        },
        {
            id: 15,
            question: "What does array method .keys() do?",
            answer: "Returns a Array Iteration Object, containing the keys of the original array",
            w3Link: "https://www.w3schools.com/jsref/jsref_keys.asp",
            potentialAnswers: [],
        },
        {
            id: 16,
            question: "What does array method .lastIndexOf() do?",
            answer: "Search the array for an element, starting at the end, and returns its position",
            w3Link: "https://www.w3schools.com/jsref/jsref_lastindexof_array.asp",
            potentialAnswers: [],
        },
        {
            id: 17,
            question: "What does array method .map() do?",
            answer: "Creates a new array with the result of calling a function for each array element",
            w3Link: "https://www.w3schools.com/jsref/jsref_map.asp",
            potentialAnswers: [],
        },
        {
            id: 18,
            question: "What does array method .pop() do?",
            answer: "Removes the last element of an array, and returns that element",
            w3Link: "https://www.w3schools.com/jsref/jsref_pop.asp",
            potentialAnswers: [],
        },
        {
            id: 19,
            question: "What does array method .push() do?",
            answer: "Adds new elements to the end of an array, and returns the new length",
            w3Link: "https://www.w3schools.com/jsref/jsref_push.asp",
            potentialAnswers: [],
        },
        {
            id: 20,
            question: "What does array method .reduce() do?",
            answer: "Reduce the values of an array to a single value (going left-to-right)",
            w3Link: "https://www.w3schools.com/jsref/jsref_reduce.asp",
            potentialAnswers: [],
        },
        {
            id: 21,
            question: "What does array method .reduceRight() do?",
            answer: "Reduce the values of an array to a single value (going right-to-left)",
            w3Link: "https://www.w3schools.com/jsref/jsref_reduceright.asp",
            potentialAnswers: [],
        },
        {
            id: 22,
            question: "What does array method .reverse() do?",
            answer: "Reverses the order of the elements in an array",
            w3Link: "https://www.w3schools.com/jsref/jsref_reverse.asp",
            potentialAnswers: [],
        },
        {
            id: 23,
            question: "What does array method .shift() do?",
            answer: "Removes the first element of an array, and returns that element",
            w3Link: "https://www.w3schools.com/jsref/jsref_shift.asp",
            potentialAnswers: [],
        },
        {
            id: 24,
            question: "What does array method .slice() do?",
            answer: "Selects a part of an array, and returns the new array",
            w3Link: "https://www.w3schools.com/jsref/jsref_slice_array.asp",
            potentialAnswers: [],
        },
        {
            id: 25,
            question: "What does array method .some() do?",
            answer: "Checks if any of the elements in an array pass a test",
            w3Link: "https://www.w3schools.com/jsref/jsref_some.asp",
            potentialAnswers: [],
        },
        {
            id: 26,
            question: "What does array method .sort() do?",
            answer: "Sorts the elements of an array",
            w3Link: "https://www.w3schools.com/jsref/jsref_sort.asp",
            potentialAnswers: [],
        },
        {
            id: 27,
            question: "What does array method .splice() do?",
            answer: "Adds/Removes elements from an array",
            w3Link: "https://www.w3schools.com/jsref/jsref_splice.asp",
            potentialAnswers: [],
        },
        {
            id: 28,
            question: "What does array method .toString() do?",
            answer: "Converts an array to a string, and returns the result",
            w3Link: "https://www.w3schools.com/jsref/jsref_tostring_array.asp",
            potentialAnswers: [],
        },
        {
            id: 29,
            question: "What does array method .unshift() do?",
            answer: "Adds new elements to the beginning of an array, and returns the new length",
            w3Link: "https://www.w3schools.com/jsref/jsref_unshift.asp",
            potentialAnswers: [],
        },
        {
            id: 30,
            question: "What does array method .valueOf() do?",
            answer: "Returns the primitive value of an array",
            w3Link: "https://www.w3schools.com/jsref/jsref_valueof_array.asp",
            potentialAnswers: [],
        },
    ],
    functions: {
        create: {
            newElement: function (type, id, destination) {
                var newElement = document.createElement(type);
                newElement.setAttribute("id", id);
                document.getElementById(destination).appendChild(newElement);
                return newElement;
            },
            setAttributes: function (elements, attributes) {
                Object.keys(attributes).forEach(function (name) {
                    elements.setAttribute(name, attributes[name]);
                })
            },
            gameContainer: function () {
                //find destination
                var gameContainer = document.getElementById("game");
                game.functions.create.setAttributes(gameContainer, {
                    id: "gameContainer",
                    class: "container-fluid px-0 bg-light"
                });
            },
            titleElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "titleElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row"
                });
            },
            titleElement: function () {
                //create element
                var element = game.functions.create.newElement("div", "titleElement", "titleElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12 bg-secondary mx-auto"
                });
            },
            titleElementText: function () {
                //create element
                var element = game.functions.create.newElement("p", "titleElementText", "titleElement");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "text-center text-white"
                });
                document.getElementById("titleElementText").innerHTML = "<div class='mx-auto pt-2' ><h3 id='titleText'>Know Your <img class='align-baseline img'id='titleJS' src='./assets/images/jsLogo.svg'></img></h3>";
                
            },
            timerElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "timerElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row"
                });
                //game.functions.timer.runFor(15);
            },
            timerElement: function () {
                //create element
                var element = game.functions.create.newElement("div", "timerElement", "timerElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12 col-sm-6 mt-sm-2 mx-auto py-2"
                });
            },
            timerElementText: function () {
                //create element
                var element = game.functions.create.newElement("p", "timerElementText", "timerElement");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "text-center text-white m-auto"
                });

            },
            questionElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "questionElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row"
                });
            },
            questionElement: function () {
                //create element
                var element = game.functions.create.newElement("div", "questionElement", "questionElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12 col-sm-11 mt-sm-2 mx-auto"
                });
            },
            questionElementText: function () {
                //create element
                var element = game.functions.create.newElement("h5", "questionElementText", "questionElement");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "text-center"
                });
            },
            answerChoicesElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "answerChoicesElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row mt-5 px-sm-5"
                });
            },
            answerChoicesElement: function (potentialAnswerID) {
                //create element
                var element = game.functions.create.newElement("div", "answerChoicesElement" + potentialAnswerID, "answerChoicesElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12 col-sm-5 bg-gray1  mx-sm-auto mt-1 answerChoicesElement",
                    onClick: "game.functions.logic.userSelectAnswer(" + potentialAnswerID + ")",
                });
            },
            answerChoiceElement: function (potentialAnswerID) {
                //create element
                var element = game.functions.create.newElement("div", "answerChoiceElement" + potentialAnswerID, "answerChoicesElement" + potentialAnswerID);
                //style element
                game.functions.create.setAttributes(element, {
                    class: "text-center text-white p-2 ",
                    
                    //answerID: potentialAnswerID,
                });
            },
            gameModal: function () {
                //create element
                var element = game.functions.create.newElement("div", "gameModal", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "modal fade",
                    tabindex: "-1",
                    role: "dialog",

                    //"aria-labelledby": "modalCenterTitle",
                    //"aria-hidden": "true",
                });
            },
            gameModalDialogue: function () {
                //create element
                var element = game.functions.create.newElement("div", "gameModalDialogue", "gameModal");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "modal-dialog modal-lg modal-dialog-centered",
                    role: "document",

                });
            },
            gameModalContent: function () {
                //create element
                var element = game.functions.create.newElement("div", "gameModalContent", "gameModalDialogue");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "modal-content"
                });
            },
            gameModalHeader: function () {
                //create element
                var element = game.functions.create.newElement("div", "gameModalHeader", "gameModalContent");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "modal-header"
                });
            },
            gameModalTitle: function () {
                //create element
                var element = game.functions.create.newElement("p", "gameModalTitle", "gameModalHeader");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "modal-title mx-auto align-baseline"
                });
            },
            gameModalCloseButton: function () {
                //create element
                var element = game.functions.create.newElement("button", "gameModalCloseButton", "gameModalHeader");
                //style element
                game.functions.create.setAttributes(element, {
                    "type": "button",
                    "class": "close float-right",
                    "data-dismiss": "modal",
                    "aria-label": "Close",
                    
                });
            },
            gameModalBody: function () {
                //create element
                var element = game.functions.create.newElement("div", "gameModalBody", "gameModalContent");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "modal-body border-bottom",
                });
            },
            gameModalBodyText: function () {
                //create element
                var element = game.functions.create.newElement("p", "gameModalBodyText", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "row text-center",
                });
            },
            gameModalBodyGameOver: function () {
                //create element
                var element = game.functions.create.newElement("div", "gameModalBodyGameOver", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "row text-center",
                });
            },
            gameOverModalrightAnswers: function (data) {
                //create element
                var element = game.functions.create.newElement("div", "gameOverModalrightAnswers", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "col-12",
                });

                var rightAnswerStatsContainer = game.functions.create.newElement("div", "rightAnswerStatsContainer", "gameOverModalrightAnswers");
                game.functions.create.setAttributes(rightAnswerStatsContainer, {
                    "class": "row",
                });
                var rightAnswerStatsText = game.functions.create.newElement("div", "rightAnswerStatsText", "rightAnswerStatsContainer");
                game.functions.create.setAttributes(rightAnswerStatsText, {
                    "class": "col-12",
                });
                document.getElementById("rightAnswerStatsText").innerHTML = "Correct";

                var rightAnswerStats = game.functions.create.newElement("div", "rightAnswerStats", "rightAnswerStatsContainer");
                game.functions.create.setAttributes(rightAnswerStats, {
                    "class": "col-12",
                    
                });
                var totalBar = game.functions.create.newElement("div", "totalBar", "rightAnswerStats");
                game.functions.create.setAttributes(totalBar, {
                    "class": "bg-secondary",
                });
                var correctBar = game.functions.create.newElement("div", "correctBar", "rightAnswerStats");
                var dataP =     100 * data/5;
                if (dataP <= 10){
                    game.functions.create.setAttributes(correctBar, {
                        "class": "bg-success text-white",
                        "style": "width: 10%;"
                    });
                } else {
                    game.functions.create.setAttributes(correctBar, {
                        "class": "bg-success text-white",
                        "style": "width: 10%;"
                    });
                    $("#correctBar").animate({width: dataP+"%",}, "slow");

                }
                
                var correctPercent = game.functions.create.newElement("span", "correctPercent", "correctBar");
                game.functions.create.setAttributes(correctPercent, {
                    "class": "float-right pr-2",
                    
                });
                document.getElementById("correctPercent").innerHTML = dataP+"%";


            },
            gameOverModalWrongAnswers: function (data) {
                //create element
                var element = game.functions.create.newElement("div", "gameOverModalWrongAnswers", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "col-12",
                });

                var wrongAnswerStatsContainer = game.functions.create.newElement("div", "wrongAnswerStatsContainer", "gameOverModalWrongAnswers");
                game.functions.create.setAttributes(wrongAnswerStatsContainer, {
                    "class": "row",
                });
                var wrongAnswerStatsText = game.functions.create.newElement("div", "wrongAnswerStatsText", "wrongAnswerStatsContainer");
                game.functions.create.setAttributes(wrongAnswerStatsText, {
                    "class": "col-12",
                });
                document.getElementById("wrongAnswerStatsText").innerHTML = "Incorrect";

                var wrongAnswerStats = game.functions.create.newElement("div", "wrongAnswerStats", "wrongAnswerStatsContainer");
                game.functions.create.setAttributes(wrongAnswerStats, {
                    "class": "col-12",
                    
                });
                var totalBar = game.functions.create.newElement("div", "totalBar", "wrongAnswerStats");
                game.functions.create.setAttributes(totalBar, {
                    "class": "bg-secondary",
                });
                var incorrectBar = game.functions.create.newElement("div", "incorrectBar", "wrongAnswerStats");
                var dataP =     100 * data/5;
                if (dataP <= 10){
                    game.functions.create.setAttributes(incorrectBar, {
                        "class": "bg-danger text-white",
                        "style": "width: 10%;"
                    });
                } else {
                    game.functions.create.setAttributes(incorrectBar, {
                        "class": "bg-danger text-white",
                        "style": "width: 10%;"
                    });
                    $("#incorrectBar").animate({width: dataP+"%",}, "slow");
                }

                

                
                var incorrectPercent = game.functions.create.newElement("span", "incorrectPercent", "incorrectBar");
                game.functions.create.setAttributes(incorrectPercent, {
                    "class": "float-right pr-2",
                    
                });
                
                document.getElementById("incorrectPercent").innerHTML = dataP+"%";
            },
            gameOverModalunansweredQuestions: function (data) {
                //create element
                var element = game.functions.create.newElement("div", "gameOverModalunansweredQuestions", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "col-12",
                });

                var unsweredStatsContainer = game.functions.create.newElement("div", "unsweredStatsContainer", "gameOverModalunansweredQuestions");
                game.functions.create.setAttributes(unsweredStatsContainer, {
                    "class": "row",
                });
                var unansweredStatsText = game.functions.create.newElement("div", "unansweredStatsText", "unsweredStatsContainer");
                game.functions.create.setAttributes(unansweredStatsText, {
                    "class": "col-12",
                });
                document.getElementById("unansweredStatsText").innerHTML = "Unanswered";

                var unansweredStats = game.functions.create.newElement("div", "unansweredStats", "unsweredStatsContainer");
                game.functions.create.setAttributes(unansweredStats, {
                    "class": "col-12",
                    
                });
                var totalBar = game.functions.create.newElement("div", "totalBar", "unansweredStats");
                game.functions.create.setAttributes(totalBar, {
                    "class": "bg-secondary",
                });
                var unansweredBar = game.functions.create.newElement("div", "unansweredBar", "unansweredStats");
                var dataP =     100 * data/5;
                if (dataP <= 10){
                    game.functions.create.setAttributes(unansweredBar, {
                        "class": "bg-warning text-white",
                        "style": "width: 10%;"
                    });
                } else {
                    game.functions.create.setAttributes(unansweredBar, {
                        "class": "bg-warning text-white",
                        "style": "width: 10%;"
                    });
                    $("#unansweredBar").animate({width: dataP+"%",}, "slow");
                }
                
                

                var unansweredPercent = game.functions.create.newElement("span", "unansweredPercent", "unansweredBar");
                game.functions.create.setAttributes(unansweredPercent, {
                    "class": "float-right pr-2",
                    
                });
                document.getElementById("unansweredPercent").innerHTML = dataP+"%";
            },
            gameModalFooter: function () {
                //create element
                var element = game.functions.create.newElement("div", "gameModalFooter", "gameModalContent");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "modal-footer border-0 mx-auto",
                });
            },
            modalPlayButton: function () {
                //create element
                var element = game.functions.create.newElement("button", "modalPlayButton", "gameModalFooter");
                game.functions.create.setAttributes(element, {
                    "type": "button",
                    "class": "btn btn-lg btn-primary",
                    "data-dismiss": "modal",
                    "onClick": "game.functions.logic.startGame()",
                });
                document.getElementById("modalPlayButton").innerHTML = "Play";
            },
            modalLeaveButton: function () {
                var element = game.functions.create.newElement("button", "modalLeaveButton", "gameModalFooter");
                game.functions.create.setAttributes(element, {
                    "type": "button",
                    "class": "btn btn-lg btn-secondary",
                    "data-dismiss": "modal",
                    
                });
                document.getElementById("modalLeaveButton").innerHTML = "Leave";
            },
            modalNextQuestionButton: function () {
                var element = game.functions.create.newElement("button", "modalNextQuestionButton", "gameModalFooter");
                game.functions.create.setAttributes(element, {
                    "type": "button",
                    "class": "btn btn-lg btn-primary",
                    "data-dismiss": "modal",
                    "onClick": "game.functions.logic.populateQuestion()",
                });
                document.getElementById("modalNextQuestionButton").innerHTML = "Next Question <i class='ml-1 fas fa-angle-right'></i>";
            },
            modalRestartButton: function () {
                var element = game.functions.create.newElement("button", "modalRestartButton", "gameModalFooter");
                game.functions.create.setAttributes(element, {
                    "type": "button",
                    "class": "btn btn-lg btn-primary",
                    "data-dismiss": "modal",
                    "onClick": "game.functions.logic.startGame()",
                });
                document.getElementById("modalRestartButton").innerHTML = "Play Again";
            },
            closeIcon: function (id, destination) {
                //create element
                var element = game.functions.create.newElement("span", id, destination);
                //style element
                game.functions.create.setAttributes(element, {
                    "aria-hidden": "true",
                });

                //append icon symbol
                document.getElementById(id).innerHTML = "&times;";
            },
            startModal: function () {

            },
        },
        update: {
            gameModalTitle: function (string) {
                document.getElementById("gameModalTitle").innerHTML = string;
            },
            gameModalBodyText: function (string) {
                document.getElementById("gameModalBodyText").innerHTML = string;
            },
            gameModalBody: function (string) {
                document.getElementById("gameModalBody").innerHTML = string;
            },
            timerElementText: function (string) {
                document.getElementById("timerElementText").innerHTML = string;
            },
            questionElementText: function (string) {
                document.getElementById("questionElementText").innerHTML = string;
            },
            answerChoiceElementContent: function (id, content) {
                document.getElementById("answerChoiceElement" + id).innerHTML = content;
            },
            gameOverModalrightAnswers: function (string) {
                document.getElementById("gameOverModalrightAnswers").innerHTML = string;
            },
            gameOverModalWrongAnswers: function (string) {
                document.getElementById("gameOverModalWrongAnswers").innerHTML = string;
            },
            gameOverModalunansweredQuestions: function (string) {
                document.getElementById("gameOverModalunansweredQuestions").innerHTML = string;
            },
        },
        reset: {
            modalButtons: function () {
                var button = document.getElementById("gameModalFooter");
                button.innerHTML = "";
            },
            game: function () {
                game.state.questionIDArray = [];
                game.state.questions = [];
                game.state.currentQuestion = 0;
                game.state.numberOfQuestions = 5;
                game.state.questionsRemaining = 5;
                game.state.questionsRight = 0;
                game.state.questionsWrong = 0;
                game.state.questionsUnanswered = 0;
                var rightAnswers = document.getElementById("gameOverModalrightAnswers");
                var wrongAnswers = document.getElementById("gameOverModalWrongAnswers");
                var unanswered = document.getElementById("gameOverModalunansweredQuestions");
                if (rightAnswers) {
                    rightAnswers.innerHTML = "";
                }
                if (wrongAnswers) {
                    wrongAnswers.innerHTML = "";
                }
                if (unanswered) {
                    unanswered.innerHTML = "";
                }

            },
        },
        timer: {
            duration: 0,
            time: 0,
            intervalId: null,
            runFor: function (duration) {
                game.functions.timer.duration = duration;
                game.functions.timer.time = duration;
                setTimeout(function() {
                    var countDown = game.functions.timer.decrement;
                    game.functions.timer.intervalId = setInterval(countDown, 1000);
                },0);
                $("#timerElement").attr("class", "bg-success col-12 col-sm-11 mt-sm-2 py-2 mx-auto mt-1 rounded-top");
            },
            stop: function () {
                clearInterval(game.functions.timer.intervalId);
            },
            decrement: function () {
                var newTime = game.functions.timer.timeConverter(game.functions.timer.time);
                console.log(newTime);
                $("#timerElementText").html("<h5 id='timeRemaining'><strong>Time : " + newTime + "</strong></h5>");
                var timeRemainingPercent = game.functions.timer.time / game.functions.timer.duration;
                console.log(timeRemainingPercent);
                
                if (timeRemainingPercent <= 0.50){
                    $("#timerElement").attr("class", "bg-warning col-12 col-sm-11 mt-sm-2 py-2 mx-auto mt-1 rounded-top");
                }
                if (timeRemainingPercent <= 0.10){
                    $("#timerElement").attr("class", "bg-danger col-12 col-sm-11 mt-sm-2 py-2 mx-auto mt-1 rounded-top");
                }
                if (game.functions.timer.time === 0) {
                    game.functions.update.gameModalTitle("<h5>Know Your <img class='align-baseline img'id='jsModal' src='./assets/images/jsLogo.svg'></img>: <span class='text-danger'>TIMES UP!!!</span></h5>");
                    //<i id='modalIcon' class='fab fa-js'></i>
                    var answerStatus = "<div class='col'>You failed to answer the question!</div>";
                    var bodyTextTitle = "<div class='col-12 my-3'>Correct Answer:</div>";
                var bodyText = "<div class='col-12 mb-5'>"+ game.state.questions[game.state.currentQuestion].answer + "</div>";
                var learnMoreButton = "<div class='col-12'><button class='btn btn-info'><a class='text-white' href="+game.state.questions[game.state.currentQuestion].w3Link+" target='_blank'>Click to learn more at W3!</a></button></div>";
                game.functions.update.gameModalBodyText(answerStatus + bodyTextTitle + bodyText + learnMoreButton);
                    game.functions.reset.modalButtons();
                    game.functions.create.modalNextQuestionButton();
                    $('#gameModal').modal({ backdrop: 'static', keyboard: false })
                    $("#gameModal").modal("show");
                    game.functions.timer.stop();
                    game.state.questionsUnanswered ++;
                    //console.log(game.state.questionsUnanswered);
                    game.state.questionsRemaining --;

                    if (game.state.questionsRemaining == 0) {
                        game.functions.logic.gameOver();
                    } else {
                        game.functions.logic.nextQuestion();
                    }
                }
                game.functions.timer.time --;
            },
            
            timeConverter: function (t) {

                //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
                var minutes = Math.floor(t / 60);

                var seconds = t - (minutes * 60);

                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                else if (minutes === 0) {
                    minutes = "00";
                }
                else if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                return minutes + ":" + seconds;

            }
        },
        logic: {
            init: function () {
                //set up  game contianer
                game.functions.create.gameContainer();
                //set up title
                game.functions.create.titleElementContainer();
                game.functions.create.titleElement();
                game.functions.create.titleElementText();
                //set up timer
                game.functions.create.timerElementContainer();
                game.functions.create.timerElement();
                game.functions.create.timerElementText();
                game.functions.update.timerElementText(" ");
                //set up question
                game.functions.create.questionElementContainer();
                game.functions.create.questionElement();
                game.functions.create.questionElementText();
                //set up answer choices
                game.functions.create.answerChoicesElementContainer();
                // game.functions.create.answerChoicesElement();
                //set up game modal
                game.functions.create.gameModal();
                game.functions.create.gameModalDialogue();
                game.functions.create.gameModalContent();
                game.functions.create.gameModalHeader();
                game.functions.create.gameModalTitle();
                //game.functions.create.gameModalCloseButton();
                game.functions.create.gameModalBody();
                game.functions.create.gameModalBodyText();
                game.functions.create.gameModalFooter();
                //game.functions.create.closeIcon("gameModalCloseButtonIcon", "gameModalCloseButton");
            },
            startMenu: function () {
                game.functions.update.gameModalTitle("<h5>Know Your <img class='align-baseline img 'id='jsModal' src='./assets/images/jsLogo.svg'></img> : Welcome</h5>");
                game.functions.update.gameModalBodyText("<div class='col'>Know Your <img class='img align-baseline'id='textJS' src='./assets/images/jsLogo.svg'></img> is a game dedicated to helping developers learn about Javascript's built-in methods and libraries! Click Play to see how much you know and get learnin'!!!</div>");
                game.functions.create.modalPlayButton();
                //game.functions.create.modalLeaveButton();
                $('#gameModal').modal({ backdrop: 'static', keyboard: false })
                $("#gameModal").modal("show");
            },
            startGame: function () {
                game.functions.reset.game();
                game.functions.logic.selectGameQuestions();
                
                game.functions.logic.populateQuestion();
            },
            selectGameQuestions: function () {
                var gameQuestions = game.state.questions;
                for (var i = gameQuestions.length; i < game.state.numberOfQuestions;) {
                    var randomQuestion = Math.floor(Math.random() * game.questions.length);
                    if (game.state.questionIDArray.includes(game.questions[randomQuestion].id)) {
                        //do nothing  
                    } else {
                        game.state.questionIDArray.push(game.questions[randomQuestion].id)
                        game.state.questions.push(game.questions[randomQuestion]);
                        i ++;
                    }

                }
                game.functions.logic.assignPotentialAnswers();

                console.log(gameQuestions);

            },
            assignPotentialAnswers: function (){
                //if (potentialAnswerID.includes(game.questions[randomQuestion].id)){}
                for(var i = 0; i < game.state.questions.length; i++){
                    var potentialAnswerID = [];
                    potentialAnswerID.push(game.state.questions[i].id);
                    var potAnswer = game.state.questions[i].potentialAnswers;
                    var randomAnswerSlot = Math.floor(Math.random() * game.state.numberOfPotentialAnswers);
                    for(var j = 0; j < 4; ){
                        var randomQuestion = Math.floor(Math.random() * game.questions.length);
                        if(potentialAnswerID.includes(game.questions[randomQuestion].id)){
                            // do nothing
                        } else {
                            potentialAnswerID.push(game.questions[randomQuestion].id);
                            potAnswer.push(game.questions[randomQuestion].answer);
                            j ++;
                        }
                        
                        
                    }
                    potAnswer.splice(randomAnswerSlot, 1, game.state.questions[i].answer);

                    console.log(potentialAnswerID);
                    //potAnswer[randomAnswerSlot].push(game.state.questions[i].answer);

                }
                
            },
            populateQuestion: function () {
                //console.log(game.state.questions[game.state.currentQuestion].question);
                
                game.functions.update.questionElementText(game.state.questions[game.state.currentQuestion].question);
                $("#questionElement").attr("class", "col-12 col-sm-11 mx-auto py-4 bg-primary  rounded-bottom");
                $("#questionElementText").attr("class", "col-12 col-sm-12 mt-4 w-85 mx-auto text-white text-center");
                game.functions.logic.populatePotentialAnswers();
                $("#timerElementText").html("<h5 id='timeRemaining'><strong>Time : 00:00<strong></h5>");
                game.functions.timer.runFor(70);
                
                //game.functions.update.timerElementText();
            },
            populatePotentialAnswers: function () {
                $("#answerChoicesElementContainer").empty();
                setTimeout(function (){
                    for (var i = 0; i < game.state.numberOfPotentialAnswers; i++) {
                        //console.log(game.state.questions[game.state.currentQuestion].potentialAnswers[i]);
                        game.functions.create.answerChoicesElement(i);
                        game.functions.create.answerChoiceElement(i);
                        game.functions.update.answerChoiceElementContent(i, game.state.questions[game.state.currentQuestion].potentialAnswers[i]);
                    }
                }, 50);
                
            },
            nextQuestion: function () {
                game.state.currentQuestion++;
                
            },
            userSelectAnswer: function (selectID) {
                if (game.functions.timer.time > 0){
                var userAnswer = game.state.questions[game.state.currentQuestion].potentialAnswers[selectID];
                var answer = game.state.questions[game.state.currentQuestion].answer;
                if (userAnswer === answer) {
                    game.functions.logic.answerCorrect();
                } else {
                    game.functions.logic.answerIncorrect();
                }
                } else {
                    //do nothing
                    game.functions.logic.populateQuestion();

                }
            },
            answerCorrect: function () {
                console.log("right");

                game.functions.update.gameModalTitle("<h5>Know Your <img class='align-baseline img'id='jsModal' src='./assets/images/jsLogo.svg'></img>: <span class='text-success'>Correct</span></h5>");
                game.functions.update.gameModalBodyText("<div class='col'>You chose the correct answer</div>");
                game.functions.reset.modalButtons();
                game.functions.create.modalNextQuestionButton();
                $('#gameModal').modal({ backdrop: 'static', keyboard: false })
                $("#gameModal").modal("show");
                game.functions.timer.stop();
                game.state.questionsRight++;
                game.state.questionsRemaining--;

                if (game.state.questionsRemaining == 0) {
                    game.functions.logic.gameOver();
                } else {
                    game.functions.logic.nextQuestion();
                }
            },
            answerIncorrect: function () {
                console.log("wrong");
                var currentQuestion = game.state.currentQuestion;
                var correctAnswer = game.state.questions[game.state.currentQuestion].answer;
                var w3 = game.state.questions[game.state.currentQuestion].w3Link;
                console.log(correctAnswer);
                game.functions.update.gameModalTitle("<h5>Know Your <img class=' align-baseline img'id='jsModal' src='./assets/images/jsLogo.svg'></img>: <span class='text-danger'>Incorrect</span></h5>");
                //var answerStatus = "<div class='col-12'>You chose the incorrect answer</div>";
                var bodyTextTitle = "<div class='col-12 my-3'>Correct Answer:</div>";
                var bodyText = "<div class='col-12 mb-5'>"+ correctAnswer + "</div>";
                var learnMoreButton = "<div class='col-12'><button class='btn btn-info'><a class='text-white' href="+w3+" target='_blank'>Click to learn more at W3!</a></button></div>";
                game.functions.update.gameModalBodyText(bodyTextTitle + bodyText + learnMoreButton);
                game.functions.reset.modalButtons();
                game.functions.create.modalNextQuestionButton();
                $('#gameModal').modal({ backdrop: 'static', keyboard: false })
                $("#gameModal").modal("show");
                game.functions.timer.stop();
                game.state.questionsWrong++;
                game.state.questionsRemaining--;

                if (game.state.questionsRemaining == 0) {
                    game.functions.logic.gameOver();
                } else {
                    game.functions.logic.nextQuestion();
                }

            },
            gameOver: function () {
                var rightAnswers = game.state.questionsRight;
                var wrongAnswers = game.state.questionsWrong;
                var unanswered = game.state.questionsUnanswered;
                game.functions.update.gameModalTitle("<h5>Know Your <img class='img align-baseline'id='jsModal' src='./assets/images/jsLogo.svg'></img>: Game Over</h5>");
                game.functions.update.gameModalBodyText("<div class='col'>How about another game?</div>");
                game.functions.create.gameOverModalrightAnswers(rightAnswers);

                //game.functions.update.gameOverModalrightAnswers();
                game.functions.create.gameOverModalWrongAnswers(wrongAnswers);
                //game.functions.update.gameOverModalWrongAnswers();
                game.functions.create.gameOverModalunansweredQuestions(unanswered);
                //game.functions.update.gameOverModalunansweredQuestions();
                game.functions.reset.modalButtons();
                game.functions.create.modalRestartButton();
                //game.functions.create.modalLeaveButton();
                $('#gameModal').modal({ backdrop: 'static', keyboard: false })
                $("#gameModal").modal("show");
            },
        },
    },


}

game.play()