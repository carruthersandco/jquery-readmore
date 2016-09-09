$(document).ready(start);

function start() {
  $(".readmore").click(readMore);
  $(".readless").click(readLess);
  $(".learnmore").click(learnMore);
}

function readMore(){
  event.preventDefault();
  $(".readmore").css("display", "none");
  $("#show-this-on-click").slideDown("slow");
  $(".readless").css("display", "block");
 }

function readLess(){
  event.preventDefault();
  $(".readmore").css("display", "block");
  $("#show-this-on-click").slideUp("slow");
  $(".readless").css("display", "none");
}

function learnMore(){
  event.preventDefault();
  $(".learnmore").css("display", "none");
  $("#learnmoretext").slideDown("slow");
 }
