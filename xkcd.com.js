/*
 * Adapted by NumEricR - 15-08-2011
 * Successfully tested on FF 8 / Mac OS
 */

// Display comic's title below this image
var comic = $('#comic img');
$('<p></p>').text(comic.attr('title')).insertAfter(comic).css({
  'background-color': '#ffc',
  'border': '1px solid yellow',
  'margin': '10px 0 0',
  'padding': '1em'});
