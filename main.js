var blueMove = {};
var redMove = {};
var win = {};
var json = {};

//================================================= ON LOAD ============================================

$( document ).ready(function() {
  KeepLook();

});


//================================================== Look over local json for changes =========================================
function KeepLook() {
    $.get( "info.php", function( data ) {
    $( ".result" ).html( data );
    bot = JSON.parse(data);
    json = bot;
  //console.log(removeDuplicate(face));
    //console.log(face);
    var newWin = bot.win;
    //console.log(newLength);

    //refresh chart if new data comes in
    if (JSON.stringify(newWin) != JSON.stringify(win)) {
      console.log("win");
      charts(newWin);
      win = newWin;
    }
    var newBM = bot.blueMove;
    //console.log(newLength);

        //refresh chart if new data comes in
    if (JSON.stringify(newBM) != JSON.stringify(blueMove)) {
      movementB(newBM);
      blueMove = newBM;
    }
    var newRM = bot.redMove;
    //console.log(newLength);

        //refresh chart if new data comes in
    if (JSON.stringify(newRM) != JSON.stringify(redMove)) {
      movement(newRM);
      redMove = newRM;
    }
  });
  setTimeout(KeepLook, 1500);
}
