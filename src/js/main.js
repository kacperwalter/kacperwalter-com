// parallax stuff
const parallax = (e) => {
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}

document.addEventListener('mousemove', parallax);
