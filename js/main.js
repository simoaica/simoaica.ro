// Custom JS goes here :)

$(document).ready(function() {

// Initializeaza vremea

  vremea( "bucuresti" );

// Afiseaza vremea

  function vremea(oras){
    $.simpleWeather({
      location: oras,
      woeid: '',
      unit: 'c',
      success: function(weather) {
        html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li class="city">'+weather.city+', '+weather.region+'</li>'; //+', '+weather.region
        html += '<li class="currently">'+weather.currently+'</li>';
        html += '</ul>';

        $( "#weather" ).html(html);

        $( ".city" ).on( "click", function() {
          $( "#weather" ).slideUp( 500 );
          $( "#modal-weather" ).css( "transform", "scale(1)" );
          $("#orasul").focus();
        });

        $( "#close" ).on( "click", function() {
          $( "#weather" ).slideDown( 500 );
          $( "#modal-weather" ).css( "transform", "scale(0)" );
        });

        $( "#orasul" ).on('change', function(){
          $( "#weather" ).slideDown( 500 );
          $( "#modal-weather" ).css( "transform", "scale(0)" );
          oras=$( "#orasul" ).val();
          vremea(oras);
          oras=$( "#orasul" ).val("");
        });
      },
      error: function(error) {
        // $("#weather").html('<p>'+error+'</p>');

        $( "#weather" ).slideDown( 500 );
        $( "#modal-weather" ).css( "transform", "scale(0)" );
      }
    });

  }

  // Setari particule

  particlesJS('particule',

    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 150
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924", // #b61924
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  );
});
