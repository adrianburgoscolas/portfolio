$(document).ready(function(){

    let slide = true;
    let timer;

    function nextSlide(){
        if(slide){
            $(".translate-x-full").removeClass("invisible").addClass("visible").addClass("next");
            $(".-translate-x-full").removeClass("-translate-x-full").addClass("translate-x-full");
            $(".translate-x-0").removeClass("translate-x-0").addClass("-translate-x-full");
            $(".next").removeClass("translate-x-full").removeClass("next").addClass("translate-x-0");
            $(".-translate-x-full").removeClass("visible").addClass("invisible");
            timer = setTimeout(function(){slide = true},1600);
        }
    };
    
    function prevSlide(){
        if(slide){
            $(".translate-x-full").addClass("invisible").removeClass("next");
            $(".-translate-x-full").removeClass("invisible").addClass("visible").addClass("next")
            $(".translate-x-full").removeClass("translate-x-full").addClass("-translate-x-full");
            $(".translate-x-0").removeClass("translate-x-0").addClass("translate-x-full");
            $(".next").removeClass("-translate-x-full").removeClass("next").addClass("translate-x-0");
            $(".translate-x-full").removeClass("visible").addClass("invisible");
            timer = setTimeout(function(){slide = true},1400);
        }
    };

    $("#menu-btn").click(function(){
        $("#side-nav").css("width","100%");
    });

    $(".close-side-nav").click(function(){
        $("#side-nav").css("width","0");
    });
    $(".no-slide").hover(
    function(){
        clearInterval(interval);
    },function(){
        interval = setInterval(function(){
            nextSlide();
            slide = false;
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
    var interval = setInterval(function(){
        nextSlide();
        slide = false;
    },3000);
    $(window).on("beforeunload", function() { 
        clearInterval(interval);
        clearTimeout(timer);
    })
    let dropdownMenu = false;
    function dropdown(menu){
        menu?$("#dropdown-menu").css({"opacity":"1","visibility":"visible"}):$("#dropdown-menu").css({"opacity":"0","visibility":"hidden"});
        menu?$("#dropdown-arrow").addClass("rotate-180"):$("#dropdown-arrow").removeClass("rotate-180")
    }
    $("li.project-dropdown").click(function(){
        dropdownMenu=!dropdownMenu;
        
        dropdown(dropdownMenu);

    });
    $(".close-dropdown").click(function(){
        dropdownMenu=false;
        
        dropdown(dropdownMenu);
    });
});