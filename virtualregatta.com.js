$('#VRadvertisingSky, #VRseparateurLeft, #VRseparateurLeft + div').css('display', 'none');

var sidesWidth = (window.innerWidth - $('#VRcontent').width()) / 2 -10;
$('#VRbgTopLeft, #VRbgTopRight, #VRbottomLeftBg, #VRbottomRightBg, #VRbottomLeft, #VRbottomRight').css('width', sidesWidth+'px');
