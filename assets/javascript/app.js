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
        currentQuestion: 0,
        numberOfQuestions: 5,
        questionsRemaining: 5,
        questionsRight: 0,
        questionsWrong: 0,
        questionsUnanswered: 0,
    },
    questions: [
        {
            id: 1,
            question: "1",
            answer: "1",
            potentialAnswers: ["1", "2", "3", "4"],
        },
        {
            id: 2,
            question: "2",
            answer: "2",
            potentialAnswers: ["1", "2", "3", "4"],
        },
        {
            id: 3,
            question: "3",
            answer: "3",
            potentialAnswers: ["1", "2", "3", "4"],
        },
        {
            id: 4,
            question: "4",
            answer: "4",
            potentialAnswers: ["1", "2", "3", "4"],
        },
        {
            id: 5,
            question: "5",
            answer: "5",
            potentialAnswers: ["1", "2", "3", "5"],
        },
        {
            id: 6,
            question: "6",
            answer: "6",
            potentialAnswers: ["1", "2", "3", "6"],
        },
        {
            id: 7,
            question: "7",
            answer: "7",
            potentialAnswers: ["1", "2", "3", "7"],
        },
        {
            id: 8,
            question: "8",
            answer: "8",
            potentialAnswers: ["1", "2", "3", "8"],
        },
        {
            id: 9,
            question: "9",
            answer: "9",
            potentialAnswers: ["1", "2", "3", "9"],
        },
        {
            id: 10,
            question: "10",
            answer: "10",
            potentialAnswers: ["10", "2", "3", "4"],
        },
        {
            id: 11,
            question: "11",
            answer: "11",
            potentialAnswers: ["11", "2", "3", "4"],
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
                    class: "container-fluid px-0"
                });
            },
            titleElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "titleElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row m-1"
                });
            },
            titleElement: function () {
                //create element
                var element = game.functions.create.newElement("div", "titleElement", "titleElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12"
                });
            },
            titleElementText: function () {
                //create element
                var element = game.functions.create.newElement("p", "titleElementText", "titleElement");
                //style element
                game.functions.create.setAttributes(element, {
                    class: ""
                });
                document.getElementById("titleElementText").textContent = "Trivia Challenge!";
            },
            timerElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "timerElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row m-1"
                });
                //game.functions.timer.runFor(15);
            },
            timerElement: function () {
                //create element
                var element = game.functions.create.newElement("div", "timerElement", "timerElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12"
                });
            },
            timerElementText: function () {
                //create element
                var element = game.functions.create.newElement("p", "timerElementText", "timerElement");
                //style element
                game.functions.create.setAttributes(element, {
                    class: ""
                });

            },
            questionElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "questionElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row m-1"
                });
            },
            questionElement: function () {
                //create element
                var element = game.functions.create.newElement("div", "questionElement", "questionElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12"
                });
            },
            questionElementText: function () {
                //create element
                var element = game.functions.create.newElement("p", "questionElementText", "questionElement");
                //style element
                game.functions.create.setAttributes(element, {
                    class: ""
                });
            },
            answerChoicesElementContainer: function () {
                //create element
                var element = game.functions.create.newElement("div", "answerChoicesElementContainer", "gameContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "row m-1"
                });
            },
            answerChoicesElement: function () {
                //create element
                var element = game.functions.create.newElement("div", "answerChoicesElement", "answerChoicesElementContainer");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "col-12"
                });
            },
            answerChoiceElement: function (potentialAnswerID) {
                //create element
                var element = game.functions.create.newElement("div", "answerChoiceElement" + potentialAnswerID, "answerChoicesElement");
                //style element
                game.functions.create.setAttributes(element, {
                    class: "",
                    onClick: "game.functions.logic.userSelectAnswer(" + potentialAnswerID + ")",
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
                    class: "modal-title"
                });
            },
            gameModalCloseButton: function () {
                //create element
                var element = game.functions.create.newElement("button", "gameModalCloseButton", "gameModalHeader");
                //style element
                game.functions.create.setAttributes(element, {
                    "type": "button",
                    "class": "close",
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
                    "class": "",
                });
            },
            gameOverModalrightAnswers: function (){
                //create element
                var element = game.functions.create.newElement("p", "gameOverModalrightAnswers", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "",
                });
            },
            gameOverModalWrongAnswers: function (){
                //create element
                var element = game.functions.create.newElement("p", "gameOverModalWrongAnswers", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "",
                });
            },
            gameOverModalunansweredQuestions: function (){
                //create element
                var element = game.functions.create.newElement("p", "gameOverModalunansweredQuestions", "gameModalBody");
                //style element
                game.functions.create.setAttributes(element, {
                    "class": "",
                });
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
                    //"onClick": "#",
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
                document.getElementById("modalNextQuestionButton").innerHTML = "Next Question";
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
            gameOverModalrightAnswers: function (string){
                document.getElementById("gameOverModalrightAnswers").innerHTML = string;
            },
            gameOverModalWrongAnswers: function (string){
                document.getElementById("gameOverModalWrongAnswers").innerHTML = string;
            },
            gameOverModalunansweredQuestions: function (string){
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
                if(rightAnswers){
                    rightAnswers.innerHTML = "";
                }
                if(wrongAnswers){
                    wrongAnswers.innerHTML = "";
                }
                if(unanswered){
                    unanswered.innerHTML = "";
                }
                
            },
        },
        timer: {
            time: 0,
            intervalId: null,
            runFor: function (duration) {
                game.functions.timer.time = duration;
                game.functions.timer.intervalId = setInterval(game.functions.timer.decrement, 1000);
            },
            stop: function () {
                clearInterval(game.functions.timer.intervalId);
            },
            decrement: function () {
                game.functions.timer.time--;
                var newTime = game.functions.timer.timeConverter(game.functions.timer.time);
                $("#timerElementText").text("Time Remaining: " + newTime);
                //$("#show-number").html("<h2>" + number + "</h2>");
                if (game.functions.timer.time === 0) {
                    game.functions.update.gameModalTitle("Times UP");
                    game.functions.update.gameModalBodyText("You failed to answer the question!");
                    game.functions.reset.modalButtons();
                    game.functions.create.modalNextQuestionButton();
                    $('#gameModal').modal({backdrop: 'static', keyboard: false}) 
                    $("#gameModal").modal("show");
                    game.functions.timer.stop();
                    game.state.questionsUnanswered ++;
                    console.log(game.state.questionsUnanswered);
                    game.state.questionsRemaining --;

                    if (game.state.questionsRemaining == 0) {
                        game.functions.logic.gameOver();
                    } else {
                        game.functions.logic.nextQuestion();
                        
                        //game.functions.logic.populateQuestion();
                    }
                    //game.functions.timer.stop();
                }
                //return game.functions.timer.time;
            },
            timeConverter: function (t) {
                //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                if (minutes === 0) {
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
                //set up question
                game.functions.create.questionElementContainer();
                game.functions.create.questionElement();
                game.functions.create.questionElementText();
                //set up answer choices
                game.functions.create.answerChoicesElementContainer();
                game.functions.create.answerChoicesElement();
                //set up game modal
                game.functions.create.gameModal();
                game.functions.create.gameModalDialogue();
                game.functions.create.gameModalContent();
                game.functions.create.gameModalHeader();
                game.functions.create.gameModalTitle();
                game.functions.create.gameModalCloseButton();
                game.functions.create.gameModalBody();
                game.functions.create.gameModalBodyText();
                game.functions.create.gameModalFooter();
                game.functions.create.closeIcon("gameModalCloseButtonIcon", "gameModalCloseButton");
            },
            startMenu: function () {
                game.functions.update.gameModalTitle("Welcome to Trivial Trivia");
                game.functions.update.gameModalBodyText("");
                game.functions.create.modalPlayButton();
                game.functions.create.modalLeaveButton();
                $('#gameModal').modal({backdrop: 'static', keyboard: false}) 
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
                        i++
                    }
                }
            },
            populateQuestion: function () {
                //console.log(game.state.questions[game.state.currentQuestion].question);
                game.functions.update.questionElementText(game.state.questions[game.state.currentQuestion].question);
                
                game.functions.logic.populatePotentialAnswers();
                game.functions.update.timerElementText(game.functions.timer.runFor(5));
            },
            populatePotentialAnswers: function () {
                for (var i = 0; i < game.state.questions[game.state.currentQuestion].potentialAnswers.length; i++) {
                    //console.log(game.state.questions[game.state.currentQuestion].potentialAnswers[i]);
                    game.functions.create.answerChoiceElement(i);
                    game.functions.update.answerChoiceElementContent(i, game.state.questions[game.state.currentQuestion].potentialAnswers[i]);
                }
            },
            nextQuestion: function () {
                game.state.currentQuestion++;
            },
            userSelectAnswer: function (selectID) {
                var userAnswer = game.state.questions[game.state.currentQuestion].potentialAnswers[selectID];
                var answer = game.state.questions[game.state.currentQuestion].answer;
                if (userAnswer === answer) {
                    game.functions.logic.answerCorrect();
                } else {
                    game.functions.logic.answerIncorrect();
                }
            },
            answerCorrect: function () {
                console.log("right");

                game.functions.update.gameModalTitle("Correct");
                game.functions.update.gameModalBodyText("You chose the correct answer");
                game.functions.reset.modalButtons();
                game.functions.create.modalNextQuestionButton();
                $('#gameModal').modal({backdrop: 'static', keyboard: false}) 
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
                game.functions.update.gameModalTitle("Incorrect");
                game.functions.update.gameModalBodyText("You chose the incorrect answer");
                game.functions.reset.modalButtons();
                game.functions.create.modalNextQuestionButton();
                $('#gameModal').modal({backdrop: 'static', keyboard: false}) 
                $("#gameModal").modal("show");
                game.functions.timer.stop();
                game.state.questionsWrong++;
                game.state.questionsRemaining--;

                if (game.state.questionsRemaining == 0) {
                    game.functions.logic.gameOver();
                } else {
                    game.functions.logic.nextQuestion();
                    //game.functions.timer.stop();
                    //game.functions.logic.populateQuestion();
                }

            },
            gameOver: function () {
                game.functions.update.gameModalTitle("Great Game");
                game.functions.update.gameModalBodyText("How about another game?");
                game.functions.create.gameOverModalrightAnswers();
                game.functions.update.gameOverModalrightAnswers("Right Answers: " + game.state.questionsRight);
                game.functions.create.gameOverModalWrongAnswers();
                game.functions.update.gameOverModalWrongAnswers("Wrong Answers: " + game.state.questionsWrong);
                game.functions.create.gameOverModalunansweredQuestions();
                game.functions.update.gameOverModalunansweredQuestions("Unanswered: " + game.state.questionsUnanswered);
                game.functions.reset.modalButtons();
                game.functions.create.modalRestartButton();
                game.functions.create.modalLeaveButton();
                $('#gameModal').modal({backdrop: 'static', keyboard: false}) 
                $("#gameModal").modal("show");
            },
        },
    },


}

game.play()