const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
// Instead of forloop use Map method
const initPlayers = (players) => {
  let detailedPlayers = [];
  players.map((player) => {
    detailedPlayers.push({
      name: player,
      strength: getRandomStrength(),
      image: "images/super-" + (i + 1) + ".png",
      type: heroVillain(),
    });
  });
  return detailedPlayers;
};
//console.log(detailedPlayers);

// fucntion to decide between hero and villain
const heroVillain = () => {
  let type = Math.floor(Math.random() * 2);
  if (type == 0) {
    return "hero";
  } else {
    return "villain";
  }
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
// Instead of using for loop
// Use chaining of Array methods - filter, map and join
const buildPlayers = (players, type) => {
  let fragment = "";
  players.filter((player) => {
    if (player.type == type) {
      fragment += `<div class="player">
      <img src="${players[i].image}">
      <div class="name">${players[i].name}</div>
      <div class="strength">${players[i].strength}</div>
   </div>`;
    }
  });
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
