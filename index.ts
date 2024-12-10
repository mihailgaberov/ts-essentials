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

type ShoppingCart = {
  userId: string;
  items: string[];
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});

// named tuple
const goToLocation = (
  coordinates: [latitude: number, longitude: number, elevation?: number]
) => {};

// alternatively, non-named tuple
const goToLocation1 = (coordinates: [number, number, number?]) => {};

const userMap = new Map<number, { name: string; age: number }>();

userMap.set(1, { name: "Max", age: 30 });

userMap.set(2, { name: "Manuel", age: 31 });

// userMap.set("3", { name: "Anna", age: 29 });

// userMap.set(3, "123");

// const parsedData = JSON.parse<{
//   Expected 0 type arguments, but got 1.
//     name: string;
//     age: number;
//   }>('{"name": "Alice", "age": 30}');
const parsedData: {
  name: string;
  age: number;
} = JSON.parse('{"name": "Alice", "age": 30}');
