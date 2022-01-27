import fetch from "node-fetch";

const getData = async () => {
  let res = await fetch("https://codewars-tracker-be.herokuapp.com/users");
  let data = await res.json();
  let grr = data.filter((fellow) => fellow.cohort === "Pursuit-8.2");
  console.log(grr, grr.length);
};

const fundamentalSlugs = [
  "jennys-secret-message",
  "the-feast-of-many-beasts",
  "sleigh-authentication",
  "sort-and-star",
  "reversed-words",
  "thinkful-string-drills-quotable",
  "remove-duplicate-words",
  "valid-spacing",
  "last-survivor",
  "alphabet-war",
  "find-the-smallest-integer-in-the-array",
  "well-of-ideas-easy-version",
  "sum-mixed-array",
  "a-needle-in-the-haystack",
  "get-planet-name-by-id",
  "find-the-first-non-consecutive-number",
  "count-of-positives-slash-sum-of-negatives",
  "largest-pair-sum-in-array",
  "opposites-attract",
  "convert-boolean-values-to-strings-yes-or-no",
  "sum-of-multiples",
  "strange-mathematics",
  "find-out-whether-the-shape-is-a-cube",
  "twice-as-old",
  "find-the-remainder",
  "youre-a-square",
  "highest-and-lowest",
  "halving-sum",
];

getData();
