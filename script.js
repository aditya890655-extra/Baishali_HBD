// Function to switch between sections
function showSection(id) {
    // Hide all
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active', 'animate__fadeIn');
    });
    // Show selected
    const target = document.getElementById(id);
    target.classList.add('active', 'animate__fadeIn');
}

// Confetti Surprise
function spillLove() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffffff']
    });
}

// Falling Petals System
function createPetal() {
    const container = document.getElementById('petal-container');
    if (!container) return;

    const petal = document.createElement('div');
    petal.className = 'petal';
    
    const size = Math.random() * 15 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 4 + 's';
    
    container.appendChild(petal);
    
    // Cleanup
    setTimeout(() => {
        petal.remove();
    }, 6000);
}

// Start Petal Rain
setInterval(createPetal, 300);

// Initialize
window.onload = () => {
    showSection('home');
};
