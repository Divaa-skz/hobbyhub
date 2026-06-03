// Update navbar based on login status
async function initializeNavbar() {
    // If we're on the account page, remove any static "Account" link to avoid duplication
    try {
        if (window.location && window.location.pathname === '/account') {
            const accLink = document.querySelector('nav ul li a[href="/account"]');
            if (accLink) accLink.parentElement.remove();
        }
    } catch (err) {
        // ignore
    }
    try {
        const response = await fetch('/api/user');
        
        if (response.ok) {
            const user = await response.json();
            updateNavbarLoggedIn(user.username);
        } else {
            updateNavbarLoggedOut();
        }
    } catch (error) {
        console.error('Error checking login status:', error);
        updateNavbarLoggedOut();
    }
}

function updateNavbarLoggedIn(username) {
    const navList = document.querySelector('nav ul');
    
    // Remove the old login link
    const loginLink = navList.querySelector('li a[href="/login"]');
    if (loginLink) {
        loginLink.parentElement.remove();
    }
    
    // Add user info and logout button
    const userItem = document.createElement('li');
    userItem.innerHTML = `
        <a href="/account" class="user-info">👤 ${username}</a>
    `;
    navList.appendChild(userItem);
    
    const logoutItem = document.createElement('li');
    logoutItem.innerHTML = `<a href="#" onclick="handleLogout(event)">Logout</a>`;
    navList.appendChild(logoutItem);
}

function updateNavbarLoggedOut() {
    const navList = document.querySelector('nav ul');
    
    // Check if login link already exists
    const loginLink = navList.querySelector('li a[href="/login"]');
    if (!loginLink) {
        const loginItem = document.createElement('li');
        loginItem.innerHTML = `<a href="/login">Login</a>`;
        navList.appendChild(loginItem);
    }
    
    // Remove user info and logout if present
    const userInfo = navList.querySelector('.user-info');
    if (userInfo) {
        userInfo.parentElement.remove();
    }
    
    const logoutLink = navList.querySelector('a[onclick*="handleLogout"]');
    if (logoutLink) {
        logoutLink.parentElement.remove();
    }
}

async function handleLogout(event) {
    event.preventDefault();
    
    try {
        const response = await fetch('/api/logout', {
            method: 'POST'
        });
        
        if (response.ok) {
            // Redirect to home page
            window.location.href = '/';
        } else {
            alert('Logout failed. Please try again.');
        }
    } catch (error) {
        console.error('Logout error:', error);
        alert('An error occurred during logout.');
    }
}

// Initialize navbar when page loads
document.addEventListener('DOMContentLoaded', initializeNavbar);
