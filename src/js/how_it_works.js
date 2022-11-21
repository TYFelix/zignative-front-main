import "../scss/index.scss";
import "popper.js";
import "bootstrap";

window.onscroll = function() {scroll_func();};

var header = document.getElementById("how_top_bar");
var sticky = header.offsetTop;
var isFixed = false;

function scroll_func() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    isFixed = true;
  } else {
    header.classList.remove("sticky");
    isFixed = false;
  }
}

export function scroll(id) {
  var x = document.getElementById(id).offsetTop;
  if(isFixed){
    window.scrollTo({ top: x - 83, behavior: "smooth"});
    console.log(x);  
  }
  else{
    window.scrollTo({ top: x - 190, behavior: "smooth"});
    console.log(x);
  }
}

$(window).on("load", function(){
  $("#cover").fadeOut(1000);
});

