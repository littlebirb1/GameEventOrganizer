// Rank order for comparison
const rankOrder = [
    "Iron 4", "Iron 3", "Iron 2", "Iron 1",
    "Bronze 4", "Bronze 3", "Bronze 2", "Bronze 1",
    "Silver 4", "Silver 3", "Silver 2", "Silver 1",
    "Gold 4", "Gold 3", "Gold 2", "Gold 1",
    "Platinum 4", "Platinum 3", "Platinum 2", "Platinum 1",
    "Diamond 4", "Diamond 3", "Diamond 2", "Diamond 1",
    "Master", "Grandmaster", "Challenger"
];

// Fetch players from localStorage
const players = JSON.parse(localStorage.getItem('players')) || [];
if (players.length === 0) {
    console.warn("No players registered. Add players via registration form.");
}

// Sort players based on rank
players.sort((a, b) => {
    const rankA = rankOrder.indexOf(a.rank);
    const rankB = rankOrder.indexOf(b.rank);
    return rankA - rankB; // Ascending order
});

// Get the top 10 players
const topPlayers = players.slice(0, 10);

// Render the leaderboard
const leaderboardTable = document.getElementById('leaderboardTable').querySelector('tbody');
topPlayers.forEach((player, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${player.username}</td>
        <td>${player.rank}</td>
    `;
    leaderboardTable.appendChild(row);
});

// Handle case where no players exist
if (topPlayers.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `<td colspan="3">No players to display.</td>`;
    leaderboardTable.appendChild(emptyRow);
}
