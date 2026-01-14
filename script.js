const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scoresDiv = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value.trim());

  if (!name || isNaN(score)) return;

  // IMPORTANT: key must be "scores"
  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  scores.push({ name, score });

  // Save back
  localStorage.setItem("scores", JSON.stringify(scores));

  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

// Show scores in div
function showScores() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  if (scores.length === 0) {
    scoresDiv.innerHTML = "No scores yet";
    return;
  }

  // SORT scores in DESCENDING order
  scores.sort((a, b) => b.score - a.score);

  let table = `
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
  `;

  scores.forEach(s => {
    table += `
      <tr>
        <td>${s.name}</td>
        <td>${s.score}</td>
      </tr>
    `;
  });

  table += `</table>`;

  scoresDiv.innerHTML = table;
}
