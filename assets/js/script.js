(function ($) {
  'use strict';

  // global variables

  var win = $(window);

  // navigation fixed top
  win.on('scroll', function () {
    if ($(window).scrollTop() > 70) {
      $('.main-nav').addClass('nav-top');
    } else {
      $('.main-nav').removeClass('nav-top');
    }
  });


  $(".toggler").click(function () {
    $(".full-nav").toggleClass("show");
  });


  // clients slider
  $('.clients-wrap').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    dots: false,
    arrows: false,
    center: true,
    autoplay: true,
    padding: 20,
    autoplaySpeed: 6000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  });


  // testimonial slider
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
  });


  // testimonial slider 2
  $('.testimonial-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    nextArrow: '<button class="slide-arrow prev-arrow"><i class="ti-arrow-right"></i></button>',
    prevArrow: '<button class="slide-arrow next-arrow"><i class="ti-arrow-left"></i></button>',
    autoplay: true,
    autoplaySpeed: 6000
  });


  // magnific popup
  $('.portfolio-gallery').each(function () {
    $(this).find('.popup-gallery').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });

  $(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });

    // Hero rotator
    $('.hero-rotator').each(function () {
      var $rotator = $(this);
      var slides = [];
      var itemsRaw = $rotator.attr('data-rotator-items');
      if (itemsRaw) {
        try {
          var parsed = JSON.parse(itemsRaw);
          if (Array.isArray(parsed)) {
            slides = parsed.map(function (item) {
              return {
                image: item && item.image ? String(item.image).trim() : '',
                link: item && item.link ? String(item.link).trim() : ''
              };
            }).filter(function (item) {
              return !!item.image;
            });
          }
        } catch (err) {
          console.warn('Invalid data-rotator-items JSON', err);
        }
      }

      if (slides.length === 0) {
        return;
      }

      var index = 0;
      var intervalId = null;
      var $overlayLink = $rotator.find('a[aria-label="Open featured page"]').first();
      var $rotatorImage = $rotator.find('.hero-rotator-image').first();

      var applySlide = function () {
        var slide = slides[index];
        if ($rotatorImage.length) {
          $rotatorImage.attr('src', slide.image);
        }
        if ($overlayLink.length) {
          $overlayLink.attr('href', slide.link || '#');
        }
      };

      var advance = function (dir) {
        var delta = dir === 'prev' ? -1 : 1;
        index = (index + delta + slides.length) % slides.length;
        applySlide();
      };

      var start = function () {
        intervalId = setInterval(function () {
          advance('next');
        }, 4000);
      };

      applySlide();
      start();

      $rotator.on('click', '.hero-rotator-prev', function (e) {
        e.stopPropagation();
        advance('prev');
        if (intervalId) {
          clearInterval(intervalId);
          start();
        }
      });

      $rotator.on('click', '.hero-rotator-next', function (e) {
        e.stopPropagation();
        advance('next');
        if (intervalId) {
          clearInterval(intervalId);
          start();
        }
      });

      $rotator.on('click', function () {
        var slide = slides[index];
        if (slide.link) {
          window.location.href = slide.link;
        }
      });
    });
  });



  win.on('load', function () { // makes sure the whole site is loaded

    // ----------------------- 
    // Progress Bar--------------------
    // 
    $('.progress-bar').each(function () {
      var width = $(this).data('percent');
      $(this).css({
        'transition': 'width 3s'
      });
      $(this).appear(function () {
        $(this).css('width', width + '%');
        $(this).find('.skill-number').countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50
        });
      });
    });
  }); //End On Load Function



  // search box
  $('#searchOpen').on('click', function () {
    $('.search-wrapper').addClass('open');
  });
  $('#searchClose').on('click', function () {
    $('.search-wrapper').removeClass('open');
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    $('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }



  // meta social link

  $('.share-btn').on('click', function (e) {
    e.preventDefault();
    $('.meta-share .social-links').toggleClass('open');

  });

  $('div').slice(0, 6).show(); // select the first ten
  $('#load').click(function (e) { // click event for load more
    e.preventDefault();
    $('div:hidden').slice(0, 3).show(); // select next 10 hidden divs and show them
    if ($('div:hidden').length === 0) { // check if any hidden divs still exist
      alert('No more divs'); // alert if there are none left
    }
  });

  if ($("#search-input").length > 0) {
    var sjs = SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json'
    });
  }


})(jQuery);
