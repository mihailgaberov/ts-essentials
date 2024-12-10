"use strict";
const func = () => {
    // Refactor this to be its own function
    const randomPercentage = generateRandomPercentage();
    console.log(">>> random percentage: ", randomPercentage);
};
function generateRandomPercentage() {
    return `${(Math.random() * 100).toFixed(2)}%`;
}
func();
