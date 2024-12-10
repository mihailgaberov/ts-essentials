const func = () => {
  // Refactor this to be its own function
  const randomPercentage = generateRandomPercentage();

  console.log(">>> random percentage: ", randomPercentage);
};

function generateRandomPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}

type Rectangle = {
  width: number;
  height: number;
};

const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: Rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};
