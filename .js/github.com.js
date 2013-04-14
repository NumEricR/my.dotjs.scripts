/*
 * Created by NumEricR
 * See: https://github.com/NumEricR/my.dotjs.scripts
 *
 * License: WTFPL - Do What The Fuck You Want To Public License
 * https://github.com/NumEricR/my.dotjs.scripts/blob/master/License.txt
 */

/* ====== Website ====== */

function modifyHeadings() {
  var titles = ['Explore GitHub', 'Interesting Repositories', 'Top Languages',
                'Public Timeline Feed', 'Search'];
  var h1 = $('h1');
  if ($.inArray(h1.text(), titles) != -1) {
    h1.hide();
  }
}

function modifyLanguagesHome() {
  /* Display languages list under popular one */
  $('#languages .left').css('width', 'auto').children().attr('width', '300');
  $('#languages .all_languages').remove().appendTo('#languages .popular');
  $('#languages .left + .all_languages').css({
    'width': 580,
    'float': 'right',
    'padding-right': 0
  });
  $('#languages .all_languages .right')
    .removeClass('right')
    .css('text-align', 'justify')
    .children().children('li').css({
      'display': 'inline',
      'padding-right': '1.6em',
      'padding-left': 0
    })
    .parent().children().first().hide();

  /* Increase width of list blocks on language pages */
  $('#languages .site .left:not(.row)').css({
    'border-left': '1px solid #ddd',
    'margin': '0 0 2em 3em',
    'padding': '0 0 1em 4em'
  });
  $('#languages .site .left').css('width', '30em');

  /* Display "Recently created / updated" blocks on top */
  var recentlyCreated = $('#languages .site .left.row').last().remove();
  var recentlyUpdated = $('#languages .site .left').last().remove();
  $('#languages .site').prepend(recentlyCreated, recentlyUpdated);
}

function modifyLanguagesPages() {
  $('#languages .container .left img').css({
   'margin-right': '10px',
   'vertical-align': 'middle'
  });
}


function modifyWebsite() {
  modifyHeadings();

  if (url.match(domain + '/languages$')) {
    //modifyLanguagesHome();
  }
  else if (url.match(domain + '/languages/.*$')) {
    //modifyLanguagesPages();
  }
}


modifyWebsite();
