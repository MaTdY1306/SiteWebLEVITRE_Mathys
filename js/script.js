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
})