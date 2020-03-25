console.log("read");
function move_man() {
    man_comin();
    setTimeout(move_ele_and_man, 3000);
    setTimeout(man_out_and_go, 5000);
    
}

function move_ele_and_man() {
    $('.ele').animate({bottom: "502px"}, 2000)
    $('.man').animate({bottom: "502px"}, 2000)
}

function man_out_and_go() {
    $('.man').animate({left: "0px"}, 2000)
    man_fadeOut();
}

function man_fadeOut() {
    $('.man').fadeOut();
}
function man_fadeIn() {
    $('.man').fadeIn();
}

function man_comin() {
    man_fadeIn();
    $('.man').animate({left: "380px"}, 2000);
}