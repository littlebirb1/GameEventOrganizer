// Event listeners for button click and Enter key press
document.getElementById('searchButton').addEventListener('click', searchPlayers);
document.getElementById('searchBar').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') searchPlayers();
});

// Main search function
function searchPlayers() {
    const query = document.getElementById('searchBar').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    console.clear(); // Clear console for fresh logs
    console.log(`Search Query: "${query}"`); // Debugging: Check the input query

    if (!query) {
        resultsContainer.innerHTML = '<p>Please enter a username to search.</p>';
        return;
    }

    // Retrieve players from local storage
    const playersData = localStorage.getItem('players');
    console.log(`Players Data in LocalStorage: ${playersData}`); // Debugging: Ensure players data exists

    const players = playersData ? JSON.parse(playersData) : [];
    if (players.length === 0) {
        resultsContainer.innerHTML = '<p>No registered players found.</p>';
        console.warn('No registered players in localStorage.'); // Debugging: Log empty storage
        return;
    }

    // Filter matching players
    const matches = players.filter(player =>
        player.username.toLowerCase().includes(query)
    );
    console.log(`Matches Found: ${JSON.stringify(matches)}`); // Debugging: Log the matches

    if (matches.length > 0) {
        matches.forEach(player => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.textContent = `${player.username} - ${player.rank}`;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.innerHTML = '<p>No players found matching your search.</p>';
    }
}


