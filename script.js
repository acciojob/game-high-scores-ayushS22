const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scoresDiv = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (name === "" || score === "") {
    return;
  }

  // Get existing scores or empty array
  let scores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score
  scores.push({ name, score });

  // Save back to localStorage
  localStorage.setItem("highScores", JSON.stringify(scores));

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";

  // Refresh score table
  showScores();
}

// Show scores in div
function showScores() {
  let scores = JSON.parse(localStorage.getItem("highScores"));

  // If no scores exist
  if (!scores || scores.length === 0) {
    scoresDiv.innerHTML = "No scores yet";
    return;
  }

  // Create table
  let table = `<table border="1" cellpadding="5">
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                </tr>`;

  // Add rows
  scores.forEach(item => {
    table += `<tr>
                <td>${item.name}</td>
                <td>${item.score}</td>
              </tr>`;
  });

  table += `</table>`;

  // Display table
  scoresDiv.innerHTML = table;
}
