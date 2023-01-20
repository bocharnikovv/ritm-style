document.addEventListener('DOMContentLoaded', function () {
    function ibg() {
        let ibg = document.querySelectorAll('.ibg');
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }

    function InsertAmountOfSliderBtns(slideName, slideNav, btnHTML) {
        const countOfSlides = document.querySelectorAll(slideName),
            sliderNavContainer = document.querySelector(slideNav),
            sliderBtn = btnHTML;

        for (let i = 0; i < countOfSlides.length; i++) {
            sliderNavContainer.insertAdjacentHTML('beforeend', sliderBtn);
        }
    }

    ibg();

    const burgerMenu = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__menu'),
        btns = document.querySelector('.header__btns'),
        screenWidth = window.innerWidth;
    body = document.body;

    if (btns) {
        if (screenWidth <= 479.98) {
            menu.append(btns);
        }
    }

    if (burgerMenu) {
        burgerMenu.addEventListener('click', function () {
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

        menu.addEventListener('click', function (e) {
            if (e.target.hasAttribute('href')) {
                burgerMenu.classList.remove('burger-open');
                menu.classList.remove('burger-open');
                body.style.overflow = '';
            }
        })
    }

    InsertAmountOfSliderBtns('.reviews__slide', '.reviews__slider-nav', '<div class="reviews__slider-btn"></div>');

    const slider = tns({
        container: '.reviews__slider',
        items: 1,
        slideBy: 1,
        autoHeight: true,
        controls: false,
        navContainer: '.reviews__slider-nav',
        navAsThumbnails: true,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {
            992: {
                items: 2
            },
            1366: {
                items: 3
            }
        }
    });

    if (screenWidth >= 1366) {
        slider.getInfo().slideItems[slider.getInfo().index + 1].classList.add('reviews-slide__center');
        slider.events.on('indexChanged', () => {
            const info = slider.getInfo();
            const indexCurr = info.index + 1;
            const elements = document.getElementsByClassName('reviews-slide__center');
            while (elements.length > 0) {
                elements[0].classList.remove('reviews-slide__center');
            }
            info.slideItems[indexCurr].classList.add('reviews-slide__center');
        });
    }
});