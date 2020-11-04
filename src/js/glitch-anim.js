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