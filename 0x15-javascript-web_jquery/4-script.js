$(document).ready(function () {
  $('DIV#toggle_header').click(() => {
    $('header').toggleClass('green');
    $('header').toggleClass('red');
  });
});
