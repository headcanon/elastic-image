//= require_tree .

document.addEventListener("DOMContentLoaded", function(){
  var logo = document.getElementById('logo');
  var ultimateX = 0;
  var ultimateY = 0

  var x,y

  var smooth = function(val) {

    if (Math.abs(val) >= 0) {
      return val;
    }
    else {
      return 0;
    }
  };

  window.addEventListener('devicemotion', function(event){
    x = smooth(event.acceleration.x);
    y = smooth(event.acceleration.y);
    z = smooth(event.acceleration.z);

    if (Math.abs(z) > 0){
      logo.style.width = (150 + (z * 5)).toString() + "px";
    }
    else {
      logo.style.width = "100px";
    }

    if ( Math.abs(x) > 0 ){
      logo.style.left = (ultimateX + Math.floor(x * 5)).toString() + "px";
    }
    else {
      logo.style.left = ultimateX;
    }

    if ( Math.abs(y) > 0 ){
      logo.style.top = (ultimateY + Math.floor(y * 5)).toString() + "px";
    }
    else {
      logo.style.top = ultimateY;
    }


    // document.getElementById('a-x').innerHTML = 'x' + smooth(event.acceleration.x).toString();
    // document.getElementById('a-y').innerHTML = 'y' + smooth(event.acceleration.y).toString();
    // document.getElementById('a-z').innerHTML = 'z' + smooth(event.acceleration.z).toString();

  });

  var resizeHandler = function() {
    logo.style.left = ((document.width / 2) - (logo.width/2)).toString() + "px";
    logo.style.top = ((document.height /2) - (logo.height)).toString() + "px";
    logo.style.width = "100px";

    ultimateX = parseInt(logo.style.left, 10);
    ultimateY = parseInt(logo.style.top, 10);


  }

  window.addEventListener('resize', resizeHandler);
  resizeHandler();
});
