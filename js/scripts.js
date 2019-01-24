$(document).ready(function(event) {
  $("form#leapForm").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    leapYear(year)
    var result = leapYear(year);
    $(".year").text(year);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }
    $("#result").show();
  });
});

function leapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
      } else {
        return false;
  }
};
