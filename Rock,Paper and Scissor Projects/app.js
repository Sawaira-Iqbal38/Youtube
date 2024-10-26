// Select all button elements
const btnElements = document.querySelectorAll("button");

// Select the <div> element to display results
const resultElement = document.getElementById("result");

// Select the elements to display scores
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("com-score");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Possible choices
const choices = ["rock", "paper", "scissor"];

// Add event listeners to all buttons
btnElements.forEach((btn) => {
    btn.addEventListener('click', () => {
        const userChoice = btn.id; // Assumes button IDs are 'rock', 'paper', 'scissor'
        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);
        resultElement.textContent = result;

        // Update score display after playing the round
        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;
    });
});

// Function to get computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(userSelection, comSelection) {
    if (userSelection === comSelection) {
        return "It's a tie!";
    } else if (
        (userSelection === "rock" && comSelection === "scissor") ||
        (userSelection === "paper" && comSelection === "rock") ||
        (userSelection === "scissor" && comSelection === "paper")
    ) {
        userScore++; // Correctly incrementing user score
        return `You won! ${capitalize(userSelection)} beats ${capitalize(comSelection)}.`;
    } else {
        computerScore++; // Correctly incrementing computer score
        return `You lose! ${capitalize(comSelection)} beats ${capitalize(userSelection)}.`;
    }
}

// Helper function to capitalize the first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
