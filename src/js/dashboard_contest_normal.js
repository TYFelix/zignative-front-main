import "bootstrap";
import "../scss/_dashboard_contest.scss";

window.onload=function(){
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);
        
        if(toggle && nav && bodypd && headerpd){
            toggle.addEventListener("click", ()=>{
                nav.classList.toggle("show");
                toggle.classList.toggle("bx-x");
                bodypd.classList.toggle("body-pd");
                //headerpd.classList.toggle("body-pd");
            });
        }
    };
    if(window.innerWidth > 742){
        showNavbar("header-toggle","nav-bar","body-pd","header");
    }

    const linkColor = document.querySelectorAll(".nav_link");
        
    function colorLink(){
        if(linkColor){
            linkColor.forEach(l=> l.classList.remove("active"));
            this.classList.add("active");
        }
    }
    linkColor.forEach(l=> l.addEventListener("click", colorLink));
};

$(window).on("load", function(){
    if ($(window).width() > 742) {
        $("body").addClass("body-pd");
        $(".l-navbar").addClass("show");
        $(".sidebar").removeClass("active");
        $(".overlay").removeClass("active");

    }

    if ($(window).width() <= 742) {
        $("body").removeClass("body-pd");
        $(".l-navbar").removeClass("show");
    }
});

$(window).on("resize", function(){
    if ($(window).width() > 742) {
        $("body").addClass("body-pd");
        $(".l-navbar").addClass("show");
        $(".sidebar").removeClass("active");
        $(".overlay").removeClass("active");

    }

    if ($(window).width() <= 742) {
        $("body").removeClass("body-pd");
        $(".l-navbar").removeClass("show");
    }
});

$(function(){
    $(".dismiss, .overlay").on("click", function() {
        $(".sidebar").removeClass("active");
        $(".overlay").removeClass("active");
        $("body").css("margin","65px 0 0 0");
        $(".content_body").css("padding","0");
    });

    $(".open-menu").on("click", function(e) {
        if ($(window).width() <= 742){
            e.preventDefault();
            $(".sidebar").addClass("active");
            $(".overlay").addClass("active");
            $("body").removeClass("body-pd");
            $(".l-navbar").removeClass("show");
            // close opened sub-menus
            $(".collapse.show").toggleClass("show");
            $("a[aria-expanded=true]").attr("aria-expanded", "false");
            $("body").css("margin","0");
            $(".content_body").css("padding","65px 0 0 0");
        }
    });
});

$("a.scroll-link").on("click", function(e) {
    e.preventDefault();
    scroll_to($(this), 0);
});

$(".to-top a").on("click", function(e) {
    e.preventDefault();
    if($(window).scrollTop() != 0) {
        $("html, body").stop().animate({scrollTop: 0}, 1000);
    }
});

function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr("href").replace("#", ".");
    var scroll_to = 0;
    if(element_class != ".top-content") {
        element_class += "-container";
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if($(window).scrollTop() != scroll_to) {
        $("html, body").stop().animate({scrollTop: scroll_to}, 1000);
    }
}