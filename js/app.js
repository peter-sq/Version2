$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
  
});

(function () {
    "use strict";
  
    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        responsiveBaseElement: 'body',
        loop: true,
        center: true,
        margin: 15,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };
  
    (function ($) {
      carousels();
    })(jQuery);
  })();

  document.getElementById("choice4").style.display = 'none';
  document.getElementById("choice5").style.display = 'none';
  document.getElementById("choice6").style.display = 'none';

  function individual() {
  
    //Background for corporate button back to blue 
    const corporate = document.getElementById("corporate");
    corporate.style.background = "#FFFFFF";
    corporate.style.color = "#47A7FD";
    //Background for individual button back to white
    const individual = document.getElementById("individual");
    individual.style.background = "#47A7FD";
    individual.style.color = "#FFFFFF";
    
    //Change to individual prices
    document.getElementById("choice4").style.display = 'none';
    document.getElementById("choice5").style.display = 'none';
    document.getElementById("choice6").style.display = 'none';
    
    document.getElementById("choice1").style.display = 'block';
    document.getElementById("choice2").style.display = 'block';
    document.getElementById("choice3").style.display = 'block';
   
  }
  
  function corporate() {
    
    //Background for corporate button back to blue
    const indiv = document.getElementById("individual");
    indiv.style.background = "#FFFFFF"
    indiv.style.color = "#47A7FD"
    //Background for individual button back to pink
    const corp = document.getElementById("corporate");
    corp.style.background = "#47A7FD";
    corp.style.color = "#FFFFFF";
     
    //Change to individual prices
    document.getElementById("choice1").style.display = 'none';
    document.getElementById("choice2").style.display = 'none';
    document.getElementById("choice3").style.display = 'none';

    document.getElementById("choice4").style.display = 'block';
    document.getElementById("choice5").style.display = 'block';
    document.getElementById("choice6").style.display = 'block';
  
  }

  $(".question-wrapper").click( function () {
    var container = $(this).parents(".accordion");
    var answer = container.find(".answer-wrapper");
    var trigger = container.find(".material-icons.drop");
    var state = container.find(".question-wrapper");
    
    answer.animate({height: "toggle"}, 100);
    
    if (trigger.hasClass("icon-expend")) {
      trigger.removeClass("icon-expend");
      // state.removeClass("active");
    }
    else {
      trigger.addClass("icon-expend");
      // state.addClass("active");
    }
    
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    }
    else {
      container.addClass("expanded");
    }
  });
  
  
  

