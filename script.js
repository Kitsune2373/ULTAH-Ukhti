// Play music ketika modal dibuka
const birthdaySong = document.getElementById('birthdaySong');
const surpriseModal = document.getElementById('surpriseModal');

surpriseModal.addEventListener('show.bs.modal', () => {
    birthdaySong.play();
});

// Stop music ketika modal ditutup
surpriseModal.addEventListener('hide.bs.modal', () => {
    birthdaySong.pause();
    birthdaySong.currentTime = 0; // Reset lagu ke awal
});

// Confetti Effect
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 10,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 10
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.d;
        p.tilt += 0.5;

        if (p.y > canvas.height) {
            confettiParticles[i] = {
                ...p,
                y: 0,
                x: Math.random() * canvas.width
            };
        }
    });
    requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();
