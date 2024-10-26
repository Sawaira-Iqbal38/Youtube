
       // Sample MCQ questions for the quiz
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Pb", correct: false },
            { text: "Fe", correct: false },
        ],
    },
    {
        question: "Which element has the atomic number 1?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Carbon", correct: false },
            { text: "Nitrogen", correct: false },
        ],
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1918", correct: false },
            { text: "1920", correct: false },
        ],
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Bangkok", correct: false },
        ],
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Helium", correct: false },
        ],
    },
    {
        question: "Which continent is known as the Dark Continent?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Australia", correct: false },
            { text: "South America", correct: false },
        ],
    },
];

// Select elements
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-buttons .btn');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    resultElement.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

// Show a question
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index].text;
        button.classList.remove('correct', 'wrong'); // Reset styles
        button.style.backgroundColor = ''; // Reset background color
        button.disabled = false; // Enable buttons
        button.onclick = () => selectAnswer(question.answers[index]); // Assign click event
    });
}

// Select an answer
function selectAnswer(answer) {
    const isCorrect = answer.correct;

    // Highlight correct/incorrect answers for the current question
    answerButtons.forEach(button => {
        const buttonAnswer = questions[currentQuestionIndex].answers.find(ans => ans.text === button.innerText);
        if (buttonAnswer) {
            if (buttonAnswer.correct) {
                button.classList.add('correct'); // Add green class for correct answers
                button.style.backgroundColor = 'green'; // Change background color to green
            } else {
                button.classList.add('wrong'); // Add red class for wrong answers
                button.style.backgroundColor = 'red'; // Change background color to red
            }
        }
        button.disabled = true; // Disable all buttons after an answer is selected
    });

    if (isCorrect) {
        score++;
    }
    nextButton.style.display = 'block'; // Show the next button
}

// Go to the next question or show the result
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none'; // Hide the next button again
    } else {
        showResult();
    }
}

// Show the result
function showResult() {
    questionElement.innerText = '';
    answerButtons.forEach(button => {
        button.style.display = 'none'; // Hide answer buttons
    });
    nextButton.style.display = 'none'; // Hide the next button when showing results
    resultElement.style.display = 'block';
    scoreElement.innerText = `${score} out of ${questions.length}`; // Display the score
}

// Restart the quiz
restartButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);

// Start the quiz on page load
startQuiz();
