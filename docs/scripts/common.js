function toggleMenu () {
    const modal = $('.nav.modal');

    if (modal.css('display') === 'none') {
        modal.show();
    } else {
        modal.hide();
    }
}

$(document).ready(function() {
    $('#menu-button').click(toggleMenu);
});
