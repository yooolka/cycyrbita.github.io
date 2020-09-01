(function (post, commemt, footer) {
    var now = new Date(),
        weekAgo =  new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
        d = weekAgo.getDate(),
        m = weekAgo.getMonth() + 1,
        y = weekAgo.getFullYear();
    post.textContent = buildDate(d,m,y);
    footer.textContent = y;
    for (var i = 0; i < commemt.length; i++) {
        var commentDate = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), weekAgo.getDate() + i),
            chooseDate = commentDate < now ? commentDate : now;
            commemt[i].textContent = buildDate(
                chooseDate.getDate(),
                chooseDate.getMonth() + 1,
                chooseDate.getFullYear())
    }
    function zero (val) {
        return val.toString().length === 1 ? '0' + val : val;
    }
    function buildDate(d, m, y) {
        return [zero(d),zero(m),y,].join('.');
    }
})(
    document.querySelector('.page-article-date'),
    document.querySelectorAll('.comment_date'),
    document.querySelector('.footer-date')
);


















