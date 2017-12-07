$( document ).ready(function() {

    //carousel bugs-fix

    var b =$("input:checked").next(".slide-container").find(".slide").height();
    $("input:checked").next(".slide-container").css({height: b});

    $("input").on('change', function() {
        var z = $(this).next('.slide-container').find(".slide").height();
        $(this).next('.slide-container').css({ height: z});

    });

    $(".nav-dot").click(function () {
        $("input").next(".slide-container").css({height: ''});
    });


    //header fixed
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 50){
            $('header').addClass('fixed');
            $(".flex-wrapper").css('border', 'none');
            $(".navbar-toggle").css("top", "15px");
        }
        else {
            $('header').removeClass('fixed');
            $(".flex-wrapper").css('border-bottom', '1px solid rgba(255, 255, 255, 0.15)');
            $(".navbar-toggle").css("top", "25px");
        }
    });
});

