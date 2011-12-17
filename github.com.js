/*
 * Created by NumEricR - 16-08-2011
 * Successfully tested on FF 8 / Mac OS
 */


/* ====== Website ====== */

function modifyHeader() {
  /* Remove vertical border */
  $('.topsearch').css({
    'border': 0,
    'box-shadow': 'none'
  });
  
  /* Hide username */
  $('#userbox .name').hide();
  
  /* Move profil link with gravatar to user links container */
  $('#user a:first-child img').attr({'height': 16, 'width': 16});
  $('#user-links').prepend('<li />').children().first().append($('#user a:first-child')[0]);
  
  /* Minify account switcher and add it on userbox */
  $('#header').css('position', 'static');
  $('.account-switcher-container').css({
    'position': 'absolute',
    'top': '-63px',
    'right': '165px',
    'z-index': 1000
  });
}

function modifyHeadings() {
  var titles = ['Explore GitHub', 'Interesting Repositories', 'Top Languages',
                'Public Timeline Feed', 'Search'];
  var h1 = $('h1');
  if ($.inArray(h1.text(), titles) != -1) {
    h1.hide();
  }
}

function modifyDashboard() {
  /* Remove feed links */
  $('.dashboard .pagehead-actions').hide();
}

function modifyUserPage() {
  /* Hide "This is you!" */
  $('.page-profile.mine .pagehead-actions .text').hide();
}

function modifyLanguagesPage() {
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
  })
  $('#languages .site .left').css('width', '30em');
  
  /* Display "Recently created / updated" blocks on top */ 
  var recentlyCreated = $('#languages .site .left.row').last().remove();
  var recentlyUpdated = $('#languages .site .left').last().remove();
  $('#languages .site').prepend(recentlyCreated, recentlyUpdated);
}

function modiySearchForm() {
  $('#code_search_instructions, #code_search_instructions h2').css('margin-top', 0);
  $('#code_search .search').css('height', 'auto');
}

function modifyIssuesPage() {
  /* Issues form */
  $('#issue_comment_form button[name="comment_and_close"]').css({
    'float': 'right',
    'margin-left': '50px'
  });
}

function modifyFooter() {
  /* Pagination */
  /* Based on https://github.com/didip/.js/blob/master/github.com.js */
  $(".pagination a, .pagination .current, .pagination .disabled").css({
    '-moz-border-radius': '3px',
    '-webkit-border-radius': '3px',
    'border-radius': '3px'
  });

  /* Footer */
  $('#blacktocat, .sponsor .logo, .sponsor br').hide();
  $('#footer').css('margin-top', '30px');
  $('#legal ul').appendTo('.upper_footer .container').addClass('footer_nav').prepend('<h4>Legal</h4>');
  $('#legal').css({
    'background': 'none',
    'height': '30px',
    'line-height': 'auto',
    'margin': '10px 0 0 10px',
    'padding-left': 0
  });
  $('#legal p').css('margin', '5px 0 0');
  $('.sponsor').css({
    'margin': '10px 0 0 0',
    'padding-bottom': 0,
    'width': '450px'
  });
}

function modifyWebsite() {
  modifyHeader();
  modifyHeadings();
  modifyDashboard();
  modifyUserPage();
  modifyLanguagesPage();
  modiySearchForm();
  modifyIssuesPage();
  modifyFooter();
}



/* ====== Blog ====== */

function modifyBlog() {
  /* Remove RSS subscription block */
  $('#posts #rss').remove();
  $('#posts .sidebar .others').first().css({
    'border-top': 0,
    'margin-top': 0,
    'padding-top': 0
  });
}



modifyWebsite();
modifyBlog();