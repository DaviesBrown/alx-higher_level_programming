$(document).ready(function () {
  const url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';
  $.get(url, (data) => {
    $('DIV#character').html(data.name);
  });
});
