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
        mouseDrag: true,
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


    function smooth_scroll(target, duration) {
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animation);
    }

    function smooth_scroll(link, duration) {
        const target = document.querySelector(link),
            targetPosition = target.getBoundingClientRect().top,
            startPosition = window.pageYOffset,
            distance = targetPosition - startPosition;
        let startTime = null;

        console.log(startPosition);
        console.log(targetPosition);

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animation);
    }

    let links = document.querySelectorAll('.menu__link');
    links.forEach(function(link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let target = link.getAttribute('href');
            if (target.length > 1) {
                smooth_scroll(target, 1000);
            }
        });
    })
});