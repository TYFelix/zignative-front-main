import "../scss/index.scss";
import "popper.js";
import "bootstrap";

export function drop_func() {
    var x = document.getElementById("dropdownMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(window).on("load", function(){
    $("#cover").fadeOut(1000);
});