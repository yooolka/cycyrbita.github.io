window.onload = function() {
    /*
    КОММЕНТАРИИ
    ===================================================================>

    ХОТИМ ДОБАВИТЬ БЛОК КОММЕНТОВ
    ===================================================================>
    вызываем функцию addCommits('minTime');
    в параметры передаем формат даты (какие есть форматы описано ниже)
    если нужно установить дату на публикацию поста можно просто навесить класс commits__date

    ХОТИМ ДОБАВИТЬ ДАТУ
    ===================================================================>
    запускаем функцию и указываем параметры
    time('className', 'format');

    PARAMETERS
    ===================================================================>
    className - указываем класс к которому хотим добавить дату
    format - указываем формат в кавычках ('fullTime')

    OPTIONS
    ===================================================================>
    fullTime   - дата в формате 00.00.0000
    minTime    - дата в формате 00.00.00
    year       - год
    month      - месяц
    day        - день
    day-month  - день и месяц
    day-year   - день и год
    month-year - месяц и год
*/

    time('datatime', 'minTime');

    /*комменты для сайта*/
    addCommits('minTime');

    function addCommits(formatDate) {
        var $name = document.getElementById('myName'),
            $message = document.getElementById('myMessage'),
            $setName = document.getElementById('commits__name'),
            $setMessage = document.getElementById('commits__description'),
            $mySend = document.getElementById('mySend'),
            $sendMessage = document.getElementById('my-message'),
            $myMessage = document.getElementById('send-message');

        if (sessionStorage.getItem('commit') == 1) {
            $myMessage.classList.add('commits__item_hide');
            $sendMessage.classList.remove('commits__item_hide');
            $setName.innerHTML = sessionStorage.getItem('name');
            $setMessage.innerHTML = sessionStorage.getItem('message');
        }
        $mySend.onclick = function() {
            if ($name.value == 0 || $name.value == "") {
                $name.classList.add('commits_error');
                if ($message.value == 0 || $message.value == "") {
                    $message.classList.add('commits_error');
                } else {
                    $message.classList.remove('commits_error');
                }
            } else {
                $name.classList.remove('commits_error');
                if ($message.value == 0 || $message.value == "") {
                    $message.classList.add('commits_error');
                } else {
                    $message.classList.remove('commits_error');
                    sessionStorage.setItem('name', $name.value);
                    sessionStorage.setItem('message', $message.value);
                    sessionStorage.setItem('commit', 1);
                    $myMessage.classList.add('commits__item_hide');
                    $sendMessage.classList.remove('commits__item_hide');
                    $setName.innerHTML = sessionStorage.getItem('name');
                    $setMessage.innerHTML = sessionStorage.getItem('message');
                }
            }
        }
        addDate('commits__date', formatDate);
    }

    /*проверка на заполненность полей*/


    /*вешаем дату на любой класс*/
    function time(className, format) {
        var elem = document.getElementsByClassName(className),
            d = new Date(),
            $thisDate = formatDate(d, format);

        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = $thisDate;
        }
    }

    /*вешаем дату на комметарии*/
    function addDate(className, formatData) {
        var $date = document.getElementsByClassName(className);
        var dataPost = document.getElementById('dataPost');
        for (var i = $date.length - 1; i >= 0; i--) {
            var d = new Date();
            d.setDate(d.getDate() - (($date.length - 1) - i));
            $date[i].innerHTML = formatDate(d, formatData);
        }
    }

    /*формат дат*/
    function formatDate(date, format) {
        var dd = date.getDate(),
            mm = date.getMonth(),
            yy = date.getFullYear();

        if (format == 'fullTime') {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm + '.' + yy;
        } else if (format == 'minTime') {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            if ((yy %= 100) < 10) yy = '0' + yy;
            return dd + '.' + mm + '.' + yy;
        } else if (format == 'year') {
            if (yy < 10) yy = '0' + yy;
            return yy;
        } else if (format == 'month') {
            if (mm += 1 < 10) mm = '0' + mm;
            return mm;
        } else if (format == 'day') {
            if (dd < 10) dd = '0' + dd;
            return dd;
        } else if (format == 'day-month') {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            return dd + '.' + mm;
        } else if (format == 'day-year') {
            if (dd < 10) dd = '0' + dd;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + yy;
        } else if (format == 'month-year') {
            if (mm += 1 < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;
            return mm + '.' + yy;
        } else if (format == 'false') {
            return '';
        } else {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm + '.' + yy;
        };
    };
};

/*таймер*/
(function (min, sec) {
    var date = new Date(),
        count = 0;
    date.setMinutes(15); /*ставим необходимое время*/
    date.setSeconds(0); /*ставим необходимое время*/
    min[0].textContent = zero(date.getMinutes());
    sec[0].textContent = zero(date.getSeconds());

    var interval = setInterval(counter, 1000);

    function counter() {
        count++;
        var liveDate = new Date();
        liveDate.setMinutes(date.getMinutes());
        liveDate.setSeconds(date.getSeconds() - count);

        min[0].textContent = zero(liveDate.getMinutes());
        sec[0].textContent = zero(liveDate.getSeconds());
        if (min[0].textContent === '00' && sec[0].textContent === '00') {
            clearInterval(interval);
        }
    }

    function zero(num) {
        return num.toString().length === 1 ? '0' + num : num;
    }
})(
    document.getElementsByClassName('min'),/*присваиваем классы*/
    document.getElementsByClassName('sec')/*присваиваем классы*/
);