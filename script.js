document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const rank = document.getElementById('rank').value;

    if (email && username && rank) {
        // Retrieve existing data
        const players = JSON.parse(localStorage.getItem('players')) || [];

        // Check for duplicate usernames
        const isDuplicate = players.some(player => player.username.toLowerCase() === username.toLowerCase());
        if (isDuplicate) {
            alert('Username already exists. Please choose a different username.');
            return;
        }

        // Add the new player
        players.push({ email, username, rank });
        localStorage.setItem('players', JSON.stringify(players));

        // Redirect to profiles page
        alert('Registration successful! Redirecting to profiles...');
        window.location.href = 'profiles.html';
    } else {
        alert('Please fill out all fields.');
    }
});





