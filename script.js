
async function fetchUsers() {
    const userContainer = document.getElementById('users');
    const errorContainer = document.getElementById('error');
    userContainer.innerHTML = '';
    errorContainer.innerText = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const users = await response.json();

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;
            userContainer.appendChild(userCard);
        });
    } catch (error) {
        errorContainer.innerText = '❌ Failed to fetch users: ' + error.message;
    }
}

// Auto fetch on page load
window.onload = fetchUsers;
