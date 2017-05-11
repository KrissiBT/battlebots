$( document ).ready(function() {
  KeepLook();

});

// function simply grabs api info periotically 
function KeepLook() {
    $.get( "info.php", function( data ) {
    $( ".result" ).html( data );
    bot = JSON.parse(data);
    json = bot;
    $("#red").text(bot.redMove.f + "   " + bot.redMove.b + "   " + bot.redMove.l + "   " + bot.redMove.r);
    $("#blue").text(bot.blueMove.f + "   " + bot.blueMove.b + "   " + bot.blueMove.l + "   " + bot.blueMove.r);
    $("#score").text(bot.win.redWin + "/" + bot.win.blueWin);
  });
  setTimeout(KeepLook, 1500);
}
