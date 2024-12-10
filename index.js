var func = function () {
  // Refactor this to be its own function
  var randomPercentage = generateRandomPercentage();
  console.log(randomPercentage);
};
function generateRandomPercentage() {
  return "".concat((Math.random() * 100).toFixed(2), "%");
}
