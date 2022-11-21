import "../scss/index.scss";
import "popper.js";
import "bootstrap";
import {Collapse} from "bootstrap";

$(window).on("load", function(){
    $("#cover").fadeOut(1000);
});

export function drop_func() {
    var myCollapse = document.getElementById("advancedFiltersWrap");
    new Collapse(myCollapse, {
        toggle: true
    });
}

export function active_left(id_1, id_2){
    var element1 = document.getElementById(id_1);
    var element2 = document.getElementById(id_2);
    if(element1.checked){
        element2.checked = false;
    }
    
}
export function active_right(id_1, id_2){
    var element1 = document.getElementById(id_1);
    var element2 = document.getElementById(id_2);
    if(element2.checked){
        element1.checked = false;
    }
}