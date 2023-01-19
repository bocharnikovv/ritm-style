document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__menu'),
        btns = document.querySelector('.header__btns'),
        screenWidth = window.innerWidth;
        body = document.body;

        if(btns) {
            if(screenWidth <= 479.98) {
                menu.append(btns);
            }
        }

    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            if (!burgerMenu.classList.contains('burger-open')) {
                burgerMenu.classList.add('burger-open');
                menu.classList.add('burger-open');
                body.style.overflow = 'hidden';
            } else {
                burgerMenu.classList.remove('burger-open');
                menu.classList.remove('burger-open');
                body.style.overflow = '';
            }
        });

        menu.addEventListener('click', (e) => {
            if (e.target.hasAttribute('href')) {
                burgerMenu.classList.remove('burger-open');
                menu.classList.remove('burger-open');
                body.style.overflow = '';
            }
        })
    }





});