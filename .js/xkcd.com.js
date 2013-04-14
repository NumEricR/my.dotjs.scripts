/*
 * Created by NumEricR
 * See: https://github.com/NumEricR/my.dotjs.scripts
 *
 * License: WTFPL - Do What The Fuck You Want To Public License
 * https://github.com/NumEricR/my.dotjs.scripts/blob/master/License.txt
 */

// Display comic's title below this image
var comic = $('#comic img');
$('<p></p>').text(comic.attr('title')).insertAfter(comic).css({
  'background-color': '#ffc',
  'border': '1px solid yellow',
  'margin': '10px 0 0',
  'padding': '1em'});
