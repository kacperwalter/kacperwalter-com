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