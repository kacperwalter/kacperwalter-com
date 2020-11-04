const parallax = (e) => {
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}

const parallaxCondition = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    } else {
        document.addEventListener('mousemove', parallax);
    }
}

parallaxCondition();