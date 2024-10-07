// Initialize Leaflet map
var map = L.map('map').setView([20, 0], 2);

// Add base layer for the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Handle video generation request
document.getElementById('generate-video-btn').addEventListener('click', function () {
    const mapContainer = document.getElementById('map-container');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('generated-video');

    // Hide map and show video container
    mapContainer.style.display = 'none';
    videoContainer.style.display = 'block';
    
    // Play the video
    video.play();
});

// Handle "Back to Map" button click
document.getElementById('back-to-map-btn').addEventListener('click', function () {
    const mapContainer = document.getElementById('map-container');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('generated-video');

    // Stop the video if it's playing
    video.pause();

    // Hide video and show map container
    videoContainer.style.display = 'none';
    mapContainer.style.display = 'block';
});
