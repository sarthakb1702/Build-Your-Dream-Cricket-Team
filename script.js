const cskPlayers = [
  { name: "MS Dhoni", jersey: 7, strikeRate: "130+", matches: 253, best: "84* (IPL)" },
  { name: "Ruturaj Gaikwad", jersey: 31, strikeRate: "125+", matches: 100, best: "100+" },
  { name: "Ravindra Jadeja", jersey: 8, strikeRate: "110+", matches: 180, best: "75*" },
  { name: "Devon Conway", jersey: 6, strikeRate: "140+", matches: 20, best: "70+" },
  { name: "Ravichandran Ashwin", jersey: 99, strikeRate: "100+", matches: 150, best: "50*" },
  { name: "Noor Ahmad", jersey: 40, strikeRate: "-", matches: 10, best: "4/25" }
];

cskPlayers.forEach((p, i) => {
  const c = document.createElement('div');
  c.className = 'player-card';
  c.innerHTML = `
    <img src="images/${p.name.replace(/ /g,'')}.jpg" alt="${p.name}">
    <h2>${p.name}</h2>`;
  c.onclick = () => showStats(i);
  document.querySelector('.player-grid').append(c);
});

function showStats(i) {
  const p = cskPlayers[i];
  document.getElementById('modalName').innerText = p.name;
  document.getElementById('modalJersey').innerText = p.jersey;
  document.getElementById('modalStrikeRate').innerText = p.strikeRate;
  document.getElementById('modalMatches').innerText = p.matches;
  document.getElementById('modalBest').innerText = p.best;
  document.getElementById('playerModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('playerModal').style.display = 'none';
}
