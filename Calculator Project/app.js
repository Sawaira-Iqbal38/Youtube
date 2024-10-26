// Get the screen element
const screen = document.getElementById('screen');

// Function to append values to the screen
function appendValue(value) {
    if (screen.value === '0') {
        screen.value = '';
    }
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    screen.value = '';
}

// Function for backspace (CE)
function backspc() {
    screen.value = screen.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        // Replace mathematical functions with JavaScript equivalents
        let expression = screen.value
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log10')
            .replace(/pi/g, 'Math.PI')
            .replace(/e/g, 'Math.E')
            .replace(/√/g, 'Math.sqrt')
            .replace(/x\^y/g, '**')
            .replace(/fact/g, 'factorial');

        // Evaluate factorial separately if present
        if (expression.includes('factorial')) {
            expression = expression.replace(/factorial\(([^)]+)\)/g, 'factorial($1)');
        }

        const result = eval(expression);
        screen.value = result;
    } catch (error) {
        screen.value = 'Error';
    }
}

// Function for sine
function sin() {
    screen.value += 'sin(';
}

// Function for cosine
function cos() {
    screen.value += 'cos(';
}

// Function for tangent
function tan() {
    screen.value += 'tan(';
}

// Function for logarithm
function log() {
    screen.value += 'log(';
}

// Function to insert pi
function pi() {
    screen.value += 'pi';
}

// Function to insert e
function e() {
    screen.value += 'e';
}

// Function for square root
function root() {
    screen.value += '√(';
}

// Function for power
function pow() {
    screen.value += '^';
}

// Function for factorial
function fact() {
    screen.value += 'fact(';
}

// Factorial function
function factorial(n) {
    if (n < 0) return 'Error';
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

// Override the eval function to include factorial
(function() {
    const originalEval = window.eval;
    window.eval = function(expression) {
        // Replace factorial(x) with factorial(x)
        expression = expression.replace(/fact\(([^)]+)\)/g, 'factorial($1)');
        return originalEval(expression);
    };
})();
