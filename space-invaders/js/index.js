$(document).ready(function() {

  //global variables go here

  //assigning Link to a variable
  var player = $('#playerSprite');
  var swarm = $('.Swarm');
  var swarmPosition = 1;
  //   var points = document.getElemnetById('points');
  //   var score = 0;
  // });
  $('.displayText').hide();
  $('.scoreText').hide();
  $('.floor').hide();
  $('.creditField').show();
  $('.Swarm').hide();

  $('#startButton').click(function() {
    //what happens when start button is clicked
    $('.titleClass').fadeOut('slow');
    $('.displayText').show('slow');
    $('.scoreText').show('slow');
    $('.floor').show('slow');
    $('.Swarm').show('fast');
  });

//   function DropLineLeft {

//   }

//   function DropLineRight {

//   }

  // function checkPosition() {
  //   if (swarmPosition >= 1220) {
  //     DropLineLeft();
  //   } else if (swarmPosition <= 0) {
  //     DropLineRight();
  //   } else {
  //     $(swarm).ready(function() {
  //       function loop() {
  //         swarm.show();
  //         $(swarm).animate({
  //           left: "+=25px",
  //         }, 'linear', function() {
  //           loop();
  //         });
  //       }
  //       loop();
  //     });
  //   }
  // }
  
  function move() {
    
    $(swarm).css('left', '-50px').animate({
    'left': $(window).width()
      }, 10000, 'linear',
        function() {
        move();
      }); 
  };
  
  move();

  //   $(document).ready(function(e) {
  //     $(swarm).ready;
  //     switch (e.which) {

  //       $(swarm).animate({
  //         right: "+=25px"
  //       }, 'slow');
  //       swarm;
  //     };
  //   });

  $(document).keydown(function(e) {
    $(player).keydown;
    switch (e.which) {
      //left move
      case 37:
        $(player).animate({
          left: "-=50px"
        }, 'fast');
        break;
        //right move
      case 39:
        $(player).animate({
          left: "+=50px"
        }, 'fast');
        break;
        //pow pow
      case 38:
        $(player).animate({
          pow: "pow"
        }, 'fast');
        break;
    };
  });

}); //closing bracket for doc.ready - goes at bottom of everything