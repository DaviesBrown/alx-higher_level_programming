function translate () {
  const lang = $('INPUT#language_code').val();
  $.getJSON(`https://hellosalut.stefanbohacek.dev/?lang=${lang}`,
    function (data) {
      $('DIV#hello').text(data.hello);
    }
  );
}
$(document).ready(function () {
  $('INPUT#btn_translate').click(function () {
    translate();
  });
  $('INPUT#language_code').on('keypress', function (e) {
    if (e.which === 13) {
      $(this).attr('disabled', 'disabled');
      translate();
      $(this).removeAttr('disabled');
    }
  });
});
