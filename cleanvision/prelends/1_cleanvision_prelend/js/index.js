/*дата комментов*/
window.onload = function () {
    var $date = document.getElementsByClassName('commits__date'),
        $name = document.getElementById('myName'),
        $message = document.getElementById('myMessage'),
        $send = document.getElementById('mySend'),
        /*айдишник вешаем на дату поста*/
        $post = document.getElementById('post');
    addDate();

    /*проверка на заполненность полей*/
    mySend.onclick = function () {
        if ($name.value == 0 || $name.value == "") {
            $name.classList.add('error');
        } else {
            $name.classList.remove('error');
            if ($message.value == 0 || $message.value == "") {
                $message.classList.add('error');
            } else {
                $message.classList.remove('error');
                sendMessage();
            }
        }
    }

    /*добавление даты*/
    function addDate() {
        /*пробегаемся по всем классам и устанавливаем время*/
        for (var i = $date.length - 1; i >= 0; i--) {
            var d = new Date();
            d.setDate(d.getDate() - (($date.length - 1) - i));
            $date[i].innerHTML = formatDate(d);

            if ($post) {
                $post.innerHTML = formatDate(d);
            }
        }
    }

    /*форматируем дату*/
    function formatDate(date) {
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;
        return dd + '.' + mm + '.' + yy;
    }

    /*проверяем писал ли пользователь комментарий*/
    if (localStorage.getItem('commit') == 1) {
        var $item = document.getElementsByClassName('commits__item');
        $item[$item.length - 1].classList.add('hide');

        $item[$item.length - 2].insertAdjacentHTML('afterend', '<div class="commits__item"><div class="commits__head"><div class="commits__face"></div><div class="commits__info"><div class="commits__name">' + localStorage.getItem(
            '$name') + '</div><div class="commits__date"></div></div></div><div class="commits__body"><div class="commits__description">' + localStorage.getItem('$message') +
            '</div></div><div class="commits__success">Ваш комментарии проходит модерацию</div></div>');

        addDate();
    }

    /*вставляем новый комментарий*/
    function sendMessage() {
        var $item = document.getElementsByClassName('commits__item');

        $item[$item.length - 2].insertAdjacentHTML('afterend', '<div class="commits__item"><div class="commits__head"><div class="commits__face"></div><div class="commits__info"><div class="commits__name">' + $name.value +
            '</div><div class="commits__date"></div></div></div><div class="commits__body"><div class="commits__description">' + $message.value +
            '</div></div><div class="commits__success">Ваш комментарии проходит модерацию</div></div>');
        addDate();

        $item[$item.length - 1].classList.add('hide');
        localStorage.$name = $name.value;
        localStorage.$message = $message.value;

        /*нужно постоянно менять число и на 116 строке тоже самое*/
        localStorage.commit = 1;
    }
}

/*рулетка*/
$(document).ready(function () {

    if ($('div').is('.ryle')) {
        /* показываем колесо при загрузке */
        if ($('.all-form').offset().top - $(this).scrollTop() - $(window).height() <= 120) {
            $('.ryle').addClass('ryle_active');
        }
        ;

        /* показываем колесо при скролле */
        $(window).on('scroll', function () {
            if (!$('.ryle').hasClass('thisEvent')) {
                if ($('.all-form').offset().top - $(this).scrollTop() - $(window).height() <= 120) {
                    $('.ryle').addClass('ryle_active');
                }
            }
        })

        /* закрываем колесо, показываем форму, запускаем таймер и плавно скроллимся к форме */
        $('.ryle__close').click(function () {
            $('.ryle').removeClass('ryle_active').addClass('thisEvent');
            $('.all-form').fadeIn();
            Start();
            $('html, body').animate({
                scrollTop: $('.all-form').offset().top - 120
            }, 300);
        });

        /* крутим барабан и показываем инфу о скидке */
        $('.ryle__look').click(function () {
            $('.ryle__media').addClass('ryle__media_active');
            setTimeout(function () {
                $('.ryle__discount').addClass('ryle__discount_active');
            }, 5000);
        });
    } else {
        Start()
    }

    function Start() {
        if (m <= 9) {
            m = "0" + m;
        }
        var m = 10,
            s = 0,
            min = $('.all-form__min'),
            sec = $('.all-form__sec');

        if (m <= 9) {
            m = "0" + m;
        }
        ;

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }

            }

            min.text(m);
            sec.text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    }
})
