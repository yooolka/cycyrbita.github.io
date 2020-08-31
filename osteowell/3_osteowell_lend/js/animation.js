animationFirstBlock('.order1-right', 'animation-moveLeft');
animationFirstBlock('.order1-left', 'animation-fadeIn');
animationSimple('h2', 'animation-fadeIn');
animationSimple('.bigToeListItem', 'animation-moveLeft');
animationSimple('.bigToe-left', 'animation-fadeIn');
animationSimple('.delay-text', 'animation-fadeIn');
animationSimple('.painList-item', 'animation-moveRight');
animationSimple('.plusList-Item', 'animation-fadeIn');
animationSimple('.order2 .order1ListItem', 'animation-fadeIn');
animationSimple('.order2 .mainLogo', 'animation-fadeIn');


function hide(arr) {
    let element = document.querySelectorAll(arr);
    for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = '0';
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