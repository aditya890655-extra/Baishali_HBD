function showSection(id) {
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active', 'animate__fadeIn');
    });
    const target = document.getElementById(id);
    target.classList.add('active', 'animate__fadeIn');
    window.scrollTo(0, 0);
}

function spillLove() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffffff']
    });
}

function createPetal() {
    const container = document.getElementById('petal-container');
    const petal = document.createElement('div');
    petal.className = 'petal';
    const size = Math.random() * 15 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 4 + 's';
    container.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
}

setInterval(createPetal, 300);