animationFirstBlock('.order-product', 'animation-moveRight');
animationFirstBlock('.order-right', 'animation-moveLeft');
animationFirstBlock('.order-left', 'animation-fadeIn');
animationSimple('.effects-title', 'animation-fadeIn');
animationSimple('.mistake-title', 'animation-fadeIn');
animationSimple('.exac-title', 'animation-fadeIn');
animationSimple('.tired-title', 'animation-fadeIn');
animationSimple('.order2-title', 'animation-fadeIn');
animationSimple('.multi-title', 'animation-fadeIn');
animationSimple('.weeks-title', 'animation-fadeIn');
animationSimple('.plus-title', 'animation-fadeIn');
animationSimple('.spec-title', 'animation-fadeIn');
animationSimple('.fake-title', 'animation-fadeIn');
animationSimple('.comment-title', 'animation-fadeIn');
animationSimple('.order2-left', 'animation-moveRight');
animationSimple('.order2-right', 'animation-moveLeft');
animationSimple('.product_fake', 'animation-moveLeft');
animationSimple('.fake-right', 'animation-fadeIn');
animationSimple('.exacList-item', 'animation-moveRight');
animationSimple('.effects-img', 'animation-fadeIn');
animationSimple('.mistakesList-item', 'animation-fadeIn');
animationSimple('.plus-item', 'animation-fadeIn');

if (document.documentElement.clientWidth <= 576) {
    animationSimple('.weekList-item', 'animation-fadeIn');
    animationSimple('.multi-img', 'animation-moveLeft');
    animationSimple('.multiList-item', 'animation-moveLeft');
}

else {
    animationReverse('.multi-img', 'animation-moveLeft')
    animationReverse('.multiList-item', 'animation-moveLeft')
    animationReverse('.weekList-item', 'animation-fadeIn')
}

function hide(arr) {
    let element = document.querySelectorAll(arr);
    for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = '0';
    }
}

function position(el) { /*определяем кооординаты элемента*/
    let element = document.querySelectorAll(el),
        elementBorder = window.pageYOffset + element[0].getBoundingClientRect().top,
        windowHeight = document.documentElement.clientHeight,
        visibleBottom = window.pageYOffset + windowHeight - 50,
        pos = {
            element: element,
            elementBorder: elementBorder,
            windowHeight: windowHeight,
            visibleBottom: visibleBottom
        };
    return pos;
}

function animationSimple(arr, animation) {/*arr = DOM элемент*/
    hide(arr);
    window.addEventListener('scroll', function () {
        let pos = position(arr);
        /*определяем кооординаты для конкретного элемента*/
        if (pos.visibleBottom > pos.elementBorder) {
            for (let i = 0; i < pos.element.length; i++) {
                setTimeout(function () {
                    pos.element[i].classList.add(animation);
                    pos.element[i].style.opacity = '1';
                }, i * 150);
            }
        }
    }, false);
}

function animationReverse(arr, animation) {
    hide(arr);
    window.addEventListener('scroll', function () {
        let pos = position(arr);
        if (pos.visibleBottom > pos.elementBorder) {
            for (
                let i = pos.element.length - 1, j = 0;
                i >= 0, j < pos.element.length;
                i--, j++
            ) {
                setTimeout(function () {
                    pos.element[i].classList.add(animation);
                    pos.element[i].style.opacity = '1';
                }, j * 150);
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