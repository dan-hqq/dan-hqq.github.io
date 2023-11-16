$(document).ready(function(){
    let pad = $("nav").innerHeight();
    $("#home").css("padding-top", pad);
    $("#about").css("padding-top", pad);
    $("#project").css("padding-top", pad);
    $("#contact").css("padding-top", pad);
    $(window).scroll(function(){
        let height = $("#home").height();
        let scrollTop = $(window).scrollTop();
        if(scrollTop > height){
            $("nav").addClass("nav-transparent");
        }
        else{
            $("nav").removeClass("nav-transparent");
        }
    });
});