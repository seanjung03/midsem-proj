let index = 1;

let down = document.querySelector(".down");
let up = document.querySelector(".up");

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

function update() {
  let url = "https://pokeapi.co/api/v2/pokemon/" + index;
  fetch(url)
    .then((data) => data.json())
    .then((obj) => {
      /*obj["moves"].forEach((move) => {
        console.log(move["move"]["name"]);
      }); */

      document.querySelector(".left img").src = obj["sprites"]["front_default"];
      document.querySelector("h2").textContent = obj["species"]["name"];
    });
}
