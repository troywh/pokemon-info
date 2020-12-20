const buttons = document.querySelectorAll("button");
const info = document.querySelector("#info");
const picture = document.querySelector("#picture");
for (let button of buttons) {
  button.addEventListener("click", getPokemon);
}

async function getPokemon(event) {
  const name = event.target.textContent.toLowerCase();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  info.textContent = data.base_experience;
  picture.src = data.sprites.front_shiny;
}
