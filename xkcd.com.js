/* 
 * Based on mattknox's work
 * https://github.com/mattknox/dotjs_files/blob/master/xkcd.com.js
 * Successfully tested on FF 5.0.1 / Mac OS
 */

var comic = $('div.s img[title]');
$('<p></p>').text(comic.attr('title')).insertAfter(comic).css({
  'background-color': '#ffc',
  'border': '1px solid yellow',
  'margin': '10px 0 0',
  'padding': '1em'});
