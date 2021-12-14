$(document).ready(function(){
    

    $("#menu-btn").click(function(){
        $("#side-nav").css("width","100%");
    });

    $(".close-side-nav").click(function(){
        // $(this).css("background","white")
        $("#side-nav").css("width","0");
    });
});