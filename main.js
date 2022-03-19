function moveMyPlayer(mv) {
  var player = jQuery("#myPlayer");
  var t = "top";
  var m = 10;
  var s = "+";
  
  if (mv == 1) {
    s = "-"
  } else if (mv == 2) {
  	// down
  } else if (mv == 3) {
    // left
    t = "left";
    s = "-"
  } else if (mv == 4) {
  	t = "left";
  }
  
  var param = {};
  param[t] = s + "=" + m + "px"
  player.animate(param, 50);
}

function respawnMyPlayer() {
  jQuery("#myPlayer").css({
    'top': "180px",
    "left": "180px"
  });
}
