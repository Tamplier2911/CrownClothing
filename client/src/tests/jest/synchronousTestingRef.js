const characters = [
  "Geralt of Rivia",
  "Yennefer of Vengerberg",
  "Jaskier",
  "Triss Merigold",
  "Queen Calanthe",
  "Cirilla",
  "Emhyr var Emreis"
];

// simple search function
const search = (input, collection) =>
  collection.filter(el => el.includes(input));

// simple search function for top 3 results
const searchTopThree = (input, collection) =>
  collection.filter(el => el.includes(input)).length > 3
    ? collection.filter(el => el.includes(input)).slice(0, 3)
    : collection.filter(el => el.includes(input));

const { search, searchTopThree } = require("./script");
// const { characters } = require("./script");

const collectionMock = [
  "Apple",
  "Banana",
  "Pineapple",
  "Pear",
  "Grapes",
  "Orange"
];

describe("search", () => {
  test("check for all words that has 'a' in collection", () => {
    expect(search("a", collectionMock)).toEqual([
      "Banana",
      "Pineapple",
      "Pear",
      "Grapes",
      "Orange"
    ]);
  });

  test("check for undefined or null inputs", () => {
    expect(search(undefined, collectionMock)).toEqual([]);
    expect(search(null, collectionMock)).toEqual([]);
  });
});

describe("searchTopThree", () => {
  test("check for output length not be less or equal to 3", () => {
    expect(searchTopThree("a", collectionMock).length).toBeGreaterThanOrEqual(
      3
    );
  });

  test("check for undefined or null inputs", () => {
    expect(searchTopThree(undefined, collectionMock)).toEqual([]);
    expect(searchTopThree(null, collectionMock)).toEqual([]);
  });
});

// ******** MATCHES
//
// .toBe            - uses Object.is to test exact equality.
// .not.toBe
// .toEqual         - checks value of an object.
// .not.toEqual

// ******** TRUTHINESS
//
// .toBeNull         - matches only null
// .toBeUndefined    - matches only undefined
// .toBeDefined      - is the opposite of toBeUndefined
// .toBeTruthy       - matches anything that an if statement treats as true
// .toBeFalsy        - matches anything that an if statement treats as false

// ******** NUMBERS
//
// .toBe and toEqual are equivalent for numbers
// .toBeGreaterThan          - matches greater than value
// .toBeGreaterThanOrEqual   - matches greater than or equal
// .toBeLessThan             - matches to be less than
// .toBeLessThanOrEqual      - matches to be less than or equal

// ******** STRINGS
//
// .toMatch          - expect value to match some substring

// ******** ARRAYS
//
// .toContain       - if an array or iterable contains a particular item
