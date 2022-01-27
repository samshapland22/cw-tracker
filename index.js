import fetch from "node-fetch";
import beginnerProblemsDict from "./beginnerProblems.js";


const getData = async () => {
  let res = await fetch("https://codewars-tracker-be.herokuapp.com/users");
  let data = await res.json();
  let filteredData = data.filter((fellow) => fellow.cohort === "Pursuit-8.2").map((data)=>data.id);
  for(let id of filteredData){
    let listOfProblems = { ...beginnerProblemsDict };
    let response = await fetch(`https://codewars-tracker-be.herokuapp.com/users/${id}`);
    let { fellowData } = await response.json();
    let completedProblems = fellowData.problems.map((problem)=>problem.slug);

    for(let problem of completedProblems){
      if(listOfProblems[problem] === false){
        listOfProblems[problem] = true;
      }
    }

    let numOfCompletedProbs = Object.values(listOfProblems).reduce((accum, curr)=>{
      let obj = {...accum};
      
      if(curr){
        obj.complete++;
      } else {
        obj.incomplete++;
      }

      return obj;
    }, {complete: 0, incomplete: 0});

    console.log({
      name: fellowData.name,
      problems: numOfCompletedProbs
    });
  }
};

getData();