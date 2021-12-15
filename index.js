$(document).ready(function(){
    function nextSlide(){
        $(".translate-x-full").removeClass("invisible").addClass("visible").addClass("next")
        $(".-translate-x-full").removeClass("-translate-x-full").addClass("translate-x-full");

        $(".translate-x-0").removeClass("translate-x-0").addClass("-translate-x-full");
        $(".next").removeClass("translate-x-full").removeClass("next").addClass("translate-x-0")

        $(".-translate-x-full").removeClass("visible").addClass("invisible")
        

        // $(".visible").removeClass("translate-x-full").addClass("translate-x-0");
        // $(".translate-x-full").removeClass("invisible").addClass("visible")
        // $(".invisible").removeClass("invisible").addClass("visible");
        // $(".-translate-x-full").addClass("invisible").removeClass("visible");

    };

    $("#menu-btn").click(function(){
        $("#side-nav").css("width","100%");
    });

    $(".close-side-nav").click(function(){
        // $(this).css("background","white")
        $("#side-nav").css("width","0");
    });
    $("#next").click(nextSlide);
    var timer = setInterval(function(){
        nextSlide();
    },3000);
    $(window).on("beforeunload", function() { 
        clearInterval(timer);
    })
});