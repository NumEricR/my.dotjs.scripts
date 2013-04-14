/*
 * Created by NumEricR
 * See: https://github.com/NumEricR/my.dotjs.scripts
 *
 * License: WTFPL - Do What The Fuck You Want To Public License
 * https://github.com/NumEricR/my.dotjs.scripts/blob/master/License.txt
 */

/* Redirect automatically to the linked article */
var redirection = $('#content .entry-content > a').attr('href');
window.location = redirection;
