jQuery(function($) {
  $('article ').each(function() {
    var a = $(this).find(" .thumb-info-inner > a")
    console.log(a);
    var title = $(a).attr('href');
    var as = $(this).find(" .thumb-info-action > a")
    $(as).prop("href", title);
    console.log(title);
  });
});
