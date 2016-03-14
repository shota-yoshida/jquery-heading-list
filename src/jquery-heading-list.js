/**
 * jquery-heading-list v1.0
 * Copyright 2016 Shota Yoshida
 * http://error-reporting.com
 */

;
(function($) {
  $.fn.headingList = function(options) {

    'use strict';

    options = $.extend({
      target: 'body',
      scrollSpeed: 500,
      prefix: '&nbsp;&nbsp;'
    }, options);

    var htag = $(
      options.target + ' h1,' +
      options.target + ' h2,' +
      options.target + ' h3,' +
      options.target + ' h4,' +
      options.target + ' h5,' +
      options.target + ' h6'
    );

    var anchorPrefix = 'heading-list-';
    var html = '<ul>';
    var cnt = 1;

    htag.each(function() {
      var headingInt = parseInt($(this).prop("tagName").slice(1));
      var anchor = anchorPrefix + cnt;
      $(this).attr('id', anchor);
      
      html += '<li><a href="#' + anchor + '">';
      $.each(new Array(headingInt - 1),function(i){
        html += options.prefix;
      });
      html += $(this).html();
      html += '</a></li>'
      
      cnt++;
    });

    html += '</ul>';

    this.html(html);

    this.find('a[href^=' + anchorPrefix + ']').click(function() {
      var href = $(this).attr("href");
      var scrollTarget = $(href === "#" || href === "" ? 'html' : href);
      var position = scrollTarget.offset().top;
      $('body,html').animate({
        scrollTop: position
      }, options.scrollSpeed, 'swing');
      return false;
    });

    return this;
  };
})(jQuery);