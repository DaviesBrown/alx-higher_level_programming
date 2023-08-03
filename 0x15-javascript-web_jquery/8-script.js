$(document).ready(function () {
  const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';
  $.getJSON(url, function (data) {
    const titles = data.results.map(e => e.title);
    titles.map(title => $('UL#list_movies').append(`<li>${title}</li>`));
  }
  );
});
