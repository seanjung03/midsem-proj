import fetch from "node-fetch";

fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((data) => data.json())
  .then((obj) => {
    obj["moves"].forEach((move) => {
      console.log(move["move"]["name"]);
    });
  });
