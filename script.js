$(function() {
  $('.file-header').each(function(i){
    var e = $(this);
    var filename = e.find('.file-info > span[title]').text();
    if (filename.match(/(build|dist)\//gi)){
      e.find('.file-actions').prepend('<a></a>');
      e.find('.file-actions > a:first')
        .addClass("btn btn-sm")
        .text('Show')
        .on('click', function(event){
          $(this).hide();
          e.next().show();
        });
      e.next().hide();
    }
  });
});