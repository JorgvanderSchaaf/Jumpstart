$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var x = 0;
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    if (y - x > 50){
      var z = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + z}, 150);
    })
});

});
