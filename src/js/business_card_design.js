import "../scss/index.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import "popper.js";
import "bootstrap";
import "masonry-layout";
import Splide from "@splidejs/splide";

new Splide("#scales-slider", {
    type : "loop",
    perPage : 1,
    isNavigation : false,
    autoplay : true,
    arrows: false,
}).mount();

$(window).on("load", function(){
    $("#cover").fadeOut(1000);
});