<?php
$json = file_get_contents('bot.txt');


//============================== Admin is unputing data
if ($_GET['key'] == "THIS IS NOT ACTUALLY THE PASSWORD I KNOW SAD RIGTH") {
  //========= Log Wins
  $local = json_decode($json);
  if ($_GET['win'] == "red") {
    $local->{'win'}->{'redWin'} += 1;
  }
  if ($_GET['win'] == "blue") {
    $local->{'win'}->{'blueWin'} += 1;
  }
  //======== Logging Moves=================
  //======== BLUE =====
  if ($_GET['moveF'] == "blue") {
    $local->{'blueMove'}->{'f'} += 1;
  }
  if ($_GET['moveB'] == "blue") {
    $local->{'blueMove'}->{'b'} += 1;
  }
  if ($_GET['moveL'] == "blue") {
    $local->{'blueMove'}->{'l'} += 1;
  }
  if ($_GET['moveR'] == "blue") {
    $local->{'blueMove'}->{'r'} += 1;
  }
  //======= RED =========
  if ($_GET['moveF'] == "red") {
    $local->{'redMove'}->{'f'} += 1;
  }
  if ($_GET['moveB'] == "red") {
    $local->{'redMove'}->{'b'} += 1;
  }
  if ($_GET['moveL'] == "red") {
    $local->{'redMove'}->{'l'} += 1;
  }
  if ($_GET['moveR'] == "red") {
    $local->{'redMove'}->{'r'} += 1;
  }



  //========================== close and save

  $json = json_encode($local);
  file_put_contents('bot.txt',$json);
}

echo $json;
 ?>
