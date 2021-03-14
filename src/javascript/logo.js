import logoImg from '../images/kacperwalter-logo.svg';

export function logo() {
    const img = document.querySelector('.navbar__logo');
    img.src = logoImg;
}