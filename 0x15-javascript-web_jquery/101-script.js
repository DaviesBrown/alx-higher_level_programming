$(document).ready(function () {
  $('DIV#add_item').click(function (e) {
    e.preventDefault();
    $('<li>Item</li>').appendTo('UL.my_list');
  });
  $('DIV#remove_item').click(function (e) {
    e.preventDefault();
    $('UL.my_list li:last-child').remove();
  });
  $('DIV#clear_list').click(function (e) {
    e.preventDefault();
    $('UL.my_list').empty();
  });
});
