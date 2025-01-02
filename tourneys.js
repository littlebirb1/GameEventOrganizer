const tournamentForm = document.getElementById('tournamentForm');
const tournamentList = document.getElementById('tournamentList');

// Load tournaments from localStorage
function loadTournaments() {
    const tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
    tournamentList.innerHTML = ''; // Clear existing tournaments

    if (tournaments.length === 0) {
        tournamentList.innerHTML = '<p>No upcoming tournaments. Create one now!</p>';
        return;
    }

    tournaments.forEach(tournament => {
        const div = document.createElement('div');
        div.className = 'tournament';
        div.innerHTML = `
            <p><strong>Date:</strong> ${tournament.date}</p>
            <p><strong>Time:</strong> ${tournament.time}</p>
            <p><strong>Prize Pool:</strong> ${tournament.prizePool}</p>
        `;
        tournamentList.appendChild(div);
    });
}

// Save a new tournament to localStorage
function saveTournament(tournament) {
    const tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
    tournaments.push(tournament);
    localStorage.setItem('tournaments', JSON.stringify(tournaments));
}

// Handle form submission
tournamentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const tournament = {
        date: document.getElementById('tournamentDate').value,
        time: document.getElementById('tournamentTime').value,
        prizePool: document.getElementById('prizePool').value.trim()
    };

    if (tournament.date && tournament.time && tournament.prizePool) {
        saveTournament(tournament);
        loadTournaments(); // Reload tournaments
        alert('Tournament created successfully!');
        tournamentForm.reset(); // Reset the form
    } else {
        alert('Please fill out all fields.');
    }
});

// Initialize the page
loadTournaments();
