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
});

/*даты*/
(function (post, sale, comment) {
    var now = new Date(),
        weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
        d = weekAgo.getDate(),
        m = weekAgo.getMonth() + 1,
        y = weekAgo.getFullYear();
    post[0].textContent = buildDate(d, m, y);
    sale[0].textContent = buildDate(now.getDate(), now.getMonth() + 1, now.getFullYear());
    for (var i = 0; i < comment.length; i++) {
        var commentDate = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), Math.round(weekAgo.getDate() + (i * 0.8))),
            chooseDate = commentDate < now ? commentDate : now;
        comment[i].textContent = buildDate(
            chooseDate.getDate(),
            chooseDate.getMonth() + 1,
            chooseDate.getFullYear())
    }

    function zero(val) {
        return val.toString().length === 1 ? '0' + val : val;
    }

    function buildDate(d, m, y) {
        return [zero(d), zero(m), y,].join('.');
    }
})(
    document.getElementsByClassName('post-date'),
    document.getElementsByClassName('sale'),
    document.getElementsByClassName('comment-date')
);