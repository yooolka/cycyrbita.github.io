(function cert(block, btn) {
    document.body.addEventListener('click', function (e) {
        e.preventDefault();
        var imgParent = isImg(e.target);
        if (e.target === btn) {
            block.classList.toggle('openBlock');
            e.target.classList.toggle('cert-btn_normal');
        }

        else if (e.target.parentElement.parentElement === block) {
            e.target.parentElement.classList.add('cert-modal');
            block.classList.add('z-index');
        }

        else if (e.target === imgParent) {
            e.target.classList.remove('cert-modal');
            block.classList.remove('z-index')
        }

        else {
            block.classList.remove('openBlock');
            block.classList.remove('cert-item_open');
        }

        function isImg(elem) {
            return elem.classList.contains('cert-modal') ? elem : false
        }
    })
})(
    document.getElementsByClassName('certBlock')[0],
    document.getElementsByClassName('cert-btn')[0]
);
