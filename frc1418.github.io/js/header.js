document.onscroll = function() {shrinkHeader()};
header = document.getElementsByTagName('header')[0];
function shrinkHeader() {
    if (document.body.scrollTop > 50 && document.body.clientWidth >= 1200 || document.documentElement.scrollTop > 50 && document.body.clientWidth >= 1200) {
        header.className = 'shrink';
    } else if (document.body.clientWidth >= 1200){ 
        header.className = '';
    }
}
