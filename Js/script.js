$(document).ready(function(){

    $(".nice-wrapper").niceScroll({
      cursorcolor:"#95e1d3",
    });
// Nav Bar Background Color
var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();
  $('section').each(function (index, elem) {
      var offsetTop = $(elem).offset().top;
      var outerHeight = $(this).outerHeight(true);

      if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
          var elemId = $(elem).data('title')
          $("nav ul li.active").removeClass('active');
          $(`nav ul li.${elemId}`).addClass('active');
      }
  });
};

$(window).on('scroll', function() {
  addClassOnScroll();
  if ($(window).scrollTop() >= $('.navbar').height()) {
    $('.navbar').addClass('dark-bg').removeClass('none-scrolling');
  } else {
    $('.navbar').removeClass('dark-bg').addClass('none-scrolling');
  }
 
  
    if ($(this).scrollTop() > 1000) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
    

      if ($(window).scrollTop() > $(".navbar").height()) {
  
        $(".navbar").addClass("scrolling , shadow-lg");
  
        $(".navbar").removeClass("bg");
  
      } else {
  
        $(".navbar").removeClass("scrolling , shadow-lg");
  
        $(".navbar").addClass("bg");
  
      }
  
   
});

// Nav Bar Mobile Menu





// ScrollTop Button

$('.scrolltop').on('click', function() {
  $('.navbar-nav li').removeClass('active');
  
  $("html,body").animate({
    scrollTop: 0
  }, 1500);
});

$('header li').on('click', function() {

  
  $(this).children('span').addClass('header__active').parent().siblings().children('span').removeClass('header__active')


});

  
  


// Nav Bar Active Links

$('.navbar-nav li').on('click', function() {

  $(this).addClass('active').siblings().removeClass('active');

});



// Nav Bar Scroll To sections Function

$(".navbar-nav li ").on("click", function(e) {
  
  e.preventDefault();
  
  $("html, body").animate({
    
    scrollTop: $('.' + $(this).data('scroll')).offset().top - 300
    
  }, 700);
  
});
// const sectionSelection =document.querySelectorAll('section');
    
//     sectionSelection.forEach(sec => {
        
//         //assign the active class according to the current section in the view
        
//         if(window.pageYOffset >= sec.offsetTop - 200){
//             document.querySelectorAll('nav li').forEach(li =>{
//                 allNavLink= Array.from(li.parentNode.children);
//                 if(li.textContent === sec.dataset.set){
//                     allNavLink.forEach(el => el.classList.remove('active'));
//                     li.classList.add('active');
//                 }
//             })
//         }
//     })

// Logo Scroll To the Top Function

$(".navbar-brand").on("click", function() {
  $('.navbar-nav li').removeClass('active');
  
  $("html,body").animate({

  scrollTop: 0

  }, 1200);

 

});
// $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   focusOnSelect: true
// });

// $('a[data-slide]').click(function(e) {
//   e.preventDefault();
//   var slideno = $(this).data('slide');
//   $('.slider-nav').slick('slickGoTo', slideno - 1);
// });
// (function($) {
//   $(document).ready(function() {
//       $('.slider-hero').slick({
//           dots: true,
//           infinite: true,
//           cssEase: 'linear',
//           swipe: false,
//       });
//   });


// })( jQuery );
// $('.quotes').slick({
//   dots: true,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 6000,
//   speed: 800,
//   slidesToShow: 1,
//   adaptiveHeight: true
// });
// $('.quotes').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav',
//   autoplaySpeed: 500,
//   speed: 800,
// });
// function owl() {
//   var owl = $('.owl-carousel');
//   if ($(window).width() < 700) {
//     owl.owlCarousel({
//       items: 2,
//       loop: true,
//       margin: 0,
//       autoplay: true,
//       autoplayTimeout: 4000,
//       autoplayHoverPause: false
//     });
//   } else {
//     owl.owlCarousel({
//       items: 4,
//       loop: true,
//       margin: 0,
//       autoplay: true,
//       autoplayTimeout: 4000,
//       autoplayHoverPause: false
//     });
//   }
// }
$('.owl-carousel').owlCarousel({
  loop:true,
  // margin:10,
  autoplay: true,
  autoplayTimeout: 3000,
  responsiveClass:true,
  dots:false,
  nav:false,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  }
})
$('.card-wrapper').on("mouseenter", function() {
  $(this).children(".hover-layer").removeClass('d-none').addClass('d-flex')
}).on("mouseleave", function() {
  $(this).children(".hover-layer").addClass('d-none').removeClass('d-flex');
});

// function owl2() {
//   var owl2 = $('.owl-carousel2');
//   if ($(window).width() < 700) {
//     owl2.owlCarousel({
//       items: 2,
//       loop: true,
//       margin: 0,
//       autoplay: true,
//       autoplayTimeout: 4000,
//       autoplayHoverPause: false
//     });
//   } else {
//     owl2.owlCarousel({
//       items: 4,
//       loop: true,
//       margin: 0,
//       autoplay: true,
//       autoplayTimeout: 4000,
//       autoplayHoverPause: false
//     });
//   }
// }


// owl2();

// $('.autoplay').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
// });

$('.autoplay').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplaySpeed: 3000,
});
// $("#owl-demo").owlCarousel({
 
//   autoPlay: 3000, //Set AutoPlay to 3 seconds

//   items : 4,
//   itemsDesktop : [1199,3],
//   itemsDesktopSmall : [979,3]

// });
// $('.slider-for2').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   focusOnSelect: true
// });

// $('a[data-slide]').click(function(e) {
//   e.preventDefault();
//   var slideno = $(this).data('slide');
//   $('.slider-nav').slick('slickGoTo', slideno - 1);
// });
/*
To prevent the flashing of unstyled content (FOUC) I created a class ".no-fouc"
which hides the slider.  When everything is ready to roll, I simply remove the
.no-fouc class from the slider section using the script below.  I placed the CSS snippet in the head of the HTML
page so that it's loaded before other things for obvious reasons.  What about folks with JS turned off?  
Well, I don't worry about them too much anymore.  Oh my.  I feel the heat from the flames already.  :) 
*/

// $('.single-item').slick();

  });
    

          