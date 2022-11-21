import "../scss/index.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import "popper.js";
import "bootstrap";
import "masonry-layout";
import Splide from "@splidejs/splide";

new Splide("#image-slider", {
    type : "loop",
    perPage : 6,
    isNavigation : true,
    autoplay : true,
    breakpoints: {
        1000:{
            perPage: 4,
            arrows:false,
        },
        800:{
            perPage: 3,
            arrows:false,
        },
		640: {
			perPage: 2,
            arrows:false,
		},
    }
}).mount();

new Splide("#scales-slider", {
    type : "loop",
    perPage : 1,
    isNavigation : false,
    autoplay : true,
    arrows: false,
}).mount();

new Splide("#preferred-slider", {
    type : "loop",
    perPage : 1,
    isNavigation : false,
    // autoplay : true,
    arrows: true,
}).mount();

new Splide("#trusted-slider", {
    type : "loop",
    perPage : 7,
    isNavigation : false,
    autoplay : false,
    arrows: false,
    pagination:false,
    breakpoints: {
        1024:{
            perPage: 4,
        },
        768:{
            perPage: 2,
        }
    }
}).mount();

$(window).on("load", function(){
    $("#cover").fadeOut(1000);
});