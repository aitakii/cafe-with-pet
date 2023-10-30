$(function () {
    $(".hamburger").on("click", function () {
        $("header").toggleClass("open");
    });

    $("#navi a").on("click", function () {
        $("header").toggleClass("open");
    });


    $(".slider").slick({
        autoplay: true,
        adaptiveHeight: true,
        arrows:false,
    });
});