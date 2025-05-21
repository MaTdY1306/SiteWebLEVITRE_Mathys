$(document).ready(function() {
    $(".btnDarkSide").click(function() {
        if(!($("body").hasClass("darkSide"))) {
            $("body").addClass("darkSide");
            $(".btnDarkSide").html("<img src='./assets/img/mobile-apps-website-screen-brightness-260nw-2283103921.png' alt='Dark mode toggle'>")
        } else {
            $("body").removeClass("darkSide");
            $(".btnDarkSide").html("<img src='./assets/img/mobile-apps-website-screen-brightness-260nw-2283103921(1).png' alt='Dark mode toggle'>")
        }
    })

     $(".hamburger").click(function() {
        $(".nav_bar1, .nav_bar2").toggleClass("active");
    });

    $(".myImage").click(function() {
        $(".voile").fadeIn();
        $(".lightbox").fadeIn();
    })

    $(".voile").click(function() {
        $(".voile").fadeOut();
        $(".lightbox").fadeOut();
    })

})