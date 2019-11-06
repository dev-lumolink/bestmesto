//закрывать всплывашки при клике на экране
$(window).on('click', function(e) {

  //заказать звонок
  if ( $('.banners__popup').css('display') == 'block' ) {
    var banner = $('.banners__popup');

    if ( !banner.is(e.target) && banner.has(e.target).length === 0 && !$('.header__phone').is(e.target) )
    {
      banner.slideToggle();
      showRecallTab();
    }
  }

  //поиск
  if ( $('.search__popup').css('display') == 'block' ) {
    var popup = $('.search__popup');

    if ( !popup.is(e.target) && popup.has(e.target).length === 0 && !$('.header__search').is(e.target) )
    {
      popup.slideToggle();
    }
  }

  //мобильное меню
  if ( $('.header__list-mobil').css('display') == 'block' ) {
    var popup = $('.header__list-mobil');

    if ( !popup.is(e.target) && popup.has(e.target).length === 0 && !$('.header__menu-mobil').is(e.target) && $('.header__menu-mobil').has(e.target).length === 0 )
    {
      popup.slideToggle();
    }
  }

  //фильтры
  if ( $('.filters__item--active') ) {
    
    var popup = $('.filters__item--active .filters__outer');

    if ( !$('.filters__item--active').is(e.target) && $('.filters__item--active').has(e.target).length === 0 ) {
        $('.filters__item--active').removeClass('filters__item--active');
        popup.slideToggle();
      }
    } 
})

//переключение checkbox у формы заявки
$('#personal-order > span').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("form__checkmark-checked")) {
    $(this).removeClass("form__checkmark-checked");
    $('#personal-checked').prop('checked', false);
  } else {
    $(this).addClass("form__checkmark-checked");
    $('#personal-checked').prop('checked', true);
  }
})

//переключение checkbox у всплывашки
$('#personal-banner > span').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("form__checkmark-checked")) {
    $(this).removeClass("form__checkmark-checked");
    $('#banner-checked').prop('checked', false);
  } else {
    $(this).addClass("form__checkmark-checked");
    $('#banner-checked').prop('checked', true);
  }
})

//переключение checkbox у заказа во всплывашке
$('#personal-request > span').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("form__checkmark-checked")) {
    $(this).removeClass("form__checkmark-checked");
    $('#request-checked').prop('checked', false);
  } else {
    $(this).addClass("form__checkmark-checked");
    $('#request-checked').prop('checked', true);
  }
})

function showMessageTab () {
  $('.banners__message').removeClass('banners__tag-blue');
  $('.banners__recall').addClass('banners__tag-blue');
  $('#popup__call').css('display', 'none');
  $('#popup__request').css('display', 'block');
}

//переключение табов во всплывашке
$('.banners__message').on('click', function(e) {
  e.preventDefault();
  showMessageTab();
})

function showRecallTab () {
  $('.banners__recall').removeClass('banners__tag-blue');
  $('.banners__message').addClass('banners__tag-blue');
  $('#popup__request').css('display', 'none');
  $('#popup__call').css('display', 'block');
}

$('.banners__recall').on('click', function(e) {
  e.preventDefault();
  showRecallTab();
})

//phonemask
$(function() {
  $('.phone-field').mask("+7 (999) 999 99 99");
});

// //левый баннер
// $(function() {
//   var display = $('.banners__slider'),
//       sliders = $('.banners__slider').find('.banners__inner');

//       var scrollToSlider = function(slideNum) {
//         var position = 0;

//         position = (sliders.eq(slideNum).index() * -101) + '%';

//         sliders.eq(slideNum).addClass('active')
//           .siblings().removeClass('active');

//         display.css({
//           'left' : position
//         });
//       };

//       $('.banners__special .banners__manage').on('click', function(e) {
//         e.preventDefault();
//         var activeSlide = sliders.filter('.active'),
//             nextSlide = activeSlide.next(),
//             prevSlide = activeSlide.prev();


//         if ($(this).hasClass('banners__manage-right')) {
//           if(nextSlide.length) {
//             scrollToSlider(nextSlide.index());
//           } else {
//             scrollToSlider(0);
//           }
//         } else {
//           scrollToSlider(prevSlide.index());
//         }
//       });

// });

// //правый баннер
// $(function() {
//   var display = $('.survey__slider'),
//       sliders = $('.survey__slider').find('.banners__question');

//       var scrollToSlider = function(slideNum) {
//         var position = 0;

//         position = (sliders.eq(slideNum).index() * -101) + '%';

//         sliders.eq(slideNum).addClass('active')
//           .siblings().removeClass('active');

//         display.css({
//           'left' : position
//         });
//       };

//       $('.banners__survey .banners__manage').on('click', function(e) {
//         e.preventDefault();
//         var activeSlide = sliders.filter('.active'),
//             nextSlide = activeSlide.next(),
//             prevSlide = activeSlide.prev();


//         if ($(this).hasClass('banners__manage-right')) {
//           if(nextSlide.length) {
//             scrollToSlider(nextSlide.index());
//           } else {
//             scrollToSlider(0);
//           }
//         } else {
//           scrollToSlider(prevSlide.index());
//         }
//       });

// });

//слайдеры
$(document).ready(function() {
  $(".banners__slider").owlCarousel({
 
    //autoPlay: 8000, //Set AutoPlay to 8 seconds

    items : 1,
    loop:true,
    nav: true,
    //nav:true,
    //itemsDesktop : [1199,3],
    //itemsDesktopSmall : [979,3]

    responsiveClass: false,

    // responsive: {
    //   0: {
    //     nav: false,
    //   },

    //   950: {
    //     nav: true,
    //   }
    // }    
});

$(".survey__slider").owlCarousel({
 
  //autoPlay: 8000, //Set AutoPlay to 8 seconds

  items : 1,
  loop:true,
  nav: true,
  //nav:true,
  //itemsDesktop : [1199,3],
  //itemsDesktopSmall : [979,3]

  responsiveClass: false,

  // responsive: {
  //   0: {
  //     nav: false,
  //   },

  //   950: {
  //     nav: true,
  //   }
  // }    
});
})

//ползунок у выбора площади

$( function() {
    $( "#slider-range-square" ).slider({
      range: true,
      min: 10,
      max: 1000,
      step: 5,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $(".filters__outer-square .range__value-left").children().first().text(ui.values[0]);
        $(".filters__outer-square .range__value-right").children().first().text(ui.values[1]);

        $(".filters__outer-square .range__value-left").css('left', Math.round(ui.values[0]/10) - 10 +'%');
        $(".filters__outer-square .range__value-right").css('left', Math.round(ui.values[1]/10) -10 +'%');
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );




//ползунок у выбора цены
$(function () {

  $("#price-for").change(function(e) {
    if ($("#price-for").val() == 'val1') { //фильтр по соткам
        $(".filters__outer-price .slider__range").css('display', 'none');
        $("#slider-range-price-val1").css('display','block');

    }

    else if ($("#price-for").val() == 'val2') { //фильтр по цене за все
      $(".filters__outer-price .slider__range").css('display', 'none');
      $("#slider-range-price-val2").css('display', 'block')
    }
  })
})


$( function() {   //ползунок по соткам
    $( "#slider-range-price-val1" ).slider({
      range: true,
      min: 1,
      max: 1000,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $("#slider-range-price-val1 .range__value-left").children().first().text(ui.values[0]);

        if (ui.values[ 1 ] >= '1000') {
          $("#slider-range-price-val1 .range__value-right").children().last().text(' млн. руб.');
          $("#slider-range-price-val1 .range__value-right").children().first().text(ui.values[1]/1000);
        } else {
          $("#slider-range-price-val1 .range__value-right").children().first().text(ui.values[1]);

          $("#slider-range-price-val1 .range__value-right").children().last().text(' тыс. руб.');
        }
        $("#slider-range-price-val1 .range__value-left").css('left', Math.round(ui.values[0]/10) - 10 +'%');
        $("#slider-range-price-val1 .range__value-right").css('left', Math.round(ui.values[1]/10) - 10 +'%');

      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  $( function() {   //ползунок за все
      $( "#slider-range-price-val2" ).slider({
        range: true,
        min: 100,
        max: 100000,
        step: 50,
        values: [ 200, 9000000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );

          if (ui.values[ 0 ] >= '1000') {
            $("#slider-range-price-val2 .range__value-left").children().first().text(Math.round(ui.values[0]/1000));
            $("#slider-range-price-val2 .range__value-left").children().last().text(' млн. руб.');
          } else {
            $("#slider-range-price-val2 .range__value-left").children().first().text(ui.values[0]);
            $("#slider-range-price-val2 .range__value-left").children().last().text(' тыс. руб.');
          }

          if (ui.values[ 1 ] >= '1000') {
            $("#slider-range-price-val2 .range__value-right").children().first().text(Math.round(ui.values[1]/1000));
            $("#slider-range-price-val2 .range__value-right").children().last().text(' млн. руб.');
          } else {
            $("#slider-range-price-val2 .range__value-right").children().first().text(ui.values[1]);
            $("#slider-range-price-val2 .range__value-right").children().last().text(' тыс. руб.');
          }

          $("#slider-range-price-val2 .range__value-left").css('left', Math.round(ui.values[0]/1000) - 10 +'%');
          $("#slider-range-price-val2 .range__value-right").css('left', Math.round(ui.values[1]/1000) - 10 +'%');
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );

$('.filters__item').on('click', function(e) {
  e.preventDefault();

  //if ($(this).find('.filters__outer').css('display') == 'block' && !$('.filters__popup').is(e.target) && $('.filters__popup').has(e.target).length === 0) {
    //$(this).find('.filters__outer').css('display', 'none');

    if ( $('.filters__item--active') ) {
    
      var popup = $('.filters__item--active .filters__outer');
  
      if ( !$('.filters__item--active').is(e.target) && $('.filters__item--active').has(e.target).length === 0 ) {
          $('.filters__item--active').removeClass('filters__item--active');
          popup.slideToggle();
        }
      } 


    if ( !$('.filters__popup').is(e.target) && $('.filters__popup').has(e.target).length === 0 ) {
      var popup = $(this).find('.filters__outer');

      if ($(this).hasClass('filters__item--active')) {
        $(this).removeClass('filters__item--active');
      }
      else {
        $(this).addClass('filters__item--active');
      }
      popup.slideToggle();
    }    

  //} else $(this).find('.filters__outer').css('display', 'block');
})


//выпадашка с обратным звонком
$('a.header__phone').on('click', function(e) {
  e.preventDefault();
  $('.banners__popup').slideToggle();
  showRecallTab();
})

$('.cta-toggler').on('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.banners__popup').slideToggle();
  showMessageTab();
})

//для корректного отображения мобильного меню
$(window).resize(function() {
  if ($(window).width() >= 750) {
      $(".header__list-mobil").css('display', 'none');
  }
});

//выпадашка меню в адаптиве
$('.header__menu-mobil').on('click', function(e) {
  e.preventDefault();
  $('.header__list-mobil').slideToggle();
})

//Выбор опций цены
$('.filters__variants').on('click', function(e) {
  e.preventDefault();
  $('.filters__variants li').css('display', 'block');
})

//выпадашка поиска
$('.header__search').on('click', function(e) {
  // e.preventDefault();
  //if (($(".banners__popup").css('display') == 'block') && ($(".search__popup").css('display') == 'none') ){
    //$('.banners__popup').slideToggle();
    // setTimeout(function() {
       $('.search__popup').slideToggle();
    // }, 500)
  //} else {
    //$('.search__popup').slideToggle();
  //}
  $('#search__field').focus();

})

//адаптивная галерея
$(function () {

  var sliderSize,
      stopper = false,
      photos = $('.township__gallery').find('.township__photo'), //массив всех фото
      numberOfPhoto = photos.length; //количество фото

  var formSlider = function(numberOfSlides) {
    var wrapperWidth = $('.township__wrapper').width(), //обертка, берется из css
        photoWidth = Math.round( (wrapperWidth - ( 30 * (numberOfSlides - 1) ) )/numberOfSlides ),  //ширина 1 фото
        sliderWidth = Math.round( (numberOfPhoto - 1)*30 + photoWidth * numberOfPhoto ) ; //ширина всего слайдера

    $('.township__photo').css('width', photoWidth + 'px');
    $('.township__slider').css('width', sliderWidth + 'px');
  };

  var adaptiveSlider = function() {
    if ($(window).width() >= 900) sliderSize = 3;
    else if ($(window).width() >= 550) sliderSize = 2;
    else sliderSize = 1;
    formSlider(sliderSize);
  };

  $(document).ready(function() {
    adaptiveSlider();
  });

  $(window).resize(function() {
    $('.township__slider').css('left', '0px');
    adaptiveSlider();


  });

  $('.township__btn').on('click', function(e) {

    e.preventDefault();

    if (!stopper) {
      stopper = true;

      var difference = $('.township__photo').width() + 30,
          leftPosition = $('.township__slider').css('left').slice(0, -2);

      if($(this).hasClass("township__btn-prev")) { //листаем на предыдущий
        if ( (Number(leftPosition) != 0.0) || (Number(leftPosition) != -0.0) ) {
          $('.township__slider').css('left', (Number(leftPosition) + Number(difference)) + 'px');
        }
      }

      else {
        var photoWidth = Number( $('.township__photo').css('width').slice(0, -2) );
        var sliderWidth = Number($('.township__slider').css('width').slice(0, -2));

        if ( (numberOfPhoto - sliderSize) * (photoWidth + 30) != -leftPosition  )
          $('.township__slider').css('left', (leftPosition - difference) + 'px');
      }

      setTimeout(function() {
        stopper = false;
      }, 500)
    }
  })

})

//отображение картинки в полном размере
$('.township__photo').on('click', function(e) {
  if ($('.township__screen')) {
    var newSrc = ($(this).find('img').attr('src')),
        newSrcSet = ($(this).find('img').attr('srcset'));

    console.log(typeof(newSrc));
    $('.township__screen').find('img').attr('src', newSrc);
    $('.township__screen').find('img').attr('srcSet', newSrcSet);
  }
})

$(function() {
    ymaps.ready(init);
    var myMap;
    var coords = [53.447050618956624,37.32859496075441];


    function init(){
        myMap = new ymaps.Map("map2", {
            center: coords,
            zoom: 14,
            controls: []
        });

        //поиск
        var searchControl = new ymaps.control.SearchControl({
            options: {
                position: {
                  top: '40px',
                  left: '100px'
                },
                placeholderContent: 'Адрес или кадастровый номер',
            }
        });
        myMap.controls.add(searchControl);

        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small",
                position: {
                  top: '40px',
                  left: '57px'
                },
                float: 'none',
            }
        });
        myMap.controls.add(zoomControl);

        var geolocationControl = new ymaps.control.GeolocationControl({
          data: {
              image: 'img/map/location-target.svg',
          },
            options: {
                noPlacemark: true,
                float: 'none',
                position: {
                  top: '96px',
                  left: '57px'
                }
            }
        });
        geolocationControl.events.add('locationchange', function (event) {
            var position = event.get('position'),
                // При создании метки можно задать ей любой внешний вид.
                locationPlacemark = new ymaps.Placemark(position);
            myMap.geoObjects.add(locationPlacemark);
            // Установим новый центр карты в текущее местоположение пользователя.
            myMap.panTo(position);
        });
        myMap.controls.add(geolocationControl);

        var fullscreenControl = new ymaps.control.FullscreenControl({
          data: {
            image: 'img/map/Fullscreen.svg',
          },
          options: {
            position: {
              left: '57px',
              top: '124px'
            }
          }
        });
        myMap.controls.add(fullscreenControl);

        //кнопка печати
        var button = new ymaps.control.Button({
            data: {
                image: 'img/map/Print.svg',
            },
            options: {
                selectOnClick: false,
                maxWidth: 23
            }
        });
        myMap.controls.add(button, {
          position: {
              left: '57px',
              top: '152px'
          }
        });

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: coords
            },
            properties: {
                iconContent: '',
                hintContent: 'Название поселка'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: true
        });

        myMap.geoObjects.add(myGeoObject);

        myGeoObject.events.add('click', function(e) {
          if ($('.map__info').css('display') == 'none') {
            $('.map__info').css('display', 'block');
          }
        })

        //кнопка поделиться
        var button = new ymaps.control.Button({
            data: {
                image: 'img/map/Share.svg',
            },
            options: {
                selectOnClick: false,
                maxWidth: 23
            }
        });
        myMap.controls.add(button, {
          position: {
              left: '57px',
              bottom: '108px'
          }
        });

        //линейка
        var rulerControl = new ymaps.control.RulerControl({
            options: {

                position: {
                  bottom: '75px',
                  left: '57px'
                },
                scaleLine: 'false'
            }
        });
        myMap.controls.add(rulerControl);
    }
});

$(function() {
    ymaps.ready(init);
    var myMap;
    var coords = [53.447050618956624,37.32859496075441];


    function init(){
        myMap = new ymaps.Map("map3", {
            center: coords,
            zoom: 14,
            controls: []
        });

        //поиск
        var searchControl = new ymaps.control.SearchControl({
            options: {
                position: {
                  top: '40px',
                  left: '100px'
                },
                placeholderContent: 'Адрес или кадастровый номер',
            }
        });
        myMap.controls.add(searchControl);

        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small",
                position: {
                  top: '40px',
                  left: '57px'
                },
                float: 'none',
            }
        });
        myMap.controls.add(zoomControl);

        var geolocationControl = new ymaps.control.GeolocationControl({
          data: {
              image: 'img/map/location-target.svg',
          },
            options: {
                noPlacemark: true,
                float: 'none',
                position: {
                  top: '96px',
                  left: '57px'
                }
            }
        });
        geolocationControl.events.add('locationchange', function (event) {
            var position = event.get('position'),
                locationPlacemark = new ymaps.Placemark(position);
            myMap.geoObjects.add(locationPlacemark);
            myMap.panTo(position);
        });
        myMap.controls.add(geolocationControl);

        var fullscreenControl = new ymaps.control.FullscreenControl({
          data: {
            image: 'img/map/Fullscreen.svg',
          },
          options: {
            position: {
              left: '57px',
              top: '124px'
            }
          }
        });
        myMap.controls.add(fullscreenControl);

        //кнопка печати
        var button = new ymaps.control.Button({
            data: {
                image: 'img/map/Print.svg',
            },
            options: {
                selectOnClick: false,
                maxWidth: 23
            }
        });
        myMap.controls.add(button, {
          position: {
              left: '57px',
              top: '152px'
          }
        });

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: coords
            },
            properties: {
                iconContent: '',
                hintContent: 'Название поселка'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: true
        });

        myMap.geoObjects.add(myGeoObject);

        myGeoObject.events.add('click', function(e) {
          if ($('.map__info').css('display') == 'none') {
            $('.map__info').css('display', 'block');
          }
        })

        //кнопка поделиться
        var button = new ymaps.control.Button({
            data: {
                image: 'img/map/Share.svg',
            },
            options: {
                selectOnClick: false,
                maxWidth: 23
            }
        });
        myMap.controls.add(button, {
          position: {
              left: '57px',
              bottom: '108px'
          }
        });

        //линейка
        var rulerControl = new ymaps.control.RulerControl({
            options: {

                position: {
                  bottom: '75px',
                  left: '57px'
                },
                scaleLine: 'false'
            }
        });
        myMap.controls.add(rulerControl);
    }
});



//переключение табов карт
$('.map__point').on('click', function(e) {
  e.preventDefault();
  $('.map__point').removeClass('map__tag-blue');
  $('.map__gen').addClass('map__tag-blue');
  $('#map1').css('display', 'none');
  $('#map2').css('display', 'block');
})

$('.map__gen').on('click', function(e) {
  e.preventDefault();
  $('.map__gen').removeClass('map__tag-blue');
  $('.map__point').addClass('map__tag-blue');
  $('#map2').css('display', 'none');
  $('#map1').css('display', 'block');
})

//логотип яндекс карты и меню
$('.map__logo').on('click', function(e) {
  e.preventDefault();
  $('.map__block').slideToggle();
})

//скрытие информации об участке
$('.map__close').on('click', function(e) {
  e.preventDefault();
  $('.map__info').css('display', 'none');
})

//переключение checkbox в опциях карт
$('#map1 #btnkadastr1').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("map__checkmark-active")) {
    $(this).removeClass("map__checkmark-active");
    $('#map1 #kadastr1').prop('checked', false);
  } else {
    $(this).addClass("map__checkmark-active");
    $('#map1 #kadastr1').prop('checked', true);
  }
})

$('#map1 #btntheme1').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("map__checkmark-active")) {
    $(this).removeClass("map__checkmark-active");
    $('#map1 #theme1').prop('checked', false);
  } else {
    $(this).addClass("map__checkmark-active");
    $('#map1 #theme1').prop('checked', true);
  }
})

$('#map2 #btnkadastr2').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("map__checkmark-active")) {
    $(this).removeClass("map__checkmark-active");
    $('#map2 #kadastr2').prop('checked', false);
  } else {
    $(this).addClass("map__checkmark-active");
    $('#map2 #kadastr2').prop('checked', true);
  }
})

$('#map2 #btntheme2').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("map__checkmark-active")) {
    $(this).removeClass("map__checkmark-active");
    $('#map2 #theme2').prop('checked', false);
  } else {
    $(this).addClass("map__checkmark-active");
    $('#map2 #theme2').prop('checked', true);
  }
})

$('#map3 #btnkadastr3').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("map__checkmark-active")) {
    $(this).removeClass("map__checkmark-active");
    $('#map3 #kadastr3').prop('checked', false);
  } else {
    $(this).addClass("map__checkmark-active");
    $('#map3 #kadastr3').prop('checked', true);
  }
})

$('#map3 #btntheme3').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass("map__checkmark-active")) {
    $(this).removeClass("map__checkmark-active");
    $('#map3 #theme3').prop('checked', false);
  } else {
    $(this).addClass("map__checkmark-active");
    $('#map3 #theme3').prop('checked', true);
  }
})


