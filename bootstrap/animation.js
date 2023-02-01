$(document).ready(function () {
    // hiding the elements that will be affected by animation
    $("#head").hide();
    $("img").hide();
    // providing animation 
    $("#head")
    .fadeIn( function () {
            $("#image")
            .animate({width:"8rem",height:"60px"},800, "linear");
            $("img").fadeIn(2000);});
            $("#page_name")
            .animate({fontSize:"1.8em"},800, "linear");

    

})