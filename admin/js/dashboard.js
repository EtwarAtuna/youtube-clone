document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated || isAuthenticated !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // DOM Elements
    const logoutBtn = document.getElementById('logout-btn');
    const searchInput = document.querySelector('.admin-header-search input');
    const navLinks = document.querySelectorAll('.admin-nav a');
    const editButtons = document.querySelectorAll('.action-btn.edit');
    const deleteButtons = document.querySelectorAll('.action-btn.delete');

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('adminAuthenticated');
            window.location.href = 'login.html';
        });
    }

    // Handle search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('.admin-table tbody tr');

            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // Handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('id') !== 'logout-btn') {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.parentElement.classList.remove('active'));
                
                // Add active class to clicked link
                link.parentElement.classList.add('active');

                // In a real application, this would load different content sections
                const section = link.getAttribute('href').replace('#', '');
                console.log(`Loading ${section} section...`);
            }
        });
    });

    // Handle edit buttons
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const id = row.querySelector('td:first-child').textContent;
            
            // In a real application, this would open an edit form/modal
            console.log(`Editing item with ID: ${id}`);
            alert(`Edit functionality would open here for ID: ${id}`);
        });
    });

    // Handle delete buttons
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const id = row.querySelector('td:first-child').textContent;
            
            if (confirm('Are you sure you want to delete this item?')) {
                // In a real application, this would send a delete request to the server
                console.log(`Deleting item with ID: ${id}`);
                row.remove();
            }
        });
    });

    // Demo: Update stats periodically
    function updateStats() {
        const stats = document.querySelectorAll('.stat-info p');
        stats.forEach(stat => {
            // Simulate random changes in stats
            const currentValue = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
            const newValue = Math.max(0, currentValue + change);
            
            // Format the number with appropriate suffix (K, M, etc.)
            if (newValue >= 1000000) {
                stat.textContent = (newValue / 1000000).toFixed(1) + 'M';
            } else if (newValue >= 1000) {
                stat.textContent = (newValue / 1000).toFixed(1) + 'K';
            } else {
                stat.textContent = newValue.toString();
            }
        });
    }

    // Update stats every 5 seconds
    setInterval(updateStats, 5000);

    // Initialize tooltips or other UI elements
    function initializeUI() {
        // Add any additional UI initialization here
        console.log('Admin dashboard UI initialized');
    }

    initializeUI();
});

// Handle mobile responsive menu
const toggleMenu = () => {
    const sidebar = document.querySelector('.admin-sidebar');
    const main = document.querySelector('.admin-main');
    
    if (window.innerWidth <= 1024) {
        sidebar.classList.toggle('collapsed');
        main.classList.toggle('expanded');
    }
};

// Listen for window resize
window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.admin-sidebar');
    const main = document.querySelector('.admin-main');
    
    if (window.innerWidth <= 1024) {
        sidebar.classList.add('collapsed');
        main.classList.add('expanded');
    } else {
        sidebar.classList.remove('collapsed');
        main.classList.remove('expanded');
    }
});
