const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const onlineQuiz = [
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    answer: "Lion"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo"
  }
];

let score = 0;
let currentQuestionIndex = 0;

function displayRandomQuestion  () {
    const randomIndex = Math.floor(Math.random() * onlineQuiz.length);
    const randomQuestion = onlineQuiz[randomIndex];
    console.log(randomQuestion.question);
    randomQuestion.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
    rl.question('Enter your answer (by option number): ', (userAnswer) => {
        checkAnswer(parseInt(userAnswer), randomQuestion.answer);
    });
};

function checkAnswer (userAnswer, correctAnswer)  {
    if (userAnswer === correctAnswer || userAnswer - 1 === correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log("Incorrect!");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < onlineQuiz.length) {
        displayRandomQuestion();
    } else {
        endQuiz();
        rl.close();
    }
};

const endQuiz = () => {
    console.log(`Quiz ended. Your score: ${score}/${onlineQuiz.length}`);
};

displayRandomQuestion();