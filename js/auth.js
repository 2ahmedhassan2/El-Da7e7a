// public/js/auth.js

// Function to check if the user is logged in
function checkLogin() {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    }
}

// Function for user signup
function signup(event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (!email || !password) {
        alert('Please fill in all fields!');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
        alert('User already exists!');
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Redirecting to login.');
    window.location.href = 'login.html';
}

// Function for user login
function login(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!email || !password) {
        alert('Please fill in all fields!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        localStorage.setItem('loggedInUser', email);
        alert('Login successful! Redirecting to home page.');
        window.location.href = '7aseb.html'; // Default home page after login
    } else {
        alert('Invalid credentials! Try again.');
    }
}

// Function to logout the user
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}
