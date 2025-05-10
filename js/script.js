// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const backBtn = document.getElementById('back-btn');
    const videoCards = document.querySelectorAll('.video-card');

    // Handle search form submission
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            try {
                const query = searchInput.value.trim().toLowerCase();
                
                // Validate search input
                if (!query) {
                    alert('Please enter a search term');
                    return;
                }

                // Filter video cards based on search query
                let matchFound = false;
                videoCards.forEach(card => {
                    const title = card.querySelector('.video-title').textContent.toLowerCase();
                    if (title.includes(query)) {
                        card.style.display = 'block';
                        matchFound = true;
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Show message if no matches found
                if (!matchFound) {
                    alert('No videos found matching your search');
                    // Reset the view
                    videoCards.forEach(card => card.style.display = 'block');
                    searchInput.value = '';
                }
            } catch (error) {
                console.error('Search error:', error);
                alert('An error occurred while searching. Please try again.');
            }
        });
    }

    // Handle back button click
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Clear search and show all videos
            if (searchInput) {
                searchInput.value = '';
                videoCards.forEach(card => card.style.display = 'block');
            }
        });
    }

    // Add click event listeners to video cards
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            // In a real application, this would navigate to the video page
            console.log('Video clicked:', card.querySelector('.video-title').textContent);
        });
    });
});
