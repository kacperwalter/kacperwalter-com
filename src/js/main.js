// parallax stuff
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

// cursor animating stuff
const cursor = document.querySelector('.cursor');

const cursorMove = (e) => {
    cursor.style.top = (e.pageY - 10) + 'px';
    cursor.style.left = (e.pageX - 10) + 'px';
}

const cursorExpand = () => {
    cursor.classList.add('cursor-expand');
    setTimeout(() => {
        cursor.classList.remove('cursor-expand');
    }, 500)
}

document.addEventListener('mousemove', cursorMove)
document.addEventListener('click', cursorExpand)

// social text animation stuff
const links = document.querySelectorAll(".social-button");

const generateGlitch = (symbols, length) => {
  let glitch = "";
  for(let i=0; i<length; i++) glitch += symbols.charAt(Math.random()*symbols.length);
  
  return glitch;
};

const glitchOnHover = (element, duration) => {
  const text = element.innerText;
  const textHtml = element.innerHTML;
  const symbols = "!@#$%^&*?<>/\_";
  const rounds = 5;
  
  element.addEventListener("mouseover", (e) => {
    let round = 0;
    
    const interval = setInterval(() => {
      element.innerText = generateGlitch(symbols, text.length);
      round++;

      if(round === rounds){
        clearInterval(interval);
        element.innerHTML = textHtml;
      }
    }, duration/rounds);
  });
};

links.forEach(link => {
  glitchOnHover(link, 500);
});