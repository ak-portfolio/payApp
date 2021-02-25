$(function() {
  $('.slick').slick({
        arrows: false,
        accessibility: true,
        autoplay: false,
        dots: true,
        centerMode: true,
        centerPadding: '0%',
        slideToShow: 1,
        focusOnSelect: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false
                }
            }
        ]
    });
    
  $('.scroll_box').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.killer_Features').offset().top) {
            $('.scroll_box').fadeIn();
        } else {
            $('.scroll_box').fadeOut();
        }
    });
    
  $('.scroll').click(function(){
    $('body, html').animate({ scrollTop: 0 }, 1200, 'swing');
    return false;
  });
});