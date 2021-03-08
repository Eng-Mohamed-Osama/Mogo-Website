$(document).ready(function(){
 
  // Nav Bar Background Color
  
  var addClassOnScroll = function () {
  
    $('section').each(function (index, elem) {
  
        var offsetTop = $(elem).offset().top;
  
        var outerHeight = $(this).outerHeight(true);
  
  
        if(  $(window).scrollTop() > (offsetTop-200) &&  $(window).scrollTop() < ( offsetTop + outerHeight)) {
  
            var elemId = $(elem).data('title')
  
            $("nav ul li.active").removeClass('active');
  
            $(`nav ul li.${elemId}`).addClass('active');
  
        }
    });
  };
  
  var switchNavbarBgOnscroll = function () {
  
      if ( $(window).scrollTop() > 0) {
      
        $(".navbar").addClass("scrolling , shadow-lg");
  
        $(".navbar").removeClass("bg");
  
      } else {
  
        $(".navbar").removeClass("scrolling , shadow-lg");
  
        $(".navbar").addClass("bg");
  
      }
    }
  
    // showing the scroll to top button
  
    var toggleScrollToTopButton = function () {
  
      if ( $(window).scrollTop() > 1000) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        } 
    }
  
  
  $(window).on('scroll', function() {
    addClassOnScroll();
    toggleScrollToTopButton();
    switchNavbarBgOnscroll();
  
     
      
  });
  
  
  
  
  
  // *************Scroll to Top Functions ************** //
  
    // ScrollTop Button
  
    $('.scrolltop').on('click', function() {
  
      $('.navbar-nav li').removeClass('active');
      
      $("html,body").animate({
  
        scrollTop: 0
  
      }, 1500);
  
    });
  
  
  
   
  
  
  
    // Logo Scroll To the Top Function
  
    $(".navbar-brand").on("click", function() {
  
      $('.navbar-nav li').removeClass('active');
      
      $("html,body").animate({
  
      scrollTop: 0
  
      }, 1200);
  
    });
  
  
  
  $('header li').on('click', function() {
  
    
    $(this).children('span').addClass('header__active').parent().siblings().children('span').removeClass('header__active')
  
  
  });
  
    
    
  
  
  // Nav Bar Active Links
  
  $('.navbar-nav li').on('click', function() {
  
    $(this).addClass('active').siblings().removeClass('active');
  
  });
  
  
  
  
  
  
  
  
  
  // Logo Scroll To the Top Function
  
    $('.card-wrapper').on("mouseenter", function() {
      $(this).children(".hover-layer").removeClass('d-none').addClass('d-flex')
    }).on("mouseleave", function() {
      $(this).children(".hover-layer").addClass('d-none').removeClass('d-flex');
    });
  
  
  
  
  // *************Carousels Settings************** //
  
  
  // owl Settings//
  
  
    $('.owl-carousel').owlCarousel({
      loop:true,
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
    
  
  // slick Settings//
  
  
    $('.autoplay').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplaySpeed: 3000,
    });
  
    $(".nice-wrapper").niceScroll({
  
      cursorcolor:"#95e1d3",
      
    });
  });
  