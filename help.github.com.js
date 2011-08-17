/*
 * Created by NumEricR - 16-08-2011
 * Successfully tested on FF 5.0.1 / Mac OS
 */

function modifyHeadings() {
  $('body.documentation h1').hide();
  $('#js-sidebar').css('margin-top', 0);
}

function modifySidebar() {
  var forkLink = '<a href="https://github.com/github/help.github.com"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://a248.e.akamai.net/assets.github.com/img/71eeaab9d563c2b3c590319b398dd35683265e85/687474703a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub"></a>';
  $('body').append(forkLink);
  var forkBlock = $('.sidebar-module:nth-child(2)');
  forkBlock.hide();
}

function modifyFooter() {
  $('#footer').css('margin-top', 0);
  $('#blacktocat, .sponsor .logo, .sponsor br, #legal .home').hide();
  $('#legal_links').appendTo('.upper_footer .footer_inner').addClass('footer_nav').prepend('<h4>Legal</h4>');
  $('#legal').css({
    'background': 'none',
    'height': '30px',
    'line-height': 'auto',
    'margin': '10px 0 0 10px',
    'padding-left': 0,
    'width': '400px'
  });
  $('#legal p').css('margin', '5px 0 0');
  $('.sponsor').css({
    'margin': '10px 0 0 0',
    'padding-bottom': 0,
    'width':'500px'
  });
}

modifyHeadings();
modifySidebar();
modifyFooter();