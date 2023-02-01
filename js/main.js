jQuery(document).ready(function ($) {
  "use strict";
  /* ..............................................
            Init Animate
  ................................................. */
  AOS.init();

  /* ..............................................
             Go-To-Top
  ................................................. */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#go-to-top").fadeIn();
    } else {
      $("#go-to-top").fadeOut();
    }
  });
  $("#go-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  /* ..............................................
             Page loading animation
  ................................................. */

  $("#preloader").animate(
    {
      opacity: "0",
    },
    600,
    function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    }
  );

  /* ..............................................
         Header when scroll
    ................................................. */

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".header-text").height();
    var header = $(".header").height();

    if (scroll >= box - header) {
      $(".header").addClass("background-header");
    } else {
      $(".header").removeClass("background-header");
    }
  });

  /* ..............................................
         Slick Banner
    ................................................. */
  if ($(".owl-banner").length) {
    $(".owl-banner").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 0,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 1,
          margin: 20,
        },
        992: {
          items: 1,
          margin: 30,
        },
      },
    });
  }

  /* ..............................................
         Slick Clients
    ................................................. */

  if ($(".owl-clients").length) {
    $(".owl-clients").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 30,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 1,
          margin: 0,
        },
        576: {
          items: 3,
          margin: 20,
        },
        992: {
          items: 5,
          margin: 30,
        },
      },
    });
  }

  /* ..............................................
              Filter Product
  ................................................. */

  var Container = $(".container");
  Container.imagesLoaded(function () {
    var portfolio = $(".filters");
    portfolio.on("click", "li", function () {
      $(this).addClass("active").siblings().removeClass("active");
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    var $grid = $(".product-list").isotope({
      itemSelector: ".product-grid",
    });
  });

  /* ..............................................
             SlideDown Accordion
  ................................................. */

  $(".accordion > li:eq(0) a").addClass("active").next().slideDown();

  $(".accordion a").click(function (e) {
    var dropDown = $(this).closest("li").find(".content");

    $(this).closest(".accordion").find(".content").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".accordion").find("a.active").removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    e.preventDefault();
  });
});
