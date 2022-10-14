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
let IMtext = document.querySelector(".right h5");

update();

//arrow buttons
let down = document.querySelector(".down");
let up = document.querySelector(".up");

//info moves buttons
let infoB = document.querySelector(".info");
let movesB = document.querySelector(".moves");

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

//info moves button event listeners
infoB.addEventListener("click", (e) => {
  updateInfo();
  state = "info";
  IMtext.textContent = "Info";
  e.target.style.backgroundColor = "lightgreen";
  movesB.style.backgroundColor = "#E8E8E8";
});

movesB.addEventListener("click", (e) => {
  updateMoves();
  state = "moves";
  IMtext.textContent = "Moves";
  e.target.style.backgroundColor = "lightgreen";
  infoB.style.backgroundColor = "#E8E8E8";
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
      console.log(info);

      if (state === "info") {
        updateInfo();
      } else {
        updateMoves();
      }
    });
}

//functions for updating text for info and moves
function updateInfo() {
  let box = document.querySelector(".textBox");
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  let height = document.createElement("p");
  height.textContent = "height: " + info[0] + "m";
  box.appendChild(height);

  let weight = document.createElement("p");
  weight.textContent = "weight: " + info[1] + "kg";
  box.appendChild(weight);

  let hp = document.createElement("p");
  hp.textContent = "hp: " + info[2];
  box.appendChild(hp);

  let attack = document.createElement("p");
  attack.textContent = "attack: " + info[3];
  box.appendChild(attack);

  let defense = document.createElement("p");
  defense.textContent = "defense: " + info[4];
  box.appendChild(defense);

  let special_attack = document.createElement("p");
  special_attack.textContent = "special-attack: " + info[5];
  box.appendChild(special_attack);

  let special_defense = document.createElement("p");
  special_defense.textContent = "special-defense: " + info[6];
  box.appendChild(special_defense);

  let speed = document.createElement("p");
  speed.textContent = "speed: " + info[7];
  box.appendChild(speed);
}

function updateMoves() {
  let box = document.querySelector(".textBox");
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }

  moves.forEach((mov) => {
    let temp = document.createElement("p");
    temp.textContent = mov;
    box.appendChild(temp);
  });
}
