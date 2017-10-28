function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            $(header).addClass("smaller");
        } else {
            $(header).removeClass("smaller");
        }
    });
}
window.onload = init();
