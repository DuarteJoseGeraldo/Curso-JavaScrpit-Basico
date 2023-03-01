let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
//////////////////////-1-//////////////////////
const addLanguage = (object, newLanguage) => object.languages.push(newLanguage);

console.log(programming);

addLanguage(programming, "Java");

//////////////////////-2-//////////////////////

const changeDifficulty = (object, newDifficult) =>
  (object.difficulty = newDifficult);

changeDifficulty(programming, 10);

console.log(programming);

//////////////////////-3-//////////////////////

const deleteKey = (object, key) => delete object[key];

deleteKey(programming, "jokes");

console.log(programming);

//////////////////////-4-//////////////////////

const addKey = (object, keyName, value) => (object[keyName] = value);

addKey(
  programming,
  "jokes",
  "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
);

addKey(programming, "isTrue", true);

console.log(programming);

//////////////////////-5-//////////////////////

const showLanguages = (object) => console.log(object.languages);

showLanguages(programming);

//////////////////////-6-//////////////////////

const showAllKeys = (object) => console.log(Object.keys(object));

showAllKeys(programming);

//////////////////////-7-//////////////////////

const showAllData = (object) => console.log(object);

showAllData(programming);
