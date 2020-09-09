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
Date.prototype.addDays = function (t) {
    return this.setDate(this.getDate() + t), this
}, $("document").ready(function () {
    for (var t = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], e = $(
        "span.comment_date"), a = e.length, n = [], o = new Date, r = a - 1; 0 <= r; r--) {
        var d = Math.round(2 * Math.random());
        o = new Date(o.addDays(-d));
        n[r] = o.getDate() + "." + t[o.getMonth()] + "." + o.getFullYear()
    }
    e.each(function (t, e) {
        $(this).text(n[t])
    })
});
