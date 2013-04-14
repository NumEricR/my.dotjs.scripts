/*
 * Created by NumEricR
 * See: https://github.com/NumEricR/my.dotjs.scripts
 *
 * License: WTFPL - Do What The Fuck You Want To Public License
 * https://github.com/NumEricR/my.dotjs.scripts/blob/master/License.txt
 */

$('#VRadvertisingSky, #VRseparateurLeft, #VRseparateurLeft + div').hide();

var sidesWidth = (window.innerWidth - 1038) / 2;
$('#VRbgTopLeft, #VRbgTopRight, #VRbottomLeftBg, #VRbottomRightBg, #VRbottomLeft, #VRbottomRight').width(sidesWidth);
