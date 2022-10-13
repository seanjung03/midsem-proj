fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((data) => data.json())
  .then((obj) => {
    obj["moves"].forEach((move) => {
      console.log(move["move"]["name"]);
    });
  });

let index = 1;

let down = document.querySelector(".down");
let up = document.querySelector(".up");

down.addEventListener("click" = () => {
  index--;
  console.log(index);
});

up.addEventListener("click" = () => {
  index++;
  console.log(index);
})
console.log("hello");