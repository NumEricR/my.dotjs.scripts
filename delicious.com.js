/*
 * Created by NumEricR - 19-12-2011
 * Successfully tested on FF 8 / Mac OS
 */

/* Top content */
$('.tabsPage').css({
  'margin-top': '25px'
}).children('.tabs').css({
  'height': '30px',
  'top': '-30px'
}).children('a').css({
  'line-height': '30px',
  'min-width': '30px',
  'padding': '0 10px'
});
$('#user_profile .sidebar').css('margin-top', '25px');


/* Footer */
$('#main').css('padding-bottom', '20px');
$('#footer').css({
  'padding': '20px 0'
});
$('#footer a').hover(
  function() {
    $(this).css('color', '#2160ba');
  },
  function() {
    $(this).css('color', '#6e9cd8');
  }
);