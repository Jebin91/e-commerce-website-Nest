$(function () {
   'use strict';

   /* Top Header New Slider Js Start */
   $('.top_header_news').slick({
      arrows: false,
      vertical: true,
      verticalSwiping:true,
      autoplay:true,
      slidesToShow:1,
      slidesToScroll:1,
   });
   /* Top Header New Slider Js End */
   //navbar animation js start
   $(window).on("scroll",function(){
      var scrollPosition = $(window).scrollTop();
      var stickyclass = $(window).scrollTop();
      if(stickyclass > 180){
          $(".navbar_menu").addClass("stickynav")
      }else{
          $(".navbar_menu").removeClass("stickynav")
      }

      //backtotop button
      if(scrollPosition>500){
         $('#backToTop').fadeIn(10000);
     }else{
         $('#backToTop').fadeOut(1000);
     }
  })
  $('#backToTop').on('click', function(){
   $('html,body').animate({
       scrollTop:0
   },1000)
})

   /*banner section slider start*/
   $('.banner_section').slick({
      autoplay:true,
      nextArrow:'<i class="fas fa-chevron-right arrow_right"></i>',
      prevArrow:'<i class="fas fa-chevron-left arrow_left"></i>,'
  })
  /*banner section slider end*/

   /* Featured Category Slider Section Js Start */
   $('.featured_category_slider').slick({
      slidesToShow: 10,
      slidesToScroll: 3,
      prevArrow: '<i class="fas fa-long-arrow-alt-left featured_slide_icon slider_icon slider-left"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-right featured_slide_icon slider_icon slider-right"></i>',
   })

   /*Featured Category Slider Section Js End */

   //best sell slider start

   $('.sell-slide').slick({

    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    prevArrow: '<i class="fas fa-long-arrow-alt-left sell_slide_left slider_icon slider-left"></i>',
      nextArrow: '<i class="fas fa-long-arrow-alt-right sell_slide_right slider_icon slider-right"></i>',
   })

   //countdown js start
   $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<ul class="d-flex"><li class="w-25"><span>%D</span><span class="deals-label">Days</span></li><li class="w-25"><span>%H</span><span class="deals-label">Hours</span></li><li class="w-25"><span>%M</span><span class="deals-label">Mins</span></li><li class="w-25"><span>%S</span><span class="deals-label">Sec</span></li></ul>'));
      });
   });
})