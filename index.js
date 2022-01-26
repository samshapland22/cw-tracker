import fetch from "node-fetch";

const getData = async () => {
  let res = await fetch("https://codewars-tracker-be.herokuapp.com/users");
  let data = await res.json();
  let grr = data.filter((fellow) => fellow.cohort === "Pursuit-8.2");
  console.log(grr, grr.length);
};

getData();
