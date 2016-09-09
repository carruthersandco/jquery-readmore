$(document).ready(start);

function start() {
  $(".readmore").click(readMore);
  $(".readless").click(readLess);
}

function readMore(){
  event.preventDefault();
  $(".readmore").css('display', 'none');
  $("#show-this-on-click").css('display', 'block');
  $(".readless").css('display', 'block');
 }

function readLess(){
  event.preventDefault();
  $(".readmore").css('display', 'block');
  $("#show-this-on-click").css('display', 'none');
  $(".readless").css('display', 'none');
}
