$(document).ready(function() {

    $(window).scroll(function() {
      if($(this).scrollTop() > 550) { 
          $('.navbar').addClass('solid');
          $('.back-to-top').addClass('visible'); 
      } else {
          $('.navbar').removeClass('solid');
          $('.back-to-top').removeClass('visible');  
      }
    });

    $("#scrollIcon").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });

    $("#nav-about").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#about"), 1000);
    });

    $("#nav-portfolio").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#portfolio"), 1000);
    });

    $("#nav-contact").click(function(e) {
        e.preventDefault();
        $.scrollTo($("#contact"), 1000);
    });

    $(".navbar-brand").click(function(e) {
        e.preventDefault();
        $.scrollTo(0, 1000);
    });
          
  });