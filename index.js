let index = 1;

//object for types and corresponding colors
const typeColor = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

//Arrays for info and moves
let info = [];
let moves = [];
let state = "info";

update();

//arrow buttons
let down = document.querySelector(".down");
let up = document.querySelector(".up");

//arrow button event listeners
down.addEventListener("click", (e) => {
  index--;
  if (index === 0) {
    index = 898;
  }
  update();
  console.log(index);
});

up.addEventListener("click", (e) => {
  index++;
  if (index === 899) {
    index = 1;
  }
  update();
  console.log(index);
});

//general update function that occurs every time the index updates
function update() {
  let url = "https://pokeapi.co/api/v2/pokemon/" + index;
  fetch(url)
    .then((data) => data.json())
    .then((obj) => {
      /*obj["moves"].forEach((move) => {
        console.log(move["move"]["name"]);
      }); */

      //Update image and name
      document.querySelector(".left img").src = obj["sprites"]["front_default"];
      document.querySelector("h2").textContent = obj["species"]["name"];

      //Update types
      let specific = document.querySelector(".specific");
      while (specific.firstChild) {
        specific.removeChild(specific.firstChild);
      }

      obj["types"].forEach((typ) => {
        let temp = typ["type"]["name"];
        let next = document.createElement("h4");
        next.textContent = temp;
        next.style.backgroundColor = typeColor[temp];
        specific.appendChild(next);
      });

      info = [];
      info.push(obj["height"] / 10);
      info.push(obj["weight"] / 10);
      obj["stats"].forEach((ind) => {
        info.push(ind["base_stat"]);
      });

      moves = [];
      obj["moves"].forEach((mov) => {
        moves.push(mov["move"]["name"]);
      });

      if (state === "info") {
      } else {
      }
    });

  //functions for updating text for info and moves
}
