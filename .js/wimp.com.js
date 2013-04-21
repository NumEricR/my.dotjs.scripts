/*
 * Created by NumEricR
 * See: https://github.com/NumEricR/my.dotjs.scripts
 *
 * License: WTFPL - Do What The Fuck You Want To Public License
 * https://github.com/NumEricR/my.dotjs.scripts/blob/master/License.txt
 */

var bodyElement = document.getElementsByTagName('body');
if (document.URL.match('.*wimp.com\/$')) {
	bodyElement[0].className = 'wimp-home';
}
else {
	bodyElement[0].className = 'not-wimp-home';
}
