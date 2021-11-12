"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "A page designed in HTML is called",
            options: ["Application", "Web Page", "Front-end", "Cover page"]
        }, {
            title: "Inside which HTML element do we put the JavaScript?",
            options: ["<scripting>", "<script>", "<js>", "<javascript>"]
        }, {
            title: "What does CSS stand for?",
            options: [
                "Cascading Style Statements",
                "Cascading Style Sheets",
                "Cascading System Sheets",
                "Casting Style Sheets"]
        }, {
            title: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
            options: [
                '<script name="xxx.js">',
                '<script src="xxx.js">',
                '<script link="xxx.js">',
                '<script href="xxx.js">'
            ]
        }, {
            title: 'How do you write "Hello World" in an alert box?',
            options: [
                'msg("Hello World");',
                'alert("Hello World");',
                'msgBox("Hello World");',
                'console.log("Hello World");',
            ]
        }, {
            title: 'How do you create a normal function in JavaScript?',
            options: [
                'function:myFunction()',
                'function myFunction()',
                'function* myFunction()',
                'function = myFunction()',
            ]
        }, {
            title: 'How do you call a function named "myFunction"?',
            options: [
                'call myFunction()',
                'myFunction()',
                'call:myFunction()',
                'alo myFunction()',
            ]
        },
    ];

    quiz = new Quiz(
        "Web Development Quiz",
        `This is a quiz consisting of basic questions on JavaScript , HTML and CSS.`,
        70,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();


