/*
 * Created by NumEricR - 16-08-2011
 * Successfully tested on FF 8 / Mac OS
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

function modifyDashboard() {
  /* Remove feed links */
  $('.dashboard .actions').hide();

  /* Restore the organization selector's position (cf http://bit.ly/rfaR9n) */
  var tip = $('.dashboard .tip').html(),
      topSwitcher, topSwitcherPane;
  
  if (tip && tip.length > 0) {
    topSwitcher = 35;
    topSwitcherPane = -30;
  }
  else {
    topSwitcher = 5;
    topSwitcherPane = 0;
    $('.pagehead.dashboard .tabs').css('margin-top', 0);
  }
  
  $('.minibutton.switcher.account-switcher').css({
    'float': 'right',
    'margin': topSwitcher + 'px 5px 0 0',
    'z-index': '10'
  });
  $('.pagehead.dashboard .context-pane').css({
    'margin-top': topSwitcherPane + 'px',
    'margin-left': '-164px',
    'width': '290px'
  });
}

}

function modifyUserPage() {
  /* Hide "This is you!" */
  $('.userpage.mine .actions .text').hide();
}

function modifyLanguagesPage() {
  /* Display languages list under popular one */
  $('#main:not(.subnavd) #languages .left').removeClass('left').children().attr('width', '99%');
  $('#languages .all_languages')
    .remove().appendTo('#languages .popular').css({
      'text-align': 'left',
      'padding-right': 0,
      'margin-top': '20px'
    })
    .children().removeClass('right')
    .children().css('text-align', 'justify')
    .children().css({
      'display': 'inline',
      'padding-right': '1.6em',
      'padding-left': 0
    })
    .parent().children().first().css('display', 'block');
  
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