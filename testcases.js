const fs = require('fs');

// Read JSON file asynchronously
fs.readFile('test_cases.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    try {
        const testCases = JSON.parse(data);
        console.log(JSON.stringify(testCases, null, 2)); // Pretty print JSON
    } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
    }
});
