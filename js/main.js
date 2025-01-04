(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  
  // Team carousel
  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 50,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonial carousel

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: true,
    dots: true,
    loop: true,
    margin: 0,
    nav: true,
    navText: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Fact Counter

  $(document).ready(function () {
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "easeInQuad",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });
  $(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });
  

  $(document).ready(function () {
    $('.navbar-toggler').click(function () {
        // Toggle the 'collapsed' class on the button
        $(this).toggleClass('collapsed');

        // Toggle the 'aria-expanded' attribute
        var expanded = $(this).attr('aria-expanded') === 'true' || false;
        $(this).attr('aria-expanded', !expanded);

        // Toggle the icon classes
        if ($(this).hasClass('collapsed')) {
            $(this).find('.navbar-toggler-icon').removeClass('navbar-toggler-icon').addClass('navbar-close-icon');
        } else {
            $(this).find('.navbar-close-icon').removeClass('navbar-close-icon').addClass('navbar-toggler-icon');
        }
    });
});

})(jQuery);


// Js for Mobile View
const event = new MouseEvent('mouseover', {
  bubbles: true,
  cancelable: true,
  view: window
});
function checkScreenSize() {
  const element = document.querySelectorAll('.project-item'); // Replace with your element selector
  if (window.innerWidth < 764) {
    element.forEach(ele => {
      // ele.classList.add('project-item:hover'); // Replace with the class you want to add
      ele.dispatchEvent(event);
    });
      
  } else {
    element.forEach(ele => {
      ele.classList.remove('project-item:hover'); // Replace with the class you want to add
    });
  }
}


window.addEventListener('resize', checkScreenSize);

$(document).ready(()=>{
  checkScreenSize();
})