$(document).ready(function(){function a(){$(e+" "+t).removeClass(t.substring(1))}var e,s,t;e=".post-toc",s=$(e),t=".active-current",s.on("activate.bs.scrollspy",function(){var t=$(e+" .active").last();a(),t.addClass("active-current"),s.scrollTop(t.offset().top-s.offset().top+s.scrollTop()-s.height()/2)}).on("clear.bs.scrollspy",a),$("body").scrollspy({target:e})}),$(document).ready(function(){$(".sidebar-nav li").on("click",function(){var t=$(this),a="sidebar-nav-active",e="sidebar-panel-active";if(!t.hasClass(a)){var s=$("."+e),o=$("."+t.data("target"));s.animate({opacity:0},200,function(){s.hide(),o.stop().css({opacity:0,display:"block"}).animate({opacity:1},200,function(){s.removeClass(e),o.addClass(e)})}),t.siblings().removeClass(a),t.addClass(a)}}),$(".post-toc a").on("click",function(t){t.preventDefault();var a=NexT.utils.escapeSelector(this.getAttribute("href")),e=$(a).offset().top;$("html, body").stop().animate({scrollTop:e},500)});var t=$(".post-toc-content"),a=CONFIG.page.sidebar;if("boolean"!=typeof a){var e="post"===CONFIG.sidebar.display||"always"===CONFIG.sidebar.display,s=0<t.length&&0<t.html().trim().length;a=e&&s}a&&(CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar())});