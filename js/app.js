//navbar
function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');        
}	
//navbar pegajosa
window.onscroll = function() {myFunction()};
var navbar1 = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar1.classList.add("sticky");
  }
}
//Cine 4D
$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
    //start youtube video
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
    //hide overlayed html5 video
    $("#video_overlayed").css({"display": "none", "opacity": "0"});
    //hide svg play button while playing video
    $("#play-video").css({"display": "none", "opacity": "0"});
  });
}); 