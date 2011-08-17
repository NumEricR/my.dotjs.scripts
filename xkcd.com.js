/* 
 * Adapted by NumEricR - 15-08-2011
 * Successfully tested on FF 5+ & 6 / Mac OS
 */

var comic = $('div.s img[title]');
$('<p></p>').text(comic.attr('title')).insertAfter(comic).css({
  'background-color': '#ffc',
  'border': '1px solid yellow',
  'margin': '10px 0 0',
  'padding': '1em'});
