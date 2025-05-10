document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('admin-login-form');

    // Demo credentials (in a real application, these would be handled securely on the server)
    const DEMO_CREDENTIALS = {
        username: 'admin',
        password: 'admin123'
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple demo authentication
            if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
                // Store authentication state (in a real app, this would be a JWT token or similar)
                localStorage.setItem('adminAuthenticated', 'true');
                
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    // Check if user is already logged in
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (isAuthenticated === 'true' && window.location.pathname.includes('login.html')) {
        window.location.href = 'dashboard.html';
    }
});
