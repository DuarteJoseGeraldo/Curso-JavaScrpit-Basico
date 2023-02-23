///////////////////////-1-//////////////////////////

function doubleANumber(number) {
  return number * 2;
}

const doubleNumberArrow = (number) => number * 2;

///////////////////////-2-//////////////////////////

function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

const createFullNameArrow = (firstName, lastName) => firstName + " " + lastName;

///////////////////////-3-//////////////////////////

let longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";

function calculateTheLenghtOfAString(str) {
  console.log(`o tamanho de "${str}" é:`, str.length);
}

const calculateTheLenghtOfAStringArrow = (str) =>
  `o tamanho de "${str}" é: ` + str.length;

console.log(calculateTheLenghtOfAStringArrow(longestCityNameInTheWorld));

///////////////////////-4-//////////////////////////

function calculateTheLenghtOfAString(str) {
  let length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
  return str.length;
}

const calculateTheLenghtOfAStringArrow4 = (str) => {
  console.log(`o tamanho de "${str}" é:`, str.length);
  return str.length;
};

calculateTheLenghtOfAStringArrow4("willynilly");

///////////////////////-5-//////////////////////////

let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

function showRandomAlert(name) {
  console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
}

const showRandomAlertArrow = (name) =>
  console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);

showRandomAlertArrow("Maria");

///////////////////////-6-//////////////////////////

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

const getEvenNumbersArrow = (array) =>
  array.filter((element) => element % 2 == 0);

console.log(getEvenNumbersArrow(numbers));

///////////////////////-7-//////////////////////////

const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

function displayUser(user) {
  return user.name + " " + user.surname + " (" + user.age + ")";
}

const displayUserArrow = (user) =>
  user.name + " " + user.surname + " (" + user.age + ")";

console.log(displayUserArrow(userObject));
