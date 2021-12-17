$(document).ready(function(){

    let slide = true;

    function nextSlide(){
        if(slide){
            $(".translate-x-full").removeClass("invisible").addClass("visible").addClass("next")
            $(".-translate-x-full").removeClass("-translate-x-full").addClass("translate-x-full");
            $(".translate-x-0").removeClass("translate-x-0").addClass("-translate-x-full");
            $(".next").removeClass("translate-x-full").removeClass("next").addClass("translate-x-0")
            $(".-translate-x-full").removeClass("visible").addClass("invisible")
            setTimeout(function(){slide = true},1600)
        }
    };
    
    function prevSlide(){
        if(slide){
            $(".translate-x-full").addClass("invisible").removeClass("next")
            $(".-translate-x-full").removeClass("invisible").addClass("visible").addClass("next")
            $(".translate-x-full").removeClass("translate-x-full").addClass("-translate-x-full");
            $(".translate-x-0").removeClass("translate-x-0").addClass("translate-x-full");
            $(".next").removeClass("-translate-x-full").removeClass("next").addClass("translate-x-0")
            $(".translate-x-full").removeClass("visible").addClass("invisible")
            setTimeout(function(){slide = true},1400)
        }
    };

    $("#menu-btn").click(function(){
        $("#side-nav").css("width","100%");
    });

    $(".close-side-nav").click(function(){
        // $(this).css("background","white")
        $("#side-nav").css("width","0");
    });
    $(".no-slide").hover(
    function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            nextSlide();
            slide = false
        },3000);
    });
    $("#next").click(function(){
        nextSlide();
       slide = false;
    });
    $("#previous").click(function(){
        prevSlide();
       slide = false;
    });
    var timer = setInterval(function(){
        nextSlide();
        slide = false
    },3000);
    $(window).on("beforeunload", function() { 
        clearInterval(timer);
    })
});