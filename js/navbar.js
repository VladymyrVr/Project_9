$(function(){
    $('.navbar-toggle, nav').click(function(){
        $('.navbar-toggle').toggleClass('navbar-on');
        $('.main-nav').fadeToggle();
        $('.main-nav').removeClass('nav-hide');
    });



});