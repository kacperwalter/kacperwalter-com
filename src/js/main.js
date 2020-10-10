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

// social text animation stuff !!! lot of mess and shit code xD - needs to be refactored
class AnimatedText {
    constructor(target, texts, changeInterval, updateInterval, onTextChanged) {
        let currentText = parseInt(Math.random() * texts.length);
        let areaText = texts[0];
        this.t1 = setInterval(function () {
            let c = parseInt(Math.random() * Math.max(texts[currentText].length, areaText.length));
            let s = texts[currentText][c];
            if (typeof s == 'undefined')
                s = " ";
            while (areaText.length < c)
                areaText += " ";
            let newText = (areaText.slice(0, c) + s + areaText.slice(c + 1)).trim();
            let diff = !(newText == areaText);
            areaText = newText;
            if (onTextChanged && diff)
                onTextChanged();
            target.innerHTML = areaText.length == 0 ? "&nbsp;" : areaText;
        }.bind(this), updateInterval ? updateInterval : 50);
        this.t2 = setInterval(function () {
            currentText = parseInt(Math.random() * texts.length);
        }.bind(this), changeInterval ? changeInterval : 4000);
    }
    stop() { clearInterval(this.t1); clearInterval(this.t2); }
}

const githubButton = document.querySelector('.github');
const behanceButton = document.querySelector('.behance');
const linkedinButton = document.querySelector('.linkedin');

githubButton.addEventListener('mouseover', (e) => {
    new AnimatedText(githubButton, ['GitHub', "*&$^@#", "@*)^@="], 200, 50);
    setTimeout(1000);
    githubButton.textContent = "GitHub";
});
githubButton.addEventListener('mouseleave', () => {
    githubButton.textContent = "GitHub";
})