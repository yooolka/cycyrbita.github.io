var modal = document.getElementById('modal'),
    privacy = document.getElementById('privacy'),
    close = document.getElementById('privacy__close'),
    openModal = document.getElementsByClassName('openModal');

for (var i = 0; i < openModal.length; i++) {
    openModal[i].onclick = function () {
        modalShow();
    }
}
close.onclick = function () {
    modalHide()
}

modal.onclick = function () {
    modalHide();
}

document.getElementById('closeCookies').onclick = function () {
    document.getElementById('popup').style.display = 'none';
}

function modalHide() {
    modal.style.display = 'none';
    document.getElementById('body').style.overflow = 'visible';
}

function modalShow() {
    modal.style.display = 'flex';
    document.getElementById('body').style.overflow = 'hidden';
}
