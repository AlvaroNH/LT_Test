$(function () {
    $(".sliderImage_rocketPhoto").fadeIn(700).addClass("active");
    window.interval = setInterval(changeBackground, 5000);
    window.progress = setInterval(changeprogress, 1000);

})
function changeBackground() {
    let active = $(".landingPage_sliderImage div.active");
    active.fadeOut();
    $(".landingPage_sliderImage div:not(.active)").delay(500).fadeIn().addClass("active");
    active.removeClass("active");

}

function changeprogress() {
    let val = parseInt($(".progress_bar").attr("data-val"));
    if (val == 100) {
        $(".progress_bar").attr("data-val", 20).css("max-width", "20%");
        $(".progress_background").css("max-width", "80%");
    } else {
        val = val + 20;
        let background = 100 - val;
        $(".progress_bar").attr("data-val", val).css("max-width", `${val}%`);
        $(".progress_background").css("max-width", `${background}%`);
    }

}

function triggerChange(){
    clearInterval(window.interval);
    clearInterval(window.progress);
    changeBackground();
    $(".progress_bar").attr("data-val", 0).css("max-width", "0%");
    $(".progress_background").css("max-width", "100%");
    window.interval = setInterval(changeBackground, 5000);
    window.progress = setInterval(changeprogress, 1000);

}
