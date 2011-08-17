/*
 * Created by NumEricR - 16-08-2011
 * Successfully tested on FF 5.0.1 / Mac OS
 */


/* ====== Website ====== */

function modifyHeader() {
  $('#header .avatarname a:first-child').hide();
}

function modifyHeadings() {
  var titles = ['Explore GitHub', 'Interesting Repositories', 'Top Languages',
                'Public Timeline Feed', 'Search'];
  var h1 = $('h1');
  if ($.inArray(h1.text(), titles) != -1) {
    h1.hide();
    $('.pagehead').css('padding-top', '10px');
  }
}

function modifyDashboard() {
  /* Remove feed links */
  $('.dashboard .actions').hide();

  /* Remove "Hi" message but show tip information if available */
  var tip = $('.dashboard .avatared span').html();
  if (tip && tip.length > 0) {
  	$('.dashboard .avatared').empty().html('<span>' + tip + '</span>');
  }
  else {
  	$('.dashboard .avatared').empty().css('display', 'none');
  	$('.dashboard').css('padding-top', '10px');
  }
}

function modifyUserpage() {
  /* Hide "This is you!" */
  $('.userpage.mine .actions .text').hide();
}

function modifyLanguagesPage() {
  $('#languages .left').removeClass('left').children().attr('width', '99%');
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
  $('#legal ul').appendTo('.upper_footer .site').addClass('footer_nav').prepend('<h4>Legal</h4>');
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
  modifyUserpage();
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