const teamForm = document.getElementById('teamForm');
const teamContainer = document.getElementById('teamContainer');

// Load teams from localStorage
function loadTeams() {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    teamContainer.innerHTML = ''; // Clear existing teams

    if (teams.length === 0) {
        teamContainer.innerHTML = '<p>No teams available. Create one now!</p>';
        return;
    }

    teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team';
        teamDiv.innerHTML = `
            <h4>${team.name}</h4>
            <p>${team.description}</p>
            <p><strong>Required Rank:</strong> ${team.rank}</p>
            <button class="btn" onclick="joinTeam(${index})">Request to Join</button>
        `;
        teamContainer.appendChild(teamDiv);
    });
}

// Save a new team to localStorage
function saveTeam(team) {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    teams.push(team);
    localStorage.setItem('teams', JSON.stringify(teams));
}

// Handle form submission
teamForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const team = {
        name: document.getElementById('teamName').value.trim(),
        description: document.getElementById('teamDescription').value.trim(),
        rank: document.getElementById('requiredRank').value
    };

    if (team.name && team.description && team.rank) {
        saveTeam(team);
        loadTeams(); // Reload team list
        alert('Team created successfully!');
        teamForm.reset(); // Reset the form
    } else {
        alert('Please fill out all fields.');
    }
});

// Join team functionality
function joinTeam(index) {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    const team = teams[index];
    alert(`You have requested to join the team: ${team.name}`);
}

// Initialize the page
loadTeams();
