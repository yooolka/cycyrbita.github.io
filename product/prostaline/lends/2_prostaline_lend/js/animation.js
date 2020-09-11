/*анимация для банки*/
(function () {
    let product = document.querySelector('.product-img_main');
    let capsule = document.querySelector('.product-img_capsules');
    setTimeout(() => {
        capsule.classList.remove('visibility-none')
    }, 1000)
    product.addEventListener('mouseover', (e) => {
        e.target.classList.add('product-stay')
        capsule.classList.add('visibility-none')
    });
    product.addEventListener('mouseout', (e) => {
        product.classList.remove('product-stay')
        capsule.classList.remove('visibility-none')
    })
})();

/*анимация для ленда*/
(function () {
    animationSimple('h2', 'animation-fadeIn');
    animationSimple('.trouble-item', 'animation-moveLeft');
    animationSimple('.notForEach-item', 'animation-moveRight');
    animationSimple('.helpList-item', 'animation-moveLeft');
    animationSimple('.consist-item', 'animation-fadeIn');
    animationSimple('.notForEach-text', 'animation-fadeIn');
    animationSimple('.product-block', 'animation-moveRight');
    animationSimple('.order_bottom .order-left', 'animation-fadeIn');
    animationSimple('.order_bottom .order-right', 'animation-moveLeft');


    function hide(arr) {
        let element = document.querySelectorAll(arr);
        for (let i = 0; i < element.length; i++) {
            if (element[i].classList.contains('order1-title')) {
                continue;
            }
            else {
                element[i].style.opacity = '0';
            }
        }

    }

    function position(el) { /*определяем кооординаты элемента*/
        let elementBorder = window.pageYOffset + el.getBoundingClientRect().top,
            windowHeight = document.documentElement.clientHeight,
            visibleBottom = window.pageYOffset + windowHeight - 50,
            pos = {
                element: el,
                elementBorder: elementBorder,
                windowHeight: windowHeight,
                visibleBottom: visibleBottom
            };
        return pos;
    }

    function animationSimple(dom, animation) {/*arr = DOM элемент*/
        let arr = document.querySelectorAll(dom);
        hide(dom);
        window.addEventListener('scroll', function () {
            for (let item of arr) {
                let pos = position(item);
                if (pos.visibleBottom > pos.elementBorder) {
                    pos.element.classList.add(animation);
                    pos.element.style.opacity = '1';
                }
            }
        }, false);
    }

    function animationFirstBlock(val, animation) {
        hide(val);
        let element = document.querySelectorAll(val);
        for (let el of element) {
            el.classList.add(animation);
            el.style.opacity = '1';
        }
    }
})();



