document.addEventListener('DOMContentLoaded', function() {
    // Countdown timer for launch date (example)
    const launchDate = new Date('2023-12-01T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = launchDate - now;
        
        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = 'Lançado!';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});