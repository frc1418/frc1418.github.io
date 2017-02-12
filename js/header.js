document.onscroll = function() {shrinkHeader()};
header = document.getElementsByTagName('header')[0];
function shrinkHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.className = 'shrink';
    } else {
        header.className = '';
    }
}
