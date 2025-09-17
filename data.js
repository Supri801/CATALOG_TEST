const fs = require('fs');

// Read JSON file asynchronously
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    try {
        const params = JSON.parse(data); // Parse the JSON file

        const { a, b, c, n, x } = params;

        // Calculate y using the formula: y = ax^n + bx^(n-4) + c
        const y = a * Math.pow(x, n) + b * Math.pow(x, n - 4) + c;

        console.log("The value of y is:", y);

        // Example of subtraction: subtract c from y
        const subtraction = y - c;
        console.log("Result of y - c is:", subtraction);

        // Print the c value
        console.log("The value of c is:", c);

    } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
    }
});