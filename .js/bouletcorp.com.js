/*
 * Created by NumEricR
 * See: https://github.com/NumEricR/my.dotjs.scripts
 *
 * License: WTFPL - Do What The Fuck You Want To Public License
 * https://github.com/NumEricR/my.dotjs.scripts/blob/master/License.txt
 */


$('.storycontent img[title]').each(function() {
	$('<span></span>').text($(this).attr('title')).insertAfter($(this)).css({
	  'display': 'block',
	  'padding': '2em',
	  'line-height': 'normal',
	  'border': '1px solid yellow',
	  'background-color': '#ffc'});
});
